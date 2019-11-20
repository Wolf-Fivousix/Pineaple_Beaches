import React from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

class GoogleMapsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeMarker: {},
            selectedPlace: {}
        }

        // binding this to event-handler functions
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onMapClick = this.onMapClick.bind(this);
    }

    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker
        });
    }

    onMapClick = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                activeMarker: null
            });
        }
    }

    render() {

        const style = {
            width: '50vw',
            height: '75vh',
            'marginLeft': 'auto',
            'marginRight': 'auto'
        }

        return (
            <Map
                item
                xs = { 12 }
                style = { style }
                google = { this.props.google }
                onClick = { this.onMapClick }
                zoom = { 14 }
                initialCenter = {{ lat: 39.648209, lng: -75.711185 }}
            >
                <Marker
                    onClick = { this.onMarkerClick }
                    position = {{ lat: 39.648209, lng: -75.711185 }}
                    name = { 'Changing Colors Garage' }
                />
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBHQyoaQOtcupyoaJCJ4vnB1MVMybbIduc"
})(GoogleMapsContainer)