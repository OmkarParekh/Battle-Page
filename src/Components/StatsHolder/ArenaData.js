import React, { Component } from 'react';
import arenaImg from '../../assest/img/arena.png'

export default class ArenaData extends Component {
    constructor(props){
        super(props);
        this.state ={
            arena : [
                {
                    id: 0, 
                    arena: "Training camp", 
                    trophyLimit: null,
                    src: "https://raw.githubusercontent.com/smlbiobot/cr/master/ui/arenas/out/arena-0.png"
                },
                {
                    id: 1, 
                    arena: "Goblin Stadium", 
                    trophyLimit: 0,
                    trophyEnd: 299,
                    src: "https://raw.githubusercontent.com/smlbiobot/cr/master/ui/arenas/out/arena-1.png"
                },
                {
                    id: 2, 
                    arena: "Bone Pit", 
                    trophyLimit: 300,
                    trophyEnd: 599,
                    src: "https://raw.githubusercontent.com/smlbiobot/cr/master/ui/arenas/out/arena-2.png"
                },
                {
                    id: 3, 
                    arena: "Barbarian Bowl", 
                    trophyLimit: 600,
                    trophyEnd: 999,
                    src: "https://raw.githubusercontent.com/smlbiobot/cr/master/ui/arenas/out/arena-3.png"
                },
                {
                    id: 4, 
                    arena: "P.E.K.K.A's Playhouse", 
                    trophyLimit: 1000,
                    trophyEnd: 1299,
                    src: "https://raw.githubusercontent.com/smlbiobot/cr/master/ui/arenas/out/arena-4.png"
                },
                {
                    id: 5, 
                    arena: "Spell Valley", 
                    trophyLimit: 1300,
                    trophyEnd: 1599,
                    src: "https://raw.githubusercontent.com/smlbiobot/cr/master/ui/arenas/out/arena-5.png"
                },
                {
                    id: 6, 
                    arena: "Builder's Workshop", 
                    trophyLimit: 1600,
                    trophyEnd: 1999,
                    src: "https://raw.githubusercontent.com/smlbiobot/cr/master/ui/arenas/out/arena-6.png"
                },
                {
                    id: 7, 
                    arena: "Royal Arena", 
                    trophyLimit: 2000,
                    trophyEnd: 2299,
                    src: "https://raw.githubusercontent.com/smlbiobot/cr/master/ui/arenas/out/arena-7.png"
                },
                {
                    id: 8, 
                    arena: "Frozen Peak", 
                    trophyLimit: 2300,
                    trophyEnd: 2599,
                    src: "https://raw.githubusercontent.com/smlbiobot/cr/master/ui/arenas/out/arena-8.png"
                },
                {
                    id: 9, 
                    arena: "Jungle Arena", 
                    trophyLimit: 2600,
                    trophyEnd: 2999,
                    src: "https://raw.githubusercontent.com/smlbiobot/cr/master/ui/arenas/out/arena-9.png"
                },
                {
                    id: 10, 
                    arena: "Hog Mountain", 
                    trophyLimit: 3000,
                    trophyEnd: 3299,
                    src: "https://raw.githubusercontent.com/smlbiobot/cr/master/ui/arenas/out/arena-10.png"
                },
                {
                    id: 11, 
                    arena: "Electro Valley", 
                    trophyLimit: 3300,
                    trophyEnd: 3599,
                    src: "../../assest/img/arena_electro.png"
                },
                {
                    id: 12, 
                    arena: "Spooky Town	", 
                    trophyLimit: 3600,
                    trophyEnd: 3999,
                    src: "../../assest/img/arena_spooky.png"
                },
                {
                    id: 13, 
                    arena: "Legendary", 
                    trophyLimit: 4000,
                    trophyEnd: 4299,
                    src: "https://raw.githubusercontent.com/smlbiobot/cr/master/ui/arenas/out/arena-11.png"
                },

                // {
                //     Leagueid: 1, 
                //     arena: "challeger 1", 
                //     trophyLimit: 4000,
                //         trophyEnd: 4299,
                //     src: "https://raw.githubusercontent.com/smlbiobot/cr/master/ui/leagues/league-challeger-1.png"
                // },
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

            ],
        }
    }
    render() {
        const { arena } = this.state;
        const { trophies } = this.props;
        return (
            <div>

                {
                    arena.map((pos) => {
                        if(pos.trophyLimit <=trophies && pos.trophyEnd >= trophies ){
                          return(
                              <div>
                            <img src={pos.src} className="arena-info-img" alt="arena" />
                            <span className="arena-info-name">
                                {pos.arena}
                            </span>
                            </div>
                          ) 
                        }
                    })
                }
                            
            </div>
        )
    }
}
