import Character from "./Character.ts";
import Warrior from './Heros/Warrior.ts'
import Mage from './Heros/Mage.ts'
import Paladin from './Heros/Paladin.ts'
import Priest from './Heros/Priest.ts'
import Thief from './Heros/Thief.ts'
import Barbar from './Heros/Barbar.ts'

export default class Menu {

    characterChoice(): Character[] {
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
    
        console.log(`This is your team:`);
        chosenCharacters.forEach(character => console.log(character.name));
        
        return chosenCharacters; // Retourne les personnages choisis
    }
}
    
    // Utilisation de la méthode characterChoice()
    const menu = new Menu();
    menu.characterChoice();

    console.log(menu.characterChoice());
