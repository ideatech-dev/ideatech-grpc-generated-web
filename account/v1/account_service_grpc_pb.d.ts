// package: account.v1
// file: account/v1/account_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as account_v1_account_service_pb from "../../account/v1/account_service_pb";
import * as account_v1_auth_pb from "../../account/v1/auth_pb";

interface IAccountServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    login: IAccountServiceService_ILogin;
    register: IAccountServiceService_IRegister;
    accountInformation: IAccountServiceService_IAccountInformation;
}

interface IAccountServiceService_ILogin extends grpc.MethodDefinition<account_v1_auth_pb.LoginRequest, account_v1_auth_pb.LoginResponse> {
    path: "/account.v1.AccountService/Login";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<account_v1_auth_pb.LoginRequest>;
    requestDeserialize: grpc.deserialize<account_v1_auth_pb.LoginRequest>;
    responseSerialize: grpc.serialize<account_v1_auth_pb.LoginResponse>;
    responseDeserialize: grpc.deserialize<account_v1_auth_pb.LoginResponse>;
}
interface IAccountServiceService_IRegister extends grpc.MethodDefinition<account_v1_auth_pb.RegisterRequest, account_v1_auth_pb.RegisterResponse> {
    path: "/account.v1.AccountService/Register";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<account_v1_auth_pb.RegisterRequest>;
    requestDeserialize: grpc.deserialize<account_v1_auth_pb.RegisterRequest>;
    responseSerialize: grpc.serialize<account_v1_auth_pb.RegisterResponse>;
    responseDeserialize: grpc.deserialize<account_v1_auth_pb.RegisterResponse>;
}
interface IAccountServiceService_IAccountInformation extends grpc.MethodDefinition<account_v1_auth_pb.AccountInformationRequest, account_v1_auth_pb.AccountInformationResponse> {
    path: "/account.v1.AccountService/AccountInformation";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<account_v1_auth_pb.AccountInformationRequest>;
    requestDeserialize: grpc.deserialize<account_v1_auth_pb.AccountInformationRequest>;
    responseSerialize: grpc.serialize<account_v1_auth_pb.AccountInformationResponse>;
    responseDeserialize: grpc.deserialize<account_v1_auth_pb.AccountInformationResponse>;
}

export const AccountServiceService: IAccountServiceService;

export interface IAccountServiceServer extends grpc.UntypedServiceImplementation {
    login: grpc.handleUnaryCall<account_v1_auth_pb.LoginRequest, account_v1_auth_pb.LoginResponse>;
    register: grpc.handleUnaryCall<account_v1_auth_pb.RegisterRequest, account_v1_auth_pb.RegisterResponse>;
    accountInformation: grpc.handleUnaryCall<account_v1_auth_pb.AccountInformationRequest, account_v1_auth_pb.AccountInformationResponse>;
}

export interface IAccountServiceClient {
    login(request: account_v1_auth_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: account_v1_auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: account_v1_auth_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_v1_auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    login(request: account_v1_auth_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_v1_auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    register(request: account_v1_auth_pb.RegisterRequest, callback: (error: grpc.ServiceError | null, response: account_v1_auth_pb.RegisterResponse) => void): grpc.ClientUnaryCall;
    register(request: account_v1_auth_pb.RegisterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_v1_auth_pb.RegisterResponse) => void): grpc.ClientUnaryCall;
    register(request: account_v1_auth_pb.RegisterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_v1_auth_pb.RegisterResponse) => void): grpc.ClientUnaryCall;
    accountInformation(request: account_v1_auth_pb.AccountInformationRequest, callback: (error: grpc.ServiceError | null, response: account_v1_auth_pb.AccountInformationResponse) => void): grpc.ClientUnaryCall;
    accountInformation(request: account_v1_auth_pb.AccountInformationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_v1_auth_pb.AccountInformationResponse) => void): grpc.ClientUnaryCall;
    accountInformation(request: account_v1_auth_pb.AccountInformationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_v1_auth_pb.AccountInformationResponse) => void): grpc.ClientUnaryCall;
}

export class AccountServiceClient extends grpc.Client implements IAccountServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public login(request: account_v1_auth_pb.LoginRequest, callback: (error: grpc.ServiceError | null, response: account_v1_auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: account_v1_auth_pb.LoginRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_v1_auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public login(request: account_v1_auth_pb.LoginRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_v1_auth_pb.LoginResponse) => void): grpc.ClientUnaryCall;
    public register(request: account_v1_auth_pb.RegisterRequest, callback: (error: grpc.ServiceError | null, response: account_v1_auth_pb.RegisterResponse) => void): grpc.ClientUnaryCall;
    public register(request: account_v1_auth_pb.RegisterRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_v1_auth_pb.RegisterResponse) => void): grpc.ClientUnaryCall;
    public register(request: account_v1_auth_pb.RegisterRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_v1_auth_pb.RegisterResponse) => void): grpc.ClientUnaryCall;
    public accountInformation(request: account_v1_auth_pb.AccountInformationRequest, callback: (error: grpc.ServiceError | null, response: account_v1_auth_pb.AccountInformationResponse) => void): grpc.ClientUnaryCall;
    public accountInformation(request: account_v1_auth_pb.AccountInformationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: account_v1_auth_pb.AccountInformationResponse) => void): grpc.ClientUnaryCall;
    public accountInformation(request: account_v1_auth_pb.AccountInformationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: account_v1_auth_pb.AccountInformationResponse) => void): grpc.ClientUnaryCall;
}
