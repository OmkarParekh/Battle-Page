import React, { Component } from 'react'
import "../css/HomePage.css";
import chest_img from "../assest/img/chest-background.png";
import battle_img from "../assest/img/battle.png";
import tournament_img from "../assest/img/challenges.png";

export default class Home extends Component {
  render() {
    return(
      <div>
          <div className="jumbotron main-conatiner">
                  <p className="title-text">
                    Royal Stats
                  </p>
                  <div className="description-container">
                    <span>
                      Eat Sllep clash repeat
                    </span>
                  </div>
          </div>
    </div>
    )
  }
}
