import {Action} from "../models/Action";
import ActionApi from "../api/ActionApi";
import {Unit} from "../models/Unit";

export default class ActionService {

    static updateAll(actions: Action[]) {
        ActionApi.updateAll(actions);
    }

    static initActions(actions: Action[]) {
        return actions.map(action => new Action(action.id, action.name, action.damage, action.typeActionName));
    }
}