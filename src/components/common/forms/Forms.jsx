import React, { Component } from 'react'; 
import Input from './input';
import Joi from 'joi-browser';

class Forms extends Component {
    state = { 
        data: {},
        error: {}
    }

     validate = () => {
        const {error} = Joi.validate(this.state.data, this.schema, {
            abortEarly: false
        });

         if(!error) return null;

         const errors = {};
         for(let item of error.details) errors[item.path[0]] = item.message;
         console.log(errors);
         return errors
    }

    // userName = React.createRef(); ref={this.userName}
    handeSubmit = (e) => {
        e.preventDefault();
        // console.log("Username"+ this.userName.current.value);
        console.log(this)
        const error = this.validate(this.state);
        this.setState({error: error || {}})
        if (error) return;
    };

    validateProperty = ({ name, value}) => {
        const obj = { [name] : value };
        const schema = { [name]: this.schema[name] };

        const {error} = Joi.validate(obj, schema);
        return (error) ? error.details[0].message : null;
    }

    handleChange = ({currentTarget: input}) => {
        const {data, error} = this.state;
        data[input.name] = input.value;
        // const error = this.validate(this.state);

        const errorMessage = this.validateProperty(input);
        errorMessage ? (error[input.name] = errorMessage) : delete error[input.name];

        this.setState({data, error});
        console.log("onchange ", error);
    }

    renderInput(name, label, type = "text") {
        const { data, error } = this.state;

        return (
            <Input 
                type={type} 
                label={label} 
                value={data[name]} 
                name={name} 
                onChange={this.handleChange} 
                error={error[name]}
            />
        )
    }

    renderButton(label) {
        return <button disabled={this.validate()} type="submit" className={`btn ${this.validate() ? "btn-default" : "btn-primary"}`}>{label}</button>;
    }
}
 
export default Forms;