// import React from 'react';
// import {Link} from 'react-router-dom';

// class AboutChristina extends React.Component {
//     constructor() {
//         super();
//         this.state = {

//         }
//     }

//     render() {
//         return(
//             <div>
//                 <h2>Christina</h2>
//                 <Link to='/guest-landing'><button>Home</button></Link>
//                 <Link to='/about/contact-form'><button>Contact</button></Link>
//             </div>
//         )
//     }
// }

// export default AboutChristina;

import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "../../../../components/Header/Header";
import Footer from "../../../../components/Footer/Footer";
import Button from "../../../../components/CustomButtons/Button";
import GridContainer from "../../../../components/Grid/GridContainer";
import GridItem from "../../../../components/Grid/GridItem";
import HeaderLinks from "../../../../components/Header/HeaderLinks";
import NavPills from "../../../../components/NavPills/NavPills";
import Parallax from "../../../../components/Parallax/Parallax";

import profile from "../../../../srcImages/self.jpg";

import studio1 from "../../../../assets/img/examples/studio-1.jpg";
import studio2 from "../../../../assets/img/examples/studio-2.jpg";
import studio3 from "../../../../assets/img/examples/studio-3.jpg";
import studio4 from "../../../../assets/img/examples/studio-4.jpg";
import studio5 from "../../../../assets/img/examples/studio-5.jpg";
import work1 from "../../../../assets/img/examples/olu-eletu.jpg";
import work2 from "../../../../assets/img/examples/clem-onojegaw.jpg";
import work3 from "../../../../assets/img/examples/clem-onojeghuo.jpg";
import work4 from "../../../../assets/img/examples/mariya-georgieva.jpg";
import work5 from "../../../../assets/img/examples/cynthia-del-rio.jpg";

import styles from "../../../../assets/jss/material-kit-react/views/profilePage";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="Cocktail Hour"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("../../../../srcImages/ChristinaBackground.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h2 className={classes.title}>Christina Moreland</h2>
                    <h5>Designer/illustrator</h5>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
              Moreland & Co. is the creative studio by Christina Moreland, an independent brand designer, illustrator, and visual storyteller. Originally hailing from a small and cozy town in Germany called Niederwerrn, Christina currently resides in Dallas, Texas. With a focus on brand design and illustration, her portfolio straddles a fine line between whimsical and refined. Her genuine passion for storytelling shows in her use of narrative as the driving force behind her brand development, creative direction and graphic design work.
              Christina believes in quality over quantity, creating genuine partnerships and relationships, and story-driven design. As an illustrator and artist first and foremost, her work incorporates both tastefully subtle and graphically bold uses of illustration. Her work tends to blend simplicity with playfulness to create lively, thoughtful, and sophisticated brand identities.  
              Besides doodling and shamelessly watching horrible reality TV shows, she also enjoys traveling, drawing comics, watching cartoons, stuffing her face with street tacos, listening to “lo-fi hip hop chill study music” and kissing her pup on the forehead.{" "}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Studio",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio2}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={studio5}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio4}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Work",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work5}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Favorite",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work4}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio3}
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={work2}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={work1}
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={studio1}
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}