// package: organization.v1
// file: organization/v1/organization_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as organization_v1_organization_service_pb from "../../organization/v1/organization_service_pb";
import * as organization_v1_organization_pb from "../../organization/v1/organization_pb";
import * as organization_v1_organization_user_pb from "../../organization/v1/organization_user_pb";

interface IOrganizationServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getOne: IOrganizationServiceService_IGetOne;
    getList: IOrganizationServiceService_IGetList;
    create: IOrganizationServiceService_ICreate;
    update: IOrganizationServiceService_IUpdate;
    delete: IOrganizationServiceService_IDelete;
    getUsers: IOrganizationServiceService_IGetUsers;
    inviteUser: IOrganizationServiceService_IInviteUser;
    removeUser: IOrganizationServiceService_IRemoveUser;
}

interface IOrganizationServiceService_IGetOne extends grpc.MethodDefinition<organization_v1_organization_pb.GetOneRequest, organization_v1_organization_pb.GetOneResponse> {
    path: "/organization.v1.OrganizationService/GetOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<organization_v1_organization_pb.GetOneRequest>;
    requestDeserialize: grpc.deserialize<organization_v1_organization_pb.GetOneRequest>;
    responseSerialize: grpc.serialize<organization_v1_organization_pb.GetOneResponse>;
    responseDeserialize: grpc.deserialize<organization_v1_organization_pb.GetOneResponse>;
}
interface IOrganizationServiceService_IGetList extends grpc.MethodDefinition<organization_v1_organization_pb.GetListRequest, organization_v1_organization_pb.GetListResponse> {
    path: "/organization.v1.OrganizationService/GetList";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<organization_v1_organization_pb.GetListRequest>;
    requestDeserialize: grpc.deserialize<organization_v1_organization_pb.GetListRequest>;
    responseSerialize: grpc.serialize<organization_v1_organization_pb.GetListResponse>;
    responseDeserialize: grpc.deserialize<organization_v1_organization_pb.GetListResponse>;
}
interface IOrganizationServiceService_ICreate extends grpc.MethodDefinition<organization_v1_organization_pb.CreateRequest, organization_v1_organization_pb.CreateResponse> {
    path: "/organization.v1.OrganizationService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<organization_v1_organization_pb.CreateRequest>;
    requestDeserialize: grpc.deserialize<organization_v1_organization_pb.CreateRequest>;
    responseSerialize: grpc.serialize<organization_v1_organization_pb.CreateResponse>;
    responseDeserialize: grpc.deserialize<organization_v1_organization_pb.CreateResponse>;
}
interface IOrganizationServiceService_IUpdate extends grpc.MethodDefinition<organization_v1_organization_pb.UpdateRequest, organization_v1_organization_pb.UpdateResponse> {
    path: "/organization.v1.OrganizationService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<organization_v1_organization_pb.UpdateRequest>;
    requestDeserialize: grpc.deserialize<organization_v1_organization_pb.UpdateRequest>;
    responseSerialize: grpc.serialize<organization_v1_organization_pb.UpdateResponse>;
    responseDeserialize: grpc.deserialize<organization_v1_organization_pb.UpdateResponse>;
}
interface IOrganizationServiceService_IDelete extends grpc.MethodDefinition<organization_v1_organization_pb.DeleteRequest, organization_v1_organization_pb.DeleteResponse> {
    path: "/organization.v1.OrganizationService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<organization_v1_organization_pb.DeleteRequest>;
    requestDeserialize: grpc.deserialize<organization_v1_organization_pb.DeleteRequest>;
    responseSerialize: grpc.serialize<organization_v1_organization_pb.DeleteResponse>;
    responseDeserialize: grpc.deserialize<organization_v1_organization_pb.DeleteResponse>;
}
interface IOrganizationServiceService_IGetUsers extends grpc.MethodDefinition<organization_v1_organization_user_pb.GetUsersRequest, organization_v1_organization_user_pb.GetUsersResponse> {
    path: "/organization.v1.OrganizationService/GetUsers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<organization_v1_organization_user_pb.GetUsersRequest>;
    requestDeserialize: grpc.deserialize<organization_v1_organization_user_pb.GetUsersRequest>;
    responseSerialize: grpc.serialize<organization_v1_organization_user_pb.GetUsersResponse>;
    responseDeserialize: grpc.deserialize<organization_v1_organization_user_pb.GetUsersResponse>;
}
interface IOrganizationServiceService_IInviteUser extends grpc.MethodDefinition<organization_v1_organization_user_pb.InviteUserRequest, organization_v1_organization_user_pb.InviteUserResponse> {
    path: "/organization.v1.OrganizationService/InviteUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<organization_v1_organization_user_pb.InviteUserRequest>;
    requestDeserialize: grpc.deserialize<organization_v1_organization_user_pb.InviteUserRequest>;
    responseSerialize: grpc.serialize<organization_v1_organization_user_pb.InviteUserResponse>;
    responseDeserialize: grpc.deserialize<organization_v1_organization_user_pb.InviteUserResponse>;
}
interface IOrganizationServiceService_IRemoveUser extends grpc.MethodDefinition<organization_v1_organization_user_pb.RemoveUserRequest, organization_v1_organization_user_pb.RemoveUserResponse> {
    path: "/organization.v1.OrganizationService/RemoveUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<organization_v1_organization_user_pb.RemoveUserRequest>;
    requestDeserialize: grpc.deserialize<organization_v1_organization_user_pb.RemoveUserRequest>;
    responseSerialize: grpc.serialize<organization_v1_organization_user_pb.RemoveUserResponse>;
    responseDeserialize: grpc.deserialize<organization_v1_organization_user_pb.RemoveUserResponse>;
}

