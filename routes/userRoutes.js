const express = require('express');
const router = express.Router();

const {readUser,readUserById,updateUser,deleteUser} = require('../controllers/userController')

const authorization = require('../middleware/jwtAuth');

router.get('/',authorization,readUser)
router.get('/:id',readUserById)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)


module.exports = router;