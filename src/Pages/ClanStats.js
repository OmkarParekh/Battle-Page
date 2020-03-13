import React, { Component } from 'react';
import '../css/ClanStats.css';
import Axios from 'axios';

import ScoreIcon from '../assest/img/trophy-ribbon.png';
import Reqtrophy from '../assest/img/Trophy.png';
import WarT from '../assest/img/wart.png';
import donations from '../assest/img/cards.png';
import people from '../assest/img/people.png';
import social from '../assest/img/social.png';
import Member from '../Components/ClanMembers/Member';


export default class ClanStats extends Component {
    constructor(props){
        super(props);
        this.state = {
            clanData : [],
            isLoading : false
        }
    }


    componentDidMount(){
        Axios.get('/clan/L0JL2Q')
            .then(res => res)
            .then(data => {
                this.setState({clanData : data.data})
            })
            .catch(err => console.log(err))
    }



    render() {

        const {clanData} = this.state;
        const badge = Object.assign({}, clanData.badge) ;
        const loc = Object.assign({}, clanData.location) ; 
        const tracking = Object.assign({}, clanData.tracking);
        return (
            <div>

                            <div className="container player-stats">
                            <div className="row p-4">
                                <div className="col-4 d-block border-right border-danger ">
                                    <div className="d-flex">
                                    <img
                                        src={badge.image}
                                        alt="_clan-icon"
                                        className="c-icon d-inline-block"
                                    />
                                    <br></br>
                                    <span className="text-monospace  clan-name">
                                    {/* INDIA 24 */}
                                    {clanData.name}
                                    <h6 className="">
                                    {clanData.tag}
                                    </h6>
                                    </span>
                                    </div>
                                   
                                    
                                    <br></br>
                                    <p className="text-muted text-justify">
                                    {clanData.description}
                                    </p>
                                </div>
                                <div className="col-8 player-data-cont">
                                   <div className="clan-loc float-right">
                                        <p className="text-danger text-monospace">
                                        {loc.code}
                                        </p>
                                   </div>
        
                                   <div className="clan-props ">
                                        <div className="props-item d-block">
                                            <img
                                                src={ScoreIcon}
                                                alt="_ClanStats"
                                                className="props-image d-inline-block"
                                            />
                                            <span className="text-monospace props-header">
                                            score
                                            <h6 className="props-value">
                                            {clanData.score}
                                            </h6>
                                            </span>
                                        </div>
        
                                        <div className="props-item d-block">
                                            <img
                                                src={Reqtrophy}
                                                alt="_ClanStats"
                                                className="props-image d-inline-block"
                                            />
                                            <span className="text-monospace props-header">
                                            Trophies Limits
                                            <h6 className="props-value">
                                            {clanData.requiredScore}
                                            </h6>
                                            </span>
                                        </div>
        
                                        <div className="props-item d-block">
                                            <img
                                                src={WarT}
                                                alt="_ClanStats"
                                                className="props-image d-inline-block"
                                            />
                                            <span className="text-monospace props-header">
                                            warTrophies
                                            <h6 className="props-value">
                                            {clanData.warTrophies}
                                            </h6>
                                            </span>
                                        </div>
        
                                        <div className="props-item d-block">
                                            <img
                                                src={donations}
                                                alt="_ClanStats"
                                                className="props-image d-inline-block"
                                            />
                                            <span className="text-monospace props-header">
                                            donations
                                            <h6 className="props-value">
                                            {clanData.donations}
                                            </h6>
                                            </span>
                                        </div>
        
                                        <div className="props-item d-block">
                                            <img
                                                src={social}
                                                alt="_ClanStats"
                                                className="props-image d-inline-block"
                                            />
                                            <span className="text-monospace props-header">
                                            memberCount
                                            <h6 className="props-value">
                                            {`${clanData.memberCount}/50`}
                                            </h6>
                                            </span>
                                        </div>
        
                                        <div className="props-item d-block">
                                            <img
                                                src={people}
                                                alt="_ClanStats"
                                                className="props-image d-inline-block"
                                            />
                                            <span className="text-monospace props-header">
                                            type
                                            <h6 className="props-value">
                                            {clanData.type}
                                            </h6>
                                            </span>
                                        </div>
                                   </div>
                                </div>
                            </div>
                        </div>

                <div className="container-fluid">
                    <Member 
                        memberData = {clanData.members}
                    />
                </div>

            </div>



        )
    }
}
