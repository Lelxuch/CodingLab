const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', userController.registration1)
router.put('/registration2', authMiddleware, userController.registration2)
router.post('/login', userController.login)
router.post('/loginWithUsername', userController.loginWithUsername)
router.get('/auth', authMiddleware, userController.check)
router.get('/', authMiddleware, userController.fetch)
router.put('/password', userController.changePassword)
router.put('/', userController.changeRole)
router.delete('/remove', userController.delete)

module.exports = router