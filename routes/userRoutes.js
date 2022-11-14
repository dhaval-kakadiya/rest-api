const express = require('express');
const router = express.Router();

const {readUser,readUserById,updateUser,deleteUser} = require('../controllers/userController')

const authorization = require('../middleware/jwtAuth');
const use = (fn) => (req,res,next) => {
    Promise.resolve(fn(req,res,next)).catch(next)
}

router.get('/',authorization,use(readUser))
router.get('/:id',readUserById)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)


module.exports = router;