import Icon from './weatherIcon';

interface IProps {
    name: String
    icon: String
    temp: Number
    showTemp: Boolean
}

export default function forecastDay(props: IProps) {
    console.log(props.showTemp);
    return (
        <div className="day">
            { props.showTemp === true &&
                <span className='temp' style={{ display: props.showTemp ? 'block' : 'none' }}>
                    {props.temp}
                </span>
            }
            { props.showTemp === false &&
                   <Icon iconCode={props.icon} />
            }
            <span className="title">
                {props.name}
            </span>
        </div>
    )
}
