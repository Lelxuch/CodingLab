const {User} = require('../models/models')
const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id: id, email: email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration1(req, res, next) {
        const {email, password, role} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный email или password'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({email, role, password: hashPassword})

        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async registration2(req, res, next) {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(401).json({message: "Не авторизован"})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)

        const user = await User.update(
            {username: req.body.username, firstName: req.body.firstName, lastName: req.body.lastName, role: req.body.role},
            {returning: true, where: {id: decoded.id}}
        )

        return res.json({user})
    }

    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if(!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }

    async changeRole(req, res, next) {

    }

    async changePassword(req, res, next) {
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