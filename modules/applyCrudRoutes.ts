import { FastifyInstance, FastifyPluginOptions } from 'fastify';
import { Entity } from '../@types/common';

type CRUDPluginOpts = { entity: Entity; moduleTags: string[] };

/**
 * Generates basic CRUD proxy rotes for the given entity to the entity's microservice
 * @param fastify
 * @param opts
 */
export default async function (
    fastify: FastifyInstance,
    opts: FastifyPluginOptions & CRUDPluginOpts
) {
    /**
     * Keep in mind that it is an entity-agnostic plugin, so it can be different
     * entity names and different route names in the practical usage
     * See generated docs for explicit example of plugin work
     */

    const currentEntity = opts.entity;

    /**
     * GET /entities/1 - returns first entity
     * entities - entity route base, routePrefix property in the entity object, pluralized entity name with Pluralize npm lib.
     */
    fastify.get(
        `/${currentEntity.routePrefix}/:${currentEntity.name}Id`,
        {
            schema: {
                description: `Get ${currentEntity.name}`,
                response: {
                    200: {
                        ...fastify.getBaseSchema('User'),
                    },
                },
                tags: opts.moduleTags,
            },
        },
        (req, reply) => {
            reply.from(`http://localhost:8000${req.url}`);
        }
    );

    /**
     * GET /entities - returns all entities
     */
    fastify.get(
        `/${currentEntity.routePrefix}`,
        {
            schema: {
                description: `Get all ${currentEntity.routePrefix} array`,
                response: {
                    200: fastify.getArraySchema('User'),
                },
                tags: opts.moduleTags,
            },
        },
        (req, reply) => {
            reply.from(`http://localhost:8000${req.url}`);
        }
    );

    /**
     * POST /entities - creates new entity
     */
    fastify.post(
        `/${currentEntity.routePrefix}`,
        {
            schema: {
                description: `Create ${currentEntity.name}`,
                body: fastify.getCreationSchema('User'),
                tags: opts.moduleTags,
            },
        },
        (req, reply) => {
            console.log("post")
            reply.from(`http://localhost:8000${req.url}`);
        }
    );

    /**
     * PUT /entities/1 - updates an entity
     */
    fastify.put(
        `/${currentEntity.routePrefix}/:${currentEntity.name}Id`,
        {
            schema: {
                description: `Update ${currentEntity.name}`,
                body: fastify.getCreationSchema('User'),
                tags: opts.moduleTags,
            },
        },
        (req, reply) => {
            reply.from(`http://localhost:8000${req.url}`);
        }
    );

    /**
     * PATCH /entities/ 1 - edits an entity
     */
    fastify.patch(
        `/${currentEntity.routePrefix}/:${currentEntity.name}Id`,
        {
            schema: {
                description: `Edit ${currentEntity.name}`,
                body: fastify.getPatchSchema('User'),
                tags: opts.moduleTags,
            },
        },
        (req, reply) => {
            reply.from(`http://localhost:8000${req.url}`);
        }
    );

    /**
     * DELETE /entities/1 - deletes an entity
     */
    fastify.delete(
        `/${currentEntity.routePrefix}/:${currentEntity.name}Id`,
        {
            schema: {
                description: `Delete ${currentEntity.name}`,
                response: {
                    200: {
                        ...fastify.getBaseSchema('User'),
                    },
                },
                tags: opts.moduleTags,
            },
        },
        (req, reply) => {
            reply.from(`http://localhost:8000${req.url}`);
        }
    );
}
