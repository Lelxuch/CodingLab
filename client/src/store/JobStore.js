import {makeAutoObservable} from "mobx";

export default class JobStore {
    constructor() {
        this._users = [
            {id: 1, email: 'user1@mail.ru', password: '12345', firstName: 'Some', secondName: 'User'},
            {id: 2, email: 'user2@mail.ru', password: '12345', firstName: 'Some2', secondName: 'User2'},
            {id: 3, email: 'user3@mail.ru', password: '12345', firstName: 'Some3', secondName: 'User3'}
        ]

        this._hirers = [
            {id: 1},
            {id: 2},
            {id: 3},
        ]
        this._hirerReviews = [
            {id: 1, comment: "Some comment..."},
            {id: 2, comment: "Some comment..."},
            {id: 3, comment: "Some comment..."},
        ]
        this._freelancerReviews = [
            {id: 1, comment: "Some comment..."},
            {id: 2, comment: "Some comment..."},
            {id: 3, comment: "Some comment..."}
        ]
        this._freelancers = [
            {id: 1},
            {id: 2},
            {id: 3}
        ]
        this._skills = [
            {id: 1, name: "JavaScript"},
            {id: 2, name: "HTML"},
            {id: 3, name: "CSS"}
        ]
        this._freelancerSkills = [
            {id: 1},
            {id: 2},
            {id: 3}
        ]

        this._works = [
            {id: 1, name: "WebSite Project", description: "Project description of website..."},
            {id: 2, name: "Mobile App project", description: "Project description of mobile app..."},
            {id: 3, name: "Game Development project", description: "Project description of game process..."},
            {id: 4, name: "Design project", description: "Project description of design project..."}
        ]

        this._jobs = [
            {id: 1, status: "IN PROCESS", projectId: 1},
            {id: 2, status: "IN PROCESS", projectId: 2},
            {id: 3, status: "IN PROCESS", projectId: 3},
            {id: 4, status: "IN PROCESS", projectId: 4}
        ]

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