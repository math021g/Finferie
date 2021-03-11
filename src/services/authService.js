import http from './httpService';
import jwtDecode from 'jwt-decode';

const tokenKey = 'token';
const apiEndpoint = "login/";

http.setJwt(getJwt())

export async function logIn(email, password) {
    const {data:jwt} = await http.post(apiEndpoint, {email, password});
    localStorage.setItem(tokenKey, jwt);
}

export function logout() {
    localStorage.removeItem(tokenKey);
}

export function getJwt() {
    return localStorage.getItem(tokenKey);
}

export function getCurrentUser() {
    try {
        const jwt = getJwt();
        return jwtDecode(jwt);
      } catch (ex) {
        return null;
      }
}