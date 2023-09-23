import { Module } from '@nestjs/common';
import { AnalyticsController } from './analytics.controller';
import { AnalyticsService } from './analytics.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UrlMappingSchema } from 'src/url-shortner/schemas/url-mapping.schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports:[
    MongooseModule.forFeature([{name: 'UrlMapping', schema: UrlMappingSchema}]),
    AuthModule
  ],
  controllers: [AnalyticsController],
  providers: [AnalyticsService]
})
export class AnalyticsModule {}
