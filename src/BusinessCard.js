
import React, { Component } from 'react';

class BussinessCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
            <h1>{this.props.firstname} {this.props.lastname} {this.props.address} {this.props.email} {this.props.phonenumber}</h1>
            
        </div>
    );    
  }
}
export default BussinessCard;
