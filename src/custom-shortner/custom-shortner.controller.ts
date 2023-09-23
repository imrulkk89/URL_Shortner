import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { CustomShortnerService } from './custom-shortner.service';
import { ICustomShortnerBody } from '../types'

@Controller('custom-shortner')
export class CustomShortnerController {
  constructor(private readonly customShortnerService: CustomShortnerService) {}
  
  @Post()
  async createCustomShortner(@Body() body: ICustomShortnerBody, @Res() response: Response):Promise<Response> {
      const shortUrl: string = await this.customShortnerService.createCustomShortner(body);
      return response.json({"shortUrl": shortUrl});
    }
}
