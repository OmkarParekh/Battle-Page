import React, { Component } from 'react'
import './StatsContainer.css'

import Trophy from '../../assest/img/Trophy.png';
import battle from '../../assest/img/battle.png';
import clanWar from '../../assest/img/clan-wars.png';
import tournament from '../../assest/img/tournament.png';
import badge from '../../assest/img/legendaryPoints.png';




export default class StatsContainer extends Component {


    constructor(props){
            super(props);

            this.state = {
                data : []
            }

            
    }



    render() {  
        const data = this.props;
        const stats = this.props.stats;
        const games = this.props.games;
        
        const statsData = Object.assign({}, stats);
        const gameData = Object.assign({}, games);
        

        return (
                <div>
            <div className="container data-container">
                <div className="row">
                    <div className="col-6 data-holder">



                        <div className="d-flex stats-header">
                            <span className="align-middle headerText">
                                        <img src={Trophy} className="align-middle stat-icon" alt="" />
                                        Trophies
                                    </span>
                        </div>
                        
                    
                          
                                <div className="stats-data">
                                <span className="statstext">maxTrophies</span>
                                <span className="stat-divider">...................</span>
                                <span className="statsData">
                                    {statsData.maxTrophies}
                                </span>
                                </div>
                          
                    
                        <div className="stats-data">
                            <span className="statstext">Trophies</span>
                            <span className="stat-divider">...................</span>
                            <span className="statsData">
                                {data.throphies}
                            </span>
                        </div>




                        <div className="d-flex stats-header-upper">
                        <span className="align-middle headerText">
                                        <img src={battle} className="align-middle stat-icon" alt="" />
                                        Wins Stats
                                    </span>
                        </div>

                        <div className="stats-data">
                            <span className="statstext">Total Wins</span>
                            <span className="stat-divider">...................</span>
                            <span className="statsData">
                                {gameData.wins}
                            </span>
                        </div>

                        <div className="stats-data">
                            <span className="statstext">Total Looses</span>
                            <span className="stat-divider">...................</span>
                            <span className="statsData">
                                {gameData.losses}
                            </span>
                        </div>

                        <div className="stats-data">
                            <span className="statstext">threeCrownWins</span>
                            <span className="stat-divider">...................</span>
                            <span className="statsData">
                                {statsData.threeCrownWins}
                            </span>
                        </div>

                        <div className="stats-data">
                            <span className="statstext">challengeMaxWins</span>
                            <span className="stat-divider">...................</span>
                            <span className="statsData">
                                {statsData.challengeMaxWins}
                            </span>
                        </div>

                        <div className="stats-data">
                            <span className="statstext">Total Draws</span>
                            <span className="stat-divider">...................</span>
                            <span className="statsData">
                                {gameData.draws}
                            </span>
                        </div>
                    {/* end of first col */}
                    </div>
                    <div className="col-6 data-holder border-left border-dark">


                    <div className="d-flex stats-header">
                    <span className="align-middle headerText">
                                        <img src={clanWar} className="align-middle stat-icon" alt="" />
                                        Clan War Stats
                                    </span>
                        </div>
                        <div className="stats-data">
                            <span className="statstext">warDayWins</span>
                            <span className="stat-divider">...................</span>
                            <span className="statsData">
                                {gameData.warDayWins}
                            </span>
                        </div>
                        <div className="stats-data">
                            <span className="statstext">clanCardsCollected</span>
                            <span className="stat-divider">....................</span>
                            <span className="statsData">
                                {statsData.clanCardsCollected}
                            </span>
                        </div>
                        <div className="stats-data">
                            <span className="statstext">totalDonations</span>
                            <span className="stat-divider">...................</span>
                            <span className="statsData">
                                {statsData.totalDonations}
                            </span>
                        </div>




                        <div className="d-flex stats-header-upper">
                            
                        <span className="align-middle headerText">
                                        <img src={tournament} className="align-middle stat-icon" alt="" />
                                        Tournamets  And Challeges
                                    </span>
                            
                            
                            {/* <img src={tournament} alt="Battle-icon" className="stat-icon" />
                            <span className="headerText ">Wins Stats</span> */}
                        </div>

                        <div className="stats-data">
                            <span className="statstext">tournamentCardsWon</span>
                            <span className="stat-divider">...................</span>
                            <span className="statsData">
                                {statsData.tournamentCardsWon}
                            </span>
                        </div>

                        <div className="stats-data">
                            <span className="statstext">challengeMaxWins</span>
                            <span className="stat-divider">...................</span>
                            <span className="statsData">
                                {statsData.challengeMaxWins}
                            </span>
                        </div>

                        <div className="stats-data">
                            <span className="statstext">challengeCardsWon</span>
                            <span className="stat-divider">...................</span>
                            <span className="statsData">
                                {statsData.challengeCardsWon}
                            </span>
                        </div>

                        <div className="stats-data">
                            <span className="statstext">tournamentGames</span>
                            <span className="stat-divider">...................</span>
                            <span className="statsData">
                                {gameData.tournamentGames}
                            </span>
                        </div>

                        <div className="stats-data">
                            <span className="statstext">clanCardsCollected</span>
                            <span className="stat-divider">...................</span>
                            <span className="statsData">
                                {statsData.clanCardsCollected}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
                
        </div>
        );
    }
}



