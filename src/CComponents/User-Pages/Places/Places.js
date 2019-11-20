// import React, { Component } from 'react';
// import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
// import Autocomplete from 'react-google-autocomplete';
// // import api_key from './API-Key';

// const mapStyles = {
//     height: '50%',
//     width: '50%'
// }

// export class Places extends Component {
//     state = {
//         showingInfoWindow: false,
//         activeMarker: {},
//         selectedPlace: {}
//     }

//     onMarkerClick = (props, marker, e) =>
//     this.setState({
//       selectedPlace: props,
//       activeMarker: marker,
//       showingInfoWindow: true
//     });

//   onClose = props => {
//     if (this.state.showingInfoWindow) {
//       this.setState({
//         showingInfoWindow: false,
//         activeMarker: null
//       });
//     }
//   };

//     render() {
//         return (
//             <div>
//                 <Autocomplete
//                     style={{ width: '100%' }}
//                     onPlaceSelected={(place) => {
//                         console.log(place);
//                     }}
//                     types={['(regions)']}
//                     componentRestrictions={{ country: "us" }}
//                 />
//                 <Map
//                     google={this.props.google}
//                     zoom={14}
//                     style={mapStyles}
//                     initialCenter={{
//                         lat: 32.7766642,
//                         lng: -96.7969879
//                     }}
//                 />
//                 <Marker 
//                 onClick={this.onMarkerClick}
//                 name={'Dallas, TX'}
//                 />
//                 <InfoWindow 
//                 marker={this.state.activeMarker}
//                 visible={this.state.showingInfoWindow}
//                 onClose={this.onClose}
//                 />
//             </div>
//         )
//     }
// }

// export default GoogleApiWrapper({
//     apiKey: 'AIzaSyD2S_rSDOCl-3Di375s4HPIYxoODbrhB-c'
// })(Places);

// import React from 'react';
// import TextField from '@material-ui/core/TextField';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import { Map, GoogleApiWrapper } from 'google-maps-react';
// import LocationOnIcon from '@material-ui/icons/LocationOn';
// import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import parse from 'autosuggest-highlight/parse';
// import throttle from 'lodash/throttle';

// function loadScript(src, position, id) {
//   if (!position) {
//     return;
//   }

//   const script = document.createElement('script');
//   script.setAttribute('async', '');
//   script.setAttribute('id', id);
//   script.src = src;
//   position.appendChild(script);
// }

// const autocompleteService = { current: null };

// const useStyles = makeStyles(theme => ({
//   icon: {
//     color: theme.palette.text.secondary,
//     marginRight: theme.spacing(2),
//   },
// }));

// export default function GoogleMaps() {
//   const classes = useStyles();
//   const [inputValue, setInputValue] = React.useState('');
//   const [options, setOptions] = React.useState([]);
//   const loaded = React.useRef(false);

//   if (typeof window !== 'undefined' && !loaded.current) {
//     if (!document.querySelector('#google-maps')) {
//       loadScript(
//         'https://maps.googleapis.com/maps/api/js?key=AIzaSyD2S_rSDOCl-3Di375s4HPIYxoODbrhB-c&libraries=places',
//         document.querySelector('head'),
//         'google-maps',
//       );
//     }

//     loaded.current = true;
//   }

//   const handleChange = event => {
//     setInputValue(event.target.value);
//   };

//   const fetch = React.useMemo(
//     () =>
//       throttle((input, callback) => {
//         autocompleteService.current.getPlacePredictions(input, callback);
//       }, 200),
//     [],
//   );

//   React.useEffect(() => {
//     let active = true;

//     if (!autocompleteService.current && window.google) {
//       autocompleteService.current = new window.google.maps.places.AutocompleteService();
//     }
//     if (!autocompleteService.current) {
//       return undefined;
//     }

//     if (inputValue === '') {
//       setOptions([]);
//       return undefined;
//     }

//     fetch({ input: inputValue }, results => {
//       if (active) {
//         setOptions(results || []);
//       }
//     });

//     return () => {
//       active = false;
//     };
//   }, [inputValue, fetch]);

