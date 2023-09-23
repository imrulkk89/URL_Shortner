import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { UrlShortnerService } from './url-shortner.service';

@Controller('url-shortner')
export class UrlShortnerController {
    constructor(private urlShortnerService: UrlShortnerService){}
   
    @Post()
    @UseGuards(AuthGuard())
    async createShortUrl(@Body() {url: longUrl}, @Res() response: Response):Promise<Response> {        
        const shortUrl: string = await this.urlShortnerService.shortenUrl(longUrl)
        return response.json({"shortUrl": shortUrl});
    }
}
