import {makeAutoObservable} from "mobx";

export default class JobStore {
    constructor() {
        this._categories = [
            {id: 1, name: 'Web Sites'},
            {id: 2, name: 'Mobile Apps'},
            {id: 3, name: 'Game Dev'},
            {id: 4, name: 'Design'}
        ]
        this._projects = [
            {id: 1, name: "WebSite Project", description: "Project description of website...", payment: 10000},
            {id: 2, name: "Mobile App project", description: "Project description of mobile app...", payment: 10000},
            {id: 3, name: "Game Dev project", description: "Project description of game process...", payment: 10000},
            {id: 4, name: "Design project", description: "Project description of design project...", payment: 10000}
        ]
        this._selectedCategory = {}
        makeAutoObservable(this)
    }
    setCategories(categories) {
        this._categories = categories
    }

    setSelectedCategory(category) {
        this._selectedCategory = category
    }

    setProjects(projects) {
        this._projects = projects
    }
    get categories() {
        return this._categories
    }
    get projects() {
        return this._projects
    }
    get selectedCategory() {
        return this._selectedCategory
    }
}