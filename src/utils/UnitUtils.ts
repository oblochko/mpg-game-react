import {Unit} from "../models/Unit";
import {Action} from "../models/Action";

import armia from '../assets/slider/armia.png';
import domik from '../assets/slider/domik.png';
import {ActionEnum} from "../models/ActionEnum";

export class UnitUtils {

    static getUnits() {
        let units = new Array<Unit>;

        let actions1 = new Array<Action>;
        actions1.push(new Action(1,'Стена пик', 2, ActionEnum.HOLD));
        actions1.push(new Action(2, 'Стена пик', 2, ActionEnum.HOLD));
        let unit1 = new Unit(1, 1, 'Копейщик', actions1);
        unit1.logo = armia;
        units.push(unit1);

        let actions2 = new Array<Action>;
        actions2.push(new Action(3,'Выстрел', 2, ActionEnum.HOLD));
        actions2.push(new Action(4, 'Выстрел', 2, ActionEnum.HOLD));
        let unit2 = new Unit(2,2, 'Лучник', actions2);
        unit2.logo = domik;
        units.push(unit2);

        let actions3 = new Array<Action>;
        actions3.push(new Action(5, 'Наскок', 5, ActionEnum.HOLD));
        actions3.push(new Action(6, 'Ближний бой', 5, ActionEnum.HOLD));
        let unit3 = new Unit(3, 3, 'Рыцарь', actions3);
        unit3.logo = armia;
        units.push(unit3);

        return units;
    }
}