const express = require('express');
const router = express.Router();

const {addUser,readUser,readUserById,updateUser,deleteUser} = require('../controllers/userController')

router.post('/add-user',addUser)
router.get('/',readUser)
router.get('/:id',readUserById)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)


module.exports = router;