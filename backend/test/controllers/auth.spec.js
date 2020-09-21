const server = require("./../../app");
const request = require('supertest');
const db = require("./../../dbconfig");

beforeAll(async done => {
    await db.migrate.rollback();
    await db.migrate.latest();
    return done();
});

afterAll(async () => {
    await db.destroy();
});


describe("/ authenticated routes for users.", () => {
    it("POST request should return a 201 when a new user is created", async () => {
        const body = {
            email: "test3@gmail.com", 
            firebase_id: "3x", 
            full_name: "Shawn Evens", 
            username: "shawn_evens" 
        }
        const res = await request(server).post("/signup").send(body)
        expect(res.status).toBe(201);   
   
    });
    describe("POST request will throw errors.", () => {
        it("should return a 400 if no email is entered", async () => {
            const body = {
                firebase_id: "4x", 
                full_name: "Tina Belcher", 
                username: "tina_belchers" 
            }
            const res = await request(server).post("/signup").send(body)
            expect(res.status).toBe(400)
        });
        it("should return a 422 if email is invalid", async () => {
            const body = {
                email: "archer",
                firebase_id: "4x", 
                full_name: "Sterling Archer", 
                username: "sterling_archer" 
            }
            const res = await request(server).post("/signup").send(body)
            expect(res.status).toBe(422)
            expect(res.body.message).toBe("Please enter a valid email.")
        });
    })
})
