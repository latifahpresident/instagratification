const User = require("../models/user");
const Follow = require("./../models/followers");

//Delete a user account
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

//Updates a user account
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
        res.status(500).json({message: `There was an error updating your account. ${err.message}`})
    }
};

//Get a user's profile
exports.getById = async(req, res) => {
    const { id } = req.params;
    try {
        if (!id) {
            res.status(404).json({message: `User not found. Please try again.`})
        } else {
            const user = await User.getById(id);
            const followers = await Follow.getFollowers(id);
            res.status(200).json({user: user, followers: followers})
        }
    } catch (err) {
        res.status(500).json({message: `There was error getting to your profile, please try again. ${err.message}` })
    }
};

exports.addFollower = async(req, res) => {
    // const following_id = req.params.id;
    const follow_request = req.body
    try {
        if (!follow_request) {
            res.status(404).json({message: `User not found`})
        } else {
             await Follow.addFollower(follow_request)
            res.status(204).json({message: `Request successfull`})
        }
    } catch (err)  {
        res.status(500).json({message: "There was an error while requesting a follow"});
        console.log("error", err)
    }
};

exports.unfollow = async(req, res) => {
    const { id } = req.params;
    try {   
        if (!id) {
            res.status(404).json({message: `There was an error unfollowing this user, please try again`})
        } else {
            await Follow.deleteFollower(id);
            res.status(204).json({message: `Removed`})
        }
    } catch (err) {
        res.status(500).json({message: `There was an error while unfollowing this user, please try again`, err})
    }
};