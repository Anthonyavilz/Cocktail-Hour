import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {registerUser, loginUser} from '../../../Redux/Reducers/userReducer';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(e.target);
            this.props.loginUser({
                username: this.state.username,
                password: this.state.password
            })
    }

    togglePassword = e => {
        e.preventDefault();

        this.setState(prevState => ({ showPassword: !prevState.showPassword }) )
    }

    render() {
        if (this.props.userId) return <Redirect to='/user-landing' />
        return(
            <div>
                <h2>Login</h2>
                <Link to='/guest-landing'><button>Home</button></Link>
                <form onSubmit={this.handleSubmit}>
                    <input name='username' placeholder='Username' onChange={this.handleInput} required/>
                    <br />
                    <input type={this.state.showPassword ? 'text' : 'password'} name='password' placeholder='Password' onChange={this.handleInput} required/>
                    <button onClick={this.togglePassword}>Show/Hide</button> 
                    <br />
                    <input name='submit' type='submit' value="Submit" />
                    <input type='reset' value='Clear' />
                    <br />
                    <Link to='/register'><button>Sign-Up</button></Link>
                </form>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        userId: reduxState.userReducer.user.userId
    }
}

export default connect(mapStateToProps,
    {
        registerUser,
        loginUser
    })(Login)