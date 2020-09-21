const User = require("../models/user");

exports.getUser = async(req, res) => {
    try{
        const users = await User.getUsers();
        if( users.length === 0) {
            res.status(400).json({message: "No users found."})
        } else {
            return res.status(200).json({users: users})
        }
    } catch (err) {
        res.status(500).json({message: err.message})
    }
};