import React, { Component } from 'react';

import './YourComponent.css'
import data from './store_directory.json'

/*
* Use this component as a launching-pad to build your functionality.
*
*/
class YourComponent extends Component {

  componentDidMount() {
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 19.4284700, lng: -99.1276600},
      zoom: 11,
      mapTypeId: 'roadmap',
    });

    let markers = data.map(store => {
      return new window.google.maps.Marker({
        position: store.Coordinates,
        map: map
      })
    })
  }

  render() {
    return (
      <div style={divStyle}>
        <h1> Put your solution here!</h1>
        <div id='map' />
      </div>
    );
  }
}

var divStyle = {
  border: 'red',
  borderWidth: 2,
  borderStyle: 'solid',
  padding: 20
};

export default YourComponent;
