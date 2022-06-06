import { FastifyInstance } from 'fastify';
// Configs
import swaggerConfig from './configs/swagger.config';

// Plugins
import proxyPlugin from 'fastify-reply-from';
import corsPlugin from 'fastify-cors';
import fastifySwaggerPlugin from 'fastify-swagger';
import helmetPlugin from 'fastify-helmet';

// Routes
import routes from './routes/routes';
import advancedSchemaGettersPlugin from './modules/advancedSchemaGettersPlugin';
import applySchemasPlugin from './modules/applySchemasPlugin';
import fp from 'fastify-plugin';

export default fp(async function (fastify: FastifyInstance) {
    fastify.register(proxyPlugin, {
        retryMethods: [],
    });

    fastify.register(corsPlugin, {
        origin: '*',
    });

    // Security headers
    fastify.register(helmetPlugin);

    // Auto documentation and Swagger 2.0 spec
    fastify.register(fastifySwaggerPlugin, swaggerConfig);

    // Apply generated schemas to fastify instance
    fastify.register(applySchemasPlugin);

    // Add typed schema getters
    fastify.register(advancedSchemaGettersPlugin);

    fastify.register(routes, {
        prefix: '/api',
    });
});
