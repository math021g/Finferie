import http from './httpService';

const apiEndpoint = "customers/";

export function getCustomers() {
    return http.get(apiEndpoint);
}

export function getCustomer(id) {
    return http.get(apiEndpoint + id);
} 

export function saveCustomer(customer) {
    if(customer._id) {
        const body = {...customer}; 
        delete body._id;
        return http.put(apiEndpoint + customer._id, body);
    }
    return http.post(apiEndpoint, customer);
}

export function deleteCustomer(id) {
    return http.delete(apiEndpoint + id);
}