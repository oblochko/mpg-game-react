export class ArmyDto {
    posId: number;
    nameState: string;

    constructor(posId: number, nameState: string) {
        this.posId = posId;
        this.nameState = nameState;
    }
}