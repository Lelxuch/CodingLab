const Router = require('express')
const router = new Router()
const jobController = require('../controllers/jobController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/', checkRole('ADMIN'), jobController.create)
router.get('/', jobController.getAll)
router.get('/:id', jobController.getOne)

module.exports = router