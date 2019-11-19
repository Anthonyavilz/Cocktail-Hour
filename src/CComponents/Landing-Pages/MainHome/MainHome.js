import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './MainHome.css';

class MainHome extends Component {
  constructor() {
    super();
    this.state = {

    }
  }  

  render() {
    return(
      <div class='background' >
        <div class='middle-text'>
          <h1>Welcome to Cocktail Hour!</h1>
          <Link to='/guest-landing'>
            <button class='button'>
              <span>Come Have A Drink</span>
            </button>
          </Link>
        </div>
      </div>
    )
  }
}

export default MainHome;