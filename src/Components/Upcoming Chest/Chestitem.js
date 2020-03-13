import React, { Component } from 'react';
import ChestData from './chestData';


export default class Chestitem extends Component {
    render() {
        const {chest, key} = this.props;

        return (
            <div>
                            <div className="chest-data d-block">

                                    <ChestData 
                                    chestName = {chest}
                                    />
                            <span className="chest-title text-monospace text-center d-block">
                                {chest}
                            </span>
                            <span className="chest-duration">
                                {key}
                            </span>
                            </div>
            </div>
        )
    }
}
