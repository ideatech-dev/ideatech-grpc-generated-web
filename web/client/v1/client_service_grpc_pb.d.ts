// package: web.client.v1
// file: web/client/v1/client_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as web_client_v1_client_service_pb from "../../../web/client/v1/client_service_pb";
import * as web_survey_v1_types_pb from "../../../web/survey/v1/types_pb";

interface ISurveyClientServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    startSurvey: ISurveyClientServiceService_IStartSurvey;
    getQuestion: ISurveyClientServiceService_IGetQuestion;
    submitAnswer: ISurveyClientServiceService_ISubmitAnswer;
}

interface ISurveyClientServiceService_IStartSurvey extends grpc.MethodDefinition<web_client_v1_client_service_pb.StartSurveyRequest, web_client_v1_client_service_pb.StartSurveyResponse> {
    path: "/web.client.v1.SurveyClientService/StartSurvey";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_client_v1_client_service_pb.StartSurveyRequest>;
    requestDeserialize: grpc.deserialize<web_client_v1_client_service_pb.StartSurveyRequest>;
    responseSerialize: grpc.serialize<web_client_v1_client_service_pb.StartSurveyResponse>;
    responseDeserialize: grpc.deserialize<web_client_v1_client_service_pb.StartSurveyResponse>;
}
interface ISurveyClientServiceService_IGetQuestion extends grpc.MethodDefinition<web_client_v1_client_service_pb.GetQuestionRequest, web_client_v1_client_service_pb.GetQuestionResponse> {
    path: "/web.client.v1.SurveyClientService/GetQuestion";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_client_v1_client_service_pb.GetQuestionRequest>;
    requestDeserialize: grpc.deserialize<web_client_v1_client_service_pb.GetQuestionRequest>;
    responseSerialize: grpc.serialize<web_client_v1_client_service_pb.GetQuestionResponse>;
    responseDeserialize: grpc.deserialize<web_client_v1_client_service_pb.GetQuestionResponse>;
}
interface ISurveyClientServiceService_ISubmitAnswer extends grpc.MethodDefinition<web_client_v1_client_service_pb.SubmitAnswerRequest, web_client_v1_client_service_pb.SubmitAnswerResponse> {
    path: "/web.client.v1.SurveyClientService/SubmitAnswer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_client_v1_client_service_pb.SubmitAnswerRequest>;
    requestDeserialize: grpc.deserialize<web_client_v1_client_service_pb.SubmitAnswerRequest>;
    responseSerialize: grpc.serialize<web_client_v1_client_service_pb.SubmitAnswerResponse>;
    responseDeserialize: grpc.deserialize<web_client_v1_client_service_pb.SubmitAnswerResponse>;
}

export const SurveyClientServiceService: ISurveyClientServiceService;

export interface ISurveyClientServiceServer extends grpc.UntypedServiceImplementation {
    startSurvey: grpc.handleUnaryCall<web_client_v1_client_service_pb.StartSurveyRequest, web_client_v1_client_service_pb.StartSurveyResponse>;
    getQuestion: grpc.handleUnaryCall<web_client_v1_client_service_pb.GetQuestionRequest, web_client_v1_client_service_pb.GetQuestionResponse>;
    submitAnswer: grpc.handleUnaryCall<web_client_v1_client_service_pb.SubmitAnswerRequest, web_client_v1_client_service_pb.SubmitAnswerResponse>;
}

export interface ISurveyClientServiceClient {
    startSurvey(request: web_client_v1_client_service_pb.StartSurveyRequest, callback: (error: grpc.ServiceError | null, response: web_client_v1_client_service_pb.StartSurveyResponse) => void): grpc.ClientUnaryCall;
    startSurvey(request: web_client_v1_client_service_pb.StartSurveyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_client_v1_client_service_pb.StartSurveyResponse) => void): grpc.ClientUnaryCall;
    startSurvey(request: web_client_v1_client_service_pb.StartSurveyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_client_v1_client_service_pb.StartSurveyResponse) => void): grpc.ClientUnaryCall;
    getQuestion(request: web_client_v1_client_service_pb.GetQuestionRequest, callback: (error: grpc.ServiceError | null, response: web_client_v1_client_service_pb.GetQuestionResponse) => void): grpc.ClientUnaryCall;
    getQuestion(request: web_client_v1_client_service_pb.GetQuestionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_client_v1_client_service_pb.GetQuestionResponse) => void): grpc.ClientUnaryCall;
    getQuestion(request: web_client_v1_client_service_pb.GetQuestionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_client_v1_client_service_pb.GetQuestionResponse) => void): grpc.ClientUnaryCall;
    submitAnswer(request: web_client_v1_client_service_pb.SubmitAnswerRequest, callback: (error: grpc.ServiceError | null, response: web_client_v1_client_service_pb.SubmitAnswerResponse) => void): grpc.ClientUnaryCall;
    submitAnswer(request: web_client_v1_client_service_pb.SubmitAnswerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_client_v1_client_service_pb.SubmitAnswerResponse) => void): grpc.ClientUnaryCall;
    submitAnswer(request: web_client_v1_client_service_pb.SubmitAnswerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_client_v1_client_service_pb.SubmitAnswerResponse) => void): grpc.ClientUnaryCall;
}

export class SurveyClientServiceClient extends grpc.Client implements ISurveyClientServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public startSurvey(request: web_client_v1_client_service_pb.StartSurveyRequest, callback: (error: grpc.ServiceError | null, response: web_client_v1_client_service_pb.StartSurveyResponse) => void): grpc.ClientUnaryCall;
    public startSurvey(request: web_client_v1_client_service_pb.StartSurveyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_client_v1_client_service_pb.StartSurveyResponse) => void): grpc.ClientUnaryCall;
    public startSurvey(request: web_client_v1_client_service_pb.StartSurveyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_client_v1_client_service_pb.StartSurveyResponse) => void): grpc.ClientUnaryCall;
    public getQuestion(request: web_client_v1_client_service_pb.GetQuestionRequest, callback: (error: grpc.ServiceError | null, response: web_client_v1_client_service_pb.GetQuestionResponse) => void): grpc.ClientUnaryCall;
    public getQuestion(request: web_client_v1_client_service_pb.GetQuestionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_client_v1_client_service_pb.GetQuestionResponse) => void): grpc.ClientUnaryCall;
    public getQuestion(request: web_client_v1_client_service_pb.GetQuestionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_client_v1_client_service_pb.GetQuestionResponse) => void): grpc.ClientUnaryCall;
    public submitAnswer(request: web_client_v1_client_service_pb.SubmitAnswerRequest, callback: (error: grpc.ServiceError | null, response: web_client_v1_client_service_pb.SubmitAnswerResponse) => void): grpc.ClientUnaryCall;
    public submitAnswer(request: web_client_v1_client_service_pb.SubmitAnswerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_client_v1_client_service_pb.SubmitAnswerResponse) => void): grpc.ClientUnaryCall;
    public submitAnswer(request: web_client_v1_client_service_pb.SubmitAnswerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_client_v1_client_service_pb.SubmitAnswerResponse) => void): grpc.ClientUnaryCall;
}
