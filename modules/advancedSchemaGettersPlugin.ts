import { FastifyInstance } from 'fastify';
import { ArraySchema, PatchSchema, PutSchema, Schema } from '../@types/common';
import fp from 'fastify-plugin';

declare module 'fastify' {
    export interface FastifyInstance {
        getBaseSchema(schemaId: string): Schema;
        getCreationSchema(schemaId: string): PutSchema;
        getPatchSchema(schemaId: string): PatchSchema;
        getArraySchema(itemSchemaId: string): ArraySchema;
    }
}

export default fp(async function (fastify: FastifyInstance) {
    fastify.decorate('getBaseSchema', (schemaId: string): Schema => {
        const expectedSchema = JSON.parse(
            JSON.stringify(fastify.getSchema(schemaId))
        );

        return getValidatedEntitySchema(expectedSchema);
    });

    fastify.decorate(
        'getCreationSchema', 
        (schemaId: string): PutSchema => {
            const baseSchema = fastify.getBaseSchema(schemaId);

            // Remove entity id from a schema
            delete baseSchema.properties.id;
            delete baseSchema.properties.createdAt
            baseSchema.required = baseSchema.required?.filter(
                (value: string) => {
                    return value !== 'id';
                }
            );

            return baseSchema;
        },
        ['getBaseSchema']
    );

    fastify.decorate(
        'getPatchSchema',
        (schemaId: string): PatchSchema => {
            const baseSchema = fastify.getBaseSchema(schemaId);

            delete baseSchema.required;
            delete baseSchema.properties.id;
            delete baseSchema.properties.createdAt

            return baseSchema;
        },
        ['getBaseSchema']
    );

    fastify.decorate(
        'getArraySchema',
        (itemSchemaId: string): ArraySchema => {
            const itemSchema = fastify.getBaseSchema(itemSchemaId);
            return {
                description: `Array of ${itemSchema.$id}s`,
                items: itemSchema,
                type: 'array',
            };
        },
        ['getBaseSchema']
    );
});

function getValidatedEntitySchema(schema: unknown): Schema {
    if (schema === null) {
        throw new Error(`Schema does not exist`);
    }

    if (typeof schema !== 'object') {
        throw new Error(
            `Schema has the wrong type: '${typeof schema}', must be an object`
        );
    }

    if (!hasSchemaProperties(schema)) {
        throw new Error(`Unexpected error during scheme validation`);
    }

    return schema;
}

function hasSchemaProperties(schema: object): schema is Schema {
    if (!('$id' in schema)) {
        throw new Error(`Schema does not have $id property`);
    } else if (!('properties' in schema)) {
        throw new Error(`Schema does not have properties property`);
    }

    return true;
}
