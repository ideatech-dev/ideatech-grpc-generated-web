// package: web.organization.v1
// file: web/organization/v1/organization_usermanagement_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as web_organization_v1_organization_usermanagement_service_pb from "../../../web/organization/v1/organization_usermanagement_service_pb";
import * as web_account_v1_types_pb from "../../../web/account/v1/types_pb";

interface IOrganizationUserManagementServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getUsers: IOrganizationUserManagementServiceService_IGetUsers;
    inviteUser: IOrganizationUserManagementServiceService_IInviteUser;
    removeUser: IOrganizationUserManagementServiceService_IRemoveUser;
}

interface IOrganizationUserManagementServiceService_IGetUsers extends grpc.MethodDefinition<web_organization_v1_organization_usermanagement_service_pb.GetUsersRequest, web_organization_v1_organization_usermanagement_service_pb.GetUsersResponse> {
    path: "/web.organization.v1.OrganizationUserManagementService/GetUsers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_organization_v1_organization_usermanagement_service_pb.GetUsersRequest>;
    requestDeserialize: grpc.deserialize<web_organization_v1_organization_usermanagement_service_pb.GetUsersRequest>;
    responseSerialize: grpc.serialize<web_organization_v1_organization_usermanagement_service_pb.GetUsersResponse>;
    responseDeserialize: grpc.deserialize<web_organization_v1_organization_usermanagement_service_pb.GetUsersResponse>;
}
interface IOrganizationUserManagementServiceService_IInviteUser extends grpc.MethodDefinition<web_organization_v1_organization_usermanagement_service_pb.InviteUserRequest, web_organization_v1_organization_usermanagement_service_pb.InviteUserResponse> {
    path: "/web.organization.v1.OrganizationUserManagementService/InviteUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_organization_v1_organization_usermanagement_service_pb.InviteUserRequest>;
    requestDeserialize: grpc.deserialize<web_organization_v1_organization_usermanagement_service_pb.InviteUserRequest>;
    responseSerialize: grpc.serialize<web_organization_v1_organization_usermanagement_service_pb.InviteUserResponse>;
    responseDeserialize: grpc.deserialize<web_organization_v1_organization_usermanagement_service_pb.InviteUserResponse>;
}
interface IOrganizationUserManagementServiceService_IRemoveUser extends grpc.MethodDefinition<web_organization_v1_organization_usermanagement_service_pb.RemoveUserRequest, web_organization_v1_organization_usermanagement_service_pb.RemoveUserResponse> {
    path: "/web.organization.v1.OrganizationUserManagementService/RemoveUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_organization_v1_organization_usermanagement_service_pb.RemoveUserRequest>;
    requestDeserialize: grpc.deserialize<web_organization_v1_organization_usermanagement_service_pb.RemoveUserRequest>;
    responseSerialize: grpc.serialize<web_organization_v1_organization_usermanagement_service_pb.RemoveUserResponse>;
    responseDeserialize: grpc.deserialize<web_organization_v1_organization_usermanagement_service_pb.RemoveUserResponse>;
}

export const OrganizationUserManagementServiceService: IOrganizationUserManagementServiceService;

export interface IOrganizationUserManagementServiceServer extends grpc.UntypedServiceImplementation {
    getUsers: grpc.handleUnaryCall<web_organization_v1_organization_usermanagement_service_pb.GetUsersRequest, web_organization_v1_organization_usermanagement_service_pb.GetUsersResponse>;
    inviteUser: grpc.handleUnaryCall<web_organization_v1_organization_usermanagement_service_pb.InviteUserRequest, web_organization_v1_organization_usermanagement_service_pb.InviteUserResponse>;
    removeUser: grpc.handleUnaryCall<web_organization_v1_organization_usermanagement_service_pb.RemoveUserRequest, web_organization_v1_organization_usermanagement_service_pb.RemoveUserResponse>;
}

export interface IOrganizationUserManagementServiceClient {
    getUsers(request: web_organization_v1_organization_usermanagement_service_pb.GetUsersRequest, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_usermanagement_service_pb.GetUsersResponse) => void): grpc.ClientUnaryCall;
    getUsers(request: web_organization_v1_organization_usermanagement_service_pb.GetUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_usermanagement_service_pb.GetUsersResponse) => void): grpc.ClientUnaryCall;
    getUsers(request: web_organization_v1_organization_usermanagement_service_pb.GetUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_usermanagement_service_pb.GetUsersResponse) => void): grpc.ClientUnaryCall;
    inviteUser(request: web_organization_v1_organization_usermanagement_service_pb.InviteUserRequest, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_usermanagement_service_pb.InviteUserResponse) => void): grpc.ClientUnaryCall;
    inviteUser(request: web_organization_v1_organization_usermanagement_service_pb.InviteUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_usermanagement_service_pb.InviteUserResponse) => void): grpc.ClientUnaryCall;
    inviteUser(request: web_organization_v1_organization_usermanagement_service_pb.InviteUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_usermanagement_service_pb.InviteUserResponse) => void): grpc.ClientUnaryCall;
    removeUser(request: web_organization_v1_organization_usermanagement_service_pb.RemoveUserRequest, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_usermanagement_service_pb.RemoveUserResponse) => void): grpc.ClientUnaryCall;
    removeUser(request: web_organization_v1_organization_usermanagement_service_pb.RemoveUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_usermanagement_service_pb.RemoveUserResponse) => void): grpc.ClientUnaryCall;
    removeUser(request: web_organization_v1_organization_usermanagement_service_pb.RemoveUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_usermanagement_service_pb.RemoveUserResponse) => void): grpc.ClientUnaryCall;
}

export class OrganizationUserManagementServiceClient extends grpc.Client implements IOrganizationUserManagementServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getUsers(request: web_organization_v1_organization_usermanagement_service_pb.GetUsersRequest, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_usermanagement_service_pb.GetUsersResponse) => void): grpc.ClientUnaryCall;
    public getUsers(request: web_organization_v1_organization_usermanagement_service_pb.GetUsersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_usermanagement_service_pb.GetUsersResponse) => void): grpc.ClientUnaryCall;
    public getUsers(request: web_organization_v1_organization_usermanagement_service_pb.GetUsersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_usermanagement_service_pb.GetUsersResponse) => void): grpc.ClientUnaryCall;
    public inviteUser(request: web_organization_v1_organization_usermanagement_service_pb.InviteUserRequest, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_usermanagement_service_pb.InviteUserResponse) => void): grpc.ClientUnaryCall;
    public inviteUser(request: web_organization_v1_organization_usermanagement_service_pb.InviteUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_usermanagement_service_pb.InviteUserResponse) => void): grpc.ClientUnaryCall;
    public inviteUser(request: web_organization_v1_organization_usermanagement_service_pb.InviteUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_usermanagement_service_pb.InviteUserResponse) => void): grpc.ClientUnaryCall;
    public removeUser(request: web_organization_v1_organization_usermanagement_service_pb.RemoveUserRequest, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_usermanagement_service_pb.RemoveUserResponse) => void): grpc.ClientUnaryCall;
    public removeUser(request: web_organization_v1_organization_usermanagement_service_pb.RemoveUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_usermanagement_service_pb.RemoveUserResponse) => void): grpc.ClientUnaryCall;
    public removeUser(request: web_organization_v1_organization_usermanagement_service_pb.RemoveUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_usermanagement_service_pb.RemoveUserResponse) => void): grpc.ClientUnaryCall;
}
