import React from 'react';
import Row from './Row'

import 'farkleStyle.css'

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
                <Row row={1}></Row>
                <Row className='row2' row={2}></Row>
                <Row className='row3' row={3}></Row>
                <Row className='row4' row={4}></Row>
                <Row className='row5' row={5}></Row>
                <Row className='row6' row={6}></Row>
            </div>

        )
    }
}

export default Farkle