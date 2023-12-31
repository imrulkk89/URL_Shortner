import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UrlShortnerModule } from './url-shortner/url-shortner.module';
import { RedirectionModule } from './redirection/redirection.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { CustomShortnerModule } from './custom-shortner/custom-shortner.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true
  }),
  MongooseModule.forRoot(process.env.DB_URI),
  AnalyticsModule,
  UrlShortnerModule,
  RedirectionModule,
  CustomShortnerModule,
  AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
