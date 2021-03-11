import React, { Component } from 'react';

class userRegistration extends Component {
    state = { 
        data: {
            name: '',
            email: ''
        }
     }

    doSubmit = async (e) => {
        try {
            let user = {
                name: `${this.state.data.firstName} ${this.state.data.lastName}`,
                email: this.state.data.email,
                password: this.state.data.password
            }
            console.log(user);
            const test = await saveUser(user);
            console.log(test);
        } catch (error) {
            console.log("error");
        }
        
    }

    render() { 
        return ( 
            <main className="container">
                <form onSubmit=""></form>
            </main>
         );
    }
}
 
export default userRegistration;