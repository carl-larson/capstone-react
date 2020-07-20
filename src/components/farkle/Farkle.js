import React from 'react';
import Row from './Row';

import './farkleStyle.css';

class Farkle extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            dice: [
                {
                    value: 1,
                    selected: false,
                    kept: false
                },
                {
                    value: 2,
                    selected: false,
                    kept: false
                },
                {
                    value: 3,
                    selected: false,
                    kept: false
                },
                {
                    value: 4,
                    selected: true,
                    kept: false
                },
                {
                    value: 5,
                    selected: false,
                    kept: false
                },
                {
                    value: 6,
                    selected: false,
                    kept: false
                }
            ]
            
        }
    }
    select = (e) => {
        console.log('clicked')
        let selectDie = this.state.dice[e];
        console.log (e)
        if (selectDie.kept === false) {
            return selectDie.selected ? false : true;
        } else {
            return;
        }
    }
    rollDice = () => {
        let newRoll = 0;
        // console.log(state.dice)
        const newDice = this.state.dice.map(die => {
            if(die.selected === false) {
                newRoll = Math.ceil(Math.random()*6);
                // console.log('new roll', newRoll);
                die = {...die, value: newRoll};
            // } else {
            //     // newRoll = die.value;
            //     die = {...die, kept: true};
            }
        })
        // console.log(dice);
        this.setState({dice: newDice});
        // let newRoll = 0;
        // this.state.dice.map((die, ind) => {
            // if(die.selected === false) {
            //     newRoll = Math.ceil(Math.random()*6);
            //     console.log(newRoll);
            // } else {
            //     newRoll = die.value;
            //     die.kept = true;
            // }
        //     console.log('die value', die.value)
        //     return this.setState({value: newRoll});
        // })
    }
    render() {
        let die = this.state.dice;
        return (
            <div className='board'>
                <Row className='row1' onClick={this.select} value={die[0].value} selected={die[0].selected} kept={die[0].kept}></Row>
                <Row className='row2' value={die[1].value} selected={die[1].selected} kept={die[1].kept}></Row>
                <Row className='row3' value={die[2].value} selected={die[2].selected} kept={die[2].kept}></Row>
                <Row className='row4' value={die[3].value} selected={die[3].selected} kept={die[3].kept}></Row>
                <Row className='row5' value={die[4].value} selected={die[4].selected} kept={die[4].kept}></Row>
                <Row className='row6' value={die[5].value} selected={die[5].selected} kept={die[5].kept}></Row>
                <button onClick={this.rollDice}>Roll!</button>
            </div>

        )
    }
}

export default Farkle