import React from 'react';
import ReactDOM from 'react-dom';

export default class StoresMap extends React.Component {
  ComponentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
  }
  
  componentDidMount() {
    this.loadMap();
  }

  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);

      let zoom = 11;
      let lat = 19.4284700;
      let lng = -99.1276600;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);
    }
  } 

  render() {  
    return (
      <div ref='map'>
        Loading map...
      </div>
    )
  }
}

// onMarkerClick(props, marker, e) {
//   console.log('hola');
// }

// {
//   <Marker onClick={this.onMarkerClick}
//                 name={'Current location'} />
 
//         <InfoWindow onClose={this.onInfoWindowClose}>
//             <div>
//               <h1>{'hola'}</h1>
//             </div>
//         </InfoWindow>
// }