import React from 'react'
// import { Link } from 'react-router-dom'

const Navigation = () => {


    return (
        <div>
            <h1>Farkle!</h1>
            <div className='buttons'>
                <a activeClassName="active" href="/">Home</a>
                <a activeClassName="active" href="/login">Login</a>
                <a activeClassName="active" href="/farkle">Play</a>
            </div>
        </div>
    )
}

export default Navigation