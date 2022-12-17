import {Army} from "../models/Army";

export default class Fetch {
    static api<T>(url: string): Promise<T> {
        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response.json().then(data => data as T);
            })
    }

    static post<T>(url: string, body: T): Promise<any> {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(body)
        }).then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response.json();
            })
    }
}