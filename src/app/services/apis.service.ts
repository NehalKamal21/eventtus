import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/timeout';

export const ENDPOINT: string = "https://jsonplaceholder.typicode.com/";

@Injectable()
export class ConfigClass {
    static get getEndpoint() {
        return ENDPOINT;
    }
}

@Injectable()
export class Service {

    constructor(private http: Http) { }
    getPosts() {
        return new Promise((resolve, reject) => {
            this.http.get(ConfigClass.getEndpoint + "posts").timeout(3000).subscribe(res => {
                try {
                    resolve(res.json());
                }
                catch (e) {
                    reject(false);
                }
            },
                error => {
                    reject(error);
                });
        });
    };
}
