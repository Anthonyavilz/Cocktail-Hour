// import React from 'react';
// import {Link} from 'react-router-dom';

// class About extends React.Component {
//     constructor() {
//         super();
//         this.state = {

//         }
//     }

//     render() {
//         return(
//             <div>
//                 <h2>About Main</h2>
//                 <Link to='/guest-landing'><button>Home</button></Link>
//                 <Link to='/about/about-christina'><button>About Christina</button></Link>
//                 <Link to='/about/about-me'><button>About Me</button></Link>
//             </div>
//         )
//     }
// }

// export default About;

import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Button from "../../../components/CustomButtons/Button";
import HeaderLinks from "../../../components/Header/HeaderLinks";
import Parallax from "../../../components/Parallax/Parallax";

import styles from "../../../assets/jss/material-kit-react/views/landingPage";

// Sections for this page
import TeamSection from "../../../views/LandingPage/Sections/TeamSection";
import WorkSection from '../../../views/LandingPage/Sections/WorkSection';

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Cocktail Hour"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("../../../srcImages/Stirr-DeepEllum-Tour-min.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Meet the Designer and the Developer</h1>
              <h4>
                Every great website has an amazing team behind it.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <TeamSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
