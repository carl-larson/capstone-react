import React from 'react';

class Row extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            value: Number(props.value),
            selected: props.selected,
            kept: props.kept
        }
    }

    render() {
        // let value = this.props.value;
        // let selected = this.props.selected;
        // let kept = this.props.kept;
        console.log(this.state.value, this.state.selected, this.state.kept)
        let xRolledPosition = 0;
        let xKeptPosition = -64;
        let yPosition = -((this.state.value - 1) * 64);
        let rolledPosition = `${xRolledPosition}px ${yPosition}px`;
        let keptPosition = `${xKeptPosition}px ${yPosition}px`;
        let bordercolor = 'gray';
        this.state.selected ? bordercolor = 'red' : bordercolor = 'gray';
        // if (value === 1) {
        //     diePosition = '0px 0px';
        // }
        // if (value === 2) {
        //     diePosition = '-64px 0px';
        // }
        // if (value === 3) {
        //     diePosition = '0px -64px';
        // }
        // if (value === 4) {
        //     diePosition = '-64px -64px';
        // }
        // if (value === 5) {
        //     diePosition = '0px -128px';
        // }
        // if (value === 6) {
        //     diePosition = '-64px -128px';
        // }
        // if (kept === false) {
        //     diePosition = '0px -192px';
        // }
    
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