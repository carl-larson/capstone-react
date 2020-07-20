import React from 'react';

class Row extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            // value: Number(props.value),
            // selected: props.selected,
            // kept: props.kept
        
            xRolledPosition: 0,
            xKeptPosition: -64,
            yPosition: -((this.props.value - 1) * 64),
            selectedcolor: 'gray',
            keptcolor: 'gray',
            rolledPosition: `${this.xRolledPosition}px ${this.yPosition}px`,
            keptPosition: `${this.xKeptPosition}px ${this.yPosition}px`
        };
    }
    
    componentDidMount() {

    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps)
        {console.log(this.props.value, this.props.selected, this.props.kept)
        if (this.props.selected && !this.props.kept) {
            this.setState({selectedcolor: 'red'});
        } else if (this.props.selected && this.props.kept) {
            this.setState({selectedcolor: 'gray',
                keptcolor: 'red', 
                xRolledPosition: -64,
                xKeptPosition: 0});
        } else {
            this.setState({selectedcolor: 'gray',
            keptcolor: 'gray',
            xRolledPosition: 0,
            xKeptPosition: -64});
        }}


    }

    render() {
        // let value = this.props.value;
        // let selected = this.props.selected;
        // let kept = this.props.kept;
        // console.log(value, selected, kept)
        // let xRolledPosition = 0;
        // let xKeptPosition = -64;
        // let yPosition = -((value - 1) * 64);
        
        // let selectedcolor = 'gray';
        // let keptcolor = 'gray';
        // selected ? bordercolor = 'red' : bordercolor = 'gray';
        // if (this.props.selected && !this.props.kept) {
        //     this.selectedcolor = 'red';
        // } else if (this.props.selected && this.props.kept) {
        //     this.selectedcolor = 'gray';
        //     this.keptcolor = 'red';
        //     this.xRolledPosition = -64;
        //     this.xKeptPosition = 0;
        // } else {
        //     this.selectedcolor = 'gray';
        //     this.keptcolor = 'gray';
        //     this.xRolledPosition = 0;
        //     this.xKeptPosition = -64;
        // }
        // let rolledPosition = `${this.xRolledPosition}px ${this.yPosition}px`;
        // let keptPosition = `${this.xKeptPosition}px ${this.yPosition}px`;

        return (
            <div className='row'>
                <div className='rolled dice'
                    style={{backgroundPosition: this.rolledPosition, borderColor: this.selectedcolor}}>
                </div>
                <div className='kept dice' style={{backgroundPosition: this.keptPosition, borderColor: this.keptcolor}}>
                </div>
            </div>
        )
    }
}

export default Row