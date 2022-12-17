import {Army} from "../models/Army";
import {Cell} from "../models/Cell";
import ArmyApi from "../api/ArmyApi";
import {Unit} from "../models/Unit";
import ActionService from "./ActionService";

export default class ArmyService {

    static async initArmies(cells: Cell[]): Promise<Army[]> {
        let armies: Army[] = await ArmyApi.getAll();
        return armies.map(army => new Army(army.id, army.posId, cells[army.posId], army.stateName, ArmyService.initUnits(army.units)));
    }

    static initUnits(units: Unit[]): Unit[] {
        return units.map(unit => new Unit(unit.id, unit.posId, unit.name, ActionService.initActions(unit.actions)));
    }

}