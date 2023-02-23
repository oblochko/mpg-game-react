import Fetch from "../fetch/Fetch";
import {Army} from "../models/Army";
import {NewPos} from "../models/NewPos";
import {ArmyMove} from "../models/AmyMove";
import {useKeycloak} from "@react-keycloak/web";

export default class ArmyApi {

    static getAll(): Promise<Army[]> {
        return Fetch.api<Army[]>('http://localhost:8082/api/military/armies')
            .then(response => {
                let armies: Army[] = response;
                return armies;
            })
    }

    static async getAll2(): Promise<Army[]> {
        return await Fetch.api<Army[]>('http://localhost:8082/api/military/armies')

    }

    static async armyMove(armyMove: ArmyMove, token: string | undefined): Promise<any>  {

        return await Fetch.post(`http://localhost:8082/api/military/armyMove`, armyMove, token).then( response => {
            if (response.ok) {
                return;
            } else {
                if(response.status == '417')
                    alert('Это армия уже была походила в этом ходу')
                if(response.status == '401')
                    alert('Вы не можете передвинуть армию другого государства')
                throw new Error();
            }
        })
    }

    static async completeTheMove(token: string | undefined): Promise<any> {

        return await Fetch.post('http://localhost:8082/api/military/completeTheMove', null, token)
    }
}