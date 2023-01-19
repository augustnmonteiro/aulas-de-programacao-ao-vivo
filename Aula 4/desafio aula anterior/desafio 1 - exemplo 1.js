//[vertebrado|intertebrado, animal]
let animais = [["vertebrado","baleia"],["vertebrado","pinguim"],["vertebrado","peixe-boi-da-amazônia"],["vertebrado","peixe-espada"],["vertebrado","arara"],["vertebrado","rato"],["vertebrado","cobra"],["vertebrado","lagarto"],["vertebrado","macaco"],["invertebrado","polvo"],["invertebrado","lula"],["invertebrado","ostras"],["invertebrado","caracóis"],["invertebrado","insetos"],["invertebrado","aracnídeos"],["invertebrado","crustáceos"]];

let vertebrados = [];
let invertebrados = [];


for ( let i =0; i<animais.length; i++ ) {
    if ( animais [i][0] == "vertebrado" ) {
        vertebrados.push(animais[i][1]);
    } else if ( animais [i][0] == "invertebrado") {
        invertebrados.push(animais[i][1])
    }
}

console.log(vertebrados)
console.log(invertebrados)