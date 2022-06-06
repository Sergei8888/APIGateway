import { Entity } from '../@types/common';
import request from 'supertest';
import { matchers } from 'jest-json-schema';
import { FastifyInstance } from 'fastify';

expect.extend(matchers);

export default function (fastify: FastifyInstance, entity: Entity) {
    // Testing all CRUD routes
    describe(`Testing CRUD routes of ${entity.name} entity`, () => {
        // GET
        testGETRequests(fastify, entity);
        // POST
        // PUT
        // PATCH
        // DELETE
    });
}

function testGETRequests(fastify: FastifyInstance, entity: Entity) {
    describe(`404 ${entity.name} tests`, () => {
        test(`GET request returns 404 when there is no ${entity.name}`, async () => {
            await request(fastify.server)
                .get(`/api/${entity.routePrefix}/1`)
                .expect('Content-Type', /text/)
                .expect(404);
        });

        test(`DELETE request returns 404 when there is no ${entity.name}`, async () => {
            await request(fastify.server)
                .delete(`/api/${entity.routePrefix}/1`)
                .expect('Content-Type', /text/)
                .expect(404);
        });

        test(`PATCH request returns 404 when there is no ${entity.name}`, async () => {
            await request(fastify.server)
                .delete(`/api/${entity.routePrefix}/1`)
                .expect('Content-Type', /text/)
                .expect(404);
        });
    });

    describe(`C ${entity.name} tests`, () => {
        test(`GET request returns 404 when there is no ${entity.name}`, async () => {
            await request(fastify.server)
                .get(`/api/${entity.routePrefix}/1`)
                .expect('Content-Type', /text/)
                .expect(404);
        });

        test(`DELETE request returns 404 when there is no ${entity.name}`, async () => {
            await request(fastify.server)
                .delete(`/api/${entity.routePrefix}/1`)
                .expect('Content-Type', /text/)
                .expect(404);
        });

        test(`PATCH request returns 404 when there is no ${entity.name}`, async () => {
            await request(fastify.server)
                .delete(`/api/${entity.routePrefix}/1`)
                .expect('Content-Type', /text/)
                .expect(404);
        });
    });

    describe(`Test`, () => {
        test(`GET request returns ${entity.name}`, async () => {
            const response = await request(fastify.server)
                .get(`/api/${entity.routePrefix}/1`)
                .expect('Content-Type', /json/)
                .expect(200);

            const entityData = response.body;
            const schema = fastify.getBaseSchema(entity.schemaId);

            expect(entityData).toMatchSchema(schema);
        });

        test.todo(`GET request returns all ${entity.routePrefix}`);
    })

    describe(`Valid GET requests`, () => {
        test(`GET request returns ${entity.name}`, async () => {
            const response = await request(fastify.server)
                .get(`/api/${entity.routePrefix}/1`)
                .expect('Content-Type', /json/)
                .expect(200);

            const entityData = response.body;
            const schema = fastify.getBaseSchema(entity.schemaId);

            expect(entityData).toMatchSchema(schema);
        });

        test.todo(`GET request returns all ${entity.routePrefix}`);
    })
}

// function testPOSTRequests(fastify: FastifyInstance, entity: Entity) {}
