import React from 'react';
import {Link} from 'react-router-dom';
import Form from './common/form';
import Joi from 'joi-browser';
import { getApartment } from '../services/apartmentService';
import DynamicCarousel from './common/dynamicCarousel';

class Apartment extends Form {
    state = { 
        data : {
            fromDate: '',
            toDate: ''
        },
        errors : {}
     }

     schema = {
        fromDate: Joi.string().required(),
        toDate: Joi.string().required()
     }

     async componentDidMount() {
         const {data} = await getApartment(this.props.match.params.id);
         console.log(data);
         this.setState({data});
     }

    render() { 
        const {data} = this.state;
        return (
            <React.Fragment>
                
                <main className="container">
                    {data.images && <DynamicCarousel images={data.images} id={data._id}/>}
                    <div className="row">
                        <div className="col-7">
                            <h1>{data.name}</h1>
                            <p>{data.description}</p>
                        </div>
                        <div className="col-5">
                            <div className="row">
                                <h5>Højsæson pris:&nbsp;</h5>
                                <p>{data.highSeasonPrice},- DKK</p>
                            </div>
                            <div className="row">
                                <h5>Lavsæson pris:&nbsp;</h5>
                                <p>{data.lowSeasonPrice},- DKK</p>
                            </div>
                            {this.renderInput("fromDate", "Fra dato: ", "form-group", "date", {value: data.fromDate})}
                            {this.renderInput("toDate", "Til dato: ", "form-group", "date", {value: data.toDate})}
                            <Link to={'/booking/'+ data._id + '/' + data.fromDate + '/' + data.toDate} className="btn btn-primary" type="submit">Book ferie</Link>
                        </div>
                    </div>   
                </main>
            </React.Fragment>
            
            
             
        );
    }
}
 
export default Apartment;