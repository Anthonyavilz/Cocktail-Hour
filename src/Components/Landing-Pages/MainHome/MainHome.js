import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class MainHome extends Component {
  constructor() {
    super();
    this.state = {

    }
  }  

  render() {
    return(
      <div>
        <Link to='/guest-landing'><button>Main Landing Page</button></Link>
      </div>
    )
  }
}

export default MainHome;