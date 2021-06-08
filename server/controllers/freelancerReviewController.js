const {FreelancerReview} = require('../models/models')
const ApiError = require('../error/ApiError')

class FreelancerReviewController {
    async create(req, res, next) {
        try{
            const {name} = req.body
            const freelancerReview = await FreelancerReview.create({name})
            return res.json(freelancerReview)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next) {
        try{
            const freelancerReviews = await FreelancerReview.findAll()
            return res.json(freelancerReviews)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getOne(req, res, next) {
        try{
            const {id} = req.params
            const freelancerReview = await FreelancerReview.findOne(
                {
                    where: {id},

                },
            )
            return res.json(freelancerReview)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async edit(req, res, next) {
        try{

        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async delete(req, res, next) {
        try{

        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new FreelancerReviewController()