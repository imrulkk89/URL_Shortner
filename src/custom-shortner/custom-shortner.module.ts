import { Module } from '@nestjs/common';
import { CustomShortnerService } from './custom-shortner.service';
import { CustomShortnerController } from './custom-shortner.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UrlMappingSchema } from 'src/url-shortner/schemas/url-mapping.schema';
import { HelperService } from 'src/helpers/helpers.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[
    MongooseModule.forFeature([{name: 'UrlMapping', schema: UrlMappingSchema}]),
    AuthModule
  ],
  controllers: [CustomShortnerController],
  providers: [CustomShortnerService, HelperService],
})
export class CustomShortnerModule {}
