import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createProject = async (project) => {
    const {data} = await $authHost.post('api/project', project)
    return data
}

export const createProjectWithoutFile = async (project) => {
    const {data} = await $authHost.post('api/project/withoutFile', project)
    return data
}

export const fetchProjects = async () => {
    const {data} = await $authHost.get('api/project')
    return data
}

export const fetchOneProject = async (id) => {
    const {data} = await $authHost.get('api/project/' + id)
    return data
}

export const createJob = async (job) => {
    const {data} = await $authHost.post('api/job', job)
    return data
}

export const fetchJobs = async () => {
    const {data} = await $authHost.get('api/job')
    return data
}

export const fetchOneJob = async (id) => {
    const {data} = await $authHost.get('api/job/' + id)
    return data
}

export const createCategory = async (category) => {
    const {data} = await $authHost.post('api/category', category)
    return data
}

export const fetchCategories = async () => {
    const {data} = await $authHost.get('api/category')
    return data
}
