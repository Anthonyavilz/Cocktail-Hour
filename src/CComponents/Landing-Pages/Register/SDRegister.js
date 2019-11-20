import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {registerUser, loginUser} from '../../../Redux/Reducers/userReducer';
import Axios from 'axios';

class Register extends React.Component {
    constructor() {
        super();
    this.state = {
        showPassword: false,
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        phone_number: '',
        password: ''

    }

}

handleInput = e => {
    this.setState({ [e.target.name]: e.target.value })
}

handleSubmit = e => {
    e.preventDefault();
    Axios.post('/auth/user/new', {
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        username: this.state.username,
        email: this.state.email,
        phone_number: this.state.phone_number,
        password: this.state.password
    }).then((response) => {
        console.log(response);
    }, (error) => {
        console.log(error);
    });
    this.props.history.push('/user-landing')
}

togglePassword = e => {
    e.preventDefault();
    this.setState(prevState => ({ showPassword: !prevState.showPassword }) )
}


    render() {

        return(
            <div>
                <h2>Register</h2>
                <Link to='/guest-landing'><button>Home</button></Link>
                <form onSubmit={this.handleSubmit} method='post'>
                    <input name='first_name' placeholder='First Name' onChange={this.handleInput} />
                    <br />
                    <input name='last_name' placeholder='Last Name' onChange={this.handleInput} />
                    <br />
                    <input name='username' placeholder='Username' onChange={this.handleInput} required/>
                    <br />
                    <input type='email' name='email' placeholder='Email' onChange={this.handleInput} required/>
                    <br />
                    <input id='#txtnumber' type='text' name='phone_number' placeholder='XXX-XXX-XXXX' onChange={this.handleInput} />
                    <br />
                    <input type={this.state.showPassword ? 'text' : 'password'} name='password' placeholder='Password' pattern='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$' onChange={this.handleInput} required/>
                    <button onClick={this.togglePassword}>Show/Hide</button> 
                    <br />
                    <input type='submit' value="Submit" />
                    <input type='reset' value='Clear' />
                    <br />  <Link to='/login'><button>Log In</button></Link>
                </form>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        user: reduxState.userReducer.user
    }
}

export default connect(mapStateToProps, 
    {
        registerUser,
        loginUser
    })(Register)