export const OrganizationServiceService: IOrganizationServiceService;

export interface IOrganizationServiceServer extends grpc.UntypedServiceImplementation {
    getOne: grpc.handleUnaryCall<organization_v1_organization_pb.GetOneRequest, organization_v1_organization_pb.GetOneResponse>;
    getList: grpc.handleUnaryCall<organization_v1_organization_pb.GetListRequest, organization_v1_organization_pb.GetListResponse>;
    create: grpc.handleUnaryCall<organization_v1_organization_pb.CreateRequest, organization_v1_organization_pb.CreateResponse>;
    update: grpc.handleUnaryCall<organization_v1_organization_pb.UpdateRequest, organization_v1_organization_pb.UpdateResponse>;
    delete: grpc.handleUnaryCall<organization_v1_organization_pb.DeleteRequest, organization_v1_organization_pb.DeleteResponse>;
    getUsers: grpc.handleUnaryCall<organization_v1_organization_user_pb.GetUsersRequest, organization_v1_organization_user_pb.GetUsersResponse>;
    inviteUser: grpc.handleUnaryCall<organization_v1_organization_user_pb.InviteUserRequest, organization_v1_organization_user_pb.InviteUserResponse>;
    removeUser: grpc.handleUnaryCall<organization_v1_organization_user_pb.RemoveUserRequest, organization_v1_organization_user_pb.RemoveUserResponse>;
}

export interface IOrganizationServiceClient {
    getOne(request: organization_v1_organization_pb.GetOneRequest, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_pb.GetOneResponse) => void): grpc.ClientUnaryCall;
    getOne(request: organization_v1_organization_pb.GetOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_pb.GetOneResponse) => void): grpc.ClientUnaryCall;
    getOne(request: organization_v1_organization_pb.GetOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_pb.GetOneResponse) => void): grpc.ClientUnaryCall;
    getList(request: organization_v1_organization_pb.GetListRequest, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_pb.GetListResponse) => void): grpc.ClientUnaryCall;
    getList(request: organization_v1_organization_pb.GetListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_pb.GetListResponse) => void): grpc.ClientUnaryCall;
    getList(request: organization_v1_organization_pb.GetListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_pb.GetListResponse) => void): grpc.ClientUnaryCall;
    create(request: organization_v1_organization_pb.CreateRequest, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    create(request: organization_v1_organization_pb.CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    create(request: organization_v1_organization_pb.CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    update(request: organization_v1_organization_pb.UpdateRequest, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_pb.UpdateResponse) => void): grpc.ClientUnaryCall;
    update(request: organization_v1_organization_pb.UpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_pb.UpdateResponse) => void): grpc.ClientUnaryCall;
    update(request: organization_v1_organization_pb.UpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_pb.UpdateResponse) => void): grpc.ClientUnaryCall;
    delete(request: organization_v1_organization_pb.DeleteRequest, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    delete(request: organization_v1_organization_pb.DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    delete(request: organization_v1_organization_pb.DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    getUsers(request: organization_v1_organization_user_pb.GetUsersRequest, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_user_pb.GetUsersResponse) => void): grpc.ClientUnaryCall;
    getUsers(request: organization_v1_organization_user_pb.GetUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_user_pb.GetUsersResponse) => void): grpc.ClientUnaryCall;
    getUsers(request: organization_v1_organization_user_pb.GetUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_user_pb.GetUsersResponse) => void): grpc.ClientUnaryCall;
    inviteUser(request: organization_v1_organization_user_pb.InviteUserRequest, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_user_pb.InviteUserResponse) => void): grpc.ClientUnaryCall;
    inviteUser(request: organization_v1_organization_user_pb.InviteUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_user_pb.InviteUserResponse) => void): grpc.ClientUnaryCall;
    inviteUser(request: organization_v1_organization_user_pb.InviteUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_user_pb.InviteUserResponse) => void): grpc.ClientUnaryCall;
    removeUser(request: organization_v1_organization_user_pb.RemoveUserRequest, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_user_pb.RemoveUserResponse) => void): grpc.ClientUnaryCall;
    removeUser(request: organization_v1_organization_user_pb.RemoveUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_user_pb.RemoveUserResponse) => void): grpc.ClientUnaryCall;
    removeUser(request: organization_v1_organization_user_pb.RemoveUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_user_pb.RemoveUserResponse) => void): grpc.ClientUnaryCall;
}

