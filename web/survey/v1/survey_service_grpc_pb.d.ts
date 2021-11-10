// package: web.survey.v1
// file: web/survey/v1/survey_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as web_survey_v1_survey_service_pb from "../../../web/survey/v1/survey_service_pb";
import * as web_survey_v1_types_pb from "../../../web/survey/v1/types_pb";

interface ISurveyServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    surveyGetOne: ISurveyServiceService_ISurveyGetOne;
    surveyGetAll: ISurveyServiceService_ISurveyGetAll;
    surveyCreate: ISurveyServiceService_ISurveyCreate;
    surveyUpdate: ISurveyServiceService_ISurveyUpdate;
    surveyDelete: ISurveyServiceService_ISurveyDelete;
}

interface ISurveyServiceService_ISurveyGetOne extends grpc.MethodDefinition<web_survey_v1_survey_service_pb.SurveyGetOneRequest, web_survey_v1_survey_service_pb.SurveyGetOneResponse> {
    path: "/web.survey.v1.SurveyService/SurveyGetOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_survey_v1_survey_service_pb.SurveyGetOneRequest>;
    requestDeserialize: grpc.deserialize<web_survey_v1_survey_service_pb.SurveyGetOneRequest>;
    responseSerialize: grpc.serialize<web_survey_v1_survey_service_pb.SurveyGetOneResponse>;
    responseDeserialize: grpc.deserialize<web_survey_v1_survey_service_pb.SurveyGetOneResponse>;
}
interface ISurveyServiceService_ISurveyGetAll extends grpc.MethodDefinition<web_survey_v1_survey_service_pb.SurveyGetAllRequest, web_survey_v1_survey_service_pb.SurveyGetAllResponse> {
    path: "/web.survey.v1.SurveyService/SurveyGetAll";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_survey_v1_survey_service_pb.SurveyGetAllRequest>;
    requestDeserialize: grpc.deserialize<web_survey_v1_survey_service_pb.SurveyGetAllRequest>;
    responseSerialize: grpc.serialize<web_survey_v1_survey_service_pb.SurveyGetAllResponse>;
    responseDeserialize: grpc.deserialize<web_survey_v1_survey_service_pb.SurveyGetAllResponse>;
}
interface ISurveyServiceService_ISurveyCreate extends grpc.MethodDefinition<web_survey_v1_survey_service_pb.SurveyCreateRequest, web_survey_v1_survey_service_pb.SurveyCreateResponse> {
    path: "/web.survey.v1.SurveyService/SurveyCreate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_survey_v1_survey_service_pb.SurveyCreateRequest>;
    requestDeserialize: grpc.deserialize<web_survey_v1_survey_service_pb.SurveyCreateRequest>;
    responseSerialize: grpc.serialize<web_survey_v1_survey_service_pb.SurveyCreateResponse>;
    responseDeserialize: grpc.deserialize<web_survey_v1_survey_service_pb.SurveyCreateResponse>;
}
interface ISurveyServiceService_ISurveyUpdate extends grpc.MethodDefinition<web_survey_v1_survey_service_pb.SurveyUpdateRequest, web_survey_v1_survey_service_pb.SurveyUpdateResponse> {
    path: "/web.survey.v1.SurveyService/SurveyUpdate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_survey_v1_survey_service_pb.SurveyUpdateRequest>;
    requestDeserialize: grpc.deserialize<web_survey_v1_survey_service_pb.SurveyUpdateRequest>;
    responseSerialize: grpc.serialize<web_survey_v1_survey_service_pb.SurveyUpdateResponse>;
    responseDeserialize: grpc.deserialize<web_survey_v1_survey_service_pb.SurveyUpdateResponse>;
}
interface ISurveyServiceService_ISurveyDelete extends grpc.MethodDefinition<web_survey_v1_survey_service_pb.SurveyDeleteRequest, web_survey_v1_survey_service_pb.SurveyDeleteResponse> {
    path: "/web.survey.v1.SurveyService/SurveyDelete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_survey_v1_survey_service_pb.SurveyDeleteRequest>;
    requestDeserialize: grpc.deserialize<web_survey_v1_survey_service_pb.SurveyDeleteRequest>;
    responseSerialize: grpc.serialize<web_survey_v1_survey_service_pb.SurveyDeleteResponse>;
    responseDeserialize: grpc.deserialize<web_survey_v1_survey_service_pb.SurveyDeleteResponse>;
}

export const SurveyServiceService: ISurveyServiceService;

export interface ISurveyServiceServer extends grpc.UntypedServiceImplementation {
    surveyGetOne: grpc.handleUnaryCall<web_survey_v1_survey_service_pb.SurveyGetOneRequest, web_survey_v1_survey_service_pb.SurveyGetOneResponse>;
    surveyGetAll: grpc.handleUnaryCall<web_survey_v1_survey_service_pb.SurveyGetAllRequest, web_survey_v1_survey_service_pb.SurveyGetAllResponse>;
    surveyCreate: grpc.handleUnaryCall<web_survey_v1_survey_service_pb.SurveyCreateRequest, web_survey_v1_survey_service_pb.SurveyCreateResponse>;
    surveyUpdate: grpc.handleUnaryCall<web_survey_v1_survey_service_pb.SurveyUpdateRequest, web_survey_v1_survey_service_pb.SurveyUpdateResponse>;
    surveyDelete: grpc.handleUnaryCall<web_survey_v1_survey_service_pb.SurveyDeleteRequest, web_survey_v1_survey_service_pb.SurveyDeleteResponse>;
}

