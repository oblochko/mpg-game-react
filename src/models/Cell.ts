import {Board} from "./Board";
import {Army} from "./Army";

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

    moveArmy(target: Cell) {
        if(this.army && this.army?.canMove(target)) {
            target.setArmy(this.army);
            this.army = null;
        }
    }
}
