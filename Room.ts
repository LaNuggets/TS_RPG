export default class Room {
    type : string;
    isVisited : boolean;
    description : string;

    constructor (description : string, type : string, isVisited : boolean) {
        this.type = type;
        this.description = description;
        this.isVisited = false;
    }

    hasBeenVisited(): boolean {
        return this.isVisited;
    }

    markAsVisited() {
        this.isVisited = true;
    }
}

