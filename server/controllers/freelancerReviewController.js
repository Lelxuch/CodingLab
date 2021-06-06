const {FreelancerReview} = require('../models/models')
const ApiError = require('../error/ApiError')

class FreelancerReviewController {
    async create(req, res) {
        const {name} = req.body
        const freelancerReview = await FreelancerReview.create({name})
        return res.json(freelancerReview)
    }

    async getAll(req, res) {
        const freelancerReviews = await FreelancerReview.findAll()
        return res.json(freelancerReviews)
    }

    async getOne(req, res) {
        const {id} = req.params
        const freelancerReview = await FreelancerReview.findOne(
            {
                where: {id},

            },
        )
        return res.json(freelancerReview)
    }

    async edit(req, res) {

    }

    async delete(req, res) {

    }
}

module.exports = new FreelancerReviewController()