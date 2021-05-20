const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const freelancerRouter = require('./freelancerRouter')
const hirerRouter = require('./hirerRouter')
const jobRouter = require('./jobRouter')
const reviewRouter = require('./reviewRouter')
const skillRouter = require('./skillRouter')



router.use('/user', userRouter)
router.use('/freelancer', freelancerRouter)
router.use('/hirer', hirerRouter)
router.use('/skill', skillRouter)
router.use('/job', jobRouter)
router.use('/review', reviewRouter)

module.exports = router