import React from 'react';

class Row extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            die1: 1
        }
    }
    render() {
        return (
            <div className='row'>
                <div class="one" id="die1" onclick="keepDie(die1)"></div>
                <div class="two" id="keep1"></div>
            </div>
        )
    }
}

export default Row