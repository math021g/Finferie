import React from 'react';
import From from './common/form';
import Joi from 'joi-browser';
import DynamicInput from './common/dynamicInput';
import Input from './common/input';
import { getCustomer, saveCustomer } from './../services/customerService';
import { saveUser } from './../services/userService';
import { getApartment } from '../services/apartmentService';
import { toast } from 'react-toastify';
import { saveBooking } from './../services/bookingService';

class Booking extends From {
    state = { 
        data: {
            fromDate: this.today(),
            toDate: this.today(),
            apartment: {},
            price: 0,
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            phone: '',
            address: '',
            city: '',
            zip: 0
        },
        errors: {}
     }
     
     schema = {
         fromDate: Joi.string().required(),
         toDate: Joi.string().required(),
         apartment: Joi.object().required(),
         price: Joi.number().required(),
         firstName: Joi.string().required(),
         lastName: Joi.string().required(),
         email: Joi.string().required(),
         password: Joi.string().required(),
         phone: Joi.string().required(),
         address: Joi.string().required(),
         city: Joi.string().required(),
         zip: Joi.number().required()
     }

     async componentDidMount() {
        const {params} = this.props.match;
        const {data} = this.state;
        data.fromDate = params.dateFrom;
        data.toDate = params.dateTo;
        const {data: apartment} = await getApartment(params.apartment);
        data.apartment = apartment;
        data.price = this.setPrice(data.fromDate, data.toDate);
        this.setState({data});
     }
     
    today() {
        const d = new Date();
        const m = (d.getUTCMonth() + 1) < 10 ? '0' + (d.getUTCMonth() + 1): (d.getUTCMonth() + 1);
        const dn = (d.getUTCDate() < 10 ? '0' + d.getUTCDate(): d.getUTCDate());
        return d.getFullYear() + '-' + m + '-' + dn;
    }

    parseDate(str) {
        var mdy = str.split('-');
        return new Date(mdy[0], mdy[1]-1, mdy[2]);
    }

    setPrice(fromDate, toDate) {
        const days = Math.round(this.parseDate(toDate) - this.parseDate(fromDate))/(1000*60*60*24);
        if(fromDate > new Date(fromDate.getCurrentYear, 6, 1) && toDate < new toDate(toDate.getCurrentYear, 7, 31))
            return days * this.state.data.apartment.highSeasonPrice;
        return days * this.state.data.apartment.lowSeasonPrice;
    }

    makeCustomer() {
        const {data} = this.state;
        return {
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone,
            address: data.address,
            city: data.city,
            zip: data.zip
        };
    }

    makeUser() {
        const {data} = this.state;
        return {
            name: `${data.firstName} ${data.lastName}`,
            email: data.email,
            password: data.password
        };
    }

    makeBooking(customerID) {
        const {data} = this.state;

        return {
            CustomerID: customerID,
            apartment : {
                _id: data.apartment._id,
                name: data.apartment.name
            },
            fromDate: new Date(data.dateFrom),
            toDate: new Date(data.dateTo),
            price: data.price
        }

    }
    
    async doSubmit() {
        try {
            const {data:customer} = await saveCustomer(this.makeCustomer());
            console.log(`fromdate: ${new Date(this.state.data.fromDate)}`);
            await saveUser(this.makeUser());
            const booking = await saveBooking(this.makeBooking(customer._id));
            this.props.history.push("/");

            if (booking.response.status === 400) {
                toast.error(booking.response.data);
                console.log(booking.response.data);
            }
        } catch (ex) {
            toast.error(ex.message);
            console.error(ex.message);
        }
    }
    // doSubmit = async (e) => {
    //     try {
    //         //create customer
    //         let customer = {
                
    //         }
    //         await saveCustomer(customer);
    //         //create user
    //         let user = {
                
    //         }
    //         await saveUser(user);
    //         //create booking
    //         const thisApartment = await getApartment(this.props.match.params.id);

    //         let booking = {
    //             //CustomerID 
    //             apartment: {_id: thisApartment._id, name: thisApartment.name},
    //             fromDate: this.props.match.params.fromDate,
    //             toDate: this.props.match.params.toDate,
    //             //Price
    //         }
    //     } catch (ex) {
    //         toast.error(ex.respose.data);
    //         console.log("error");
    //     }
        
    // }
      
     /* <Input name="name" label="label" type="type" className="classname" error={errors["name"]} value={data["name"]} onChange={this.handleChange}/> */

    render() { 
        const {data, errors} = this.state;
        return ( 
            <main className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        {this.renderInput("firstName", "Fornavn", "form-group col-md-6", {value: data.firstName})}
                        {this.renderInput("lastName", "Efternavn", "form-group col-md-6", {value: data.lastName})}
                    </div>
                    <div className="form-row">
                        {this.renderInput("email", "Email", "form-group col-md-6", "email", {value: data.email})}
                        {this.renderInput("password", "Password", "form-group col-md-6", "password", {value: data.password})}
                    </div>
                    {this.renderInput("phone", "Telefon", "form-group", {value: data.phone, placeholder: "+45 telefon nummer"})}
                    {this.renderInput("address", "Adresse", "form-group", {value: data.address, placeholder: "Hovedgade, 1234"})}
                    <div className="form-row">
                        {this.renderInput("city", "By", "form-group col-md-6", {value: data.city})}
                        {this.renderInput("zip", "Postnr", "form-group col-md-2", {value: data.zip})}
                    </div>

                    {/* <DynamicInput name="tennents" label="Gæster"/> */}

                    <button type="submit" className="btn btn-primary">Book ferie</button>
                    
                </form>
            </main>
         );
    }

}
 
export default Booking;