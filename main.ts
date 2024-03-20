import Character from "./characters.ts"
import Enemy from "./enemis.ts"
import Item from "./items.ts"


const warrior = new Character('Warrior', 100,20,10,7,1,1,5,'wrath_Of_God');
const mage = new Character('Mage', 70,100,1,1,10,7,5,'firebolt');
const paladin = new Character('Paladin', 110,50,5,7,5,7,3,'protection');
const barbar = new Character('Barbar', 100,10,10,5,1,1,8,'destruction');
const priest = new Character('Priest', 60,100,4,6,5,6,1,'healing');
const thief = new Character('Thief', 80,70,7,4,7,4,10,'theft');

const characters: Character[] = [warrior, mage, paladin, barbar, priest, thief]
const chosenCharacter  = [];


console.log("welcome to the this TypeScript RPG !");
console.log("Rules...");
console.log("Firsting first build your team by choosing 3 characters !");
let count= 0;
for(const char of characters) {
    count++;
    console.log(count, '->',char.name);
}
while (chosenCharacter.length !== 3) {
    let playerResponse = parseInt(prompt('Type the number of character you want ->'))
    console.log(`you chose the ${characters[playerResponse-1].name}`)
    chosenCharacter.push(characters[playerResponse-1].name)  
}
console.log(`This is your team :\n -${chosenCharacter.join('\n -')}`)