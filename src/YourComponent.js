import React, { Component } from 'react';
import { Container, Row, Col, Nav, NavItem } from 'reactstrap';


//Components
import MapContainer from './Components/MapContainer'
import StoreList from './Components/StoreList'
import './YourComponent.css'
/*
* Use this component as a launching-pad to build your functionality.
*
*/
class YourComponent extends Component {

  render() {
    return (
      <div style={divStyle}>
        <h1> Put your solution here!</h1>
        <Container>
          <Nav>
            <NavItem><h1>Favorite Stores ❤</h1></NavItem>
          </Nav>
          <Row>
            <Col sm="12" md="3">
              <StoreList />
            </ Col>
            <Col sm="12" md="9">
              <MapContainer />        
            </ Col>
          </ Row>
        </ Container>
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
