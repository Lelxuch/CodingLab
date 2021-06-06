const uuid = require('uuid')
const path = require('path')
const {Project} = require('../models/models')
const ApiError = require('../error/ApiError')

class ProjectController {
    async create(req, res, next) {
        try {
            let {name, description, payment, userId, categoryId, info} = req.body
            const {file} = req.files
            let fileName = uuid.v4() + ".docx"
            file.mv(path.resolve(__dirname, '..', 'static', fileName))

            const project = await Project.create({name, description, payment, userId, categoryId, file: fileName})

            return res.json(project)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {userId, categoryId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let projects;
        if(!userId && !categoryId) {
            projects = await Project.findAndCountAll({limit, offset})
        }
        if(userId && !categoryId) {
            projects = await Project.findAndCountAll({where:{userId}, limit, offset})
        }
        if(!userId && categoryId) {
            projects = await Project.findAndCountAll({where:{categoryId}, limit, offset})
        }
        if(userId && categoryId) {
            projects = await Project.findAndCountAll({where:{userId, categoryId}, limit, offset})
        }
        return res.json(projects)
    }


    async getOne(req, res) {
        const {id} = req.params
        const project = await Project.findOne(
            {
                where: {id},

            },
        )
        return res.json(project)
    }

    async edit(req, res) {

    }

    async getStatus(req, res) {

    }

    async changeStatus(req, res) {

    }

    async delete(req, res) {

    }
}

module.exports = new ProjectController()