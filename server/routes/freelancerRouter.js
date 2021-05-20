const Router = require('express')
const router = new Router()
const freelancerController = require('../controllers/freelancerController')

router.post('/', freelancerController.create)
router.get('/', freelancerController.getAll)
router.get('/:id', freelancerController.getOne)

module.exports = router