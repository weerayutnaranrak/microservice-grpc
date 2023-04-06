import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContentModule } from './modules/content/content.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:password@mongodb:27017/cms_db'),
    ContentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
