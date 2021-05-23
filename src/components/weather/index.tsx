import { Component } from "react";
import CurrentWeather from './current';
import Forecast from './forecast';
import DayData from './dayData';

interface IProps { }
interface IState {
    loading: Boolean,
    currentTemp?: Number,
    feelsLike?: Number
    forecast?: Array<DayData>
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
    + `&units=metric`;

export default class Weather extends Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        this.state = {
            loading: true,
        }
    }

    componentDidMount = async () => {
        await fetch(requestUrl)
            .then(response => response.json())
            .then(json => this.setState({
                currentTemp: this.roundToOnePlace(json.current.temp),
                feelsLike: this.roundToOnePlace(json.current.feels_like),
                forecast: this.parseForecast(json),
                loading: false
            }));
    }

    parseForecast = (json: any) => {
        const numDaysToForecast = 5;
        return json.daily
            .slice(1, numDaysToForecast + 1)
            .map((day: any) => new DayData(
                new Date(day.dt * 1000),
                this.roundToOnePlace(day.temp.day),
                day.weather[0].main
            ));
    }

    roundToOnePlace = (value: number) => Math.round(value * 10) / 10;

    render = () => {
        if (this.state.loading) {
            return (
                <div>Loading</div>
            )
        } else {
            return (
                <div>
                    <CurrentWeather currentTemp={this.state.currentTemp} feelsLikeTemp={this.state.feelsLike} />
                    <Forecast days={this.state.forecast} />
                </div>
            );
        }
    }
}