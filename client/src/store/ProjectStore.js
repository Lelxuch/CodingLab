import {makeAutoObservable} from "mobx";

export default class JobStore {
    constructor() {
        this._categories = []
        this._projects = []
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