export class OrganizationServiceClient extends grpc.Client implements IOrganizationServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getOne(request: organization_v1_organization_pb.GetOneRequest, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_pb.GetOneResponse) => void): grpc.ClientUnaryCall;
    public getOne(request: organization_v1_organization_pb.GetOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_pb.GetOneResponse) => void): grpc.ClientUnaryCall;
    public getOne(request: organization_v1_organization_pb.GetOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_pb.GetOneResponse) => void): grpc.ClientUnaryCall;
    public getList(request: organization_v1_organization_pb.GetListRequest, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_pb.GetListResponse) => void): grpc.ClientUnaryCall;
    public getList(request: organization_v1_organization_pb.GetListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_pb.GetListResponse) => void): grpc.ClientUnaryCall;
    public getList(request: organization_v1_organization_pb.GetListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_pb.GetListResponse) => void): grpc.ClientUnaryCall;
    public create(request: organization_v1_organization_pb.CreateRequest, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public create(request: organization_v1_organization_pb.CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public create(request: organization_v1_organization_pb.CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public update(request: organization_v1_organization_pb.UpdateRequest, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_pb.UpdateResponse) => void): grpc.ClientUnaryCall;
    public update(request: organization_v1_organization_pb.UpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_pb.UpdateResponse) => void): grpc.ClientUnaryCall;
    public update(request: organization_v1_organization_pb.UpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_pb.UpdateResponse) => void): grpc.ClientUnaryCall;
    public delete(request: organization_v1_organization_pb.DeleteRequest, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    public delete(request: organization_v1_organization_pb.DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    public delete(request: organization_v1_organization_pb.DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    public getUsers(request: organization_v1_organization_user_pb.GetUsersRequest, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_user_pb.GetUsersResponse) => void): grpc.ClientUnaryCall;
    public getUsers(request: organization_v1_organization_user_pb.GetUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_user_pb.GetUsersResponse) => void): grpc.ClientUnaryCall;
    public getUsers(request: organization_v1_organization_user_pb.GetUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_user_pb.GetUsersResponse) => void): grpc.ClientUnaryCall;
    public inviteUser(request: organization_v1_organization_user_pb.InviteUserRequest, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_user_pb.InviteUserResponse) => void): grpc.ClientUnaryCall;
    public inviteUser(request: organization_v1_organization_user_pb.InviteUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_user_pb.InviteUserResponse) => void): grpc.ClientUnaryCall;
    public inviteUser(request: organization_v1_organization_user_pb.InviteUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_user_pb.InviteUserResponse) => void): grpc.ClientUnaryCall;
    public removeUser(request: organization_v1_organization_user_pb.RemoveUserRequest, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_user_pb.RemoveUserResponse) => void): grpc.ClientUnaryCall;
    public removeUser(request: organization_v1_organization_user_pb.RemoveUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_user_pb.RemoveUserResponse) => void): grpc.ClientUnaryCall;
    public removeUser(request: organization_v1_organization_user_pb.RemoveUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: organization_v1_organization_user_pb.RemoveUserResponse) => void): grpc.ClientUnaryCall;
}
