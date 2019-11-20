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

//Google Maps
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';
import Autocomplete from 'react-google-autocomplete';


const useStyles = makeStyles(styles);
const mapStyles = {
  height: '50%',
  width: '50%'
}

class GoogleMaps extends React.Component {

  constructor() {
    super();
    this.state = {
      
    }
  }
  render() {
    const classes = useStyles();
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
      );

        return (
          <div className={classes.section}>
      <h2 className={classes.title}>Google Maps</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card plain>
              <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
              </GridItem>
              <CardBody>
              <Autocomplete
                    style={{ width: '100%' }}
                    onPlaceSelected={(place) => {
                      console.log(place);
                    }}
                    types={['(regions)']}
                    componentRestrictions={{ country: "us" }}
                    />
                <Map
                    google={this.props.google}
                    zoom={14}
                    style={mapStyles}
                    initialCenter={{
                      lat: 32.7766642,
                      lng: -96.7969879
                    }}
                    />
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                  >
                  <SportsBasketballIcon className={classes.icons} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
  }
}
  
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyD2S_rSDOCl-3Di375s4HPIYxoODbrhB-c'
})(GoogleMaps);