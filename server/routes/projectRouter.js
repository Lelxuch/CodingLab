const Router = require('express')
const router = new Router()
const projectController = require('../controllers/projectController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', projectController.create)
router.get('/', projectController.getAll)
router.get('/:id', projectController.getOne)
router.get('/:id/status', projectController.getStatus)
router.put('/:id', projectController.edit)
router.put('/:id/status', projectController.changeStatus)
router.delete('/remove', projectController.delete)

module.exports = router