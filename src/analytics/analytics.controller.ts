import { Controller, Get, UseGuards } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { IAnalytics } from '../types'
import { AuthGuard } from '@nestjs/passport';

@Controller('analytics')
export class AnalyticsController {
    constructor(private readonly analyticService: AnalyticsService){}

    @Get()
    @UseGuards(AuthGuard())
    async getAllRecords(): Promise<IAnalytics[]>{
        return await this.analyticService.findAll();
    }
}
