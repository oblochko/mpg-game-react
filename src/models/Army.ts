import {Cell} from "./Cell";
import {StateEnum} from "./StateEnum";

import armyBlack from "../assets/army/armia_black.png";
import armyRed from "../assets/army/armia_red.png";
import {Unit} from "./Unit";

export class Army {

    id: number;
    posId: number;
    cell: Cell;
    logo?: string;
    stateName: string;
    units: Unit[];

    constructor(id: number, posId: number, cell: Cell, nameState: string, units: Unit[]) {
        this.id = id;
        this.posId = posId;
        this.cell = cell;
        this.stateName = nameState;
        this.logo = this.getLogoByNameState(nameState);
        cell.army = this;
        this.units = units;
    }

    getLogoByNameState(nameState: string) {
        if(nameState == StateEnum.DASKIA || nameState == StateEnum.TVERDOVTSY || nameState == StateEnum.JARICHI_EN) {
            return armyBlack;
        }
        if(nameState == StateEnum.LIKONIA || nameState == StateEnum.OBITALICI || nameState == StateEnum.TVERDOVTSY_EN) {
            return armyRed;
        }
        return armyBlack;
    }

    canMove(cell: Cell) {
        return !(!!cell.army);
    }

    name() {
        return 'Армия ' + this.stateName;
    }

}