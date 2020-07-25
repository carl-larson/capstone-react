import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import '../App.css'

const Navigation = () => {
    const [ playButtons, setPlayButtons ] = useState('none'); 
    const displayButtons = () => {
        if (playButtons === 'none') {
            setPlayButtons('block');
        } else if (playButtons === 'block') {
            setPlayButtons('none');
        }
    }

    return (
        <div>
            <h1>Farkle!</h1>
            <div className='buttons'>
                <Link className="navButton" to="/">Home</Link>
                <Link className="navButton" to="/login">Log In</Link>
                <Link className="navButton" to="/signup">Sign Up</Link>
                <button onClick={displayButtons}>Play a Game</button>
            </div>
            <div className="playButtons" style={{display: playButtons}}>
                <Link className="navButton" to="/farkle">
                    Farkle
                </Link>
                <Link className="navButton" to="/playerpage">
                    Players
                </Link>
            </div>
        </div>
    )
}

export default Navigation