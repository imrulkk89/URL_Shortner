import { Module } from '@nestjs/common';
import { CustomShortnerService } from './custom-shortner.service';
import { CustomShortnerController } from './custom-shortner.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UrlMappingSchema } from 'src/url-shortner/schemas/url-mapping.schema';
import { HelperService } from 'src/helpers/helpers.service';

@Module({
  imports:[
    MongooseModule.forFeature([{name: 'UrlMapping', schema: UrlMappingSchema}])
  ],
  controllers: [CustomShortnerController],
  providers: [CustomShortnerService, HelperService],
})
export class CustomShortnerModule {}
