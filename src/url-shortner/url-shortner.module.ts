import { Module } from '@nestjs/common';
import { UrlShortnerController } from './url-shortner.controller';
import { UrlShortnerService } from './url-shortner.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UrlMappingSchema } from './schemas/url-mapping.schema';
import { HelperService } from '../helpers/helpers.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[
    MongooseModule.forFeature([{name: 'UrlMapping', schema: UrlMappingSchema}]),
    AuthModule
  ],
  controllers: [UrlShortnerController],
  providers: [UrlShortnerService, HelperService]
})
export class UrlShortnerModule {}
