import {Board} from "./Board";
import {Army} from "./Army";
import ArmyApi from "../api/ArmyApi";
import {ArmyMove} from "./AmyMove";

export class Cell {
    x: number;
    y: number;
    id: number;
    board: Board;
    army: Army | null;
    available: boolean = false;

    constructor(id: number, board: Board) {
        this.id = id;
        this.board = board;
        this.x = id % board.w;
        this.y = parseInt(String(id / board.h));
        this.army = null;
    }

    setArmy(army: Army) {
        this.army = army;
        this.army.cell = this;
    }

    async moveArmy(target: Cell, token: string | undefined) {
        if(this.army && this.army?.canMove(target)) {
            let armyMove = new ArmyMove(this.army.id, target.id);
            return ArmyApi.armyMove(armyMove, token).then(r => {
                target.setArmy(this.army!);
                this.army = null;
            })
            .catch( c => console.log(''))
            /*target.setArmy(this.army!);
            this.army = null;*/
        }
    }
}
