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
                <div className={`rolled${this.props.row}`}></div>
                <div className={`kept${this.props.row}`}></div>
            </div>
        )
    }
}

export default Row