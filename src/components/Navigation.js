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
                <Link activeclassname="active" to="/"><button>Home</button></Link>
                <Link activeclassname="active" to="/login"><button>Log In</button></Link>
                <Link activeclassname="active" to="/signup"><button>Sign Up</button></Link>
                <button onClick={displayButtons}>Play a Game</button>
            </div>
            <div className="playButtons" style={{display: playButtons}}>
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