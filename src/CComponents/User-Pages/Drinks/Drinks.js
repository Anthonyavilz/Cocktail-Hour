// import React from 'react';
// import {Link} from 'react-router-dom';

// class Drinks extends React.Component {
//     constructor() {
//         super();
//         this.state = {

//         }
//     }

//     // componentDidMount() {
//     //     window.cloudinary.openUploadWidget({ cloud_name: 'cloud_name', upload_preset: 'preset', tags:['xmas']},
//     //     function(error, result) {
//     //         console.log(result);
//     //     });

//     // }

//     render(){
//         return(
//             <div>
//                 <h1>Drinks</h1>
//                 {/* <Config /> */}
//                 <Link to='/drinks/shopping-list'><button>Shopping List</button></Link>
//                 <Link to='/user-landing'><button>Home</button></Link>
//                 {/* <Link to='/settings'><button>Settings</button></Link> */}
//             </div>
//         )
//     }
// }

// export default Drinks;

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
import UserHeaderLinks from "../../../components/Header/UserHeaderLinks";
import Parallax from "../../../components/Parallax/Parallax";

import styles from "../../../assets/jss/material-kit-react/views/landingPage";

// Sections for this page
import ProductSection from "../../../views/LandingPage/Sections/ProductSection";
import TeamSection from "../../../views/LandingPage/Sections/TeamSection";
import WorkSection from "../../../views/LandingPage/Sections/WorkSection";

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
        rightLinks={<UserHeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("../../../srcImages/Mosco_Mule.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your Story Starts With Us.</h1>
              <h4>
                Every landing page needs a small description after the big bold
                title, that{"'"}s why we added this text here. Add here all the
                information that can make you or your product create the first
                impression.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          <TeamSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
