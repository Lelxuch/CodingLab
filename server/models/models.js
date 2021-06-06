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
    img: {type: DataTypes.STRING}
})

const Hirer = sequelize.define('hirer', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    github: {type: DataTypes.URL},
    linkedin: {type: DataTypes.URL},
    rating: {type: DataTypes.FLOAT, defaultValue: 0.0}
})

const Freelancer = sequelize.define('freelancer', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    github: {type: DataTypes.URL},
    linkedin: {type: DataTypes.URL},
    rating: {type: DataTypes.FLOAT, defaultValue: 0.0}
})

const FreelancerSkill = sequelize.define('freelancer_skill', {
    id: {type: DataTypes.INTEGER,  primaryKey: true, autoIncrement: true},
})

const Skill = sequelize.define('skill', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const Project = sequelize.define('project', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    payment: {type: DataTypes.INTEGER, allowNull: false},
    file: {type: DataTypes.STRING},
    status: {type: DataTypes.STRING, defaultValue: "FINDING"}
})

const Job = sequelize.define('job', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    status: {type: DataTypes.STRING, defaultValue: "IN PROCESS"}
})

const Category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const FreelancerReview = sequelize.define('freelancer_review', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    comment: {type: DataTypes.STRING, allowNull: false},
    rate: {type: DataTypes.INTEGER, allowNull: false},
})

const HirerReview = sequelize.define('hirer_review', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    comment: {type: DataTypes.STRING, allowNull: false},
    rate: {type: DataTypes.INTEGER, allowNull: false},
})

const Work = sequelize.define('work', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    link: {type: DataTypes.INTEGER, allowNull: false},
    img: {type: DataTypes.STRING}
})

User.hasOne(Freelancer)
Freelancer.belongsTo(User)

User.hasOne(Hirer)
Hirer.belongsTo(User)

Freelancer.hasMany(FreelancerSkill)
FreelancerSkill.belongsTo(Freelancer)

Skill.hasMany(FreelancerSkill)
FreelancerSkill.belongsTo(Skill)

Hirer.hasMany(Project)
Project.belongsTo(Hirer)

Category.hasMany(Project)
Project.belongsTo(Category)

Freelancer.hasMany(Job)
Job.belongsTo(Freelancer)

Project.hasOne(Job)
Job.belongsTo(Project)

Freelancer.hasMany(Work)
Work.belongsTo(Freelancer)

Freelancer.hasMany(FreelancerReview)
FreelancerReview.belongsTo(Freelancer)

Hirer.hasMany(HirerReview)
HirerReview.belongsTo(Hirer)

Hirer.hasMany(FreelancerReview)
FreelancerReview.belongsTo(Hirer)

Freelancer.hasMany(HirerReview)
HirerReview.belongsTo(Freelancer)

module.exports = {
    User,
    Hirer,
    Freelancer,
    Skill,
    FreelancerSkill,
    Project,
    Category,
    Job,
    Work,
    FreelancerReview,
    HirerReview
}