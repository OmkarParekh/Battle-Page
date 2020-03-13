import React, { Component } from 'react';
import './carditem.css';



export default class Carditem extends Component {
  render() {
    const { data } = this.props;
    const card = Object.assign({}, data);
    return (
      <div>
        <div className="card-holder d-block">
          <img
            src={card.icon}
            alt="Card-img"
            className="card-image"
          />
          <span className="card-level d-block text-center">{`LVL ${card.level}`}</span>
          <span className="card-elixer">
            {card.elixir}
          </span>
          <span className="d-block text-wrap text-center image-title" data-toggle="modal" data-target="#exampleModalCenter" >
            {card.name}
          </span>
        </div>
      </div>
    )
  }
}

