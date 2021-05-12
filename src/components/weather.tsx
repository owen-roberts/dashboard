import { Component } from "react";
interface IProps { }
interface IState {
    loading: Boolean,
    currentTemp?: Number,
    feelsLike?: Number
}

const { 
    REACT_APP_LOCATION_LAT, 
    REACT_APP_LOCATION_LON,
    REACT_APP_WEATHER_API_KEY
} = process.env;

const requestUrl = 'https://api.openweathermap.org/data/2.5/onecall?'
    + `lat=${REACT_APP_LOCATION_LAT}`
    + `&lon=${REACT_APP_LOCATION_LON}`
    + `&appid=${REACT_APP_WEATHER_API_KEY}`
    + `&exclude="current,minutely,hourly,alerts`
    + `&units=metric`
;

export default class Weather extends Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        this.state = {
            loading: true
        }
    }

    componentDidMount = async () => {
        await fetch(requestUrl)
        .then(response => response.json())
        .then(json => this.setState({ 
            currentTemp: Math.round(json.current.temp * 10) / 10,
            feelsLike: Math.round(json.current.feels_like * 10) / 10,
            loading: false 
        }));
    }

    render = () => {
        if (this.state.loading) {
            return (
                <div>Loading</div>
            )
        } else {
            return (
                <div>
                    <div className="medium bright">Edinburgh, GB</div>
                    <div className="large bright">{this.state.currentTemp}°C</div>
                    <div className="small">Feels like {this.state.feelsLike}°C</div>
                </div>
            );
        }
    }
}