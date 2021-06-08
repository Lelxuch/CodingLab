const {Review} = require('../models/models')
const ApiError = require('../error/ApiError')

class ReviewController {
    async create(req, res, next) {
        try{
            const {name} = req.body
            const review = await Review.create({name})
            return res.json(review)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next) {
        try{
            const reviews = await Review.findAll()
            return res.json(reviews)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

}

module.exports = new ReviewController()