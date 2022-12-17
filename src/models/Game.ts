import {Board} from "./Board";
import {ArmyDto} from "../dto/ArmyDto";
import {Army} from "./Army";
import {ArmyUtils} from "../utils/ArmyUtils";
import {Unit} from "./Unit";

export class Game {
    board: Board;
    armies: Army[] = [];
    bias?: number;

    constructor() {
        this.board = new Board();
    }

    async initGame() {
        await this.initBoard();
        //await this.addArmies(ArmyUtils.getArmies())
    }

    initBoard() {
        this.board.initCells();
    }



    addArmies(armiesDto: ArmyDto[]) {
        armiesDto.forEach(army => {
            let units: Unit[] = [];
            //this.armies.push(new Army(1 army.posId, this.getCell(army.posId), army.nameState, units))
        })
    }

    getCell(posId: number) {
        return this.board.cells[posId];
    }
}