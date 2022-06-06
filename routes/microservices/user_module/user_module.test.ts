import applyCrudRoutesTests from '../../../modules/applyCrudRoutesTests';
import { entities } from '../../../configs/entities';
import createAppInstance from '../../../createAppIntstance';

describe('User module tests', () => {
    const fastify = createAppInstance({
        logger: false,
    });

    beforeAll(async () => {
        await fastify.ready();
    });

    applyCrudRoutesTests(fastify, entities.user);

    afterAll(async () => {
        await fastify.close();
    });
});
