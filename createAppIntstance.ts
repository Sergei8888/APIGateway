import fastify, { FastifyInstance, FastifyServerOptions } from 'fastify';
import main from './main';

export default function createAppInstance(
    opts: FastifyServerOptions = {
        logger: {
            prettyPrint: true,
        },
    }
): FastifyInstance {
    // Creating http server
    const server = fastify(opts);

    // All application logic
    server.register(main);

    return server;
}
