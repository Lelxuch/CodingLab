const Router = require('express')
const router = new Router()
const workController = require('../controllers/workController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/', workController.create)
router.get('/', workController.getAll)
router.get('/:id', workController.getOne)
router.put('/:id', workController.edit)
router.delete('/', workController.delete)

module.exports = router