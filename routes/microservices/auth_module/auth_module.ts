import { FastifyInstance } from 'fastify';

export default async function (fastify: FastifyInstance) {
    fastify.post(
        '/login',
        {
            schema: {
                description: 'Login into the account',
                body: fastify.getSchema('LoginOptions'),
                tags: ['auth_module'],
            },
        },
        async () => {
            return 'Hello world';
        }
    );
    fastify.post(
        '/refresh',
        {
            schema: {
                description: 'Get new tokens pair',
                tags: ['auth_module'],
            },
        },
        async () => {
            return 'Hello world';
        }
    );
}
