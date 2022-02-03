// package: web.account.v1
// file: web/account/v1/account_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as web_account_v1_account_service_pb from "../../../web/account/v1/account_service_pb";
import * as web_account_v1_types_pb from "../../../web/account/v1/types_pb";

interface IAccountServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    login: IAccountServiceService_ILogin;
    loginGoogle: IAccountServiceService_ILoginGoogle;
    register: IAccountServiceService_IRegister;
    accountInformation: IAccountServiceService_IAccountInformation;
}

interface IAccountServiceService_ILogin extends grpc.MethodDefinition<web_account_v1_account_service_pb.LoginRequest, web_account_v1_account_service_pb.LoginResponse> {
    path: "/web.account.v1.AccountService/Login";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_account_v1_account_service_pb.LoginRequest>;
    requestDeserialize: grpc.deserialize<web_account_v1_account_service_pb.LoginRequest>;
    responseSerialize: grpc.serialize<web_account_v1_account_service_pb.LoginResponse>;
    responseDeserialize: grpc.deserialize<web_account_v1_account_service_pb.LoginResponse>;
}
interface IAccountServiceService_ILoginGoogle extends grpc.MethodDefinition<web_account_v1_account_service_pb.LoginGoogleRequest, web_account_v1_account_service_pb.LoginGoogleResponse> {
    path: "/web.account.v1.AccountService/LoginGoogle";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_account_v1_account_service_pb.LoginGoogleRequest>;
    requestDeserialize: grpc.deserialize<web_account_v1_account_service_pb.LoginGoogleRequest>;
    responseSerialize: grpc.serialize<web_account_v1_account_service_pb.LoginGoogleResponse>;
    responseDeserialize: grpc.deserialize<web_account_v1_account_service_pb.LoginGoogleResponse>;
}
interface IAccountServiceService_IRegister extends grpc.MethodDefinition<web_account_v1_account_service_pb.RegisterRequest, web_account_v1_account_service_pb.RegisterResponse> {
    path: "/web.account.v1.AccountService/Register";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_account_v1_account_service_pb.RegisterRequest>;
    requestDeserialize: grpc.deserialize<web_account_v1_account_service_pb.RegisterRequest>;
    responseSerialize: grpc.serialize<web_account_v1_account_service_pb.RegisterResponse>;
    responseDeserialize: grpc.deserialize<web_account_v1_account_service_pb.RegisterResponse>;
}
interface IAccountServiceService_IAccountInformation extends grpc.MethodDefinition<web_account_v1_account_service_pb.AccountInformationRequest, web_account_v1_account_service_pb.AccountInformationResponse> {
    path: "/web.account.v1.AccountService/AccountInformation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_account_v1_account_service_pb.AccountInformationRequest>;
    requestDeserialize: grpc.deserialize<web_account_v1_account_service_pb.AccountInformationRequest>;
    responseSerialize: grpc.serialize<web_account_v1_account_service_pb.AccountInformationResponse>;
    responseDeserialize: grpc.deserialize<web_account_v1_account_service_pb.AccountInformationResponse>;
}

export const AccountServiceService: IAccountServiceService;

export interface IAccountServiceServer extends grpc.UntypedServiceImplementation {
    login: grpc.handleUnaryCall<web_account_v1_account_service_pb.LoginRequest, web_account_v1_account_service_pb.LoginResponse>;
    loginGoogle: grpc.handleUnaryCall<web_account_v1_account_service_pb.LoginGoogleRequest, web_account_v1_account_service_pb.LoginGoogleResponse>;
    register: grpc.handleUnaryCall<web_account_v1_account_service_pb.RegisterRequest, web_account_v1_account_service_pb.RegisterResponse>;
    accountInformation: grpc.handleUnaryCall<web_account_v1_account_service_pb.AccountInformationRequest, web_account_v1_account_service_pb.AccountInformationResponse>;
}

