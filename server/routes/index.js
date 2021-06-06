const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const hirerRouter = require('./hirerRouter')
const freelancerRouter = require('./freelancerRouter')
const freelancerReviewRouter = require('./freelancerReviewRouter')
const freelancerSkill = require('./freelancerSkillRouter')
const workRouter = require('./workRouter')
const jobRouter = require('./jobRouter')
const projectRouter = require('./projectRouter')
const hirerReviewRouter = require('./hirerReviewRouter')
const skillRouter = require('./skillRouter')
const categoryRouter = require('./categoryRouter')


router.use('/user', userRouter)
router.use('/hirer', hirerRouter)
router.use('/freelancer', freelancerRouter)
router.use('/skill', skillRouter)
router.use('/freelancer/skill', freelancerSkill)
router.use('/project', projectRouter)
router.use('/category', categoryRouter)
router.use('/job', jobRouter)
router.use('/work', workRouter)
router.use('/hirer/review', hirerReviewRouter)
router.use('/freelancer/review', freelancerReviewRouter)


module.exports = router