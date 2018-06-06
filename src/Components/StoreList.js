import React, { Component } from 'react';
import { Nav, NavItem, ListGroup, ListGroupItem } from 'reactstrap';

export default class StoreList extends Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem><h2>Stores</h2></NavItem>
        </Nav>
        <ListGroup flush>
          <ListGroupItem disabled tag="a" href="#">Cras justo odio</ListGroupItem>
          <ListGroupItem tag="a" href="#">Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem tag="a" href="#">Morbi leo risus</ListGroupItem>
          <ListGroupItem tag="a" href="#">Porta ac consectetur ac</ListGroupItem>
          <ListGroupItem tag="a" href="#">Vestibulum at eros</ListGroupItem>
        </ListGroup>
      </ div>
    )
  }
}