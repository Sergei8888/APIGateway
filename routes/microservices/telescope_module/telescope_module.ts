import { FastifyInstance } from 'fastify';
import CRUDRoutes from '../../../modules/applyCrudRoutes';
import { entities } from '../../../configs/entities';

export default async function (fastify: FastifyInstance) {
    fastify.register(CRUDRoutes, {
        entity: entities.telescope,
        moduleTags: ['telescope_module'],
    });
}
