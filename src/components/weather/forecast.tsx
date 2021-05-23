import React, { Component } from 'react';
import Day from './day';
import DayData from './dayData';

interface IProps {
    days?: Array<DayData>
}

interface IState {
    showForecastTemps: Boolean
}

const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default class forecastWeather extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            showForecastTemps: false
        }
    }

    showTemps = () => this.setState({ showForecastTemps: true });
    hideTemps = () => this.setState({ showForecastTemps: false });

    render = () => (
        <div className={`container forecast ${this.state.showForecastTemps ? 'shadow' : ''}`} onPointerEnter={this.showTemps} onPointerLeave={this.hideTemps}>
            {
                this.props.days?.map((day, index) => 

                    <Day key={index} name={dayNames[day.date.getDay()]} icon={day.icon} temp={day.temp} showTemp={this.state.showForecastTemps} />

                )
            }
        </div>
    )
}
