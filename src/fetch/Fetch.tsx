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

    static post<T>(url: string, body: T, token: string | undefined): Promise<any> {
        const requestHeaders: HeadersInit = new Headers();
        requestHeaders.set('Content-Type', 'application/json')
        if (token) {
            requestHeaders.set('Authorization', `Bearer ${token}`)
        }
        return fetch(url, {
            method: 'POST',
            headers: requestHeaders,
            body: (body != null ? JSON.stringify(body) : null),
        }).then(response => {
                /*if (!response.ok) {
                    throw new Error(response.statusText)
                }*/
                return response;
            })
    }
}