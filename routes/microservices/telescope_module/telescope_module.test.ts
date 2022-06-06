import applyCrudRoutesTests from '../../../modules/applyCrudRoutesTests';
import { entities } from '../../../configs/entities';
import createAppInstance from '../../../createAppIntstance';

describe('Telescope module tests', () => {
    const fastify = createAppInstance({
        logger: false,
    });

    beforeAll(async () => {
        await fastify.ready();
    });
    test.todo('GET request on');
    // applyCrudRoutesTests(fastify, entities.telescope);

    afterAll(async () => {
        await fastify.close();
    });
});
