import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';


export default class MemberTable extends Component {
    render() {
        const { member } = this.props;
        return (
            <Fragment>
                <tr>
                    <th scope="row">
                        {member.rank}
                    </th>
                    <td>
                        <Link to="/player">{member.name}</Link>
                        
                    </td>
                    <td>
                        {member.role}
                    </td>
                    <td>
                        {member.trophies}
                    </td>
                    <td>
                        {member.donations}
                    </td>
                    <td>
                        {member.donationsReceived}
                    </td>
                    <td className="d-flex">
                        {member.lastSeen}
                    </td>
                </tr>
            </Fragment>
        )
    }
}
