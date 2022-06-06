import _schemas from '../schemas/schemas.generated.json';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const schemas = _schemas as { [k: string]: any };

import { FastifyInstance } from 'fastify';
import fp from 'fastify-plugin';

export default fp(async function (fastify: FastifyInstance) {
    for (const definition in schemas.definitions) {
        const currentSchema = schemas.definitions[definition];
        // Add id field
        currentSchema.$id = definition;
        fastify.addSchema(currentSchema);
    }
});
