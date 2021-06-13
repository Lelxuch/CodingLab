import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password) => {
    const {data} = await $host.post('api/user/registration', {email, password, type: 'ADMIN'})
    localStorage.setItem('token', data.token)
    console.log(localStorage.getItem('token'))
    return jwt_decode(data.token)
}

export const registration2 = async (username, firstName, lastName, birthDate, role) => {
    const {data} = await $authHost.put('api/user/registration2', {username, firstName, lastName, birthDate, role})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    return jwt_decode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/user/auth' )
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}