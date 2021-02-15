const User = require("../models/user");
const { validationResult } = require("express-validator");

exports.postSignUp = async (req, res) => {
    try {
        const user = {
            email: req.body.email,
            firebase_id: req.body.firebase_id,
            full_name: req.body.full_name,
            username: req.body.username,
            profile_url: req.body.profile_url,
        }
        console.log('REQ.BODY REGISTER', req.body)
        const errors = validationResult(req);
        if (!user.email || !user.firebase_id || !user.full_name || !user.username || !user.profile_url) { //makes sure that all form fields and authentication has gone through
            res.status(400).json({message: `Please enter all input fields`});
        } 
        else if (!errors.isEmpty()) { //checks to see if this is a valid email
            const message =  errors.array()
            console.log("an error occurred here's the message", message[0])
            return res.status(422).json({message: message[0].msg, oldEmail: user.email, oldFullName: user.full_name, oldUsername: user.username}) //keep old user input for better UX
        } else {
            const userData = await User.addUser(user);
            return res.status(201).json({message: `Welcome ${user.username}`});
        }       
     } catch(err) {
         console.log("ERROR: ", err)
        if (err.message === `insert into "user" ("email", "firebase_id", "full_name", "username") values ($1, $2, $3, $4) - duplicate key value violates unique constraint "user_email_unique"`) {
           console.log("err.message from signup", err.message)
            return  res.status(500).json({message: `That email is already in use.`});
           
        } else if (err.message === `insert into "user" ("email", "firebase_id", "full_name", "username") values ($1, $2, $3, $4) - duplicate key value violates unique constraint "user_username_unique"`){
            return res.status(500).json({message: `That username is already in use.`});
        } else {
            return res.status(500).json({message: `An error  while signing up, please try again.`, error: err})
        }
    }
};