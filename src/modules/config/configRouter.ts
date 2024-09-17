import { Router } from 'express'
import init  from './configController'
const router = Router()

router.post('/init', init)

export default router