import React from 'react';


const Input = ({name, label,  error, cn, ...rest}) => {
    return ( 
        <div className={cn}>
            <label htmlFor={name}>{label}</label>
            <input className="form-control"
                {...rest}
                name={name}
                id={name} 
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
     );
}
 
export default Input;