import React from 'react';
import { Map, Marker } from 'google-maps-react';

class GoogleApi extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeMarker: {},
            selectedPlace: {}
        }

        // binding this to event-handler functions
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onMapClick = this.onMapClick.bind(this);
        this.displayMarkers = this.displayMarkers.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllBeaches();
    }
    
    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
        });
    }

    onMapClick = (props) => {
        this.setState({
            activeMarker: null
        });
    }

    displayMarkers = () => {
        if (this.props.beaches !== undefined) {
            console.log("hi");
            const keys = Object.keys(this.props.beaches);

            return keys.map((key, index) => {
                return <Marker key={index} id={index} position={{
                    lat: this.props.beaches[key].lat,
                    lng: this.props.beaches[key].lon
                }}
                onClick = { this.onMarkerClick } />
            })
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
                zoom = { 6 }
                initialCenter = {
                    {   
                        lat: 36.117540,
                        lng: -118.349624
                    }
                }
            >
                {this.displayMarkers()}
            </Map>
        );
    }
}

export default GoogleApi;