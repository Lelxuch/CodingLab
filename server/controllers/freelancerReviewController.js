const {FreelancerReview} = require('../models/models')
const ApiError = require('../error/ApiError')

class FreelancerReviewController {
    async create(req, res, next) {
        try{
            const {id, comment, rate} = req.body
            const freelancerReview = await FreelancerReview.create({id, comment, rate})
            return res.json(freelancerReview)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next) {
        try{
            let {rate, page, limit} = req.query
            page = page || 1
            limit = limit || 9
            let offset = page * limit - limit
            let freelancerReviews;
            if (!rate) {
                freelancerReviews = await FreelancerReview.findAndCountAll({limit, offset})
            }
            if (rate) {
                freelancerReviews = await FreelancerReview.findAndCountAll({where: {rate}, limit, offset})
            }

            return res.json(jobs)
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
            const {comment, rate, id} = req.body
            if (!status) {
                return next(ApiError.badRequest('Некорректный ввод'))
            }

            const freelancerReview = await FreelancerReview.update(
                {comment: comment, rate: rate},
                {returning: true, where: {id}}
            )

            return res.json({freelancerReview})
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async delete(req, res, next) {
        try{
            const {ide} = req.body
            const freelancerReview = await FreelancerReview.destroy({where:{id},})
            return res.json(freelancerReview)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new FreelancerReviewController()