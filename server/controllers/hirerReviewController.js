const {HirerReview} = require('../models/models')
const ApiError = require('../error/ApiError')

class HirerReviewController {
    async create(req, res) {
        const {name} = req.body
        const hirerReview = await HirerReview.create({name})
        return res.json(hirerReview)
    }

    async getAll(req, res) {
        const hirerReviews = await HirerReview.findAll()
        return res.json(hirerReviews)
    }

    async getOne(req, res) {
        const {id} = req.params
        const hirerReview = await HirerReview.findOne(
            {
                where: {id},

            },
        )
        return res.json(hirerReview)
    }

    async edit(req, res) {

    }

    async delete(req, res) {

    }
}

module.exports = new HirerReviewController()