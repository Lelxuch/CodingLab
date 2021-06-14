import {makeAutoObservable} from "mobx";

export default class JobStore {
    constructor() {
        this._users = []

        this._hirers = []
        this._hirerReviews = []
        this._freelancerReviews = []
        this._freelancers = []
        this._skills = []
        this._freelancerSkills = []

        this._works = []

        this._jobs = []

        makeAutoObservable(this)
    }



    setUsers(users) {
        this._users = users
    }

    setSkills(skills) {
        this._skills = skills
    }

    setFreelancerSkills(freelancerSkills) {
        this._freelancerSkills = freelancerSkills
    }


    setHirers(hirers) {
        this._hirers = hirers
    }

    setFreelancers(freelancers) {
        this._freelancers = freelancers
    }

    setWorks(works) {
        this._works = works
    }

    setHirerReviews(hirerReviews) {
        this._hirerReviews = hirerReviews
    }

    setFreelancerReviews(freelancerReviews) {
        this._freelancerReviews = freelancerReviews
    }

    setJobs(jobs) {
        this._jobs = jobs
    }



    get hirers() {
        return this._hirers
    }

    get freelancers() {
        return this._freelancers
    }

    get works() {
        return this._works
    }

    get skills() {
        return this._skills
    }

    get freelancerSkills() {
        return this._freelancerSkills
    }

    get hirerReviews() {
        return this._hirerReviews
    }

    get freelancerReviews() {
        return this._freelancerReviews
    }

    get users() {
        return this._users
    }

    get jobs() {
        return this._jobs
    }


}