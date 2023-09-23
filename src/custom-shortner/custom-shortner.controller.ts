import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { CustomShortnerService } from './custom-shortner.service';
import { ICustomShortnerBody } from '../types'
import { AuthGuard } from '@nestjs/passport';

@Controller('custom-shortner')
export class CustomShortnerController {
  constructor(private readonly customShortnerService: CustomShortnerService) {}
  
  @Post()
  @UseGuards(AuthGuard())
  async createCustomShortner(@Body() body: ICustomShortnerBody, @Res() response: Response):Promise<Response> {
      const shortUrl: string = await this.customShortnerService.createCustomShortner(body);
      return response.json({"shortUrl": shortUrl});
    }
}
