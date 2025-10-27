let pokemons = ["Pikachu", "Raichu", "Bulbasaur", "Mewtwo", "Charizard"];
let yPos;

function setup(){
    createCanvas(800, 500);
    background("black")
    for (let index = 0; index < pokemons.length; index++) {
        textSize(20);
        textAlign(CENTER, CENTER);
        fill("pink");
        text(pokemons[0], 400, 150);
        text(pokemons[1], 400, 200);
        text(pokemons[2], 400, 250);
        text(pokemons[3], 400, 300);
        text(pokemons[4], 400, 350);
    } 
    yPos = 100;
}