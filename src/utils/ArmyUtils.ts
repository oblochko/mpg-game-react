import {Army} from "../models/Army";
import {ArmyDto} from "../dto/ArmyDto";
import {StateEnum} from "../models/StateEnum";

export class ArmyUtils {

    static getArmies() {
        let armies = new Array<ArmyDto>;
        armies.push(new ArmyDto(1, StateEnum.DASKIA));
        armies.push(new ArmyDto(2, StateEnum.LIKONIA));
        armies.push(new ArmyDto(3, StateEnum.DASKIA));
        return armies;
    }
}