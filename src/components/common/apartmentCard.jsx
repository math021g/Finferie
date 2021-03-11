import React from 'react';
import {Link} from 'react-router-dom';

const ApartmentCard = ({apartment}) => {
    return ( 
        <div className="col-md-4">
            <div className="card shadow-sm">
                <img src={apartment.imgURL} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{apartment.name}</h5>
                    <p className="card-text">{apartment.excerpt}</p>
                    <Link to={'apartment/'+ apartment._id} className="btn btn-primary seeMore">Se Mere</Link>
                </div>
            </div>
        </div> 
     );
}
 
export default ApartmentCard;