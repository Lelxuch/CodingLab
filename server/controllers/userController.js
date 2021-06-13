const uuid = require('uuid')
const path = require('path')
const {User} = require('../models/models')
const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const generateJwt = (id, email, type) => {
    return jwt.sign(
        {id: id, email: email, type},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration1(req, res, next) {
        try{
            const {email, password, type} = req.body
            if (!email || !password) {
                return next(ApiError.badRequest('Некорректный email или password'))
            }
            const candidate = await User.findOne({where: {email}})
            if (candidate) {
                return next(ApiError.badRequest('Пользователь с таким email уже существует'))
            }
            const hashPassword = await bcrypt.hash(password, 5)
            const user = await User.create({email, password: hashPassword, type})

            const token = generateJwt(user.id, user.email, user.type)
            return res.json({token})
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async registration2(req, res, next) {
        try{
            const user = await User.update(
                {
                    username: req.body.username,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    birthDate: req.body.birthDate,
                    role: req.body.role
                },
                {returning: true, where: {id: req.user.id}}
            )

            return res.json({user})
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async login(req, res, next) {
        try{
            const {email, password} = req.body
            const user = await User.findOne({where: {email}})
            if (!user) {
                return next(ApiError.internal('Пользователь не найден'))
            }
            let comparePassword = bcrypt.compareSync(password, user.password)
            if (!comparePassword) {
                return next(ApiError.internal('Указан неверный пароль'))
            }
            const token = generateJwt(user.id, user.email, user.type)
            return res.json({token})
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async check(req, res, next) {
        try{
            const token = generateJwt(req.user.id, req.user.email, req.user.type)
            return res.json({token})
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async changeRole(req, res, next) {
        try{
            const {role} = req.body
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(401).json({message: "Не авторизован"})
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)

            const user = await User.findOne(
                {
                    where: {id: decoded.id},
                },
            )

            if(user.role !== role) {
                const user = await User.update(
                    {role: role},
                    {returning: true, where: {id: decoded.id}}
                )
                return res.json(user)
            }

        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async setPhoto(req, res, next) {
        try{
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            await img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(401).json({message: "Не авторизован"})
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)

            const user = await User.update(
                {img: fileName},
                {returning: true, where: {id: decoded.id}}
            )

            return res.json({user})
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async changePassword(req, res, next) {
        try{
            const {password} = req.body
            if (!password) {
                return next(ApiError.badRequest('Некорректный password'))
            }
            const hashPassword = await bcrypt.hash(password, 5)
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(401).json({message: "Не авторизован"})
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)

            const user = await User.update(
                {password: hashPassword},
                {returning: true, where: {id: decoded.id}}
            )

            return res.json({user})
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }

    async delete(req, res, next) {
        try{
            const token = req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(401).json({message: "Не авторизован"})
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            const user = await User.destroy({where:{id: decoded.id},})
            return res.json(user)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new UserController()