const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration1)
router.put('/registration2', userController.registration2)
router.post('/login', userController.login)
router.get('/auth', authMiddleware, userController.check)
router.put('/password', userController.changePassword)
router.put('/', userController.changeRole)
router.delete('/remove', userController.delete)

module.exports = router