import React from 'react';
import {Link} from 'react-router-dom';

class About extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return(
            <div>
                <h2>About Main</h2>
                <Link to='/guest-landing'><button>Home</button></Link>
                <Link to='/about/about-christina'><button>About Christina</button></Link>
                <Link to='/about/about-me'><button>About Me</button></Link>
            </div>
        )
    }
}

export default About;