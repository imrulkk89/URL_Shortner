import { Injectable } from '@nestjs/common';
import ShortUniqueId from 'short-unique-id';
import * as URL from 'url';

@Injectable()
export class HelperService {
    private readonly uid: ShortUniqueId;
    constructor(){
        this.uid = new ShortUniqueId({length: 5});        
    }

    generateShortUrl(): string {    
        return `${this.uid.randomUUID()}`;
    }

    checknFixUrl(url: string): string {
        
        const parsedUrl = URL.parse(url);

        //checking if http/https protocol is exisit in the url. If not, will add here
        if((parsedUrl.protocol !== "http:") && (parsedUrl.protocol !== "https:")){
            url = `http://${url}`;
        }

        url = url.replace(/\/$/, ''); //remove last "back slash" if provided

        return url;
    }
}
