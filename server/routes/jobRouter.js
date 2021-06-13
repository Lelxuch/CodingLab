const Router = require('express')
const router = new Router()
const jobController = require('../controllers/jobController')
const checkRole = require('../middleware/checkRoleMiddleware')
const authMiddleware = require('../middleware/authMiddleware')


router.post('/', authMiddleware, jobController.create)
router.get('/', jobController.getAll)
router.get('/:id', jobController.getOne)
router.get('/:id/status', jobController.getStatus)
router.put('/:id/status', jobController.changeStatus)
router.delete('/remove', jobController.delete)

module.exports = router