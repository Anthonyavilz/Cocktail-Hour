// import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
// import './MainHome.css';

// class MainHome extends Component {
//   constructor() {
//     super();
//     this.state = {

//     }
//   }  

//   render() {
//     return(
//       <div class='background' >
//         <div class='middle-text'>
//           <h1>Welcome to Cocktail Hour!</h1>
//           <Link to='/guest-landing'>
//             <button class='button'>
//               <span>Come Have A Drink</span>
//             </button>
//           </Link>
//         </div>
//       </div>
//     )
//   }
// }

// export default MainHome;

import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import './MainHome.css'
// @material-ui/icons

// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Button from "../../../components/CustomButtons/Button";

import landing from "../../../srcImages/cocktailhour-20.jpg";
import profile from "../../../assets/img/faces/profile.jpg";

import styles from "../../../assets/jss/material-kit-react/views/componentsSections/exampleStyle";

const useStyles = makeStyles(styles);

export default function SectionExamples() {
  const classes = useStyles();
  return (
    <div className='main-background'>
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={3} sm={3} md={3}>
            <Link to="/guest-landing" className={classes.link}>
              <img
                src={landing}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
                />
            </Link>
          </GridItem>
        </GridContainer>
      </div>
    </div>
    </div>
  );
}