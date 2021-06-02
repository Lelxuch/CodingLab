const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    username: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
    firstName: {type: DataTypes.STRING},
    lastName: {type: DataTypes.STRING},
    birthDate: {type: DataTypes.DATE},
    company: {type: DataTypes.STRING}
})

const ListSkill = sequelize.define('list_skill', {
    id: {type: DataTypes.INTEGER,  primaryKey: true, autoIncrement: true},
})

const Skill = sequelize.define('skill', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Job = sequelize.define('job', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    payment: {type: DataTypes.INTEGER, allowNull: false},
    file: {type: DataTypes.STRING}
})

const JobInfo = sequelize.define('job_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false}
})

const Category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Review = sequelize.define('review', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    comment: {type: DataTypes.STRING, allowNull: false},
    rate: {type: DataTypes.INTEGER, allowNull: false},
})

User.hasMany(ListSkill)
ListSkill.belongsTo(User)

Skill.hasMany(ListSkill)
ListSkill.belongsTo(Skill)

User.hasMany(Review)
Review.belongsTo(User)

User.hasMany(Job)
Job.belongsTo(User)

Job.hasMany(JobInfo, {as: 'info'})
JobInfo.belongsTo(Job)

Category.hasMany(Job)
Job.belongsTo(Category)

module.exports = {
    User,
    Skill,
    Review,
    Job,
    Category,
    JobInfo
}