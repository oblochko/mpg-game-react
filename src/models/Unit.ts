import {Action} from "./Action";
import s1 from "../assets/slider/domik.png";
import s2 from "../assets/slider/armia.png";

import p1 from "../assets/profile/1.jpg";
import p2 from "../assets/profile/2.jpg";
import p3 from "../assets/profile/3.jpg";
import p4 from "../assets/profile/4.jpg";

export class Unit {

    id: number;
    posId: number;
    logo?: string;
    logoProfile?: string;
    actions: Action[];
    name: string;

    constructor(id: number, posId: number, name: string, actions: Action[]) {
        this.id = id;
        this.posId = posId;
        this.name = name;
        this.actions = actions;
        this.logo = this.getLogo();
        this.logoProfile = this.getLogoProfile();
    }

    getLogo() : string {
        return this.logo = this.getRandomInt(2) === 1 ? s1 : s2;
    }

    getLogoProfile() : string {
        let r: number = this.getRandomInt(4);
        if(r == 0)
            return p1;
        if(r == 1)
            return p2;
        if(r == 3)
            return p3;
        if(r == 4)
            return p3;
        return p1;
    }

    getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }
}