import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { UrlMapping } from 'src/url-shortner/schemas/url-mapping.schema';
import { IAnalytics } from '../types';
import { Url } from 'url';

@Injectable()
export class AnalyticsService {
    constructor(
        @InjectModel(UrlMapping.name)
        private urlMappingModel: mongoose.Model<UrlMapping>
    ){}

    async findAll():Promise<IAnalytics[]> {

        const allCollections: UrlMapping[] =  await this.urlMappingModel.find();
        
        const allAnalytics: IAnalytics[] = allCollections.map(item => ({
            accessCount: item.accessCount,
            longUrl: item.longUrl,
            shortUrl: item.shortUrl,
            accessTime: item.accessTime
        }));

        return allAnalytics
    }
  
}