export interface IAccountServiceClient {
    login(request: web_account_v1_account_service_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: web_account_v1_account_service_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: web_account_v1_account_service_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_account_v1_account_service_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: web_account_v1_account_service_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_account_v1_account_service_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    loginGoogle(request: web_account_v1_account_service_pb.LoginGoogleRequest, callback: (error: grpc.ServiceError | null, response: web_account_v1_account_service_pb.LoginGoogleResponse) => void): grpc.ClientUnaryCall;
    loginGoogle(request: web_account_v1_account_service_pb.LoginGoogleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_account_v1_account_service_pb.LoginGoogleResponse) => void): grpc.ClientUnaryCall;
    loginGoogle(request: web_account_v1_account_service_pb.LoginGoogleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_account_v1_account_service_pb.LoginGoogleResponse) => void): grpc.ClientUnaryCall;
    register(request: web_account_v1_account_service_pb.RegisterRequest, callback: (error: grpc.ServiceError | null, response: web_account_v1_account_service_pb.RegisterResponse) => void): grpc.ClientUnaryCall;
    register(request: web_account_v1_account_service_pb.RegisterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_account_v1_account_service_pb.RegisterResponse) => void): grpc.ClientUnaryCall;
    register(request: web_account_v1_account_service_pb.RegisterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_account_v1_account_service_pb.RegisterResponse) => void): grpc.ClientUnaryCall;
    accountInformation(request: web_account_v1_account_service_pb.AccountInformationRequest, callback: (error: grpc.ServiceError | null, response: web_account_v1_account_service_pb.AccountInformationResponse) => void): grpc.ClientUnaryCall;
    accountInformation(request: web_account_v1_account_service_pb.AccountInformationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_account_v1_account_service_pb.AccountInformationResponse) => void): grpc.ClientUnaryCall;
    accountInformation(request: web_account_v1_account_service_pb.AccountInformationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_account_v1_account_service_pb.AccountInformationResponse) => void): grpc.ClientUnaryCall;
}

export class AccountServiceClient extends grpc.Client implements IAccountServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public login(request: web_account_v1_account_service_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: web_account_v1_account_service_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: web_account_v1_account_service_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_account_v1_account_service_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: web_account_v1_account_service_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_account_v1_account_service_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public loginGoogle(request: web_account_v1_account_service_pb.LoginGoogleRequest, callback: (error: grpc.ServiceError | null, response: web_account_v1_account_service_pb.LoginGoogleResponse) => void): grpc.ClientUnaryCall;
    public loginGoogle(request: web_account_v1_account_service_pb.LoginGoogleRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_account_v1_account_service_pb.LoginGoogleResponse) => void): grpc.ClientUnaryCall;
    public loginGoogle(request: web_account_v1_account_service_pb.LoginGoogleRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_account_v1_account_service_pb.LoginGoogleResponse) => void): grpc.ClientUnaryCall;
    public register(request: web_account_v1_account_service_pb.RegisterRequest, callback: (error: grpc.ServiceError | null, response: web_account_v1_account_service_pb.RegisterResponse) => void): grpc.ClientUnaryCall;
    public register(request: web_account_v1_account_service_pb.RegisterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_account_v1_account_service_pb.RegisterResponse) => void): grpc.ClientUnaryCall;
    public register(request: web_account_v1_account_service_pb.RegisterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_account_v1_account_service_pb.RegisterResponse) => void): grpc.ClientUnaryCall;
    public accountInformation(request: web_account_v1_account_service_pb.AccountInformationRequest, callback: (error: grpc.ServiceError | null, response: web_account_v1_account_service_pb.AccountInformationResponse) => void): grpc.ClientUnaryCall;
    public accountInformation(request: web_account_v1_account_service_pb.AccountInformationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_account_v1_account_service_pb.AccountInformationResponse) => void): grpc.ClientUnaryCall;
    public accountInformation(request: web_account_v1_account_service_pb.AccountInformationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_account_v1_account_service_pb.AccountInformationResponse) => void): grpc.ClientUnaryCall;
}
