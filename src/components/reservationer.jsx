import React, { Component } from 'react';
import { getBooking, getBookings } from './../services/bookingService';
import { getCurrentUser } from './../services/authService';
import { getCustomers } from './../services/customerService';
import { getUser } from '../services/userService';
import DynamicTableBody from './common/dynamicTableBody';

class Reservations extends Component {
    state = { 
        data: {
            user: {},
            customers: [],
            bookings: [],
            booking: {}
        },
        error: {

        }
     }

    async componentDidMount() {
        const {data} = this.state;

        const user = await getUser(this.props.match.params.id);
        data.user = user;
        console.log(data.user.data.email);

        const {data: customers} = await getCustomers();
        data.customers = customers;
        console.log(customers)

        const emailMatchIndex = customers.findIndex(x => x.email === data.user.data.email);
        console.log(data.customers[emailMatchIndex]._id);

        const {data: bookings} = await getBookings();
        data.bookings = bookings;

        const customerMatchIndex =  bookings.findIndex(x => x.customerID === data.customers[emailMatchIndex]._id);


        const {data: booking} = await getBooking(data.bookings[customerMatchIndex]._id);
        data.booking = booking;
        console.log(booking);
        this.setState({data});
    } 

    // limitOutputBooking() {
    //     const {data} = this.state;

    //     let apartment = data.booking.apartment.name;
    //     data.bookings["apartmentName"]=apartment;

    //     const picked = (({apartmentName, fromDate, toDate}) => ({apartmentName, fromDate, toDate}))(data.booking);
    //     return picked;
    // }

    render() { 
        // const bookingArray = this.limitOutputBooking();
        return ( 
            <React.Fragment>
                <main className="container">
                    <table className="table table-striped">
                        <thead className="thead-orange">
                            <th>Lejlighed</th>
                            <th>Fra Dato</th>
                            <th>Til Dato</th>
                        </thead>
                        {/* <DynamicTableBody objs={bookingArray}/> */}
                    </table>
                </main>
            </React.Fragment>
        );
    }
}
 
export default Reservations;