import { Injectable } from '@nestjs/common';
import ShortUniqueId from 'short-unique-id';
import * as URL from 'url';

@Injectable()
export class HelperService {
    private readonly uid: ShortUniqueId;
    constructor(){
        this.uid = new ShortUniqueId({length: parseInt(process.env.SHORT_ID_LENGTH)});        
    }

    generateShortUrl(): string {    
        return `${this.uid.randomUUID()}`;
    }

    checknFixUrl(url: string): string {
        
        let parsedUrl = URL.parse(url);

        // Make all https to http to keep consitancy in the string in DB
        if(parsedUrl.protocol === "https:"){
            url = url.replace(/^https:/, "http:")
        }

        parsedUrl = URL.parse(url);

        //checking if http/https protocol is exisit in the url. If not, will add here
        if(parsedUrl.protocol !== "http:"){
            url = `http://${url}`;
        }
        
        url = url.replace(/\/$/, ''); //remove last "back slash" if provided

        return url;
    }
}
