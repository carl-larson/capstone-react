import React, { useState } from 'react'
import '../App.css'
// import { Redirect } from 'react-router'

function Login(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(null);
    
    // handleTextChange = (e) => {
    // const state = { ...this.state }
    // state[e.target.name] = e.target.value
    // this.setState(state)
    // }

    login = (e) => {
    e.preventDefault();
    props.history.push('/');
    // document.cookie = `loggedIn=true;max-age=60*1000`;
    // document.cookie += 'username='+this.state.username+';max-age=60*1000';
    }

    return (
        <div className="loginForm">
            <form className="login-form" onSubmit={this.login}>
            <label>Username</label>
            <input
                onChange={e => setUsername(e.target.value)}
                value={username}
                type="text" />
            <label>Password</label>
            <input
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password" />
            <button
                type="submit"
                className="button login-button"
                value={loading ? 'Loading...' : 'Login'}
                disabled={loading}
                ></button>
            </form>
        </div>
    );
}

export default Login;