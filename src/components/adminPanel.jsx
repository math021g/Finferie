import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { getUsers } from './../services/userService';
import DynamicTableBody from './common/dynamicTableBody';
import { getApartments } from './../services/apartmentService';
import { getBookings } from './../services/bookingService';
import { getCustomer } from '../services/customerService';

class AdminPanel extends Component {
    state = { 
        data: {
            users: [],
            apartments: [],
            bookings: [],
            customers: []
        },
        errors: {}
    }

    async componentDidMount() {
        const {data} = this.state;
        const {data: users} = await getUsers();
        data.users = users;
        const {data: apartments} = await getApartments();
        data.apartments = apartments;
        const {data: bookings} = await getBookings();
        console.log(bookings);
        data.bookings = bookings;
        this.setState({data});

    }

    limitOutputUser() {
        const {data} = this.state;
        const limitedUserInfo = [];
        for (let i = 0; i < data.users.length; i++) {
            const picked = (({_id, name, email, isAdmin}) => ({_id, name, email, isAdmin}))(data.users[i]);
            limitedUserInfo.push(picked);
        }
        return limitedUserInfo;
    }

    limitOutputApartment() {
        const {data} = this.state;
        const limitedApartmentInfo = [];
        for (let i = 0; i < data.apartments.length; i++) {
            const picked = (({_id, name}) => ({_id, name}))(data.apartments[i]);
            limitedApartmentInfo.push(picked);
        }
        return limitedApartmentInfo;
    }

    limitOutputBooking() {
        const {data} = this.state;
        const limitedBookingInfo = [];

        for (let i = 0; i < data.bookings.length; i++) {

            let apartment = data.bookings[i].apartment.name;
            data.bookings[i]["apartmentName"]=apartment;

            let customer = this.getCustomerName(data.bookings[i]["customerID"]);
            customer.then((value) => {data.bookings[i]["customerName"]=value});
            
            //customerName virker ikke
            const picked = (({_id, apartmentName, customerName, fromDate, toDate}) => ({_id, apartmentName, customerName, fromDate, toDate}))(data.bookings[i]);

            limitedBookingInfo.push(picked);
        }
        return limitedBookingInfo;
    }

    async getCustomerName(input) {
        const {data: customer} = await getCustomer(input);
        return `${customer.firstName} ${customer.lastName}`;
    }

    render() { 
        const {data} = this.state;
        const userArray = this.limitOutputUser();
        const apartmentsArray = this.limitOutputApartment();
        const bookingArray = this.limitOutputBooking();

        const user_str = "user";
        const apartment_str = "apartment";
        const booking_str  = "booking";

        return ( 
            <React.Fragment>
                <main className="container">
                    <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#userPanel" aria-expanded="false" aria-controls="userPanel">
                        Brugere
                    </button>
                    <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#apartmentPanel" aria-expanded="false" aria-controls="apartmentPanel">
                        lejligheder
                    </button>
                    <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#bookingPanel" aria-expanded="false" aria-controls="bookingPanel">
                        Bookinger
                    </button>
                    <div className="collapse" id="userPanel">
                        <div className="card card-body">
                            <table className="table table-striped">
                                <thead className="thead-orange">
                                    <th>id</th>
                                    <th>Navn</th>
                                    <th>Email</th>
                                    <th>Er Admin</th>
                                    <th>&nbsp;</th>
                                </thead>
                                <DynamicTableBody objs={userArray} usedFor={user_str}/>
                            </table>
                        </div>
                    </div>
                    <div className="collapse" id="apartmentPanel">
                        <div className="card card-body">
                            <table className="table table-striped">
                                <thead className="thead-orange">
                                    <th>id</th>
                                    <th>Navn</th>
                                    <th>&nbsp;</th>
                                </thead>
                                <DynamicTableBody objs={apartmentsArray} usedFor={apartment_str}/>
                            </table>
                        </div>
                    </div>
                    <div className="collapse" id="bookingPanel">
                        <div className="card card-body">
                            <table className="table table-striped">
                                <thead className="thead-orange">
                                    <th>id</th>
                                    <th>Navn</th>
                                    <th>Kunde</th>
                                    <th>Fra Dato</th>
                                    <th>Til Dato</th>
                                    <th>&nbsp;</th>
                                </thead>
                                <DynamicTableBody objs={bookingArray} usedFor={booking_str}/>
                            </table>
                        </div>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}
 
export default AdminPanel;