import { ServerUnaryCall } from '@grpc/grpc-js';
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ContentService } from './content.service';

@Controller()
export class ContentController {
  constructor(private readonly contentService: ContentService) {}
  @GrpcMethod('ContentManagementService')
  findOne(data: any, metadata: any, call: ServerUnaryCall<any, any>) {
    console.log(`@GrpcMethod('ContentManagementService')`, data);
    return {
      id: 1,
      name: 'content',
    };
  }
}
