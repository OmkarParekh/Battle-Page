import React, { Component } from "react";
import trp from "./om.png";
import battle from "./battle 8.png";

import "../../css/battle.css";
import Axios from "axios";

export default class Container extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  async componentDidMount() {
    const res = await Axios.get("https://royal-stats.herokuapp.com/player/2YL20Y0UP/battles");
    const data = res.data;
    const setData = this.setState({
      data
    });
    console.log(setData);
  }

  render() {
    const { data } = this.state;
    console.log(typeof data);
    // var ss;
    // if(win>=0)
    // {
    //   ss="Victory";
    // }else
    // {
    //   ss="Defeat";
    // }

    return (
      <div className="row">
        {" "}
        {Object.values(data)
          .filter(battle => battle.type === "PvP")
          .map(({ team, opponent }) => (
            <div>
              {" "}
              {
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">
                        <img src={battle} alt="" id="ba" /> Battle
                      </h5>
                      <h5 className="card-title" id="vord">
                        {Object.values(opponent).map(({ crowns: c2 }) => (
                          <span>
                            {Object.values(team).map(({ crowns: c1 }) => (
                              <span>{c1 > c2 ? "Victory" : "Defeat"}</span>
                            ))}
                          </span>
                        ))}
                      </h5>
                      <h6 id="score">
                        {Object.values(team).map(({ crowns }) => (
                          <span>{crowns}</span>
                        ))}{" "}
                        :{" "}
                        {Object.values(opponent).map(({ crowns }) => (
                          <span>{crowns}</span>
                        ))}
                      </h6>
                      <div className="container" id="Deck">
                        {Object.values(team).map(
                          ({
                            tag,
                            cards,
                            name,
                            startingTrophies,
                            clan: { name: clanName, tag: clanTag }
                          }) => (
                            <div>
                              {
                                <div>
                                  <h6 id="player">{name}</h6>
                                  <h6 id="clann">
                                    {clanName}{" "}
                                    <i className="fas fa-chevron-right"></i>
                                  </h6>
                                  <div className="line1"></div>
                                  <h6 id="trp">
                                    {" "}
                                    <img src={trp} alt="" /> {startingTrophies}{" "}
                                  </h6>
                                  <div>
                                    {Object.values(cards).map(
                                      ({ iconUrls: { medium } }) => (
                                        <img src={medium} alt="" id="ca" />
                                      )
                                    )}
                                  </div>
                                  <h6 className="Avg-elixir1"> </h6>
                                </div>
                              }
                            </div>
                          )
                        )}
                      </div>
                      <div className="line"></div>
                      <div>
                        {Object.values(opponent).map(
                          ({ tag, cards, name, startingTrophies, clan }) => (
                            <div>
                              {
                                <div>
                                  <h6 id="player1" className="">
                                    {name}
                                  </h6>
                                  <h6 id="clann1">
                                    {clan ? clan.name : "No Clan"}
                                    <i className="fas fa-chevron-right"></i>
                                  </h6>
                                  <div className="line2"></div>
                                  <h6 id="trp1">
                                    <img src={trp} alt="" />
                                    {startingTrophies}
                                  </h6>
                                  <div className="Container" id="Deck1">
                                    <div>
                                      {Object.values(cards).map(
                                        ({ iconUrls: { medium } }) => (
                                          <img src={medium} alt="" id="ca" />
                                        )
                                      )}
                                    </div>
                                  </div>
                                  <br />
                                  <h6 className="Avg-elixir1"> </h6>
                                </div>
                              }
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              }
            </div>
          ))}
      </div>
    );
  }
}
