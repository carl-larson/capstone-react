import React from 'react';

class Row extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            die1: 1
        }
    }

    render() {
        let value = this.state.die1;
        // let thisDie = document.getElementById(name).firstChild;
        if (value == 1) {
            thisDie.style.backgroundPosition = '0px 0px';
        }
        if (value == 2) {
            thisDie.style.backgroundPosition = '-64px 0px';
        }
        if (value == 3) {
            thisDie.style.backgroundPosition = '0px -64px';
        }
        if (value == 4) {
            thisDie.style.backgroundPosition = '-64px -64px';
        }
        if (value == 5) {
            thisDie.style.backgroundPosition = '0px -128px';
        }
        if (value == 6) {
            thisDie.style.backgroundPosition = '-64px -128px';
        }
    
        return (
            <div className='row'>
                <div className={`rolled${this.props.row}`}>
                    <img src='./farkle/dicePic.png'></img>
                </div>
                <div className={`kept${this.props.row}`}></div>
            </div>
        )
    }
}

export default Row