const express = require('express')
const { getAllUsers, getUser, createUser, updateUser, deleteUser } = require('../components/userController')
const userLogged = require('../middlewares/userLogged')
const router = express.Router()

/** 
 * Usando middleware para rutas específicas 
 * Tambien se puede agregar varios @midd a una ruta usando 
 * el formato de array [midd1,midd2 middN...]
 */
router.get('/', userLogged, getAllUsers)
router.get('/:id', userLogged, getUser)
router.post('/', userLogged, createUser)
router.put('/:id', userLogged, updateUser)
router.delete('/:id', userLogged, deleteUser)

module.exports = router