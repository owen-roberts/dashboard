import React, { Component } from 'react'
import Moment from 'react-moment';
interface IProps {}
interface IState {
    datetime : Date
}

const updateInterval = 1;

export default class Clock extends Component<IProps, IState> {
    constructor(props: IProps){
        super(props);
        this.state = {
            datetime: new Date()
        };
    }

    componentDidMount = () => setInterval(() => {
        this.setState({ datetime: new Date() })
    }, updateInterval * 1000);

    render = () => {
        return (
           <div className='container border-bottom'>
                <Moment date={this.state.datetime} format='dddd, Do MMMM yyyy' className='medium bright'/>
                <div>
                    <Moment className='large bright' date={this.state.datetime} format='HH:mm'/>
                    <span className="text-fade">
                        <Moment className='medium normal align-top' date={this.state.datetime} format='ss'/>
                    </span>
                </div>
           </div>
        );
    }
}
