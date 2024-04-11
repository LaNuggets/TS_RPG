import Character from "./Character.ts";
import Warrior from './Heros/Warrior.ts'
import Mage from './Heros/Mage.ts'
import Paladin from './Heros/Paladin.ts'
import Priest from './Heros/Priest.ts'
import Thief from './Heros/Thief.ts'
import Barbar from './Heros/Barbar.ts'

import Ogre from './Enemies/Ogre.ts';
import Goblin from './Enemies/Goblin.ts';
import Orque from './Enemies/Orque.ts';
import Snake from './Enemies/Snake.ts';
import Spider from './Enemies/Spider.ts';

import FightRoom from "./Rooms/FightRoom.ts"
import Fight from "./Fight.ts"


export default class Menu {

    characterChoice():Character[] {
        const warrior = new Warrior()
        const mage = new Mage()
        const paladin = new Paladin()
        const priest = new Priest()
        const thief = new Thief()
        const barbar = new Barbar()
    
        const characters: Character[] = [warrior, mage, paladin, priest, thief, barbar]
        const chosenCharacters: Character[] = [];
    
        console.log("Welcome to this TypeScript RPG!");
        console.log("Rules...");
        console.log("First, build your team by choosing 3 characters!");
    
        let count = 0;
        for (const char of characters) {
            count++;
            console.log(count, '->', char.name);
        }
    
        while (chosenCharacters.length !== 3) {
            const playerResponse = parseInt(prompt('Type the number of the character you want ->'));
    
            // Vérifier si le personnage a déjà été choisi
            if (chosenCharacters.includes(characters[playerResponse - 1])) {
                console.log(`You already chose the ${characters[playerResponse - 1].name}`);
            } else {
                console.log(`You chose ${characters[playerResponse - 1].name}`);
                chosenCharacters.push(characters[playerResponse - 1]);
            }
        }
        console.log('This is your team:')
        for(let i=0;i<chosenCharacters.length;i++){
            console.log(`-\x1b[32m${chosenCharacters[i].name}\x1b[0m`);
        }
        return chosenCharacters;
    }
    

    display():Character[] {
        console.log("Welcome in the game !");
        console.log("Menu:");
        console.log("1. Play");
        console.log("2. Info");
        console.log("3. Quit");

        const playerResponse = 5;

        while (playerResponse !== 1 && 3) {
        const playerResponse = parseInt(prompt("Type the number you want ?"));
        if(playerResponse == 1){
           const ret =this.characterChoice();
            return ret
        }
        if (playerResponse >= 1 && playerResponse <= 3) {
         (playerResponse)
        } else {
            console.log("Enter a correct number between 1 and 3: ");
        }

    }
    }

    generateEnemies():[FightRoom, Character[]]{
        const snake = new Snake();
        const goblin = new Goblin();
        const spider = new Spider();
        const orque = new Orque();
        const ogre = new Ogre();
        const enemiesFigthers:Character[]=[snake,goblin,spider,orque,ogre];

        const enemy = new Fight(enemiesFigthers);
        const enemiesTeam = enemy.enemieTeam();
        const adversaire = new FightRoom(enemiesTeam);
        return [adversaire, enemiesTeam]
    }
}