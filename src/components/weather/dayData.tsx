export default class Day {
    constructor(date: Date, temp: Number, weather: String) {
        this.date = date;
        this.temp = temp;
        this.weather = weather;
    }
    date: Date
    temp: Number
    weather: String
}