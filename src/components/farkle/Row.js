import React from 'react';

class Row extends React.Component {
    // constructor (props) {
    //     super(props);
    //     this.state = {
    //         value: Number(props.value),
    //         selected: props.selected,
    //         kept: props.kept
    //     }
    // }

    render() {
        let value = this.props.value;
        let selected = this.props.selected;
        let kept = this.props.kept;
        console.log(value, selected, kept)
        let xRolledPosition = 0;
        let xKeptPosition = -64;
        let yPosition = -((value - 1) * 64);
        let rolledPosition = `${xRolledPosition}px ${yPosition}px`;
        let keptPosition = `${xKeptPosition}px ${yPosition}px`;
        let bordercolor = 'gray';
        selected ? bordercolor = 'red' : bordercolor = 'gray';
    
        return (
            <div className='row'>
                <div className='rolled dice'
                    style={{backgroundPosition: rolledPosition, borderColor: bordercolor}}>
                </div>
                <div className='kept dice' style={{backgroundPosition: keptPosition}}>
                </div>
            </div>
        )
    }
}

export default Row