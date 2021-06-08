const uuid = require('uuid')
const path = require('path')
const {Job} = require('../models/models')
const ApiError = require('../error/ApiError')
const jwt = require("jsonwebtoken");

class JobController {
    async create(req, res, next) {
        try{
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(401).json({message: "Не авторизован"})
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            const {projectId, freelancerId} = req.body
            const job = await Job.create({projectId, freelancerId})
            return res.json(job)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {status, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let jobs;
        if(!status) {
            jobs = await Job.findAndCountAll({limit, offset})
        }
        if(status) {
            jobs = await Job.findAndCountAll({where:{status}, limit, offset})
        }

        return res.json(jobs)
    }


    async getOne(req, res) {
        const {id} = req.params
        const job = await Job.findOne(
            {
                where: {id},
            },
        )
        return res.json(job)
    }

    async getStatus(req, res, next) {
        try{
            const {id} = req.params
            const job = await Job.findOne(
                {
                    where: {id},
                },
            )
            return res.json(job)
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

            const job = await Job.update(
                {status: status},
                {returning: true, where: {id}}
            )

            return res.json({job})
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async delete(req, res, next) {
        try{
            const {id} = req.body
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(401).json({message: "Не авторизован"})
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            const job = await Job.destroy({where:{id},})
            return res.json(job)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new JobController()