import React, { Component } from "react";
import trp from "./om.png";
import battle from "./battle 8.png";

import ba from "./image 4.png";
import "../App.css";
import Axios from 'axios';


export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
        data: [],
        team:[],
        opp:[],
        d1:[],
        d2:[],
        win:[]
       
        
       
    }
}
componentDidMount() {
  
  
  Axios.get('/player/2YL20Y0UP/battles')
  .then(res => res)
  .then(data => {
    // const persons = res.data;
    // const p1=res.data.currentDeck[0];
    this.setState({
// data:data.data,
      win:data.data[1].winner,
    team:data.data[1].team,
    opp:data.data[1].opponent,
    d1:data.data[1].team,
    d2:data.data[1].opponent
    
    
   }
    )
      console.log(data)
      console.log(this.state.d1)
    // console.log(persons)
    // console.log(p1)
  
 
  });

}

  render() {
    const { win } = this.state;
    var ss;
    if(win>=0)
    {
      ss="Victory";
    }else
    {
      ss="Defeat";
    }
    return (
     
      
      <div  className="card">
        <div className="card-body">
          <h5 className="card-title">
            <img src={battle} alt="" id="ba" /> Battle
          </h5>
          <h5 className="card-title" id="vord">
          {ss}
          </h5>
          <h6 id="score">{this.state.team.map(item=><span>{item.crownsEarned}</span>)} : {this.state.opp.map(oo=><span>{oo.crownsEarned}</span>)}</h6>
          <div className="container" id="Deck">
            {
              this.state.team.map(item=><div><h6 id="player">{item.name}</h6>
              <h6 id="clann">
                {item.clan.name} <i class="fas fa-chevron-right"></i>
              </h6>
              <div className="line1"></div>
              <h6 id="trp"> <img src={trp} alt="" />  {item.startTrophies} </h6>
              {
                this.state.d1.map(d=><div>
                  <img src={d.deck[0].icon} alt="" id="ca" />
                  <img src={d.deck[1].icon} alt="" id="ca" />
                  <img src={d.deck[2].icon} alt="" id="ca" />
                  <img src={d.deck[3].icon} alt="" id="ca" />
                  <img src={d.deck[4].icon} alt="" id="ca" />
                  <img src={d.deck[5].icon} alt="" id="ca" />
                  <img src={d.deck[6].icon} alt="" id="ca" />
                  <img src={d.deck[7].icon} alt="" id="ca" /> 
              <br/>
              <h6 className="Avg-elixir1">     </h6>
          <a href={d.deckLink}><img className="btn" src={ba} alt=""  /></a></div>)
                
              } 
          
          </div>)
            }
          
          </div>

          <div className="line"></div>
          {
              this.state.opp.map(opp1=><div>
          <h6 id="player1" className="">
            {opp1.name}
          </h6>
          <h6 id="clann1">
          {opp1.clan.name} <i class="fas fa-chevron-right"></i>
          </h6>
          <div className="line2"></div>
          <h6 id="trp1">
            <img src={trp} alt="" />
            {opp1.startTrophies}
          </h6>{this.state.d2.map(oo2=>
          <div className="Container" id="Deck1">
            {/* Deck Images */}
            <img src={oo2.deck[0].icon} id="ca1" alt="" />
            <img src={oo2.deck[1].icon} id="ca1" alt="" />
            <img src={oo2.deck[2].icon} id="ca1" alt="" />
            <img src={oo2.deck[3].icon} id="ca1" alt="" />
            <img src={oo2.deck[4].icon} id="ca1" alt="" />
            <img src={oo2.deck[5].icon} id="ca1" alt="" />
            <img src={oo2.deck[6].icon} id="ca1" alt="" />
            <img src={oo2.deck[7].icon} id="ca1" alt="" />
            <br />
            <h6 className="Avg-elixir1">   </h6>

           <a href={oo2.deckLink}> <img src={ba} className="btn" alt="" /></a>
            
          </div>)}
          </div>)}
        </div>
      </div>
     
    
     );
    }
  }

