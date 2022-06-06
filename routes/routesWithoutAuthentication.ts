import { FastifyInstance } from 'fastify';
import auth_module from './microservices/auth_module/auth_module';

export default async function (fastify: FastifyInstance) {
    // Microservices routes
    fastify.register(auth_module);
}
