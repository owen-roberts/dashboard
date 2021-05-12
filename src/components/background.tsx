import React, { Component } from 'react'
interface IProps { }
interface IState {
    image: string
}

const intervalSeconds = 60;

export class background extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { image: this.getImageForHour(new Date().getHours()) };
    }

    getImageForHour(hour:number){
        switch (true) {
            case (hour >= 23 && hour <= 4):
                return 'late-night';
            case (hour >= 22):
                return 'mid-night';
            case (hour >= 21):
                return 'early-night';
            case (hour >= 19):
                return 'late-evening';
            case (hour >= 16):
                return 'mid-evening';
            case (hour >= 15):
                return 'early-evening';
            case (hour >= 13):
                return 'late-afternoon';
            case (hour >= 12):
                return 'mid-afternoon';
            case (hour >= 10):
                return 'early-afternoon';
            case (hour >= 7):
                return 'late-morning';
            case (hour >= 5):
                return 'mid-morning'; 
            default:
                return 'early-morning';
        };
    }

    componentDidMount = () => setInterval(() => {
        this.setState({ image: this.getImageForHour(new Date().getHours()) })
    }, intervalSeconds * 1000);

    render() {
        return (
            <div className={`background ${this.state.image}`}></div>
        )
    }
}

export default background
