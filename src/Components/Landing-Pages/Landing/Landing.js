import React from 'react';
import {Link} from 'react-router-dom';

class Landing extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <h2>Landing</h2>
                <Link to='/about'><button>About</button></Link>
                <Link to='/register'><button>Register</button></Link>
                <Link to='/login'><button>Login</button></Link>
            </div>
        )
    }
}

export default Landing;