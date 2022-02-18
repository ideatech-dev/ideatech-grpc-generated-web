// package: web.survey.v1
// file: web/survey/v1/survey_redirect.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as web_survey_v1_survey_redirect_pb from "../../../web/survey/v1/survey_redirect_pb";
import * as web_survey_v1_types_pb from "../../../web/survey/v1/types_pb";

interface ISurveyRedirectServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    surveyRedirectGetOne: ISurveyRedirectServiceService_ISurveyRedirectGetOne;
    surveyRedirectCreate: ISurveyRedirectServiceService_ISurveyRedirectCreate;
    surveyRedirectUpdate: ISurveyRedirectServiceService_ISurveyRedirectUpdate;
    surveyRedirectDelete: ISurveyRedirectServiceService_ISurveyRedirectDelete;
}

interface ISurveyRedirectServiceService_ISurveyRedirectGetOne extends grpc.MethodDefinition<web_survey_v1_survey_redirect_pb.SurveyRedirectGetOneRequest, web_survey_v1_survey_redirect_pb.SurveyRedirectGetOneResponse> {
    path: "/web.survey.v1.SurveyRedirectService/SurveyRedirectGetOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_survey_v1_survey_redirect_pb.SurveyRedirectGetOneRequest>;
    requestDeserialize: grpc.deserialize<web_survey_v1_survey_redirect_pb.SurveyRedirectGetOneRequest>;
    responseSerialize: grpc.serialize<web_survey_v1_survey_redirect_pb.SurveyRedirectGetOneResponse>;
    responseDeserialize: grpc.deserialize<web_survey_v1_survey_redirect_pb.SurveyRedirectGetOneResponse>;
}
interface ISurveyRedirectServiceService_ISurveyRedirectCreate extends grpc.MethodDefinition<web_survey_v1_survey_redirect_pb.SurveyRedirectCreateRequest, web_survey_v1_survey_redirect_pb.SurveyRedirectCreateResponse> {
    path: "/web.survey.v1.SurveyRedirectService/SurveyRedirectCreate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_survey_v1_survey_redirect_pb.SurveyRedirectCreateRequest>;
    requestDeserialize: grpc.deserialize<web_survey_v1_survey_redirect_pb.SurveyRedirectCreateRequest>;
    responseSerialize: grpc.serialize<web_survey_v1_survey_redirect_pb.SurveyRedirectCreateResponse>;
    responseDeserialize: grpc.deserialize<web_survey_v1_survey_redirect_pb.SurveyRedirectCreateResponse>;
}
interface ISurveyRedirectServiceService_ISurveyRedirectUpdate extends grpc.MethodDefinition<web_survey_v1_survey_redirect_pb.SurveyRedirectUpdateRequest, web_survey_v1_survey_redirect_pb.SurveyRedirectUpdateResponse> {
    path: "/web.survey.v1.SurveyRedirectService/SurveyRedirectUpdate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_survey_v1_survey_redirect_pb.SurveyRedirectUpdateRequest>;
    requestDeserialize: grpc.deserialize<web_survey_v1_survey_redirect_pb.SurveyRedirectUpdateRequest>;
    responseSerialize: grpc.serialize<web_survey_v1_survey_redirect_pb.SurveyRedirectUpdateResponse>;
    responseDeserialize: grpc.deserialize<web_survey_v1_survey_redirect_pb.SurveyRedirectUpdateResponse>;
}
interface ISurveyRedirectServiceService_ISurveyRedirectDelete extends grpc.MethodDefinition<web_survey_v1_survey_redirect_pb.SurveyRedirectDeleteRequest, web_survey_v1_survey_redirect_pb.SurveyRedirectDeleteResponse> {
    path: "/web.survey.v1.SurveyRedirectService/SurveyRedirectDelete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_survey_v1_survey_redirect_pb.SurveyRedirectDeleteRequest>;
    requestDeserialize: grpc.deserialize<web_survey_v1_survey_redirect_pb.SurveyRedirectDeleteRequest>;
    responseSerialize: grpc.serialize<web_survey_v1_survey_redirect_pb.SurveyRedirectDeleteResponse>;
    responseDeserialize: grpc.deserialize<web_survey_v1_survey_redirect_pb.SurveyRedirectDeleteResponse>;
}

export const SurveyRedirectServiceService: ISurveyRedirectServiceService;

export interface ISurveyRedirectServiceServer extends grpc.UntypedServiceImplementation {
    surveyRedirectGetOne: grpc.handleUnaryCall<web_survey_v1_survey_redirect_pb.SurveyRedirectGetOneRequest, web_survey_v1_survey_redirect_pb.SurveyRedirectGetOneResponse>;
    surveyRedirectCreate: grpc.handleUnaryCall<web_survey_v1_survey_redirect_pb.SurveyRedirectCreateRequest, web_survey_v1_survey_redirect_pb.SurveyRedirectCreateResponse>;
    surveyRedirectUpdate: grpc.handleUnaryCall<web_survey_v1_survey_redirect_pb.SurveyRedirectUpdateRequest, web_survey_v1_survey_redirect_pb.SurveyRedirectUpdateResponse>;
    surveyRedirectDelete: grpc.handleUnaryCall<web_survey_v1_survey_redirect_pb.SurveyRedirectDeleteRequest, web_survey_v1_survey_redirect_pb.SurveyRedirectDeleteResponse>;
}

