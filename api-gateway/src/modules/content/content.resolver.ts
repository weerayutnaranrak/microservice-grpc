import { Inject, OnModuleInit } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ClientGrpc } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import ICMSService from 'src/microservices/interfaces/cms-service.interface';
import { ContentService } from './content.service';
import { Content } from './entities/content.entity';

@Resolver(() => Content)
export class ContentResolver implements OnModuleInit {
  private cmsService: ICMSService;
  constructor(
    private readonly contentService: ContentService,
    @Inject('CMSServiceClient') private client: ClientGrpc,
  ) {}
  onModuleInit() {
    this.cmsService = this.client.getService<ICMSService>(
      'ContentManagementService',
    );
  }

  @Query(() => [Content], { name: 'content' })
  async findOne() {
    const test = await lastValueFrom(this.cmsService.findOne({ id: 1 }));
    console.log(test);
    return [];
  }
}
