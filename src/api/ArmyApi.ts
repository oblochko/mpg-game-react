import Fetch from "../fetch/Fetch";
import {Army} from "../models/Army";

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
}