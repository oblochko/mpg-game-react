export class MoveBoard {
    horSlider: number;
    verSlider: number;

    constructor(horSlider: number = 0, verSlider: number = 0) {
        this.horSlider = horSlider;
        this.verSlider = verSlider;
    }

    right(widthFrame: number, widthMap: number, bias: number) {
        let maxCountHor = Math.ceil((widthMap - widthFrame) / bias);
        if(this.horSlider != maxCountHor)
            this.horSlider++;
    }

    left() {
        if(this.horSlider != 0)
            this.horSlider--;
    }

    down(heightFrame: number, heightMap: number, bias: number) {
        let maxCountVer = Math.ceil((heightMap - heightFrame) / bias);
        if(this.verSlider != maxCountVer)
            this.verSlider++;
    }

    up() {
        if(this.verSlider != 0)
            this.verSlider--;
    }

    makeMoveBoard() {
        return new MoveBoard(this.horSlider, this.verSlider)
    }
}