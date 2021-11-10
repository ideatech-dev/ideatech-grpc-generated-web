// package: web.survey.v1
// file: web/survey/v1/survey_page_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as web_survey_v1_survey_page_service_pb from "../../../web/survey/v1/survey_page_service_pb";
import * as web_survey_v1_types_pb from "../../../web/survey/v1/types_pb";

interface ISurveyPageServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    pageGetOne: ISurveyPageServiceService_IPageGetOne;
    pageGetAll: ISurveyPageServiceService_IPageGetAll;
    pageCreate: ISurveyPageServiceService_IPageCreate;
    pageDelete: ISurveyPageServiceService_IPageDelete;
}

interface ISurveyPageServiceService_IPageGetOne extends grpc.MethodDefinition<web_survey_v1_survey_page_service_pb.PageGetOneRequest, web_survey_v1_survey_page_service_pb.PageGetOneResponse> {
    path: "/web.survey.v1.SurveyPageService/PageGetOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_survey_v1_survey_page_service_pb.PageGetOneRequest>;
    requestDeserialize: grpc.deserialize<web_survey_v1_survey_page_service_pb.PageGetOneRequest>;
    responseSerialize: grpc.serialize<web_survey_v1_survey_page_service_pb.PageGetOneResponse>;
    responseDeserialize: grpc.deserialize<web_survey_v1_survey_page_service_pb.PageGetOneResponse>;
}
interface ISurveyPageServiceService_IPageGetAll extends grpc.MethodDefinition<web_survey_v1_survey_page_service_pb.PageGetAllRequest, web_survey_v1_survey_page_service_pb.PageGetAllResponse> {
    path: "/web.survey.v1.SurveyPageService/PageGetAll";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_survey_v1_survey_page_service_pb.PageGetAllRequest>;
    requestDeserialize: grpc.deserialize<web_survey_v1_survey_page_service_pb.PageGetAllRequest>;
    responseSerialize: grpc.serialize<web_survey_v1_survey_page_service_pb.PageGetAllResponse>;
    responseDeserialize: grpc.deserialize<web_survey_v1_survey_page_service_pb.PageGetAllResponse>;
}
interface ISurveyPageServiceService_IPageCreate extends grpc.MethodDefinition<web_survey_v1_survey_page_service_pb.PageCreateRequest, web_survey_v1_survey_page_service_pb.PageCreateResponse> {
    path: "/web.survey.v1.SurveyPageService/PageCreate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_survey_v1_survey_page_service_pb.PageCreateRequest>;
    requestDeserialize: grpc.deserialize<web_survey_v1_survey_page_service_pb.PageCreateRequest>;
    responseSerialize: grpc.serialize<web_survey_v1_survey_page_service_pb.PageCreateResponse>;
    responseDeserialize: grpc.deserialize<web_survey_v1_survey_page_service_pb.PageCreateResponse>;
}
interface ISurveyPageServiceService_IPageDelete extends grpc.MethodDefinition<web_survey_v1_survey_page_service_pb.PageDeleteRequest, web_survey_v1_survey_page_service_pb.PageDeleteResponse> {
    path: "/web.survey.v1.SurveyPageService/PageDelete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_survey_v1_survey_page_service_pb.PageDeleteRequest>;
    requestDeserialize: grpc.deserialize<web_survey_v1_survey_page_service_pb.PageDeleteRequest>;
    responseSerialize: grpc.serialize<web_survey_v1_survey_page_service_pb.PageDeleteResponse>;
    responseDeserialize: grpc.deserialize<web_survey_v1_survey_page_service_pb.PageDeleteResponse>;
}

export const SurveyPageServiceService: ISurveyPageServiceService;

export interface ISurveyPageServiceServer extends grpc.UntypedServiceImplementation {
    pageGetOne: grpc.handleUnaryCall<web_survey_v1_survey_page_service_pb.PageGetOneRequest, web_survey_v1_survey_page_service_pb.PageGetOneResponse>;
    pageGetAll: grpc.handleUnaryCall<web_survey_v1_survey_page_service_pb.PageGetAllRequest, web_survey_v1_survey_page_service_pb.PageGetAllResponse>;
    pageCreate: grpc.handleUnaryCall<web_survey_v1_survey_page_service_pb.PageCreateRequest, web_survey_v1_survey_page_service_pb.PageCreateResponse>;
    pageDelete: grpc.handleUnaryCall<web_survey_v1_survey_page_service_pb.PageDeleteRequest, web_survey_v1_survey_page_service_pb.PageDeleteResponse>;
}