export interface ISurveyRedirectServiceClient {
    surveyRedirectGetOne(request: web_survey_v1_survey_redirect_pb.SurveyRedirectGetOneRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_redirect_pb.SurveyRedirectGetOneResponse) => void): grpc.ClientUnaryCall;
    surveyRedirectGetOne(request: web_survey_v1_survey_redirect_pb.SurveyRedirectGetOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_redirect_pb.SurveyRedirectGetOneResponse) => void): grpc.ClientUnaryCall;
    surveyRedirectGetOne(request: web_survey_v1_survey_redirect_pb.SurveyRedirectGetOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_redirect_pb.SurveyRedirectGetOneResponse) => void): grpc.ClientUnaryCall;
    surveyRedirectCreate(request: web_survey_v1_survey_redirect_pb.SurveyRedirectCreateRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_redirect_pb.SurveyRedirectCreateResponse) => void): grpc.ClientUnaryCall;
    surveyRedirectCreate(request: web_survey_v1_survey_redirect_pb.SurveyRedirectCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_redirect_pb.SurveyRedirectCreateResponse) => void): grpc.ClientUnaryCall;
    surveyRedirectCreate(request: web_survey_v1_survey_redirect_pb.SurveyRedirectCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_redirect_pb.SurveyRedirectCreateResponse) => void): grpc.ClientUnaryCall;
    surveyRedirectUpdate(request: web_survey_v1_survey_redirect_pb.SurveyRedirectUpdateRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_redirect_pb.SurveyRedirectUpdateResponse) => void): grpc.ClientUnaryCall;
    surveyRedirectUpdate(request: web_survey_v1_survey_redirect_pb.SurveyRedirectUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_redirect_pb.SurveyRedirectUpdateResponse) => void): grpc.ClientUnaryCall;
    surveyRedirectUpdate(request: web_survey_v1_survey_redirect_pb.SurveyRedirectUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_redirect_pb.SurveyRedirectUpdateResponse) => void): grpc.ClientUnaryCall;
    surveyRedirectDelete(request: web_survey_v1_survey_redirect_pb.SurveyRedirectDeleteRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_redirect_pb.SurveyRedirectDeleteResponse) => void): grpc.ClientUnaryCall;
    surveyRedirectDelete(request: web_survey_v1_survey_redirect_pb.SurveyRedirectDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_redirect_pb.SurveyRedirectDeleteResponse) => void): grpc.ClientUnaryCall;
    surveyRedirectDelete(request: web_survey_v1_survey_redirect_pb.SurveyRedirectDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_redirect_pb.SurveyRedirectDeleteResponse) => void): grpc.ClientUnaryCall;
}

export class SurveyRedirectServiceClient extends grpc.Client implements ISurveyRedirectServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public surveyRedirectGetOne(request: web_survey_v1_survey_redirect_pb.SurveyRedirectGetOneRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_redirect_pb.SurveyRedirectGetOneResponse) => void): grpc.ClientUnaryCall;
    public surveyRedirectGetOne(request: web_survey_v1_survey_redirect_pb.SurveyRedirectGetOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_redirect_pb.SurveyRedirectGetOneResponse) => void): grpc.ClientUnaryCall;
    public surveyRedirectGetOne(request: web_survey_v1_survey_redirect_pb.SurveyRedirectGetOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_redirect_pb.SurveyRedirectGetOneResponse) => void): grpc.ClientUnaryCall;
    public surveyRedirectCreate(request: web_survey_v1_survey_redirect_pb.SurveyRedirectCreateRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_redirect_pb.SurveyRedirectCreateResponse) => void): grpc.ClientUnaryCall;
    public surveyRedirectCreate(request: web_survey_v1_survey_redirect_pb.SurveyRedirectCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_redirect_pb.SurveyRedirectCreateResponse) => void): grpc.ClientUnaryCall;
    public surveyRedirectCreate(request: web_survey_v1_survey_redirect_pb.SurveyRedirectCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_redirect_pb.SurveyRedirectCreateResponse) => void): grpc.ClientUnaryCall;
    public surveyRedirectUpdate(request: web_survey_v1_survey_redirect_pb.SurveyRedirectUpdateRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_redirect_pb.SurveyRedirectUpdateResponse) => void): grpc.ClientUnaryCall;
    public surveyRedirectUpdate(request: web_survey_v1_survey_redirect_pb.SurveyRedirectUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_redirect_pb.SurveyRedirectUpdateResponse) => void): grpc.ClientUnaryCall;
    public surveyRedirectUpdate(request: web_survey_v1_survey_redirect_pb.SurveyRedirectUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_redirect_pb.SurveyRedirectUpdateResponse) => void): grpc.ClientUnaryCall;
    public surveyRedirectDelete(request: web_survey_v1_survey_redirect_pb.SurveyRedirectDeleteRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_redirect_pb.SurveyRedirectDeleteResponse) => void): grpc.ClientUnaryCall;
    public surveyRedirectDelete(request: web_survey_v1_survey_redirect_pb.SurveyRedirectDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_redirect_pb.SurveyRedirectDeleteResponse) => void): grpc.ClientUnaryCall;
    public surveyRedirectDelete(request: web_survey_v1_survey_redirect_pb.SurveyRedirectDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_redirect_pb.SurveyRedirectDeleteResponse) => void): grpc.ClientUnaryCall;
}
