import GoogleMapsContainer from './google_api_container';
import { GoogleApiWrapper } from 'google-maps-react';
import APIkey from '../../api_keys';

export default GoogleApiWrapper({
    apiKey: APIkey.googleApiKey
})(GoogleMapsContainer)