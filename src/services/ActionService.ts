import {Action} from "../models/Action";
import ActionApi from "../api/ActionApi";
import {Unit} from "../models/Unit";

export default class ActionService {

    static updateAll(actions: Action[], token: string | undefined) {
        ActionApi.updateAll(actions, token);
    }

    static initActions(actions: Action[]) {
        return actions.map(action => new Action(action.id, action.name, action.damage, action.typeActionName));
    }
}