export interface ISurveyServiceClient {
    surveyGetOne(request: web_survey_v1_survey_service_pb.SurveyGetOneRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_service_pb.SurveyGetOneResponse) => void): grpc.ClientUnaryCall;
    surveyGetOne(request: web_survey_v1_survey_service_pb.SurveyGetOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_service_pb.SurveyGetOneResponse) => void): grpc.ClientUnaryCall;
    surveyGetOne(request: web_survey_v1_survey_service_pb.SurveyGetOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_service_pb.SurveyGetOneResponse) => void): grpc.ClientUnaryCall;
    surveyGetAll(request: web_survey_v1_survey_service_pb.SurveyGetAllRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_service_pb.SurveyGetAllResponse) => void): grpc.ClientUnaryCall;
    surveyGetAll(request: web_survey_v1_survey_service_pb.SurveyGetAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_service_pb.SurveyGetAllResponse) => void): grpc.ClientUnaryCall;
    surveyGetAll(request: web_survey_v1_survey_service_pb.SurveyGetAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_service_pb.SurveyGetAllResponse) => void): grpc.ClientUnaryCall;
    surveyCreate(request: web_survey_v1_survey_service_pb.SurveyCreateRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_service_pb.SurveyCreateResponse) => void): grpc.ClientUnaryCall;
    surveyCreate(request: web_survey_v1_survey_service_pb.SurveyCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_service_pb.SurveyCreateResponse) => void): grpc.ClientUnaryCall;
    surveyCreate(request: web_survey_v1_survey_service_pb.SurveyCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_service_pb.SurveyCreateResponse) => void): grpc.ClientUnaryCall;
    surveyUpdate(request: web_survey_v1_survey_service_pb.SurveyUpdateRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_service_pb.SurveyUpdateResponse) => void): grpc.ClientUnaryCall;
    surveyUpdate(request: web_survey_v1_survey_service_pb.SurveyUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_service_pb.SurveyUpdateResponse) => void): grpc.ClientUnaryCall;
    surveyUpdate(request: web_survey_v1_survey_service_pb.SurveyUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_service_pb.SurveyUpdateResponse) => void): grpc.ClientUnaryCall;
    surveyDelete(request: web_survey_v1_survey_service_pb.SurveyDeleteRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_service_pb.SurveyDeleteResponse) => void): grpc.ClientUnaryCall;
    surveyDelete(request: web_survey_v1_survey_service_pb.SurveyDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_service_pb.SurveyDeleteResponse) => void): grpc.ClientUnaryCall;
    surveyDelete(request: web_survey_v1_survey_service_pb.SurveyDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_service_pb.SurveyDeleteResponse) => void): grpc.ClientUnaryCall;
}

export class SurveyServiceClient extends grpc.Client implements ISurveyServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public surveyGetOne(request: web_survey_v1_survey_service_pb.SurveyGetOneRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_service_pb.SurveyGetOneResponse) => void): grpc.ClientUnaryCall;
    public surveyGetOne(request: web_survey_v1_survey_service_pb.SurveyGetOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_service_pb.SurveyGetOneResponse) => void): grpc.ClientUnaryCall;
    public surveyGetOne(request: web_survey_v1_survey_service_pb.SurveyGetOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_service_pb.SurveyGetOneResponse) => void): grpc.ClientUnaryCall;
    public surveyGetAll(request: web_survey_v1_survey_service_pb.SurveyGetAllRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_service_pb.SurveyGetAllResponse) => void): grpc.ClientUnaryCall;
    public surveyGetAll(request: web_survey_v1_survey_service_pb.SurveyGetAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_service_pb.SurveyGetAllResponse) => void): grpc.ClientUnaryCall;
    public surveyGetAll(request: web_survey_v1_survey_service_pb.SurveyGetAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_service_pb.SurveyGetAllResponse) => void): grpc.ClientUnaryCall;
    public surveyCreate(request: web_survey_v1_survey_service_pb.SurveyCreateRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_service_pb.SurveyCreateResponse) => void): grpc.ClientUnaryCall;
    public surveyCreate(request: web_survey_v1_survey_service_pb.SurveyCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_service_pb.SurveyCreateResponse) => void): grpc.ClientUnaryCall;
    public surveyCreate(request: web_survey_v1_survey_service_pb.SurveyCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_service_pb.SurveyCreateResponse) => void): grpc.ClientUnaryCall;
    public surveyUpdate(request: web_survey_v1_survey_service_pb.SurveyUpdateRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_service_pb.SurveyUpdateResponse) => void): grpc.ClientUnaryCall;
    public surveyUpdate(request: web_survey_v1_survey_service_pb.SurveyUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_service_pb.SurveyUpdateResponse) => void): grpc.ClientUnaryCall;
    public surveyUpdate(request: web_survey_v1_survey_service_pb.SurveyUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_service_pb.SurveyUpdateResponse) => void): grpc.ClientUnaryCall;
    public surveyDelete(request: web_survey_v1_survey_service_pb.SurveyDeleteRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_service_pb.SurveyDeleteResponse) => void): grpc.ClientUnaryCall;
    public surveyDelete(request: web_survey_v1_survey_service_pb.SurveyDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_service_pb.SurveyDeleteResponse) => void): grpc.ClientUnaryCall;
    public surveyDelete(request: web_survey_v1_survey_service_pb.SurveyDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_service_pb.SurveyDeleteResponse) => void): grpc.ClientUnaryCall;
}
