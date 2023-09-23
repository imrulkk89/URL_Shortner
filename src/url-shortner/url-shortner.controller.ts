import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { UrlShortnerService } from './url-shortner.service';
import { UrlMapping } from './schemas/url-mapping.schema';

@Controller('url-shortner')
export class UrlShortnerController {
    constructor(private urlShortnerService: UrlShortnerService){}
   
    @Post()
    async createShortUrl(@Body() {url: longUrl}, @Res() response: Response):Promise<Response> {        
        const shortUrl: string = await this.urlShortnerService.shortenUrl(longUrl)
        return response.json({"shortUrl": shortUrl});
    }
}
