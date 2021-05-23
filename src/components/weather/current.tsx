interface IProps {
    currentTemp?: Number
    feelsLikeTemp?: Number
}

export default function currentWeather(props: IProps) {
    return (
        <div className="container border-bottom">
            <div className="medium bright">Edinburgh, GB</div>
            <div className="large bright">{props.currentTemp}°C</div>
            <div className="small">Feels like {props.feelsLikeTemp}°C</div>
        </div>
    )
}
