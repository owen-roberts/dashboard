import React, { Component } from 'react';
import Day from './day';

interface IProps {
}

interface IState {
    showForecastTemps: Boolean
}

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
        <div className={`container forecast ${this.state.showForecastTemps ? 'shadow' : ''}`} onMouseEnter={this.showTemps} onMouseLeave={this.hideTemps}>
            <Day name="Fri" weather="" temp={7.6} showTemp={this.state.showForecastTemps} />
            <Day name="Sat" weather="" temp={8.1} showTemp={this.state.showForecastTemps} />
            <Day name="Sun" weather="" temp={10.2} showTemp={this.state.showForecastTemps} />
            <Day name="Mon" weather="" temp={25.5} showTemp={this.state.showForecastTemps} />
            <Day name="Tues" weather="" temp={16} showTemp={this.state.showForecastTemps} />
        </div>
    )
}
