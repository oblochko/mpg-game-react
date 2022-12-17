import {Action} from "./Action";
import s1 from "../assets/slider/domik.png";
import s2 from "../assets/slider/armia.png";

export class Unit {

    id: number;
    posId: number;
    logo?: string;
    actions: Action[];
    name: string;

    constructor(id: number, posId: number, name: string, actions: Action[]) {
        this.id = id;
        this.posId = posId;
        this.name = name;
        this.actions = actions;
        this.logo = this.getLogo();
    }

    getLogo() : string {
        return this.logo = this.getRandomInt(2) === 1 ? s1 : s2;
    }

    getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }
}