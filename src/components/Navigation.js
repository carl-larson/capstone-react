import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'

const Navigation = () => {
    const displayButtons = (e) => {
        e.preventDefault()
        console.log("button pushed")
        const buttons = document.getElementsByClassName('playButtons');
        let dispButtons = buttons.style.display;
        if (dispButtons === 'none') {
            dispButtons = 'block';
        } else if (dispButtons === 'block') {
            dispButtons = 'none';
        }
    }

    return (
        <div>
            <h1>Farkle!</h1>
            <div className='buttons'>
                <Link activeClassName="active" to="/"><button>Home</button></Link>
                <Link activeClassName="active" to="/login"><button>Log In</button></Link>
                <Link activeClassName="active" to="/signup"><button>Sign Up</button></Link>
                <button onClick={displayButtons}>Play a Game</button>
            </div>
            <div className="playButtons">
                <Link to="/farkle">
                    <button>Farkle</button>
                </Link>
                <Link to="/playerpage">
                    <button>Players</button>
                </Link>
            </div>
        </div>
    )
}

export default Navigation