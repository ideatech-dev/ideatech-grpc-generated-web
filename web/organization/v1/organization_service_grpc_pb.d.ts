// package: web.organization.v1
// file: web/organization/v1/organization_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as web_organization_v1_organization_service_pb from "../../../web/organization/v1/organization_service_pb";
import * as web_organization_v1_types_pb from "../../../web/organization/v1/types_pb";

interface IOrganizationServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getOne: IOrganizationServiceService_IGetOne;
    getList: IOrganizationServiceService_IGetList;
    create: IOrganizationServiceService_ICreate;
    update: IOrganizationServiceService_IUpdate;
    delete: IOrganizationServiceService_IDelete;
}

interface IOrganizationServiceService_IGetOne extends grpc.MethodDefinition<web_organization_v1_organization_service_pb.GetOneRequest, web_organization_v1_organization_service_pb.GetOneResponse> {
    path: "/web.organization.v1.OrganizationService/GetOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_organization_v1_organization_service_pb.GetOneRequest>;
    requestDeserialize: grpc.deserialize<web_organization_v1_organization_service_pb.GetOneRequest>;
    responseSerialize: grpc.serialize<web_organization_v1_organization_service_pb.GetOneResponse>;
    responseDeserialize: grpc.deserialize<web_organization_v1_organization_service_pb.GetOneResponse>;
}
interface IOrganizationServiceService_IGetList extends grpc.MethodDefinition<web_organization_v1_organization_service_pb.GetListRequest, web_organization_v1_organization_service_pb.GetListResponse> {
    path: "/web.organization.v1.OrganizationService/GetList";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_organization_v1_organization_service_pb.GetListRequest>;
    requestDeserialize: grpc.deserialize<web_organization_v1_organization_service_pb.GetListRequest>;
    responseSerialize: grpc.serialize<web_organization_v1_organization_service_pb.GetListResponse>;
    responseDeserialize: grpc.deserialize<web_organization_v1_organization_service_pb.GetListResponse>;
}
interface IOrganizationServiceService_ICreate extends grpc.MethodDefinition<web_organization_v1_organization_service_pb.CreateRequest, web_organization_v1_organization_service_pb.CreateResponse> {
    path: "/web.organization.v1.OrganizationService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_organization_v1_organization_service_pb.CreateRequest>;
    requestDeserialize: grpc.deserialize<web_organization_v1_organization_service_pb.CreateRequest>;
    responseSerialize: grpc.serialize<web_organization_v1_organization_service_pb.CreateResponse>;
    responseDeserialize: grpc.deserialize<web_organization_v1_organization_service_pb.CreateResponse>;
}
interface IOrganizationServiceService_IUpdate extends grpc.MethodDefinition<web_organization_v1_organization_service_pb.UpdateRequest, web_organization_v1_organization_service_pb.UpdateResponse> {
    path: "/web.organization.v1.OrganizationService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_organization_v1_organization_service_pb.UpdateRequest>;
    requestDeserialize: grpc.deserialize<web_organization_v1_organization_service_pb.UpdateRequest>;
    responseSerialize: grpc.serialize<web_organization_v1_organization_service_pb.UpdateResponse>;
    responseDeserialize: grpc.deserialize<web_organization_v1_organization_service_pb.UpdateResponse>;
}
interface IOrganizationServiceService_IDelete extends grpc.MethodDefinition<web_organization_v1_organization_service_pb.DeleteRequest, web_organization_v1_organization_service_pb.DeleteResponse> {
    path: "/web.organization.v1.OrganizationService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_organization_v1_organization_service_pb.DeleteRequest>;
    requestDeserialize: grpc.deserialize<web_organization_v1_organization_service_pb.DeleteRequest>;
    responseSerialize: grpc.serialize<web_organization_v1_organization_service_pb.DeleteResponse>;
    responseDeserialize: grpc.deserialize<web_organization_v1_organization_service_pb.DeleteResponse>;
}

export const OrganizationServiceService: IOrganizationServiceService;

