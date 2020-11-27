const server = require("../../app");
const request = require('supertest');
const db = require("../../dbconfig");

const errorHandler = (err) => {
    console.error(err);
};

const newPost = "/posts/new-post"
const getPosts = "/posts/posts"

describe("/posts routes for making a post ", () => {
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
    
      afterAll(async done =>  {
        await db.destroy();
        return done();
      });

    it("POST request should return a 201 when a user creates a new post", async () => {
        const body = {
            firebase_id: "8474jfilresfewr34sfaew",
            image_url: "https://s3.amazonaws.com/uifaces/faces/twitter/bergmartin/128.jpg",
            caption: "Testing a new post"
        }

    const res = await request(server).post(newPost).send(body);
    expect(res.status).toBe(201)
    expect(res.body.message).toBe("Posted!")

    });  
    it("POST request should return a 404 if no image_url or firebase_id is entered", async () => {
        const body = {
            firebase_id: "8474jfilresfewr34sfaew",
            caption: "Testing a new post"
        }

    const res = await request(server).post(newPost).send(body);
    expect(res.status).toBe(404)
    expect(res.body.message).toBe("Please add an image.")
    });
    it("POST request should return a 500 if response body is empty", async () => {
        const body = {}
        const res = await request(server).post(newPost).send(body);
        expect(res.status).toBe(500)
    });

    it("GET request should get post from all users", async () => {
        
    })
    
});