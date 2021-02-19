const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const app = express();
const authRoutes = require("./routes/auth");
const adminRoutes = require("./routes/admin");
const postRoutes = require("./routes/post");
const userRoutes = require("./routes/useraccount");
const commentRoutes = require("./routes/comment");

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(function(req, res, next) {
    // res.header("Access-Control-Allow-Origin", "instaham-5n6obilzz.vercel.app");
        
    res.header("Access-Control-Allow-Origin", "*"); //comment out when pushing to production
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
});
app.use("/", authRoutes);
app.use("/admin", adminRoutes);
app.use("/posts", postRoutes);
app.use("/comment", commentRoutes);
app.use("/user", userRoutes);
app.get('/sanity', (req, res) => {res.send('sanity check!')});

module.exports = app;

