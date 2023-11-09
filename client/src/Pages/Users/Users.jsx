import React from 'react'

import './Users.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import UsersList from './UsersList'

const Users = () => {

    return (
        <div className='home-container-1'>
            <LeftSidebar />
            <div className="home-container-2" style={{marginTop: "30px"}}>
                <h2 style={{fontWeight: "600"}}>Users</h2>
                <UsersList /> 
            </div>
        </div>
    )
}

export default Users
