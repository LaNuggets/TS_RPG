import Character from "./Character.ts";

export default class Menu {
    
   
characterChoice() {
        const characters: Character[] = [warrior, mage, paladin, barbar, priest, thief];
        const chosenCharacters : string[] = [];
        

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
            console.log(`You chose ${characters[playerResponse - 1].name}`);
            chosenCharacters.push(characters[playerResponse - 1].name);
        }

        console.log(`This is your team:\n -${chosenCharacters.join('\n -')}`);
    }

    display() {
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


