const Router = require('express')
const router = new Router()
const hirerReviewController = require('../controllers/hirerReviewController')
const checkRole = require('../middleware/checkRoleMiddleware')


router.post('/create', hirerReviewController.create)
router.get('/', hirerReviewController.getAll)
router.get('/:id', hirerReviewController.getOne)
router.put('/:id', hirerReviewController.edit)
router.delete('/remove', hirerReviewController.delete)

module.exports = router