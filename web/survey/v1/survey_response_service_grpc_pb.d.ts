// package: web.survey.v1
// file: web/survey/v1/survey_response_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as web_survey_v1_survey_response_service_pb from "../../../web/survey/v1/survey_response_service_pb";
import * as web_survey_v1_types_pb from "../../../web/survey/v1/types_pb";

interface ISurveyResponseServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    responseGetAll: ISurveyResponseServiceService_IResponseGetAll;
    responseGetOne: ISurveyResponseServiceService_IResponseGetOne;
    responseAnswerGetList: ISurveyResponseServiceService_IResponseAnswerGetList;
}

interface ISurveyResponseServiceService_IResponseGetAll extends grpc.MethodDefinition<web_survey_v1_survey_response_service_pb.ResponseGetAllRequest, web_survey_v1_survey_response_service_pb.ResponseGetAllResponse> {
    path: "/web.survey.v1.SurveyResponseService/ResponseGetAll";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_survey_v1_survey_response_service_pb.ResponseGetAllRequest>;
    requestDeserialize: grpc.deserialize<web_survey_v1_survey_response_service_pb.ResponseGetAllRequest>;
    responseSerialize: grpc.serialize<web_survey_v1_survey_response_service_pb.ResponseGetAllResponse>;
    responseDeserialize: grpc.deserialize<web_survey_v1_survey_response_service_pb.ResponseGetAllResponse>;
}
interface ISurveyResponseServiceService_IResponseGetOne extends grpc.MethodDefinition<web_survey_v1_survey_response_service_pb.ResponseGetOneRequest, web_survey_v1_survey_response_service_pb.ResponseGetOneResponse> {
    path: "/web.survey.v1.SurveyResponseService/ResponseGetOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_survey_v1_survey_response_service_pb.ResponseGetOneRequest>;
    requestDeserialize: grpc.deserialize<web_survey_v1_survey_response_service_pb.ResponseGetOneRequest>;
    responseSerialize: grpc.serialize<web_survey_v1_survey_response_service_pb.ResponseGetOneResponse>;
    responseDeserialize: grpc.deserialize<web_survey_v1_survey_response_service_pb.ResponseGetOneResponse>;
}
interface ISurveyResponseServiceService_IResponseAnswerGetList extends grpc.MethodDefinition<web_survey_v1_survey_response_service_pb.ResponseAnswerGetListRequest, web_survey_v1_survey_response_service_pb.ResponseAnswerGetListResponse> {
    path: "/web.survey.v1.SurveyResponseService/ResponseAnswerGetList";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_survey_v1_survey_response_service_pb.ResponseAnswerGetListRequest>;
    requestDeserialize: grpc.deserialize<web_survey_v1_survey_response_service_pb.ResponseAnswerGetListRequest>;
    responseSerialize: grpc.serialize<web_survey_v1_survey_response_service_pb.ResponseAnswerGetListResponse>;
    responseDeserialize: grpc.deserialize<web_survey_v1_survey_response_service_pb.ResponseAnswerGetListResponse>;
}

export const SurveyResponseServiceService: ISurveyResponseServiceService;

export interface ISurveyResponseServiceServer extends grpc.UntypedServiceImplementation {
    responseGetAll: grpc.handleUnaryCall<web_survey_v1_survey_response_service_pb.ResponseGetAllRequest, web_survey_v1_survey_response_service_pb.ResponseGetAllResponse>;
    responseGetOne: grpc.handleUnaryCall<web_survey_v1_survey_response_service_pb.ResponseGetOneRequest, web_survey_v1_survey_response_service_pb.ResponseGetOneResponse>;
    responseAnswerGetList: grpc.handleUnaryCall<web_survey_v1_survey_response_service_pb.ResponseAnswerGetListRequest, web_survey_v1_survey_response_service_pb.ResponseAnswerGetListResponse>;
}

export interface ISurveyResponseServiceClient {
    responseGetAll(request: web_survey_v1_survey_response_service_pb.ResponseGetAllRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_response_service_pb.ResponseGetAllResponse) => void): grpc.ClientUnaryCall;
    responseGetAll(request: web_survey_v1_survey_response_service_pb.ResponseGetAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_response_service_pb.ResponseGetAllResponse) => void): grpc.ClientUnaryCall;
    responseGetAll(request: web_survey_v1_survey_response_service_pb.ResponseGetAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_response_service_pb.ResponseGetAllResponse) => void): grpc.ClientUnaryCall;
    responseGetOne(request: web_survey_v1_survey_response_service_pb.ResponseGetOneRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_response_service_pb.ResponseGetOneResponse) => void): grpc.ClientUnaryCall;
    responseGetOne(request: web_survey_v1_survey_response_service_pb.ResponseGetOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_response_service_pb.ResponseGetOneResponse) => void): grpc.ClientUnaryCall;
    responseGetOne(request: web_survey_v1_survey_response_service_pb.ResponseGetOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_response_service_pb.ResponseGetOneResponse) => void): grpc.ClientUnaryCall;
    responseAnswerGetList(request: web_survey_v1_survey_response_service_pb.ResponseAnswerGetListRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_response_service_pb.ResponseAnswerGetListResponse) => void): grpc.ClientUnaryCall;
    responseAnswerGetList(request: web_survey_v1_survey_response_service_pb.ResponseAnswerGetListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_response_service_pb.ResponseAnswerGetListResponse) => void): grpc.ClientUnaryCall;
    responseAnswerGetList(request: web_survey_v1_survey_response_service_pb.ResponseAnswerGetListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_response_service_pb.ResponseAnswerGetListResponse) => void): grpc.ClientUnaryCall;
}

export class SurveyResponseServiceClient extends grpc.Client implements ISurveyResponseServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public responseGetAll(request: web_survey_v1_survey_response_service_pb.ResponseGetAllRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_response_service_pb.ResponseGetAllResponse) => void): grpc.ClientUnaryCall;
    public responseGetAll(request: web_survey_v1_survey_response_service_pb.ResponseGetAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_response_service_pb.ResponseGetAllResponse) => void): grpc.ClientUnaryCall;
    public responseGetAll(request: web_survey_v1_survey_response_service_pb.ResponseGetAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_response_service_pb.ResponseGetAllResponse) => void): grpc.ClientUnaryCall;
    public responseGetOne(request: web_survey_v1_survey_response_service_pb.ResponseGetOneRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_response_service_pb.ResponseGetOneResponse) => void): grpc.ClientUnaryCall;
    public responseGetOne(request: web_survey_v1_survey_response_service_pb.ResponseGetOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_response_service_pb.ResponseGetOneResponse) => void): grpc.ClientUnaryCall;
    public responseGetOne(request: web_survey_v1_survey_response_service_pb.ResponseGetOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_response_service_pb.ResponseGetOneResponse) => void): grpc.ClientUnaryCall;
    public responseAnswerGetList(request: web_survey_v1_survey_response_service_pb.ResponseAnswerGetListRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_response_service_pb.ResponseAnswerGetListResponse) => void): grpc.ClientUnaryCall;
    public responseAnswerGetList(request: web_survey_v1_survey_response_service_pb.ResponseAnswerGetListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_response_service_pb.ResponseAnswerGetListResponse) => void): grpc.ClientUnaryCall;
    public responseAnswerGetList(request: web_survey_v1_survey_response_service_pb.ResponseAnswerGetListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_response_service_pb.ResponseAnswerGetListResponse) => void): grpc.ClientUnaryCall;
}
