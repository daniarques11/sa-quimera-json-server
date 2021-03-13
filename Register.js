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
