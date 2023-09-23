import { Controller, Get } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';
import { UrlMapping } from 'src/url-shortner/schemas/url-mapping.schema';
import { IAnalytics } from '../types'

@Controller('analytics')
export class AnalyticsController {
    constructor(private readonly analyticService: AnalyticsService){}

    @Get()
    async getAllRecords(): Promise<IAnalytics[]>{
        return await this.analyticService.findAll();
    }
}
