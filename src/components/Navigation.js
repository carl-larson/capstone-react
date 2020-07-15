import React from 'react'
// import { Link } from 'react-router-dom'

const Navigation = () => {


    return (
        <div>
            <h1>Farkle!</h1>
            <div className='navBar'>
                <ul className='navButtonList'>
                    <li>
                        <a className='navButton active' href="/">Home</a>
                    </li>
                    <li>
                        <a className='navButton active' href="/login">Login</a>
                    </li>
                    <li>
                        <a className='navButton active' href="/farkle">Play</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation