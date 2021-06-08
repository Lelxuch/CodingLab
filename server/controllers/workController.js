const path = require('path')
const {Work} = require('../models/models')
const ApiError = require('../error/ApiError')
const jwt = require("jsonwebtoken");

class WorkController {
    async create(req, res, next) {
        try {
            let {name, description, link, freelancerId} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".docx"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const work = await Work.create({name, description, link, freelancerId, img: fileName})

            return res.json(work)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        const works = await Work.findAll()
        return res.json(works)
    }

    async getOne(req, res) {
        const {id} = req.params
        const work = await Work.findOne(
            {
                where: {id},
            },
        )
        return res.json(work)
    }

    async edit(req, res, next) {
        try{
            let {id, name, description, link} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".docx"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))


            const work = await Work.update(
                {name: name, description: description, link: link, img: fileName},
                {returning: true, where: {id}}
            )

            return res.json({work})
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async delete(req, res, next) {
        try{
            const {id} = req.body
            const work = await Work.destroy({where:{id,}})
            return res.json(work)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new WorkController()