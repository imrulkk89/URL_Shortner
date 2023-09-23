import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UrlShortnerModule } from './url-shortner/url-shortner.module';
import { RedirectionModule } from './redirection/redirection.module';


@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: '.env',
    isGlobal: true
  }),
  MongooseModule.forRoot(process.env.DB_URI),
  UrlShortnerModule,
  RedirectionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
