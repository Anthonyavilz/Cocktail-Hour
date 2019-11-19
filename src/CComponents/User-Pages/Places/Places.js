import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import Autocomplete from 'react-google-autocomplete';
import api_key from './API-Key';

const mapStyles = {
    width: '100%',
    height: '100%'
};

export class Places extends Component {
    render() {
        return (
            <div>
                <Autocomplete
                    style={{ width: '90%' }}
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
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: api_key
})(Places);
