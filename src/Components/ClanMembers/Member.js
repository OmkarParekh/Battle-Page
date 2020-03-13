import React, { Component } from 'react';
import people from '../../assest/img/people.png';
import MemberTable from './MemberTable';


export default class Member extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeOption: "All Player",
        }
    }
    render() {
        const memberData = this.props.memberData;
        const obj = Object.assign({}, memberData);
        
        return (
            <div>
                <div className="row">
                    <div className="col-12 p-2">
                        <div className="container-header d-flex">


                            <div className="headertitle">
                                <img
                                    src={people}
                                    alt="Cards-icon"
                                    className="header-icon"
                                />
                                <span className="title-name">Members</span>
                            </div>


                            <div class="dropdown cardCategory" >
                                <span class="dropdown-toggle category-text" data-toggle="dropdown">
                                    {this.state.activeOption}
                                </span>


                                <div class="dropdown-menu ml-1">
                                    <span class="dropdown-item text-center btn"
                                        onClick={() => this.setState({ activeOption: "All Player" })}
                                    >
                                        All Player</span>
                                    {/* <span class="dropdown-item text-center btn"
                                            onClick={() => this.setState({ activeOption: "By Elixir" })}
                                        >
                                            By Elixer</span>
                                        <span class="dropdown-item text-center btn"
                                            onClick={() => this.setState({ activeOption: "By Rearity" })}
                                        >
                                            By Rearity</span>
                                        <hr />
                                        <span class="dropdown-item text-center btn"
                                            onClick={() => this.setState({ activeOption: "deck" })}
                                        >
                                            Deck</span> */}
                                </div>


                            </div>

                        </div>

                        <div className="conatiner-fluid mt-3 mx-4">


                                        

                            <table className="table table-hover table-borderless text-center my-3">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Role</th>
                                        <th scope="col">Trophies</th>
                                        <th scope="col">donations</th>
                                        <th scope="col" className="text-wrap">DonationsReceived</th>
                                        <th scope="col">Last Seen</th>
                                    </tr>
                                </thead>
                                <tbody>

                                        {
                                           Object.values(obj).map(MemberItem => {
                                               return(
                                                   <MemberTable 
                                                   member = {MemberItem}
                                                   />
                                               )
                                           })
                                        }
                                    
                                    {/* <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td colspan="2">Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr> */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
