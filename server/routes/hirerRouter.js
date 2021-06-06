const Router = require('express')
const router = new Router()
const hirerController = require('../controllers/hirerController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/create', hirerController.create)
router.get('/', hirerController.getAll)
router.get('/:id', hirerController.getOne)
router.delete('/remove', hirerController.delete)

module.exports = router