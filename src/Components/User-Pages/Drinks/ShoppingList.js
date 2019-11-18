import React from 'react';
import {Link} from 'react-router-dom';

class ShoppingList extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <h1>Shopping List</h1>
                <Link to='/drinks'><button>Drinks</button></Link>
                <Link to='/user-landing'><button>Home</button></Link>
                <Link to='/settings'><button>Settings</button></Link>
            </div>
        )
    }
}

export default ShoppingList;