import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentResolver } from './content.resolver';
import CMSServiceClient from 'src/microservices/cms-service';

@Module({
  imports: [CMSServiceClient],
  providers: [ContentResolver, ContentService],
})
export class ContentModule {}
