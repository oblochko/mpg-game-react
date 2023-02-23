import {Action} from "../models/Action";
import Fetch from "../fetch/Fetch";

export default class ActionApi {
    static UPDATE_ALL: string = 'http://localhost:8082/api/actions';

    static async updateAll(actions: Action[], token: string | undefined): Promise<any> {

        return await Fetch.post(ActionApi.UPDATE_ALL, actions, token).then( response => {
            if (response.ok) {
                return;
            } else {
                alert('Вы не можете передвинуть эту фишку')
            }
        })
    }
}