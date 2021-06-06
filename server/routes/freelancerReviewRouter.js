const Router = require('express')
const router = new Router()
const freelancerReviewController = require('../controllers/FreelancerReviewController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/create', freelancerReviewController.create)
router.get('/', freelancerReviewController.getAll)
router.get('/:id', freelancerReviewController.getOne)
router.put('/:id', freelancerReviewController.edit)
router.delete('/remove', freelancerReviewController.delete)

module.exports = router