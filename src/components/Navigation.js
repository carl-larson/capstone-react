import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {


    return (
        <div>
            <h1>Farkle!</h1>
            <div className='buttons'>
                <NavLink activeClassName="active" to="/">Home</NavLink>
                <NavLink activeClassName="active" to="/login">Login</NavLink>
                <NavLink activeClassName="active" to="/farkle">Play</NavLink>
            </div>
        </div>
    )
}

export default Navigation