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
        res.status(500).json({message: err})
        console.log("error from  get users", err)
    }
};

exports.deleteUser = async(req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            res.status(404).json({message: `There was an error deleting this user.`})
        } else {
            res.status(201)
        }
    } catch (err) {
        res.status(500).json({message: err.message})
    }
};

exports.editUser = async(req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        if (!id || !updates) {
            res.status(404).json({message: `There was an error while updating your account, please try again. ${updates}`})
        } else {
            res.status(200).json({message: `Your account has been updated!`})
        }
    } catch (err) {
        res.status(500).json({message: `There was an error updating your account" ${err.message}`})
    }
}