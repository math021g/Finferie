import React, { Component } from 'react';
import Carousel from './common/carousel';
import Omraadet from './omOmraadet';

class Home extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <Carousel/>
                <main className="container">
                    <h1>Forside</h1>
                    <Omraadet/>
                </main>
            </React.Fragment> 
            
         );
    }
}
 
export default Home;