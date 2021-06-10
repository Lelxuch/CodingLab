const {HirerReview} = require('../models/models')
const ApiError = require('../error/ApiError')

class HirerReviewController {
    async create(req, res, next) {
        try{
            const {id, comment, rate} = req.body
            const hirerReview = await HirerReview.create({id, comment, rate})
            return res.json(hirerReview)
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
            let hirerReviews;
            if (!rate) {
                hirerReviews = await HirerReview.findAndCountAll({limit, offset})
            }
            if (rate) {
                hirerReviews = await HirerReview.findAndCountAll({where: {rate}, limit, offset})
            }

            return res.json(jobs)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getOne(req, res, next) {
        try{
            const {id} = req.params
            const hirerReview = await HirerReview.findOne(
                {
                    where: {id},
                },
            )
            return res.json(hirerReview)
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

            const hirerReview = await HirerReview.update(
                {comment: comment, rate: rate},
                {returning: true, where: {id}}
            )

            return res.json({hirerReview})
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async delete(req, res, next) {
        try{
            const {ide} = req.body
            const hirerReview = await HirerReview.destroy({where:{id},})
            return res.json(hirerReview)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new HirerReviewController()