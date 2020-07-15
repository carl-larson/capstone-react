import React, { useState } from 'react'
import '../App.css'
// import { Redirect } from 'react-router'

function Login(props) {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    // const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(null);
    
    // handleTextChange = (e) => {
    // const state = { ...this.state }
    // state[e.target.name] = e.target.value
    // this.setState(state)
    // }

    const login = (e) => {
    e.preventDefault();
    props.history.push('/');
    // document.cookie = `loggedIn=true;max-age=60*1000`;
    // document.cookie += 'username='+this.state.username+';max-age=60*1000';
    }

    return (
        <div className="loginForm">
            <form className="login-form"
                onSubmit={() => login()}
                action="/auth/login"
                method="post">
                <label for="username">Username</label>
                <input
                    onChange={e => setUsername(e.target.value)}
                    value={username}
                    placeholder="Enter Username"
                    name="username"
                    type="text"
                    required />
                <label for="password">Password</label>
                <input
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    placeholder="Enter Password"
                    name="password"
                    type="password"
                    required />
                <button
                    type="submit"
                    className="button login-button"
                    value={loading ? 'Loading...' : 'Login'}
                    disabled={loading}
                    >Login</button>
            </form>
        </div>
    );
}

export default Login;