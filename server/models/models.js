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
    level: {type: DataTypes.STRING, allowNull: false},
    company: {type: DataTypes.STRING}
})

const SkillsList = sequelize.define('skills_list', {
    id: {type: DataTypes.INTEGER,  primaryKey: true, autoIncrement: true},
})

const ListSkill = sequelize.define('list_skill', {
    id: {type: DataTypes.INTEGER,  primaryKey: true, autoIncrement: true},
})

const Skill = sequelize.define('skill', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const JobsList = sequelize.define('jobs_list', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const ListJob = sequelize.define('list_job', {
    id: {type: DataTypes.INTEGER,  primaryKey: true, autoIncrement: true},
})

const Job = sequelize.define('job', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    payment: {type: DataTypes.INTEGER, allowNull: false},
    file: {type: DataTypes.STRING}
})

const Category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const ReviewsList = sequelize.define('reviews_list', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const ListReview = sequelize.define('list_review', {
    id: {type: DataTypes.INTEGER,  primaryKey: true, autoIncrement: true},
})

const Review = sequelize.define('review', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    comment: {type: DataTypes.STRING, allowNull: false},
    rate: {type: DataTypes.INTEGER, allowNull: false},
})

const JobCategory = sequelize.define('job_category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasOne(SkillsList)
SkillsList.belongsTo(User)

SkillsList.hasMany(ListSkill)
ListSkill.belongsTo(SkillsList)

Skill.hasMany(ListSkill)
ListSkill.belongsTo(Skill)

User.hasMany(Review)
Review.belongsTo(User)

ReviewsList.hasMany(ListReview)
ListReview.belongsTo(ReviewsList)

Review.hasMany(ListReview)
ListReview.belongsTo(Review)

User.hasOne(ReviewsList)
ReviewsList.belongsTo(User)

User.hasMany(Job)
Job.belongsTo(User)

JobsList.hasMany(ListJob)
ListJob.belongsTo(JobsList)

Job.hasMany(ListJob)
ListJob.belongsTo(Job)

User.hasOne(JobsList)
JobsList.belongsTo(User)

Category.belongsToMany(Job, {through: JobCategory})
Job.belongsToMany(Category, {through: JobCategory})

module.exports = {
    User,
    SkillsList,
    Skill,
    ReviewsList,
    Review,
    Job,
    Category,
    JobCategory
}