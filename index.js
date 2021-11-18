var SuperHeroe = /** @class */ (function () {
    function SuperHeroe(nombre, peleas, esHumano) {
        this.nombre = nombre;
        this.peleas = peleas;
        this.esHumano = esHumano;
    }
    return SuperHeroe;
}());
var hombreAraña = new SuperHeroe("Adam", 3, false);
var batman = new SuperHeroe("Carlos", 1, true);
var superman = new SuperHeroe("Pedro", 0, true);
var thor = new SuperHeroe("thor", 5, true);
var todosSuperHeroes = [hombreAraña, batman, superman, thor];
todosSuperHeroes.forEach(function (superH) { return console.log(superH.nombre); });
