/* eslint-disable */
import { Metadata } from "@grpc/grpc-js";
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "cms";

export interface ContentById {
  id: number;
}

export interface Content {
  id: number;
  name: string;
}

export const CMS_PACKAGE_NAME = "cms";

export interface ContentManagementServiceClient {
  findOne(request: ContentById, metadata?: Metadata): Observable<Content>;

  findAll(request: ContentById, metadata?: Metadata): Observable<Content>;
}

export interface ContentManagementServiceController {
  findOne(request: ContentById, metadata?: Metadata): Promise<Content> | Observable<Content> | Content;

  findAll(request: ContentById, metadata?: Metadata): Promise<Content> | Observable<Content> | Content;
}

export function ContentManagementServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["findOne", "findAll"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("ContentManagementService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("ContentManagementService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const CONTENT_MANAGEMENT_SERVICE_NAME = "ContentManagementService";
