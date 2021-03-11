import http from './httpService';

const apiEndpoint = "bookings/";

export function getBookings() {
    return http.get(apiEndpoint);
}

export function getBooking(id) {
    return http.get(apiEndpoint + id);
}

export function saveBooking(booking) {
    if(booking._id) {
        const body = {...booking};
        delete body._id;
        return http.put(apiEndpoint + booking._id, body);
    }
    return http.post(apiEndpoint, booking);
}

export function deleteBooking(id) {
    return http.delete(apiEndpoint + id);
}
