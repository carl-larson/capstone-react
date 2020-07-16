import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {


    return (
        <div>
            <h1>Farkle!</h1>
            <div className='buttons'>
                <Link activeClassName="active" to="/">Home</Link>
                <Link activeClassName="active" href="/login">Login</Link>
                <Link activeClassName="active" href="/farkle">Play</Link>
            </div>
        </div>
    )
}

export default Navigation