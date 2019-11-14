import React from 'react';
import {Link} from 'react-router-dom';

class AboutMe extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <h2>Me</h2>
                <Link to='/guest-landing'><button>Home</button></Link>
                <Link to='/about/contact-form'><button>Contact</button></Link>
            </div>
        )
    }
}

export default AboutMe;