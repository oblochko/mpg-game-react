import {Cell} from "./Cell";
import {Army} from "./Army";

export class Board {
    cells: Cell[] = [];
    w: number = 23;
    h: number = 23;

    initCells() {
        for(let i = 0; i < (this.w * this.h); i++) {
            this.cells.push(new Cell(i, this));
        }
    }

    addArmies() {

    }

    selectСellsToMove(target: Cell) {
        this.removeAvailable();
        const x = target.x - 1;
        const y = target.y - 1;
        for(let j = y; j < y + 3; j++)
            for(let i = x; i < x + 3; i++)
                this.tag(i, j, target);
    }

    removeAvailable() {
        this.cells.forEach(cell =>
            cell.available = false
        );
    }

    tag(x: number, y: number, target: Cell) {
        if(!(target.x === x && target.y === y)
                    && this.isExist(x, y)) {
            const cell = this.getCell(x, y)
            if(cell) {
                cell.available = true;
            }
        }
    }

    isExist(x: number, y: number) {
        return (x >= 0 && x < this.w && y >= 0 && y < this.h);
    }

    getCell(x: number, y: number) {
        const id = x + y * this.h;
        if(id < 0 || id >= this.w * this.h)
            return null;
        return this.cells[id];
    }

    getCopyBoard(): Board {
        const newBoard = new Board();
        newBoard.cells = this.cells;
        return newBoard;
    }
}