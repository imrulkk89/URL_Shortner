import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RedirectionController } from './redirection.controller';
import { UrlShortnerModule } from '../url-shortner/url-shortner.module';
import { UrlShortnerService } from '../url-shortner/url-shortner.service';
import { HelperService } from '../helpers/helpers.service';
import { UrlMappingSchema } from '../url-shortner/schemas/url-mapping.schema';


@Module({
    imports: [ UrlShortnerModule, MongooseModule.forFeature([{ name: 'UrlMapping', schema: UrlMappingSchema }])],
    controllers: [RedirectionController],
    providers: [UrlShortnerService, HelperService]
})
export class RedirectionModule {}
