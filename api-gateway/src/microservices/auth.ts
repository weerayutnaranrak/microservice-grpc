/* eslint-disable */
import { Metadata } from "@grpc/grpc-js";
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import { BoolValue } from "./google/protobuf/wrappers";

export const protobufPackage = "auth";

export interface UserRegister {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface AccessToken {
  accessToken: string;
}

export interface UserId {
  userId: string;
}

export interface ProfileRes {
  firstName: string;
  lastName: string;
  email: string;
}

export const AUTH_PACKAGE_NAME = "auth";

export interface AuthServiceClient {
  register(request: UserRegister, metadata?: Metadata): Observable<ProfileRes>;

  profile(request: UserId, metadata?: Metadata): Observable<ProfileRes>;

  createAccessToken(request: UserId, metadata?: Metadata): Observable<AccessToken>;

  login(request: UserLogin, metadata?: Metadata): Observable<ProfileRes>;

  validateToken(request: AccessToken, metadata?: Metadata): Observable<BoolValue>;
}

export interface AuthServiceController {
  register(request: UserRegister, metadata?: Metadata): Promise<ProfileRes> | Observable<ProfileRes> | ProfileRes;

  profile(request: UserId, metadata?: Metadata): Promise<ProfileRes> | Observable<ProfileRes> | ProfileRes;

  createAccessToken(request: UserId, metadata?: Metadata): Promise<AccessToken> | Observable<AccessToken> | AccessToken;

  login(request: UserLogin, metadata?: Metadata): Promise<ProfileRes> | Observable<ProfileRes> | ProfileRes;

  validateToken(request: AccessToken, metadata?: Metadata): Promise<BoolValue> | Observable<BoolValue> | BoolValue;
}

export function AuthServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["register", "profile", "createAccessToken", "login", "validateToken"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("AuthService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("AuthService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const AUTH_SERVICE_NAME = "AuthService";
