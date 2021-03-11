import React, { Component } from 'react';
import Carousel from './common/carousel';
import ApartmentCard from './common/apartmentCard';
import { getApartments } from './../services/apartmentService';

class Apartments extends Component {
    state = { 
        apartments: []
     }

     async componentDidMount() {
         const {data : apartments} = await getApartments();
         this.setState({apartments});
     }

    render() { 
        const {apartments} = this.state;

        return ( 
            <React.Fragment>
                <Carousel/>
                <main className="container">
                    <h1 className="center-text mainHeading">Lejligheder</h1>
                    <div className="row">
                        {this.state.apartments.map(apartment => (
                             <ApartmentCard apartment={apartment} key={apartments.indexOf(apartment)}/>
                        ))}
                        
                    </div>

                    
                </main>
            </React.Fragment>
         );
    }
}
 
export default Apartments;