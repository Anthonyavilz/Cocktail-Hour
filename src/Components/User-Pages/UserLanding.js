import React from 'react';
import {Link} from 'react-router-dom';

class UserLanding extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
                <div>
                    <h2>User Landing</h2>
                    <Link to='/places'><button>Places</button></Link>
                    <Link to='/drinks'><button>Drinks</button></Link>
                    <Link to='/settings'><button>Settings</button></Link>
                </div>
        )
    }
}

export default UserLanding;