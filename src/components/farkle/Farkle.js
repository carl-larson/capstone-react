import React from 'react';
import Row from './Row';
import ScoreBoard from './ScoreBoard'

import './farkleStyle.css';

class Farkle extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            playing: false,
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
                    selected: false,
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
        };
        this.select = this.select.bind(this);
    }
    select(ind) {
        if(this.state.playing) {
            console.log('clicked')
            let diceList = [...this.state.dice];
            let selectDie = diceList[ind];
            // console.log (e)
            if (selectDie.kept === false) {
                selectDie.selected ? selectDie.selected = false : selectDie.selected = true;
                // diceList = [...diceList, selectDie];
                
            } else {
                return;
            }
            this.setState({dice: diceList})
        } else {return}
    }
    rollDice = () => {
        this.setState({playing: true})
        let newRoll = 0;
        let diceArray = [...this.state.dice];
        console.log(diceArray);
        for (let i = 0; i < 6; i++) {
            if (diceArray[i].selected === false) {
                newRoll = Math.ceil(Math.random()*6);
                diceArray[i].value = newRoll;
            } else {
                diceArray[i].kept = true;
            }
        }
        this.setState({dice: diceArray});

        //METHOD 2
        // const newDice = this.state.dice.map(die => {
        //     if(die.selected === false) {
        //         newRoll = Math.ceil(Math.random()*6);
        //         die = {...die, value: newRoll};
        //     } else {
        //         die = {...die, kept: true};
        //     }
        // })
        // console.log(dice);
        // this.setState({dice: newDice});

        //METHOD 1
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
                <ScoreBoard />
                <button onClick={this.rollDice}>Roll!</button>
                <div className='diceBoard'>
                    <div onClick={() => this.select(0)}><Row className='row1' value={die[0].value} selected={die[0].selected} kept={die[0].kept}></Row></div>
                    <div onClick={() => this.select(1)}><Row className='row2' value={die[1].value} selected={die[1].selected} kept={die[1].kept}></Row></div>
                    <div onClick={() => this.select(2)}><Row className='row3' value={die[2].value} selected={die[2].selected} kept={die[2].kept}></Row></div>
                    <div onClick={() => this.select(3)}><Row className='row4' value={die[3].value} selected={die[3].selected} kept={die[3].kept}></Row></div>
                    <div onClick={() => this.select(4)}><Row className='row5' value={die[4].value} selected={die[4].selected} kept={die[4].kept}></Row></div>
                    <div onClick={() => this.select(5)}><Row className='row6' value={die[5].value} selected={die[5].selected} kept={die[5].kept}></Row></div>
                </div>
                
            </div>

        )
    }
}

export default Farkle