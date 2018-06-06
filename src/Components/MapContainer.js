import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

//Components
import data from '.././store_directory.json'

export class MapContainer extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };
 
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  
  render() {

    return (
      <Map google={this.props.google}
           style={{width: '96%', height: '100%', position: 'relative'}}
           className={'map'}
           initialCenter={{
            lat: 19.4284700,
            lng: -99.1276600
           }}
           zoom={11}>
        {
          data.map(store => {
            return (
              <Marker onClick={this.onMarkerClick} name={store.Name} title={store.Address} position={store.Coordinates} />
            )
          })
        }
         <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h3>{this.state.selectedPlace.name}</h3>
              <p>{this.state.selectedPlace.title}</p>
              <a href="">Add to 'My Favorite Stores'</a>
            </div>
        </InfoWindow> 
      </Map>
    );
  }
}

export default GoogleApiWrapper({
   apiKey: 'AIzaSyCVH8e45o3d-5qmykzdhGKd1-3xYua5D2A',
 })(MapContainer)