export interface IOrganizationServiceServer extends grpc.UntypedServiceImplementation {
    getOne: grpc.handleUnaryCall<web_organization_v1_organization_service_pb.GetOneRequest, web_organization_v1_organization_service_pb.GetOneResponse>;
    getList: grpc.handleUnaryCall<web_organization_v1_organization_service_pb.GetListRequest, web_organization_v1_organization_service_pb.GetListResponse>;
    create: grpc.handleUnaryCall<web_organization_v1_organization_service_pb.CreateRequest, web_organization_v1_organization_service_pb.CreateResponse>;
    update: grpc.handleUnaryCall<web_organization_v1_organization_service_pb.UpdateRequest, web_organization_v1_organization_service_pb.UpdateResponse>;
    delete: grpc.handleUnaryCall<web_organization_v1_organization_service_pb.DeleteRequest, web_organization_v1_organization_service_pb.DeleteResponse>;
}

export interface IOrganizationServiceClient {
    getOne(request: web_organization_v1_organization_service_pb.GetOneRequest, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_service_pb.GetOneResponse) => void): grpc.ClientUnaryCall;
    getOne(request: web_organization_v1_organization_service_pb.GetOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_service_pb.GetOneResponse) => void): grpc.ClientUnaryCall;
    getOne(request: web_organization_v1_organization_service_pb.GetOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_service_pb.GetOneResponse) => void): grpc.ClientUnaryCall;
    getList(request: web_organization_v1_organization_service_pb.GetListRequest, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_service_pb.GetListResponse) => void): grpc.ClientUnaryCall;
    getList(request: web_organization_v1_organization_service_pb.GetListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_service_pb.GetListResponse) => void): grpc.ClientUnaryCall;
    getList(request: web_organization_v1_organization_service_pb.GetListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_service_pb.GetListResponse) => void): grpc.ClientUnaryCall;
    create(request: web_organization_v1_organization_service_pb.CreateRequest, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_service_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    create(request: web_organization_v1_organization_service_pb.CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_service_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    create(request: web_organization_v1_organization_service_pb.CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_service_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    update(request: web_organization_v1_organization_service_pb.UpdateRequest, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_service_pb.UpdateResponse) => void): grpc.ClientUnaryCall;
    update(request: web_organization_v1_organization_service_pb.UpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_service_pb.UpdateResponse) => void): grpc.ClientUnaryCall;
    update(request: web_organization_v1_organization_service_pb.UpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_service_pb.UpdateResponse) => void): grpc.ClientUnaryCall;
    delete(request: web_organization_v1_organization_service_pb.DeleteRequest, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_service_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    delete(request: web_organization_v1_organization_service_pb.DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_service_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    delete(request: web_organization_v1_organization_service_pb.DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_service_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
}

export class OrganizationServiceClient extends grpc.Client implements IOrganizationServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getOne(request: web_organization_v1_organization_service_pb.GetOneRequest, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_service_pb.GetOneResponse) => void): grpc.ClientUnaryCall;
    public getOne(request: web_organization_v1_organization_service_pb.GetOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_service_pb.GetOneResponse) => void): grpc.ClientUnaryCall;
    public getOne(request: web_organization_v1_organization_service_pb.GetOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_service_pb.GetOneResponse) => void): grpc.ClientUnaryCall;
    public getList(request: web_organization_v1_organization_service_pb.GetListRequest, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_service_pb.GetListResponse) => void): grpc.ClientUnaryCall;
    public getList(request: web_organization_v1_organization_service_pb.GetListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_service_pb.GetListResponse) => void): grpc.ClientUnaryCall;
    public getList(request: web_organization_v1_organization_service_pb.GetListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_service_pb.GetListResponse) => void): grpc.ClientUnaryCall;
    public create(request: web_organization_v1_organization_service_pb.CreateRequest, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_service_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public create(request: web_organization_v1_organization_service_pb.CreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_service_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public create(request: web_organization_v1_organization_service_pb.CreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_service_pb.CreateResponse) => void): grpc.ClientUnaryCall;
    public update(request: web_organization_v1_organization_service_pb.UpdateRequest, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_service_pb.UpdateResponse) => void): grpc.ClientUnaryCall;
    public update(request: web_organization_v1_organization_service_pb.UpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_service_pb.UpdateResponse) => void): grpc.ClientUnaryCall;
    public update(request: web_organization_v1_organization_service_pb.UpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_service_pb.UpdateResponse) => void): grpc.ClientUnaryCall;
    public delete(request: web_organization_v1_organization_service_pb.DeleteRequest, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_service_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    public delete(request: web_organization_v1_organization_service_pb.DeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_service_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
    public delete(request: web_organization_v1_organization_service_pb.DeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_organization_v1_organization_service_pb.DeleteResponse) => void): grpc.ClientUnaryCall;
}
