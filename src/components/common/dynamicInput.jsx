import React, { Component } from 'react';

class DynamicInput extends Component {
    state = { values: [] }

    constructor() {
        super();
        this.state.values = [''];
    }

    createInputs() {
        return this.state.values.map((v, i) => {
            <div key={i}>
                <input type="text" value={v||''} onChange={this.handleChange.bind(this, i)}/>
                <button className="btn btn-danger btn-sm" onClick={this.removeClick.bind(this, i)}>-</button>
            </div>
        });
    }

    handleChange(index, currentTaget) {
        const values = [...this.state.values];
        values[index] = currentTaget.value;
        this.setState({values});
    }

    addClick = e => {
        e.preventeDefault();
        const values = [...this.state.values, ''];
        this.setState({values});
    }

    removeClick = e => {
        e.preventeDefault();
        const values = [...this.state.values];
        values.splice(this, 1);
        this.setState({values});
    }

    render() { 
        return ( 
            <div className="form-group">
                <label htmlFor="">{this.props.label}</label>
                {this.createInputs()}
                <button className="btn btn-success btn-sm" onClick={this.addClick}>+</button>
                <input type="hidden" name={this.props.name} value={this.state.values}/>
            </div>
         );
    }
}
 
export default DynamicInput;