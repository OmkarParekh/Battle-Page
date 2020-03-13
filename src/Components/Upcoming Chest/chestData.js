
import React, { Component } from 'react'

export default class ChestData extends Component {
    constructor(props){
        super(props);
        this.state = {
            chestData : [
                {
                    name : "draft",
                    src : "https://raw.githubusercontent.com/smlbiobot/cr/master/ui/chests/ui/chest-epic.png"
                },
                {
                    name : "epic",
                    src : "https://raw.githubusercontent.com/smlbiobot/cr/master/ui/chests/ui/chest-draft.png"
                },
                {
                    name : "giant",
                    src : "https://raw.githubusercontent.com/smlbiobot/cr/master/ui/chests/ui/chest-giant.png"
                },
                {
                    name : "legendary",
                    src : "https://raw.githubusercontent.com/smlbiobot/cr/master/ui/chests/ui/chest-legendary.png"
                },
                {
                    name : "silver",
                    src : "https://raw.githubusercontent.com/smlbiobot/cr/master/ui/chests/ui/chest-silver.png"
                },
                {
                    name : "supermagical",
                    src : "https://raw.githubusercontent.com/smlbiobot/cr/master/ui/chests/ui/chest-supermagical.png"
                },
                {
                    name : "wooden",
                    src : "https://raw.githubusercontent.com/smlbiobot/cr/master/ui/chests/ui/chest-wooden.png"
                },
                {
                    name : "golden",
                    src : "https://raw.githubusercontent.com/smlbiobot/cr/master/ui/chests/ui/chest-gold.png"
                },
                {
                    name : "magical",
                    src : "https://raw.githubusercontent.com/smlbiobot/cr/master/ui/chests/ui/chest-magical.png"
                }
            ],
            // chestName : this.props.chestName
        }
    }




    render() {
        const {chestName} = this.props;
        const {chestData} = this.state;
        return (
            <div>

                            {
                                chestData.map((item) => {
                                    if(item.name == chestName){
                                        return(
                                            <img
                                        src={item.src}
                                        alt="chest-icon"
                                        className="chest-icon d-block"
                                    />
                                        );
                                    }
                                })
                            }

                            
            </div>
        )
    }
}








