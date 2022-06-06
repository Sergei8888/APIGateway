import { FastifyInstance } from 'fastify';
import routesWithoutAuthentication from './routesWithoutAuthentication';
import routesWithAuthentication from './routesWithAuthentication';

export default async function (fastify: FastifyInstance) {
    // Routes
    fastify.register(routesWithoutAuthentication);
    fastify.register(routesWithAuthentication);
}
