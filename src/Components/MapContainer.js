import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

//Components
import StoresMap from './StoresMap'
import data from '.././store_directory.json'

export class MapContainer extends React.Component {
  
  render() {

    return (
      <Map google={this.props.google}
           style={{width: '100%', height: '100%', position: 'relative'}}
           className={'map'}
           initialCenter={{
            lat: 19.4284700,
            lng: -99.1276600
           }}
           zoom={11}>
        {
          data.map(store => {
            return (
              <Marker title={store.Name} position={store.Coordinates} />
            )
          })
        }   
      </Map>
    );
  }
}

export default GoogleApiWrapper({
   apiKey: 'AIzaSyCVH8e45o3d-5qmykzdhGKd1-3xYua5D2A',
 })(MapContainer)