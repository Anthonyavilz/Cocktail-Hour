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
      <Parallax filter image={require("../../../srcImages/Stirr-DeepEllum-Header-min.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your Favorite Drinks All In One Place</h1>
              <h4>
                Welcome to Cocktail Hour, the site where you can search your favorite bars and create a list of your favorite drinks from them.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/channel/UCMNI_wdyMJeWxrbxkiZVoVQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Bar Time
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <Footer />
    </div>
  );
}