const {HirerReview} = require('../models/models')
const ApiError = require('../error/ApiError')

class HirerReviewController {
    async create(req, res, next) {
        try{
            const {name} = req.body
            const hirerReview = await HirerReview.create({name})
            return res.json(hirerReview)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next) {
        try{
            const hirerReviews = await HirerReview.findAll()
            return res.json(hirerReviews)
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

module.exports = new HirerReviewController()