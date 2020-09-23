const User = require("../models/user");
const { validationResult } = require("express-validator");

exports.postSignUp = async (req, res) => {
    try {
        const { email, firebase_id, full_name, username } = req.body;
        const errors = validationResult(req);
        if (!email || !firebase_id || !full_name || !username) { //makes sure that all form fields and authentication has gone through
            res.status(400).json(`Please enter all input fields`);
        } 
        else if (!errors.isEmpty()) { //checks to see if this is a valid email
            const message =  errors.array()
            console.log("an error occured here's the message", message[0])
            return res.status(422).json({message: message[0].msg, oldEmail: email, oldFullName: full_name, oldUsername: username}) //keep old user input for better UX
        } else {
            await User.addUser(req.body);
            return res.status(201).json({message: `Welcome ${full_name}`});
        }       
     } catch(err) {
        if (err.message === `insert into "user" ("email", "firebase_id", "full_name", "username") values ($1, $2, $3, $4) - duplicate key value violates unique constraint "user_email_unique"`) {
           console.log("err.message from signup", err.message)
            return  res.status(500).json({message: `That email is already in use.`});
           
        } else if (err.message === `insert into "user" ("email", "firebase_id", "full_name", "username") values ($1, $2, $3, $4) - duplicate key value violates unique constraint "user_username_unique"`){
            return res.status(500).json({message: `That username is already in use.`});
        } else {
            return res.status(500).json({message: `An error occured while signing up, please try again.`, error: err})
        }
    }
};