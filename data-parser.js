const fs = require('fs');
/**
 * Representa un registro de reserva
 */
 function Register(user, room, day, startTime, finishTime, payed, pricePerHour) {
    this.user = user;
    this.room = room;
    this.day = day;
    this.startTime = startTime;
    this.finishTime = finishTime;
    this.payed = payed;
    this.pricePerHour = pricePerHour;
    this.hours = new Date(Math.abs(this.startTime - this.finishTime)).getUTCHours()
    this.cost = this.hours * this.pricePerHour
}


let singleRegister = new Register("Ejemplo-user", "small", new Date(2021, 3, 11), new Date(2021, 3, 11, 10, 30), new Date(2021, 3, 11, 12, 30), true, 15);

let data = Array.of(singleRegister);
data.push(new Register("Dani", "both", new Date(2021, 7, 11), new Date(2021, 7, 12, 10, 30), new Date(2021, 7, 12, 16, 30), false, 25));
data.push(new Register("Jaume", "small", new Date(2021, 1, 11), new Date(2021, 1, 11, 3, 30), new Date(2021, 1, 11, 6, 30), true, 10));

data.push(new Register("usuari.recurrent", "big", new Date(2021, 6, 18), new Date(2021, 6, 18, 8, 30), new Date(2021, 6, 18, 11, 30), true, 24));

data.push(new Register("usuari.recurrent", "big", new Date(2021, 6, 19), new Date(2021, 6, 18, 8, 30), new Date(2021, 6, 18, 11, 30), true, 24));

data.push(new Register("usuari.recurrent", "big", new Date(2021, 6, 20), new Date(2021, 6, 18, 8, 30), new Date(2021, 6, 18, 11, 30), true, 24));

data.push(new Register("usuari.recurrent", "big", new Date(2021, 6, 21), new Date(2021, 6, 18, 8, 30), new Date(2021, 6, 18, 11, 30), true, 24));

data.push(new Register("usuari.recurrent", "big", new Date(2021, 6, 22), new Date(2021, 6, 18, 8, 0), new Date(2021, 6, 18, 11, 30), true, 24));

fs.writeFileSync("./main/registers.json", JSON.stringify(data));