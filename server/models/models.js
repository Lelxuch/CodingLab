const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "FREELANCER"},
    firstName: {type: DataTypes.STRING},
    lastName: {type: DataTypes.STRING},
})

const Freelancer = sequelize.define('freelancer', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    level: {type: DataTypes.STRING, allowNull: false}
})

const Hirer = sequelize.define('hirer', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
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

User.hasOne(Freelancer)
Freelancer.belongsTo(User)

User.hasOne(Hirer)
Hirer.belongsTo(User)

Freelancer.hasOne(SkillsList)
SkillsList.belongsTo(Freelancer)

SkillsList.hasMany(ListSkill)
ListSkill.belongsTo(SkillsList)

Skill.hasMany(ListSkill)
ListSkill.belongsTo(Skill)

Hirer.hasMany(Review)
Review.belongsTo(Hirer)

ReviewsList.hasMany(ListReview)
ListReview.belongsTo(ReviewsList)

Review.hasMany(ListReview)
ListReview.belongsTo(Review)

Freelancer.hasOne(ReviewsList)
ReviewsList.belongsTo(Freelancer)

Hirer.hasMany(Job)
Job.belongsTo(Hirer)

JobsList.hasMany(ListJob)
ListJob.belongsTo(JobsList)

Job.hasMany(ListJob)
ListJob.belongsTo(Job)

Freelancer.hasOne(JobsList)
JobsList.belongsTo(Freelancer)

Category.belongsToMany(Job, {through: JobCategory})
Job.belongsToMany(Category, {through: JobCategory})

module.exports = {
    User,
    Freelancer,
    Hirer,
    SkillsList,
    Skill,
    ReviewsList,
    Review,
    Job,
    Category,
    JobCategory
}