export interface ISurveyPageServiceClient {
    pageGetOne(request: web_survey_v1_survey_page_service_pb.PageGetOneRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_page_service_pb.PageGetOneResponse) => void): grpc.ClientUnaryCall;
    pageGetOne(request: web_survey_v1_survey_page_service_pb.PageGetOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_page_service_pb.PageGetOneResponse) => void): grpc.ClientUnaryCall;
    pageGetOne(request: web_survey_v1_survey_page_service_pb.PageGetOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_page_service_pb.PageGetOneResponse) => void): grpc.ClientUnaryCall;
    pageGetAll(request: web_survey_v1_survey_page_service_pb.PageGetAllRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_page_service_pb.PageGetAllResponse) => void): grpc.ClientUnaryCall;
    pageGetAll(request: web_survey_v1_survey_page_service_pb.PageGetAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_page_service_pb.PageGetAllResponse) => void): grpc.ClientUnaryCall;
    pageGetAll(request: web_survey_v1_survey_page_service_pb.PageGetAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_page_service_pb.PageGetAllResponse) => void): grpc.ClientUnaryCall;
    pageCreate(request: web_survey_v1_survey_page_service_pb.PageCreateRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_page_service_pb.PageCreateResponse) => void): grpc.ClientUnaryCall;
    pageCreate(request: web_survey_v1_survey_page_service_pb.PageCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_page_service_pb.PageCreateResponse) => void): grpc.ClientUnaryCall;
    pageCreate(request: web_survey_v1_survey_page_service_pb.PageCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_page_service_pb.PageCreateResponse) => void): grpc.ClientUnaryCall;
    pageDelete(request: web_survey_v1_survey_page_service_pb.PageDeleteRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_page_service_pb.PageDeleteResponse) => void): grpc.ClientUnaryCall;
    pageDelete(request: web_survey_v1_survey_page_service_pb.PageDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_page_service_pb.PageDeleteResponse) => void): grpc.ClientUnaryCall;
    pageDelete(request: web_survey_v1_survey_page_service_pb.PageDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_page_service_pb.PageDeleteResponse) => void): grpc.ClientUnaryCall;
}

export class SurveyPageServiceClient extends grpc.Client implements ISurveyPageServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public pageGetOne(request: web_survey_v1_survey_page_service_pb.PageGetOneRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_page_service_pb.PageGetOneResponse) => void): grpc.ClientUnaryCall;
    public pageGetOne(request: web_survey_v1_survey_page_service_pb.PageGetOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_page_service_pb.PageGetOneResponse) => void): grpc.ClientUnaryCall;
    public pageGetOne(request: web_survey_v1_survey_page_service_pb.PageGetOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_page_service_pb.PageGetOneResponse) => void): grpc.ClientUnaryCall;
    public pageGetAll(request: web_survey_v1_survey_page_service_pb.PageGetAllRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_page_service_pb.PageGetAllResponse) => void): grpc.ClientUnaryCall;
    public pageGetAll(request: web_survey_v1_survey_page_service_pb.PageGetAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_page_service_pb.PageGetAllResponse) => void): grpc.ClientUnaryCall;
    public pageGetAll(request: web_survey_v1_survey_page_service_pb.PageGetAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_page_service_pb.PageGetAllResponse) => void): grpc.ClientUnaryCall;
    public pageCreate(request: web_survey_v1_survey_page_service_pb.PageCreateRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_page_service_pb.PageCreateResponse) => void): grpc.ClientUnaryCall;
    public pageCreate(request: web_survey_v1_survey_page_service_pb.PageCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_page_service_pb.PageCreateResponse) => void): grpc.ClientUnaryCall;
    public pageCreate(request: web_survey_v1_survey_page_service_pb.PageCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_page_service_pb.PageCreateResponse) => void): grpc.ClientUnaryCall;
    public pageDelete(request: web_survey_v1_survey_page_service_pb.PageDeleteRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_page_service_pb.PageDeleteResponse) => void): grpc.ClientUnaryCall;
    public pageDelete(request: web_survey_v1_survey_page_service_pb.PageDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_page_service_pb.PageDeleteResponse) => void): grpc.ClientUnaryCall;
    public pageDelete(request: web_survey_v1_survey_page_service_pb.PageDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_page_service_pb.PageDeleteResponse) => void): grpc.ClientUnaryCall;
}
