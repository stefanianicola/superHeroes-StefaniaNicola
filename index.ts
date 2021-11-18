class SuperHeroe {
    constructor(
        public nombre : string,
        public peleas : number,
        public esHumano : boolean
    ){}
}

const hombreAraña = new SuperHeroe( "Adam", 3, false);
const batman = new SuperHeroe( "Carlos", 1, true);
const superman = new SuperHeroe( "Pedro", 0, true);
const thor = new SuperHeroe( "thor", 5, true);

const todosSuperHeroes = [hombreAraña,batman,superman,thor]

todosSuperHeroes.forEach(superH => console.log(superH.nombre))

