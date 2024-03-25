import Characters from "./characters";
import Character from "./characters";
class Menu {
    selection : string;
    setOfPossibility : string;

    characterChoice(){
        console.log("welcome to the this TypeScript RPG !");
        console.log("Rules...");
        console.log("Firsting first build your team by choosing 3 characters !");
        let count= 0;
        for(const char of Characters) {
            count++;
            console.log(count, '->',char.name);
        }
}


}
