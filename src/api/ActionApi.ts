import {Action} from "../models/Action";
import Fetch from "../fetch/Fetch";

export default class ActionApi {

    static UPDATE_ALL: string = 'http://localhost:8082/api/actions';

    static async updateAll(actions: Action[]): Promise<any> {
        return await Fetch.post(ActionApi.UPDATE_ALL, actions);
    }
}