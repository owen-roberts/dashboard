interface IProps {
    name: String
    weather: String
    temp: Number
    showTemp: Boolean
}

export default function forecastDay(Props: IProps) {
    return (
        <div className="day">
            <span className='temp' style={{ display: Props.showTemp ? 'block' : 'none' }}>
                {Props.temp}
            </span>
            <span className="title">
                {Props.name}
            </span>
        </div>
    )
}
