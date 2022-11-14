const User = require('../models/user')
const { prepareErrorMessage, prepareSuccessMessage } = require('../utils/responseHandler')

exports.readUser = async (req, res) => {

        const user = await User.find();
        return res.status(200).json(prepareSuccessMessage(user, 'User Read Successfull'))           
}

exports.readUserById = async (req, res) => {
    try {
        const _id = req.params.id
        const user = await User.findById(_id)

        return res.status(200).json({
            success : true,
            message : 'Successfull User Read By Id',
            data : user          
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'User Not Read'
        })
    }
}

exports.updateUser = async (req, res) => {
    try {
        const _id = req.params.id
        const user = await User.findByIdAndUpdate(_id, req.body, { new: true });

        return res.status(200).json({
            success: true,
            message: 'Successfull User Update By Id',
            data: user

        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'User Not Update'
        })
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const _id = req.params.id
        const user = await User.findByIdAndDelete(_id);

        return res.status(200).json({
            success: true,
            message: 'Successfull User Delete By Id',
            data: user
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'User Not delete'
        })
    }
}