const express = require("express");

const { getUsers, createUser, getUser, deleteUser, updateUser } = require('../controllers/users.js');

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
// 파라미터로 처리하므로 파라미터로 테스트 해야 함 
// localhost:5000/users/db5c945d-b26b-4988-8757-17a1b5c7dcdd
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.patch('/:id', updateUser);

module.exports = router;