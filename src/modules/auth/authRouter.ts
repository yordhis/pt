import express from 'express'
import { register, login, destroyUser } from './authController'
import validateUsername from './middlewares/register/validateUsername'
import validateRolRegister from './middlewares/register/validateRolRegister'
import validateRolRegisterAdmin from './middlewares/register/validateRolRegisterAdmin'
import validateEmail from './middlewares/register/validateEmail'
import validateExistUser from './middlewares/login/validateExistUser'
import validatePassword from './middlewares/login/validatePassword'
const router = express.Router()

const middRegister = [
    validateRolRegister,
    validateUsername, 
    validateEmail
]

const middRegisterAdmin = [
    validateRolRegisterAdmin,
    validateUsername, 
    validateEmail 
]

const middLogin = [
    validateExistUser,
    validatePassword
]


router.post('/register', middRegister , register)
router.post('/registerAdmin', middRegisterAdmin , register)
router.post('/login', middLogin, login)
router.delete('/delete/:id', destroyUser)


export default router