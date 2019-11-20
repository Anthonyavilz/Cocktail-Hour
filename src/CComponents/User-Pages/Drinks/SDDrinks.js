import React from 'react';
import {Link} from 'react-router-dom';

class Drinks extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    // componentDidMount() {
    //     window.cloudinary.openUploadWidget({ cloud_name: 'cloud_name', upload_preset: 'preset', tags:['xmas']},
    //     function(error, result) {
    //         console.log(result);
    //     });

    // }

    render(){
        return(
            <div>
                <h1>Drinks</h1>
                {/* <Config /> */}
                <Link to='/drinks/shopping-list'><button>Shopping List</button></Link>
                <Link to='/user-landing'><button>Home</button></Link>
                <Link to='/settings'><button>Settings</button></Link>
            </div>
        )
    }
}

export default Drinks;