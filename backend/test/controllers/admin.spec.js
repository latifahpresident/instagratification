const server = require("../../app");
const request = require('supertest');
const db = require("../../dbconfig");

beforeAll(async done => {
    await db.migrate.rollback();
    await db.migrate.latest();
    await db.seed.run();
    return done();
});

describe("/admin  routes.", () => {
    it("GET to /admin/users should return a 200 and all users", async () => {
        const res = await request(server).get("/admin/users")
        expect(res.status).toBe(200);   
    });
});