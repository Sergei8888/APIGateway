import { FastifyDynamicSwaggerOptions } from 'fastify-swagger';

const swaggerConfig: FastifyDynamicSwaggerOptions = {
    routePrefix: '/api/docs',
    swagger: {
        info: {
            title: 'Uniscope API',
            description: 'Uniscope remote observations project API',
            version: '0.1.0',
        },
        host: '127.0.0.1:1500',
        schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json'],
        tags: [
            {
                name: 'user_module',
                description: 'User module related end-points',
            },
            {
                name: 'auth_module',
                description: 'Auth module related end-points',
            },
        ],
        securityDefinitions: {
            apiKey: {
                type: 'apiKey',
                name: 'apiKey',
                in: 'header',
            },
        },
    },
    uiConfig: {
        docExpansion: 'full',
        deepLinking: false,
    },
    staticCSP: true,
    exposeRoute: true,
};

export default swaggerConfig;
