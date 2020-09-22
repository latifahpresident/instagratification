const server = require("./../../app");
const request = require('supertest');
const db = require("./../../dbconfig");

const errorHandler = (err) => {
    console.error(err);
};

describe("/ authenticated routes for users.", () => {
    beforeAll(async () => {
        /*
        Applies migrations to in-memory database,
        then applies seeds.
        */
        try {
            await db.migrate.rollback();
            await db.migrate.latest();
            await db.seed.run();
        } catch (err) {
          throw err;
        }
      });
    
    it("POST request should return a 201 when a new user is created", async () => {
        const body = {
            email: "test3@gmail.com", 
            firebase_id: "3x", 
            full_name: "Shawn Evens",
            username: "shawn_evens" 
        }
        const res = await request(server).post("/signup").send(body).catch(errorHandler)
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
                username: "sterling_archer",
            }
            const res = await request(server).post("/signup").send(body)
            expect(res.status).toBe(422)
            expect(res.body.message).toBe("Please enter a valid email.")
        });
        it("should return a 500 if email is already in use", async () => {
            const body = {
                email: "naruto_uzumaki@yahoo.com",
                firebase_id: "5r43e", 
                full_name: "Boruto Uzumaki", 
                username: "boruto_uzumaki",
            }
            const res = await request(server).post("/signup").send(body)
            console.log("same email", res)
            expect(res.status).toBe(500)
            expect(res.body.error.errno).toBe(19)
        });
        it("should return a 500 if username is already in use", async () => {
            const body = {
                email: "boruto_uzumaki1@yahoo.com",
                firebase_id: "5r43efaj433053r322r", 
                full_name: "Boruto Uzumaki", 
                username: "boruto_uzumaki",
            }
            const res = await request(server).post("/signup").send(body)
            console.log("same username", res.status)

            if (res === 201) {
                const newUser = await request(server).post("/signup").send(body)
                expect(res.status).toBe(500)
                expect(res.body.error.errno).toBe(19)
            }
            
        });
    });
})
