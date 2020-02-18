import React, { Component } from 'react';

export default class CardFront extends Component {

  render() {
    return (
      <div className="card-front" style={{backgroundImage: `url(${this.props.poster})`}}>
      </div>
    )
  }
}

/*
  Render returns a div that has a style image of the passed poster prop
*/
