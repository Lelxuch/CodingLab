const Router = require('express')
const router = new Router()
const skillController = require('../controllers/skillController')

router.post('/', skillController.create)
router.get('/', skillController.getAll)
router.delete('/')

module.exports = router