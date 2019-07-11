import * as React from 'react';
 
const Input = ({name, label, type, value, onChange, error}) => {
    console.log("error"+error);
    return ( 
        <>
            <div className="form-group">
                <label htmlFor="userName">{label}:</label>
                <input
                    type={type}
                    onChange={onChange}
                    className="form-control"
                    // placeholder="Enter user name"
                    name={name}
                    value={value}
                />
            </div>
            {error ? <div className="alert alert-danger">{error}</div> : null}
        </>
     );
}
 
export default Input;