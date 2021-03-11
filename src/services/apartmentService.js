import http from './httpService';

const apiEndpoint = "apartments/";

export function getApartments() {
    return http.get(apiEndpoint);
}

export function getApartment(id) {
    return http.get(apiEndpoint + id);
}

export function saveApartment(apartment) {
    if(apartment._id) {
        const body = {...apartment};
        delete body._id;
        return http.put(apiEndpoint + apartment._id, body);
    }
    return http.post(apiEndpoint, apartment);
}

export function deleteApartment(id) {
    return http.delete(apiEndpoint + id);
}