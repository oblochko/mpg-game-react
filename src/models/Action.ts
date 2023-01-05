export class Action {

    id: number;
    name: string;
    damage: number;
    typeActionName: string;
    modified: boolean;

    constructor(id: number, name: string, damage: number, typeActionName: string) {
        this.id = id;
        this.name = name;
        this.damage = damage;
        this.typeActionName = typeActionName;
        this.modified = false;
    }



}