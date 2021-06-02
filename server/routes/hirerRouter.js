const Router = require('express')
const router = new Router()
const hirerController = require('../controllers/hirerController')


router.post('/', hirerController.create)
router.get('/', hirerController.getAll)
router.get('/:id', hirerController.getOne)

module.exports = router