import React from 'react';
import Row from './Row';
import ScoreBoard from './ScoreBoard'

import './farkleStyle.css';

class Farkle extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            points: 0,
            playing: false,
            message: 'Roll dice to begin!',
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
        this.sortDice = this.sortDice.bind(this);
        this.updatePoints = this.updatePoints.bind(this);
        this.updateScore = this.updateScore.bind(this);

        this.selectedDice = [];
        // this.points = 0;
        this.score = 0;
    }
    sortDice(ind) {
        if (this.state.dice[ind].selected === true && this.state.dice[ind].kept === false) {
            this.selectedDice.push(this.state.dice[ind].value);
        }
        if (this.state.dice[ind].selected === false && this.state.dice[ind].kept === false) {
            const removeIndex = this.selectedDice.indexOf(this.state.dice[ind].value);
            if (removeIndex > -1) {
                this.selectedDice.splice(removeIndex, 1);
            }
        }
        
        this.selectedDice.sort();
        console.log("selected dice: ", this.selectedDice)
    }

    updatePoints() {
        let dice = this.selectedDice.join('');
        console.log('original dice string: ', dice)
        let diceLength = dice.length;
        let points = 0;
        let combos = [{values: '1', worth: 100}, {values: '5', worth: 50}];
        let index = dice.search(combos[0].values);
        
        for(let i = 0; i < diceLength; i++) {
            if (dice.search(combos[0].values) !== -1) {
                points += combos[0].worth;
                dice = dice.replace(combos[0].values, '');
                console.log('new dice string: ', dice)
            }
        }
        
        console.log('new dice string: ', dice)
        console.log('search for: ', combos[0].values, index)
        this.setState({points: points});
        return;
    }

    updateScore() {
        return
    }

    // componentDidUpdate(prevProps, prevState) {
    //         console.log("component update");
    //     // This will keep the points current until they are committed to the score.
    //         if(this.state !== prevState){this.updatePoints()};
    //         return;
    // }

    select(ind) {
        if(this.state.playing) {
            console.log('clicked');
            let diceList = [...this.state.dice];
            let selectDie = diceList[ind];
            // console.log (e)
            if (selectDie.kept === false) {
                selectDie.selected ? selectDie.selected = false : selectDie.selected = true;
                // diceList = [...diceList, selectDie];
                this.sortDice(ind);
            } else {
                return;
            }
            this.setState({dice: diceList});
            this.updatePoints();
        } else {return}
    }

    rollDice = () => {
        //**Perhaps these first updates should be in their own method instead of roll dice.
        //Begins the game
        this.setState({playing: true})
        //Move selected points to kept points and reset selected points to zero
        this.score += this.state.points;
        this.setState({points: 0});

        //Empty the selected dice array to begin new round of selections
        this.selectedDice = [];
        
        let newRoll = 0;
        let diceArray = [...this.state.dice];
        console.log(diceArray);
        let keptCount = 0;
        
        //Finally get to rolling new numbers on all non-selected non-kept dice.
        //Make a new dice array to mutate
        //If die is selected, update to kept = true.
        for (let i = 0; i < 6; i++) {
            if (diceArray[i].selected === false) {
                newRoll = Math.ceil(Math.random()*6);
                diceArray[i].value = newRoll;
            } else if (diceArray[i].kept === true) {
                //check if all dice are in the kept column
                keptCount += 1;
                console.log(keptCount)
            } else {
                diceArray[i].kept = true;
            }
            
        }
        //if all dice are in the kept column, unselect and unkeep and reroll all dice
        if (keptCount === 6) {
            for (let j = 0; j < 6; j++) {
                diceArray[j].selected = false;
                diceArray[j].kept = false;
            }
            keptCount = 0;
            this.rollDice();
        }
        
        //Set state dice array to the new values and update the message after the game begins
        this.setState({dice: diceArray, message: 'Select dice to keep or score and pass.'});
        

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
    scorePass = () => {
        return
    }
    render() {
        let die = this.state.dice;
        return (
            <div className='board'>
                <ScoreBoard message={this.state.message} points={this.state.points} score={this.score}/>
                <div  className='diceButtons'>
                    <button onClick={this.rollDice}>Roll!</button>
                    <button onClick={this.scorePass}>Score and Pass</button>
                </div>
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