//   return (
//     <Autocomplete
//       id="google-map-demo"
//       style={{ width: 300 }}
//       getOptionLabel={option => option.description}
//       filterOptions={x => x}
//       options={options}
//       autoComplete
//       includeInputInList
//       freeSolo
//       disableOpenOnFocus
//       renderInput={params => (
//         <TextField
//           {...params}
//           label="Add a location"
//           variant="outlined"
//           fullWidth
//           onChange={handleChange}
//         />
//       )}
//       renderOption={option => {
//         const matches = option.structured_formatting.main_text_matched_substrings;
//         const parts = parse(
//           option.structured_formatting.main_text,
//           matches.map(match => [match.offset, match.offset + match.length]),
//     <Map
//           google={this.props.google}
//           zoom={14}
//         //   style={mapStyles}
//           initialCenter={{
//               lat: 32.7766642,
//               lng: -96.7969879
//           }}
//       /> 
//         );

//         return (
//           <Grid container alignItems="center">
//             <Grid item>
//               <LocationOnIcon className={classes.icon} />
//             </Grid>
//             <Grid item xs>
//               {parts.map((part, index) => (
//                 <span key={index} style={{ fontWeight: part.highlight ? 700 : 400 }}>
//                   {part.text}
//                 </span>
//               ))}

//               <Typography variant="body2" color="textSecondary">
//                 {option.structured_formatting.secondary_text}
//               </Typography>
//             </Grid>
//           </Grid>
//         );
//       }}
//     />
//   );
// }

// const _ = require("lodash");
// const { compose, withProps, lifecycle } = require("recompose");
// const {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker,
// } = require("react-google-maps");
// const { SearchBox } = require("react-google-maps/lib/components/places/SearchBox");

// const MapWithASearchBox = compose(
//   withProps({
//     googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `400px` }} />,
//     mapElement: <div style={{ height: `100%` }} />,
//   }),
//   lifecycle({
//     componentWillMount() {
//       const refs = {}

//       this.setState({
//         bounds: null,
//         center: {
//           lat: 41.9, lng: -87.624
//         },
//         markers: [],
//         onMapMounted: ref => {
//           refs.map = ref;
//         },
//         onBoundsChanged: () => {
//           this.setState({
//             bounds: refs.map.getBounds(),
//             center: refs.map.getCenter(),
//           })
//         },
//         onSearchBoxMounted: ref => {
//           refs.searchBox = ref;
//         },
//         onPlacesChanged: () => {
//           const places = refs.searchBox.getPlaces();
//           const bounds = new google.maps.LatLngBounds();

//           places.forEach(place => {
//             if (place.geometry.viewport) {
//               bounds.union(place.geometry.viewport)
//             } else {
//               bounds.extend(place.geometry.location)
//             }
//           });
//           const nextMarkers = places.map(place => ({
//             position: place.geometry.location,
//           }));
//           const nextCenter = _.get(nextMarkers, '0.position', this.state.center);

//           this.setState({
//             center: nextCenter,
//             markers: nextMarkers,
//           });
//           // refs.map.fitBounds(bounds);
//         },
//       })
//     },
//   }),
//   withScriptjs,
//   withGoogleMap
// )(props =>
//   <GoogleMap
//     ref={props.onMapMounted}
//     defaultZoom={15}
//     center={props.center}
//     onBoundsChanged={props.onBoundsChanged}
//   >
//     <SearchBox
//       ref={props.onSearchBoxMounted}
//       bounds={props.bounds}
//       controlPosition={google.maps.ControlPosition.TOP_LEFT}
//       onPlacesChanged={props.onPlacesChanged}
//     >
//       <input
//         type="text"
//         placeholder="Customized your placeholder"
//         style={{
//           boxSizing: `border-box`,
//           border: `1px solid transparent`,
//           width: `240px`,
//           height: `32px`,
//           marginTop: `27px`,
//           padding: `0 12px`,
//           borderRadius: `3px`,
//           boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
//           fontSize: `14px`,
//           outline: `none`,
//           textOverflow: `ellipses`,
//         }}
//       />
//     </SearchBox>
//     {props.markers.map((marker, index) =>
//       <Marker key={index} position={marker.position} />
//     )}
//   </GoogleMap>
// );

// <MapWithASearchBox />


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
import UserHeaderLinks from '../../../components/Header/UserHeaderLinks'
import Parallax from "../../../components/Parallax/Parallax";

import styles from "../../../assets/jss/material-kit-react/views/landingPage";

// Sections for this page
import GoogleMaps from "../../../views/LandingPage/Sections/GoogleMaps";
import ProductSection from '../../../views/LandingPage/Sections/ProductSection';

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
        brand='Cocktail Hour'
        rightLinks={<UserHeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("../../../srcImages/Drink_Shelf_1.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={6} sm={6} md={6}>
              <h1 className={classes.title}>Lets Map Out Your Favorite Bars</h1>
              <h4>
                FILLER TEXT
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}