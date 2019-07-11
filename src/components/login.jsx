import React from 'react';
// import Input from './common/forms/input';
import Joi from 'joi-browser';
import Forms from './common/forms/Forms';

class Login extends Forms {
    state = { 
        data: {
            email: '',
            password: ''
        },
        error: {
        }
    }

    schema = {
        email: Joi.string().required().label('Email'),
        password: Joi.string().required().label('Password')
    }    

    render() { 
        // const {data, error} = this.state;
        return ( 
            <div>
                <div className="login-form mb-4">
                    <form onSubmit={this.handeSubmit}>
                        {this.renderInput("email", "Email")}
                        {/* <Input
                            name="email"
                            value={data.email}
                            onChange={this.handleChange}
                            error={error.email}
                        />  */}
                        {/* <Input
                            name="password"
                            value={data.password}
                            onChange={this.handleChange}
                            error={error.password}
                        />  */}
                        { this.renderInput('password', 'Password', 'password')}
                        {/* <div className="form-group form-check">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" name="remember"/> Remember me
                            </label>
                        </div> */}
                        {this.renderButton('Submit')}
                    </form>
                </div>
            </div>
         );
    }
}
 
export default Login;