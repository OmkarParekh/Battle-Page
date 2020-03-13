import React, { Component } from 'react';
import HeaderIcon from '../../assest/img/crl.png';
import './chest.css';
import Chestitem from './Chestitem';
import Axios from 'axios';
import chestData from './chestData';

export default class Upcomingchest extends Component {

    constructor(props){
        super(props);
        this.state ={
            playerTag : this.props.playerTag,
            data : [],
            upcoming : []
        }
    }

    componentDidMount(){
        Axios.get(`/player/${this.state.playerTag}/chests`)
        .then((data) =>{
            const res = data.data;
            this.setState({
                data : res,
                upcoming : res[1].upcoming
            })
        })
        .catch(err => console.log(err))



    }

    render() {
        const {data, upcoming} = this.state;
        // const res  = Object.assign({}, data);
        // // const loop  = [this.state.data[0]];
        // const chestData = Object.assign({}, res);
        // const upcoming = chestData.upcoming;
        // console.log(typeof(upcoming));
        // // console.log(chestData.findChest('chestdraft'))

        return (
            <div>
                <div className="container">
                    <div className="row chest-holder">
                        <div className="col-12 d-flex">
                                <span className="align-middle text-monospace header-title">
                                        <img src={HeaderIcon} className="align-middle icon-s" alt="" />
                                        Upcomingchest
                                </span>
                        </div>

                        <div className="d-flex data-container flex-wrap">

                        
                       
                        {
                            upcoming.map((upcomingchest,index) => 
                                <Chestitem 
                                    key={index}
                                    chest={upcomingchest}
                                    />
                            )
                        }
                            

                            
                            
                        </div>
                        <div className="link">
                                <spam>See More</spam>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
