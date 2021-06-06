const Router = require('express')
const router = new Router()
const freelancerSkillController = require('../controllers/freelancerSkillController')

router.post('/', freelancerSkillController.create)
router.get('/', freelancerSkillController.getAll)
router.delete('/', freelancerSkillController.delete)

module.exports = router