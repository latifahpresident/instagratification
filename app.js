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
app.use(cors());
app.use(helmet());

app.use(function(req, res, next) {       
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE') 
    // res.setHeader('Access-Control-Allow-Credentials', true)
    // res.setHeader('Access-Control-Allow-Origin', '*') 
    // res.header('Access-Control-Allow-Methods', "GET,OPTIONS,PATCH,DELETE,POST,PUT") 
    // res.header("Access-Control-Allow-Headers", "Origin, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version")
    next();
});
app.use("/", authRoutes);
app.use("/admin", adminRoutes);
app.use("/posts", postRoutes);
app.use("/comment", commentRoutes);
app.use("/user", userRoutes);
app.get('/sanity', (req, res) => {res.send('sanity check!')});

module.exports = app;

