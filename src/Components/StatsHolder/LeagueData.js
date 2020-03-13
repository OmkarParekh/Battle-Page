import React, { Component } from 'react';
import badge from '../../assest/img/legendaryPoints.png';


export default class LeagueData extends Component {
    constructor(props){
        super(props);
        this.state = {
            league : [
                {
                    Leagueid: 1, 
                    arena: "challeger 1", 
                    trophyLimit: 4000,
                        trophyEnd: 4299,
                    src: "https://raw.githubusercontent.com/smlbiobot/cr/master/ui/leagues/league-challeger-1.png"
                },
                {
                    Leagueid: 2, 
                    arena: "challeger 2", 
                    trophyLimit: 4300,
                    trophyEnd: 4599,
                    src: "https://raw.githubusercontent.com/smlbiobot/cr/master/ui/leagues/league-challeger-2.png"
                },
                {
                    Leagueid: 3, 
                    arena: "challeger 3", 
                    trophyLimit: 4600,
                    trophyEnd: 4999,
                    src: "https://raw.githubusercontent.com/smlbiobot/cr/master/ui/leagues/league-challeger-3.png"
                },
                {
                    Leagueid: 4, 
                    arena: "Master 1", 
                    trophyLimit: 5000,
                    trophyEnd: 5299,
                    src: "https://raw.githubusercontent.com/smlbiobot/cr/master/ui/leagues/league-master-1.png"
                },
                {
                    Leagueid: 5, 
                    arena: "Master 2", 
                    trophyLimit:5300,
                    trophyEnd: 5599,
                    src: "https://raw.githubusercontent.com/smlbiobot/cr/master/ui/leagues/league-master-2.png"
                },
                {
                    Leagueid: 6, 
                    arena: "Master 3", 
                    trophyLimit:5600,
                    trophyEnd: 5999,
                    src: "https://raw.githubusercontent.com/smlbiobot/cr/master/ui/leagues/league-master-3.png"
                },
                {
                    Leagueid: 7, 
                    arena: "Champion", 
                    trophyLimit:6000,
                    trophyEnd: 6299,
                    src: "https://raw.githubusercontent.com/smlbiobot/cr/master/ui/leagues/league-master-3.png"
                },
                {
                    Leagueid: 8, 
                    arena: "Grand Champion", 
                    trophyLimit:6300,
                    trophyEnd: 6599,
                    src: "https://raw.githubusercontent.com/smlbiobot/cr/master/ui/leagues/league-champion-1.png"
                },
                {
                    Leagueid: 9, 
                    arena: "Royal Champion", 
                    trophyLimit:6600,
                    trophyEnd: 6999,
                    src: "https://raw.githubusercontent.com/smlbiobot/cr/master/ui/leagues/league-champion-grand.png"
                },
                {
                    Leagueid: 10, 
                    arena: "Ultimate Champion", 
                    trophyLimit:7000,
                    trophyEnd: 7299,
                    src: "https://raw.githubusercontent.com/smlbiobot/cr/master/ui/leagues/league-champion-ultimate.png"
                },

            ]
        }
    }
    render() {
        const { league } = this.state;
        const { trophies } = this.props
        return (
            <div>
                        {
                            league.map((pos) => {
                                if(trophies == 0){
                                    document.write("fuckoff");
                                }
                                if(pos.trophyLimit <= trophies && pos.trophyEnd >= trophies){
                                    return(

                                        <img src={pos.src} className="d-block" alt="Badge-icon" width="50" height="55" />
                                    )
                                }
                            })
                        }


            </div>
        )
    }
}
