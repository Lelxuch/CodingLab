const uuid = require('uuid')
const path = require('path')
const {Project} = require('../models/models')
const ApiError = require('../error/ApiError')
const jwt = require("jsonwebtoken");

class ProjectController {
    async create(req, res, next) {
        try {
            let {name, description, payment, categoryId} = req.body
            const {file} = req.files
            let fileName = uuid.v4() + ".docx"
            file.mv(path.resolve(__dirname, '..', 'static', fileName))

            const project = await Project.create({name, description, payment, categoryId, file: fileName})

            return res.json(project)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async createWithoutFile(req, res, next) {
        try {
            let {name, description, payment, categoryId} = req.body

            const project = await Project.create({name, description, payment, categoryId})

            return res.json(project)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res, next) {
        try{
            let {payment, categoryId, limit, page} = req.query
            page = page || 1
            limit = limit || 9
            let offset = page * limit - limit
            let projects;
            if (!payment && !categoryId) {
                projects = await Project.findAndCountAll({limit, offset})
            }
            if (payment && !categoryId) {
                projects = await Project.findAndCountAll({where: {payment}, limit, offset})
            }
            if (!payment && categoryId) {
                projects = await Project.findAndCountAll({where: {categoryId}, limit, offset})
            }
            if (payment && categoryId) {
                projects = await Project.findAndCountAll({where: {payment, categoryId}, limit, offset})
            }
            return res.json(projects)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }


    async getOne(req, res, next) {
        try{
            const {id} = req.params
            const project = await Project.findOne(
                {
                    where: {id},

                },
            )
            return res.json(project)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async edit(req, res, next) {
        try{
            let {id, name, description, payment, categoryId} = req.body
            const {file} = req.files
            let fileName = uuid.v4() + ".docx"
            file.mv(path.resolve(__dirname, '..', 'static', fileName))


            const project = await Project.update(
                {name: name, description: description, payment: payment, categoryId: categoryId, file: fileName},
                {returning: true, where: {id}}
            )

            return res.json({project})
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getStatus(req, res, next) {
        try{
            const {id} = req.params
            let {status} = req.query
            const project = await Project.findOne(
                {
                    where: {id, status}
                },
            )
            return res.json(project)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async changeStatus(req, res, next) {
        try{
            const {status, id} = req.body
            if (!status) {
                return next(ApiError.badRequest('Некорректный ввод'))
            }

            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(401).json({message: "Не авторизован"})
            }

            const project = await Project.update(
                {status: status},
                {returning: true, where: {id}}
            )

            return res.json({project})
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async delete(req, res, next) {
        try{
            const {id} = req.body
            const project = await Project.destroy({where:{id},})
            return res.json(project)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new ProjectController()