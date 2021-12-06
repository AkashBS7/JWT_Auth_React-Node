import React from 'react'
import { useHistory } from 'react-router-dom';
import { getUser, removeUserSession } from '../Utils/Common';

export default function DashBoard(props) {
    const history = useHistory();
    const user = getUser();

    const handleLogOut = () => {
        removeUserSession();
        history.push('/login');
    }

    return (
        <div>
            <h1>Dashboard</h1>
            {/* Welcome {user.name}!<br /><br /> */}
            <button onClick={handleLogOut}>Log Out</button>
        </div>
    )
}
