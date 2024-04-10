import Character from "./Character.ts";
import Warrior from './Heros/Warrior.ts'
import Mage from './Heros/Mage.ts'
import Paladin from './Heros/Paladin.ts'
import Priest from './Heros/Priest.ts'
import Thief from './Heros/Thief.ts'
import Barbar from './Heros/Barbar.ts'

export default class Menu {

<<<<<<< HEAD
public characterChoice() {
=======
    characterChoice() {
>>>>>>> stan
        const warrior = new Warrior()
        const mage = new Mage()
        const paladin = new Paladin()
        const priest = new Priest()
        const thief = new Thief()
        const barbar = new Barbar()
<<<<<<< HEAD

        const characters: Character[] = [warrior, mage, paladin, priest, thief, barbar]
        const chosenCharacters : string[] = [];
        

=======
    
        const characters: Character[] = [warrior, mage, paladin, priest, thief, barbar]
        const chosenCharacters: string[] = [];
    
>>>>>>> stan
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
<<<<<<< HEAD
            console.log(`You chose ${characters[playerResponse - 1].name}`);
            chosenCharacters.push(characters[playerResponse - 1].name);
=======
    
            // Vérifier si le personnage a déjà été choisi
            if (chosenCharacters.includes(characters[playerResponse - 1].name)) {
                console.log(`You already chose the ${characters[playerResponse - 1].name}`);
            } else {
                console.log(`You chose ${characters[playerResponse - 1].name}`);
                chosenCharacters.push(characters[playerResponse - 1].name);
            }
>>>>>>> stan
        }
    
        console.log(`This is your team:\n -${chosenCharacters.join('\n -')}`);
    }
    

    public display() {
        console.log("Welcome in the game !");
        console.log("Menu:");
        console.log("1. Play");
        console.log("2. Info");
        console.log("3. Quit");

        const playerResponse = 5;

        while (playerResponse !== 1 && 3) {
        const playerResponse = parseInt(prompt("Type the number you want ?"));
        if(playerResponse == 1){
            menu.characterChoice();
        }
        if (playerResponse >= 1 && playerResponse <= 3) {
        return (playerResponse)
        } else {
            console.log("Enter a correct number between 1 and 3: ");
        }

    }
    }
}

const menu = new Menu();
//Lancez le jeu en démarrant le menu
menu.display(); // appelle la méthode display pour afficher le menu