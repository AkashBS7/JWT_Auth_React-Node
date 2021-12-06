import React from 'react'
import { Link } from 'react-router-dom'
import PrivateRoute from '../Utils/PrivateRoute';
import PublicRoute from '../Utils/PublicRoute';

import LoginPage from '../components/LoginPage';
import DashBoard from '../components/DashBoard';

export default function Home() {
    return (
        <>
            <div>
                <h1>HOME PAGE</h1>

            </div>
            {/* <div>login
                
                <PublicRoute path='/login'>
                    <LoginPage />
                </PublicRoute>
            </div>
            <div>
                <PrivateRoute path='/dashboard'>
                    <DashBoard />
                </PrivateRoute>
            </div> */}
        </>
    )
}



