import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../css/player.css';
import playerBadge from '../assest/img/legendaryPoints.png';
import arenaImg from '../assest/img/arena.png'
import Trophy from '../assest/img/Trophy.png';
import Clanicon from '../assest/img/Flame_01.png';
import option1 from '../assest/img/crl.png';
import option2 from '../assest/img/cards.png';
import option3 from '../assest/img/battle.png';
import option4 from '../assest/img/chest-background.png';

import StatsContainer from '../Components/StatsHolder/StatsContainer';
import Cardstats from '../Components/CardStats/Cardstats'
import Upcomingchest from '../Components/Upcoming Chest/Upcomingchest';

import Axios from 'axios';
import League from '../Components/leaguecompt/League';
import ArenaData from '../Components/StatsHolder/ArenaData';


export default class Playerstats extends Component {

    constructor() {
        super()
        this.state = {
            playerTag : '8L9L9GL',

            activeTab:'playerStats',



            data: [],
            clan: [],
            stat: [],
            bestSeason : null,
            currentSeason : null,
            previousSeason : null,
            cards: null,
            deckLink: null,
            favoriteCard : null,
            currentDeck: null
        }
    }


        


    componentDidMount() {
        Axios.get(`/player/${this.state.playerTag}`)
            .then(res => res)
            .then(data => {
                this.setState({ data: data.data[0] ,

                clan : [data.data[0].clan.badge.category,
                data.data[0].clan.badge.image,
                data.data[0].clan.name],

                stat : [data.data[0].stats,
                data.data[0].games],

                bestSeason :  data.data[0].leagueStatistics.bestSeason,
               currentSeason: data.data[0].leagueStatistics.currentSeason,
               previousSeason: data.data[0].leagueStatistics.previousSeason,


                    cards: data.data[0].cards,
                    deckLink: data.data[0].deckLink,
                    favoriteCard :data.data[0].stats.favoriteCard, 
                   currentDeck: data.data[0].currentDeck
            })
        }).catch(err => console.log(err))
    }




    // async componentDidMount(){
    //     const Response = await axios.get('/player/8L9L9GL');
    //     const data = Response;
    //     this.setState({data : data.data})
    // }

    // dataSet = ()=> {
    //     const data = this.state.data;
    //     const clan = this.state.data.clan;
    //     this.setState({clan})
    // }


    render() {
        const { data,clan } = this.state;
       console.log(data.arena)
        return (
            <div>

                <div className="container player-stats">
                    <div className="row">
                        <div className="col-3 arena-info">
                            {/* <img src={arenaImg} className="arena-info-img" alt="arena" />
                            <span className="arena-info-name">Legendary</span> */}
                            <ArenaData 
                            trophies = {data.trophies}
                            />
                        </div>



                        <div className="col-8 player-data-cont">


                            <div className="player-data mt-3">
                                <img src={playerBadge} alt="playerBadge" className="player-data-icon mr-1" />
                                <span className="player-data-name">
                                    {data.name}
                                    
                                    <h6 className="text-muted player-data-tag">
                                        {`#${data.tag}`}
                                    </h6>
                                </span>
                            </div>








                            <div className="player-options">
                                <ul className="player-option-header">
                                    <li className="player-option-items">
                                        <span className="item-name">
                                            Throphies
                                            </span>
                                        <span className="item-divider">
                                            ..............................................................
                                            </span>
                                        <div className="item-data">
                                            <img src={Trophy}
                                                alt="Trophy-icon"
                                                className="item-icon"
                                            />
                                            <span className="item-value">
                                                {data.trophies}
                                            </span>
                                        </div>
                                    </li>






                                    <li className="player-option-items">
                                    <span className="item-name">
                                            Clan
                                            </span>
                                            <span className="item-divider">
                                                ..............................................................
                                            </span>
                                            <div className="item-data">
                                                <img src={clan[1]}
                                                alt={clan[0]}
                                                className="item-icon"
                                                />

                                                

                                                <span className="item-value">

                                                    <Link to="/clan">{clan[2]}</Link>

                                                   
                                                </span>
                                            </div>
                                    </li>

                                </ul>
                            </div>







                            <div className="player-nav-option">
                                <ul className="nav-options">
                                    <li className="nav-option-item">
                                        <img
                                            src={option1}
                                            alt="option-icon"
                                            className="option-icon"
                                        />
                                        <span className="option-name align-center btn"
                                            onClick={() => this.setState({activeTab : "playerStats"})}
                                        >
                                            Player Stats
                                            </span>
                                    </li>

                                    <li className="nav-option-item">
                                        <img
                                            src={option2}
                                            alt="option-icon"
                                            className="option-icon"
                                        />
                                        <span className="option-name align-center btn"
                                            onClick={() => this.setState({activeTab : "cards"})}
                                        >
                                            Cards Stats
                                            </span>
                                    </li>

                                    <li className="nav-option-item">
                                        <img
                                            src={option4}
                                            alt="option-icon"
                                            className="option-icon"
                                        />
                                        <span className="option-name align-center btn"
                                            onClick={() => this.setState({activeTab : "upcomingChest"})}
                                        >
                                            UpcomingChest
                                            </span>
                                    </li>

                                    <li className="nav-option-item">
                                        <img
                                            src={option3}
                                            alt="option-icon"
                                            className="option-icon"
                                        />
                                        <span 
                                        className="option-name align-center btn"
                                            onClick={() => this.setState({activeTab : "battle"})}
                                        >
                                            Battle Stats
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>


                {
                    this.state.activeTab === "playerStats" &&
                    <div>
                        <StatsContainer 
                        throphies = {this.state.data.trophies}
                        stats={this.state.stat[0]}
                        games = {this.state.stat[1]}
                        />
                        <League 
                        bestSeason={this.state.bestSeason}
                        currentSeason = {this.state.currentSeason}
                        previousSeason= { this.state.previousSeason }
                        />
                    </div>
                }
    

                {
                    this.state.activeTab === "cards" &&
                    <Cardstats 
                        cards = {this.state.cards}
                        deckLink ={ this.state.deckLink }
                        favCard = {this.state.favoriteCard}
                        currentDeck = {this.state.currentDeck}
                        />
                }

                    {
                        this.state.activeTab === "upcomingChest" &&
                        <Upcomingchest 
                        playerTag={this.state.playerTag}
                        />
                    }

                </div>
            </div>
        )
    }
}
