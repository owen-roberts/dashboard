export default class Day {
    constructor(date: Date, temp: Number, icon: String) {
        this.date = date;
        this.temp = temp;
        this.icon = icon;
    }
    date: Date
    temp: Number
    icon: String
}