import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { UrlMapping } from 'src/url-shortner/schemas/url-mapping.schema';
import { ICustomShortnerBody } from '../types';
import { HelperService } from 'src/helpers/helpers.service';

@Injectable()
export class CustomShortnerService {
    constructor(
        @InjectModel(UrlMapping.name)
        private urlMappingModel: mongoose.Model<UrlMapping>,
        private helper: HelperService
    ){}

    async createCustomShortner( data: ICustomShortnerBody ): Promise<string> {

        const { longUrl, shortId } = data;

        const isLongUrlExist: UrlMapping = await this.urlMappingModel.findOne({longUrl});
        const isShortUrlExist: UrlMapping = await this.urlMappingModel.findOne({shortUrl: shortId});

        const domainName = process.env.DOMAIN_NAME;

        if(isLongUrlExist){
            return `${domainName}/${isLongUrlExist.shortUrl}`          
        }

        if(isShortUrlExist){
            return 'shortId exist. Please provide unique one.'
        }

        const shortUrl = `${domainName}/${shortId}`

         // Save the mapping in the database
        const urlMapping = new this.urlMappingModel({
            "longUrl": this.helper.checknFixUrl(longUrl),
            "shortUrl": shortId
        });

        await urlMapping.save();

        return shortUrl;        
    }
}
