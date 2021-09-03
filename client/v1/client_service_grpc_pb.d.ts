// package: client.v1
// file: client/v1/client_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as client_v1_client_service_pb from "../../client/v1/client_service_pb";
import * as client_v1_question_answer_pb from "../../client/v1/question_answer_pb";

interface ISurveyClientServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    startSurvey: ISurveyClientServiceService_IStartSurvey;
    getQuestion: ISurveyClientServiceService_IGetQuestion;
    submitAnswer: ISurveyClientServiceService_ISubmitAnswer;
}

interface ISurveyClientServiceService_IStartSurvey extends grpc.MethodDefinition<client_v1_question_answer_pb.StartSurveyRequest, client_v1_question_answer_pb.StartSurveyResponse> {
    path: "/client.v1.SurveyClientService/StartSurvey";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<client_v1_question_answer_pb.StartSurveyRequest>;
    requestDeserialize: grpc.deserialize<client_v1_question_answer_pb.StartSurveyRequest>;
    responseSerialize: grpc.serialize<client_v1_question_answer_pb.StartSurveyResponse>;
    responseDeserialize: grpc.deserialize<client_v1_question_answer_pb.StartSurveyResponse>;
}
interface ISurveyClientServiceService_IGetQuestion extends grpc.MethodDefinition<client_v1_question_answer_pb.GetQuestionRequest, client_v1_question_answer_pb.GetQuestionResponse> {
    path: "/client.v1.SurveyClientService/GetQuestion";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<client_v1_question_answer_pb.GetQuestionRequest>;
    requestDeserialize: grpc.deserialize<client_v1_question_answer_pb.GetQuestionRequest>;
    responseSerialize: grpc.serialize<client_v1_question_answer_pb.GetQuestionResponse>;
    responseDeserialize: grpc.deserialize<client_v1_question_answer_pb.GetQuestionResponse>;
}
interface ISurveyClientServiceService_ISubmitAnswer extends grpc.MethodDefinition<client_v1_question_answer_pb.SubmitAnswerRequest, client_v1_question_answer_pb.SubmitAnswerResponse> {
    path: "/client.v1.SurveyClientService/SubmitAnswer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<client_v1_question_answer_pb.SubmitAnswerRequest>;
    requestDeserialize: grpc.deserialize<client_v1_question_answer_pb.SubmitAnswerRequest>;
    responseSerialize: grpc.serialize<client_v1_question_answer_pb.SubmitAnswerResponse>;
    responseDeserialize: grpc.deserialize<client_v1_question_answer_pb.SubmitAnswerResponse>;
}

export const SurveyClientServiceService: ISurveyClientServiceService;

export interface ISurveyClientServiceServer extends grpc.UntypedServiceImplementation {
    startSurvey: grpc.handleUnaryCall<client_v1_question_answer_pb.StartSurveyRequest, client_v1_question_answer_pb.StartSurveyResponse>;
    getQuestion: grpc.handleUnaryCall<client_v1_question_answer_pb.GetQuestionRequest, client_v1_question_answer_pb.GetQuestionResponse>;
    submitAnswer: grpc.handleUnaryCall<client_v1_question_answer_pb.SubmitAnswerRequest, client_v1_question_answer_pb.SubmitAnswerResponse>;
}

export interface ISurveyClientServiceClient {
    startSurvey(request: client_v1_question_answer_pb.StartSurveyRequest, callback: (error: grpc.ServiceError | null, response: client_v1_question_answer_pb.StartSurveyResponse) => void): grpc.ClientUnaryCall;
    startSurvey(request: client_v1_question_answer_pb.StartSurveyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: client_v1_question_answer_pb.StartSurveyResponse) => void): grpc.ClientUnaryCall;
    startSurvey(request: client_v1_question_answer_pb.StartSurveyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: client_v1_question_answer_pb.StartSurveyResponse) => void): grpc.ClientUnaryCall;
    getQuestion(request: client_v1_question_answer_pb.GetQuestionRequest, callback: (error: grpc.ServiceError | null, response: client_v1_question_answer_pb.GetQuestionResponse) => void): grpc.ClientUnaryCall;
    getQuestion(request: client_v1_question_answer_pb.GetQuestionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: client_v1_question_answer_pb.GetQuestionResponse) => void): grpc.ClientUnaryCall;
    getQuestion(request: client_v1_question_answer_pb.GetQuestionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: client_v1_question_answer_pb.GetQuestionResponse) => void): grpc.ClientUnaryCall;
    submitAnswer(request: client_v1_question_answer_pb.SubmitAnswerRequest, callback: (error: grpc.ServiceError | null, response: client_v1_question_answer_pb.SubmitAnswerResponse) => void): grpc.ClientUnaryCall;
    submitAnswer(request: client_v1_question_answer_pb.SubmitAnswerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: client_v1_question_answer_pb.SubmitAnswerResponse) => void): grpc.ClientUnaryCall;
    submitAnswer(request: client_v1_question_answer_pb.SubmitAnswerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: client_v1_question_answer_pb.SubmitAnswerResponse) => void): grpc.ClientUnaryCall;
}

export class SurveyClientServiceClient extends grpc.Client implements ISurveyClientServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public startSurvey(request: client_v1_question_answer_pb.StartSurveyRequest, callback: (error: grpc.ServiceError | null, response: client_v1_question_answer_pb.StartSurveyResponse) => void): grpc.ClientUnaryCall;
    public startSurvey(request: client_v1_question_answer_pb.StartSurveyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: client_v1_question_answer_pb.StartSurveyResponse) => void): grpc.ClientUnaryCall;
    public startSurvey(request: client_v1_question_answer_pb.StartSurveyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: client_v1_question_answer_pb.StartSurveyResponse) => void): grpc.ClientUnaryCall;
    public getQuestion(request: client_v1_question_answer_pb.GetQuestionRequest, callback: (error: grpc.ServiceError | null, response: client_v1_question_answer_pb.GetQuestionResponse) => void): grpc.ClientUnaryCall;
    public getQuestion(request: client_v1_question_answer_pb.GetQuestionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: client_v1_question_answer_pb.GetQuestionResponse) => void): grpc.ClientUnaryCall;
    public getQuestion(request: client_v1_question_answer_pb.GetQuestionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: client_v1_question_answer_pb.GetQuestionResponse) => void): grpc.ClientUnaryCall;
    public submitAnswer(request: client_v1_question_answer_pb.SubmitAnswerRequest, callback: (error: grpc.ServiceError | null, response: client_v1_question_answer_pb.SubmitAnswerResponse) => void): grpc.ClientUnaryCall;
    public submitAnswer(request: client_v1_question_answer_pb.SubmitAnswerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: client_v1_question_answer_pb.SubmitAnswerResponse) => void): grpc.ClientUnaryCall;
    public submitAnswer(request: client_v1_question_answer_pb.SubmitAnswerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: client_v1_question_answer_pb.SubmitAnswerResponse) => void): grpc.ClientUnaryCall;
}
