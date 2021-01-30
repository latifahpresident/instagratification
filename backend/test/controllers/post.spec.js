const server = require("../../app");
const request = require('supertest');
const db = require("../../dbconfig");
const { default: expectCt } = require("helmet/dist/middlewares/expect-ct");

const errorHandler = (err) => {
    console.error(err);
};

const newPost = "/posts/new-post"
const getPosts = "/posts/posts"
const updatePosts = "/posts/update/3"
const deletePost = "/posts/delete/4"
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
    const res = await request(server).post(newPost).send(body).catch(errorHandler);
    expect(res.status).toBe(201);
    expect(res.body.message).toBe("Posted!");
    });  
    it("POST request should return a 404 if no image_url or firebase_id is entered", async () => {
        const body = {
            firebase_id: "8474jfilresfewr34sfaew",
            caption: "Testing a new post"
        }
    const res = await request(server).post(newPost).send(body).catch(errorHandler);
    expect(res.status).toBe(404);
    expect(res.body.message).toBe("Please add an image.");
    });
    it("POST request should return a 500 if response body is empty", async () => {
        const body = {}
        const res = await request(server).post(newPost).send(body).catch(errorHandler);
        expect(res.status).toBe(500);
    });
    it("GET request should get post from all users", async () => {
        const res = await request(server).get(getPosts).catch(errorHandler);
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty("posts");
    });
    it("PUT request is successful", async() => {
        const updates = {
            id: 3,
            image_url: "https://s3.amazonaws.com/uifaces/faces/twitter/bergmartin/128.jpg",
            likes: 78,
            caption: "Sandy testing the update route",
            firebase_id: "8474jfilresfewr34sfaew"
        }
        const res = await request(server).put(updatePosts).send(updates).catch(errorHandler);
        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty("message");
        expect(res.body.message).toBe("Your post has been updated!");

    });
    it("PUT request should return 404 if no id or image_url is present", async () => {
        const updates = {
            likes: 78,
            caption: "Sandy testing the update route",
            firebase_id: "8474jfilresfewr34sfaew"
        }

        const res = await request(server).put(updatePosts).send(updates).catch(errorHandler);
        expect(res.status).toBe(404);
        expect(res.body.message).toBe("Please login to update your post.");
    });
    it("PUT request should return 404 if the post id does not exist", async () => {
        const updates = {
            id: 44,
            image_url: "https://s3.amazonaws.com/uifaces/faces/twitter/bergmartin/128.jpg",
            likes: 78,
            caption: "Sandy testing the update route",
            firebase_id: "8474jfilresfewr34sfaew"
        }

        const res = await request(server).put("/posts/update/44").send(updates).catch(errorHandler);
        expect(res.status).toBe(404);
    });
    it("DELETE request should be successful", async () => {
        const res = await request(server).delete(deletePost).catch(errorHandler);;
        expect(res.status).toBe(204);
    });
    it("DELETE request should return a 404 if no id is present in params", async () => {
        const res = await request(server).delete("/posts/delete").catch(errorHandler);
        expect(res.status).toBe(404);
    });
});