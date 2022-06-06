import { FastifyInstance } from 'fastify';
import user_module from './microservices/user_module/user_module';
import telescope_module from './microservices/telescope_module/telescope_module';

export default async function (fastify: FastifyInstance) {
    // Authentication hook
    fastify.addHook('preValidation', (req, reply, next) => {
        next();
    });

    // Microservices routes
    fastify.register(user_module);
    fastify.register(telescope_module);
}
