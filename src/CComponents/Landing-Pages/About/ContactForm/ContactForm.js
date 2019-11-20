import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import './ContactForm.css';

class ContactForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            phone_number: '',
            email: '',
            message: ''
        }
    }

    handleInput = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        Axios.post('/send', {
            name: this.state.name,
            phone_number: this.state.phone_number,
            email: this.state.email,
            message: this.state.message,
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    render() {
        return (
            <div class='background' >
                <h2>Contact Form</h2>
                <div class='form'>
                <form onSubmit={this.handleSubmit} method='post'>
                    <input name='name' type='text' placeholder='First/Last Name' onChange={this.handleInput} />
                    <br />
                    <input name='phone_number' type='text' placeholder='Phone Number' onChange={this.handleInput} />
                    <br />
                    <input name='email' type='email' placeholder='Email' onChange={this.handleInput} />
                    <br />
                    <textarea name='message' rows='5' placeholder='Message Here' onChange={this.handleInput} />
                    <br />
                    <input type='submit' value='Submit' />
                    <input type='reset' value='Clear' />
                <Link to='/guest-landing'><button>Home</button></Link>
                </form>
                </div>
            </div>
        )
    }
}

export default ContactForm;