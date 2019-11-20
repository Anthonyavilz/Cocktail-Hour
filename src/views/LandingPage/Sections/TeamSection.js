import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';
// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Button from "../../../components/CustomButtons/Button";
import Card from "../../../components/Card/Card";
import CardBody from "../../../components/Card/CardBody";
import CardFooter from "../../../components/Card/CardFooter";

import styles from '../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle';

import team1 from "../../../srcImages/self.jpg";
import team2 from "../../../srcImages/AEF15E81-69D2-4941-A968-73AEAC9CF0B3.jpg";
import team3 from "../../../assets/img/faces/marc.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Here is our team</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Christina Moreland
                <br />
                <small className={classes.smallTitle}>Designer/Illustrator</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Amazing services offered are Brand Identity & Strategy, Print & Packaging, and Online & Digital
                  <br /> 
                  <a href="https://afro-gurl.com/">Afro-Gurl</a> 
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  href='https://www.instagram.com/cmoreland.co/'
                  target='_blank'
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  href='https://dribbble.com/afrogurl'
                  target='_blank'
                  className={classes.margin5}
                >
                  <SportsBasketballIcon className={classes.icons} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Phillip Avila
                <br />
                <small className={classes.smallTitle}>Software Developer</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Under Construction. Check back soon! 
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  href='https://www.linkedin.com/in/phillip-avila-a9762815a/'
                  target='_blank'
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
