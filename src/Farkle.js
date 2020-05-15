import React from 'react';
import Row from './Row'

class Farkle extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            die1: 1
        }
    }
    render() {
        return (
            <div className='board'>
                <Row className='row1'></Row>
                <Row className='row2'></Row>
                <Row className='row3'></Row>
                <Row className='row4'></Row>
                <Row className='row5'></Row>
                <Row className='row6'></Row>
            </div>

        )
    }
}

export default Farkle