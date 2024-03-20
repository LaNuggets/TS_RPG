import Character from "./characters.ts"
import Enemy from "./enemis.ts"

const warrior = new Character('Warrior', 100,20,10,7,1,1,5,'wrath_Of_God');
const mage = new Character('Mage', 70,100,1,1,10,7,5,'firebolt');
const paladin = new Character('Paladin', 110,50,5,7,5,7,3,'protection');
const barbar = new Character('Barbar', 100,10,10,5,1,1,8,'destruction');
const priest = new Character('Priest', 60,100,4,6,5,6,1,'healing');
const thief = new Character('Thief', 80,70,7,4,7,4,10,'theft');


const snake = new Enemy('Snake', 100,7,7,3,3,5);
const ogre = new Enemy('Ogre', 100,7,7,3,3,5);
const goblin = new Enemy('Goblin', 100,7,7,3,3,5);
const orque = new Enemy('Orque', 100,7,7,3,3,5);
const spider = new Enemy('Spider', 100,7,7,3,3,5);


const characters: Character[] = [warrior, mage, paladin, barbar, priest, thief]
const enemis : Enemy[] = [snake, ogre, goblin, orque, spider]


for (const data of characters) {
    console.log(data.pv)
}



//todo let damage = warrior.physical_Defense - snake.physical_Attack
//todo warrior.pv -= damage
