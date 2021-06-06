const Router = require('express')
const router = new Router()
const freelancerController = require('../controllers/freelancerController')
const authMiddleware = require('../middleware/authMiddleware')


router.post('/create', freelancerController.create)
router.get('/', freelancerController.getAll)
router.get('/:id', freelancerController.getOne)
router.delete('/remove', freelancerController.delete)

module.exports = router