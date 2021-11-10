// package: web.survey.v1
// file: web/survey/v1/survey_question_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as web_survey_v1_survey_question_service_pb from "../../../web/survey/v1/survey_question_service_pb";
import * as web_survey_v1_types_pb from "../../../web/survey/v1/types_pb";

interface ISurveyQuestionServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    questionGetOne: ISurveyQuestionServiceService_IQuestionGetOne;
    questionGetAll: ISurveyQuestionServiceService_IQuestionGetAll;
    questionCreate: ISurveyQuestionServiceService_IQuestionCreate;
    questionUpdate: ISurveyQuestionServiceService_IQuestionUpdate;
    questionDelete: ISurveyQuestionServiceService_IQuestionDelete;
    choiceGetAll: ISurveyQuestionServiceService_IChoiceGetAll;
    choiceCreate: ISurveyQuestionServiceService_IChoiceCreate;
    choiceUpdate: ISurveyQuestionServiceService_IChoiceUpdate;
    choiceDelete: ISurveyQuestionServiceService_IChoiceDelete;
}

interface ISurveyQuestionServiceService_IQuestionGetOne extends grpc.MethodDefinition<web_survey_v1_survey_question_service_pb.QuestionGetOneRequest, web_survey_v1_survey_question_service_pb.QuestionGetOneResponse> {
    path: "/web.survey.v1.SurveyQuestionService/QuestionGetOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_survey_v1_survey_question_service_pb.QuestionGetOneRequest>;
    requestDeserialize: grpc.deserialize<web_survey_v1_survey_question_service_pb.QuestionGetOneRequest>;
    responseSerialize: grpc.serialize<web_survey_v1_survey_question_service_pb.QuestionGetOneResponse>;
    responseDeserialize: grpc.deserialize<web_survey_v1_survey_question_service_pb.QuestionGetOneResponse>;
}
interface ISurveyQuestionServiceService_IQuestionGetAll extends grpc.MethodDefinition<web_survey_v1_survey_question_service_pb.QuestionGetAllRequest, web_survey_v1_survey_question_service_pb.QuestionGetAllResponse> {
    path: "/web.survey.v1.SurveyQuestionService/QuestionGetAll";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_survey_v1_survey_question_service_pb.QuestionGetAllRequest>;
    requestDeserialize: grpc.deserialize<web_survey_v1_survey_question_service_pb.QuestionGetAllRequest>;
    responseSerialize: grpc.serialize<web_survey_v1_survey_question_service_pb.QuestionGetAllResponse>;
    responseDeserialize: grpc.deserialize<web_survey_v1_survey_question_service_pb.QuestionGetAllResponse>;
}
interface ISurveyQuestionServiceService_IQuestionCreate extends grpc.MethodDefinition<web_survey_v1_survey_question_service_pb.QuestionCreateRequest, web_survey_v1_survey_question_service_pb.QuestionCreateResponse> {
    path: "/web.survey.v1.SurveyQuestionService/QuestionCreate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_survey_v1_survey_question_service_pb.QuestionCreateRequest>;
    requestDeserialize: grpc.deserialize<web_survey_v1_survey_question_service_pb.QuestionCreateRequest>;
    responseSerialize: grpc.serialize<web_survey_v1_survey_question_service_pb.QuestionCreateResponse>;
    responseDeserialize: grpc.deserialize<web_survey_v1_survey_question_service_pb.QuestionCreateResponse>;
}
interface ISurveyQuestionServiceService_IQuestionUpdate extends grpc.MethodDefinition<web_survey_v1_survey_question_service_pb.QuestionUpdateRequest, web_survey_v1_survey_question_service_pb.QuestionUpdateResponse> {
    path: "/web.survey.v1.SurveyQuestionService/QuestionUpdate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_survey_v1_survey_question_service_pb.QuestionUpdateRequest>;
    requestDeserialize: grpc.deserialize<web_survey_v1_survey_question_service_pb.QuestionUpdateRequest>;
    responseSerialize: grpc.serialize<web_survey_v1_survey_question_service_pb.QuestionUpdateResponse>;
    responseDeserialize: grpc.deserialize<web_survey_v1_survey_question_service_pb.QuestionUpdateResponse>;
}
interface ISurveyQuestionServiceService_IQuestionDelete extends grpc.MethodDefinition<web_survey_v1_survey_question_service_pb.QuestionDeleteRequest, web_survey_v1_survey_question_service_pb.QuestionDeleteResponse> {
    path: "/web.survey.v1.SurveyQuestionService/QuestionDelete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_survey_v1_survey_question_service_pb.QuestionDeleteRequest>;
    requestDeserialize: grpc.deserialize<web_survey_v1_survey_question_service_pb.QuestionDeleteRequest>;
    responseSerialize: grpc.serialize<web_survey_v1_survey_question_service_pb.QuestionDeleteResponse>;
    responseDeserialize: grpc.deserialize<web_survey_v1_survey_question_service_pb.QuestionDeleteResponse>;
}
interface ISurveyQuestionServiceService_IChoiceGetAll extends grpc.MethodDefinition<web_survey_v1_survey_question_service_pb.ChoiceGetAllRequest, web_survey_v1_survey_question_service_pb.ChoiceGetAllResponse> {
    path: "/web.survey.v1.SurveyQuestionService/ChoiceGetAll";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_survey_v1_survey_question_service_pb.ChoiceGetAllRequest>;
    requestDeserialize: grpc.deserialize<web_survey_v1_survey_question_service_pb.ChoiceGetAllRequest>;
    responseSerialize: grpc.serialize<web_survey_v1_survey_question_service_pb.ChoiceGetAllResponse>;
    responseDeserialize: grpc.deserialize<web_survey_v1_survey_question_service_pb.ChoiceGetAllResponse>;
}
interface ISurveyQuestionServiceService_IChoiceCreate extends grpc.MethodDefinition<web_survey_v1_survey_question_service_pb.ChoiceCreateRequest, web_survey_v1_survey_question_service_pb.ChoiceCreateResponse> {
    path: "/web.survey.v1.SurveyQuestionService/ChoiceCreate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_survey_v1_survey_question_service_pb.ChoiceCreateRequest>;
    requestDeserialize: grpc.deserialize<web_survey_v1_survey_question_service_pb.ChoiceCreateRequest>;
    responseSerialize: grpc.serialize<web_survey_v1_survey_question_service_pb.ChoiceCreateResponse>;
    responseDeserialize: grpc.deserialize<web_survey_v1_survey_question_service_pb.ChoiceCreateResponse>;
}
interface ISurveyQuestionServiceService_IChoiceUpdate extends grpc.MethodDefinition<web_survey_v1_survey_question_service_pb.ChoiceUpdateRequest, web_survey_v1_survey_question_service_pb.ChoiceUpdateResponse> {
    path: "/web.survey.v1.SurveyQuestionService/ChoiceUpdate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_survey_v1_survey_question_service_pb.ChoiceUpdateRequest>;
    requestDeserialize: grpc.deserialize<web_survey_v1_survey_question_service_pb.ChoiceUpdateRequest>;
    responseSerialize: grpc.serialize<web_survey_v1_survey_question_service_pb.ChoiceUpdateResponse>;
    responseDeserialize: grpc.deserialize<web_survey_v1_survey_question_service_pb.ChoiceUpdateResponse>;
}
interface ISurveyQuestionServiceService_IChoiceDelete extends grpc.MethodDefinition<web_survey_v1_survey_question_service_pb.ChoiceDeleteRequest, web_survey_v1_survey_question_service_pb.ChoiceDeleteResponse> {
    path: "/web.survey.v1.SurveyQuestionService/ChoiceDelete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_survey_v1_survey_question_service_pb.ChoiceDeleteRequest>;
    requestDeserialize: grpc.deserialize<web_survey_v1_survey_question_service_pb.ChoiceDeleteRequest>;
    responseSerialize: grpc.serialize<web_survey_v1_survey_question_service_pb.ChoiceDeleteResponse>;
    responseDeserialize: grpc.deserialize<web_survey_v1_survey_question_service_pb.ChoiceDeleteResponse>;
}

export const SurveyQuestionServiceService: ISurveyQuestionServiceService;

export interface ISurveyQuestionServiceServer extends grpc.UntypedServiceImplementation {
    questionGetOne: grpc.handleUnaryCall<web_survey_v1_survey_question_service_pb.QuestionGetOneRequest, web_survey_v1_survey_question_service_pb.QuestionGetOneResponse>;
    questionGetAll: grpc.handleUnaryCall<web_survey_v1_survey_question_service_pb.QuestionGetAllRequest, web_survey_v1_survey_question_service_pb.QuestionGetAllResponse>;
    questionCreate: grpc.handleUnaryCall<web_survey_v1_survey_question_service_pb.QuestionCreateRequest, web_survey_v1_survey_question_service_pb.QuestionCreateResponse>;
    questionUpdate: grpc.handleUnaryCall<web_survey_v1_survey_question_service_pb.QuestionUpdateRequest, web_survey_v1_survey_question_service_pb.QuestionUpdateResponse>;
    questionDelete: grpc.handleUnaryCall<web_survey_v1_survey_question_service_pb.QuestionDeleteRequest, web_survey_v1_survey_question_service_pb.QuestionDeleteResponse>;
    choiceGetAll: grpc.handleUnaryCall<web_survey_v1_survey_question_service_pb.ChoiceGetAllRequest, web_survey_v1_survey_question_service_pb.ChoiceGetAllResponse>;
    choiceCreate: grpc.handleUnaryCall<web_survey_v1_survey_question_service_pb.ChoiceCreateRequest, web_survey_v1_survey_question_service_pb.ChoiceCreateResponse>;
    choiceUpdate: grpc.handleUnaryCall<web_survey_v1_survey_question_service_pb.ChoiceUpdateRequest, web_survey_v1_survey_question_service_pb.ChoiceUpdateResponse>;
    choiceDelete: grpc.handleUnaryCall<web_survey_v1_survey_question_service_pb.ChoiceDeleteRequest, web_survey_v1_survey_question_service_pb.ChoiceDeleteResponse>;
}

export interface ISurveyQuestionServiceClient {
    questionGetOne(request: web_survey_v1_survey_question_service_pb.QuestionGetOneRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.QuestionGetOneResponse) => void): grpc.ClientUnaryCall;
    questionGetOne(request: web_survey_v1_survey_question_service_pb.QuestionGetOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.QuestionGetOneResponse) => void): grpc.ClientUnaryCall;
    questionGetOne(request: web_survey_v1_survey_question_service_pb.QuestionGetOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.QuestionGetOneResponse) => void): grpc.ClientUnaryCall;
    questionGetAll(request: web_survey_v1_survey_question_service_pb.QuestionGetAllRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.QuestionGetAllResponse) => void): grpc.ClientUnaryCall;
    questionGetAll(request: web_survey_v1_survey_question_service_pb.QuestionGetAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.QuestionGetAllResponse) => void): grpc.ClientUnaryCall;
    questionGetAll(request: web_survey_v1_survey_question_service_pb.QuestionGetAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.QuestionGetAllResponse) => void): grpc.ClientUnaryCall;
    questionCreate(request: web_survey_v1_survey_question_service_pb.QuestionCreateRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.QuestionCreateResponse) => void): grpc.ClientUnaryCall;
    questionCreate(request: web_survey_v1_survey_question_service_pb.QuestionCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.QuestionCreateResponse) => void): grpc.ClientUnaryCall;
    questionCreate(request: web_survey_v1_survey_question_service_pb.QuestionCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.QuestionCreateResponse) => void): grpc.ClientUnaryCall;
    questionUpdate(request: web_survey_v1_survey_question_service_pb.QuestionUpdateRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.QuestionUpdateResponse) => void): grpc.ClientUnaryCall;
    questionUpdate(request: web_survey_v1_survey_question_service_pb.QuestionUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.QuestionUpdateResponse) => void): grpc.ClientUnaryCall;
    questionUpdate(request: web_survey_v1_survey_question_service_pb.QuestionUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.QuestionUpdateResponse) => void): grpc.ClientUnaryCall;
    questionDelete(request: web_survey_v1_survey_question_service_pb.QuestionDeleteRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.QuestionDeleteResponse) => void): grpc.ClientUnaryCall;
    questionDelete(request: web_survey_v1_survey_question_service_pb.QuestionDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.QuestionDeleteResponse) => void): grpc.ClientUnaryCall;
    questionDelete(request: web_survey_v1_survey_question_service_pb.QuestionDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.QuestionDeleteResponse) => void): grpc.ClientUnaryCall;
    choiceGetAll(request: web_survey_v1_survey_question_service_pb.ChoiceGetAllRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.ChoiceGetAllResponse) => void): grpc.ClientUnaryCall;
    choiceGetAll(request: web_survey_v1_survey_question_service_pb.ChoiceGetAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.ChoiceGetAllResponse) => void): grpc.ClientUnaryCall;
    choiceGetAll(request: web_survey_v1_survey_question_service_pb.ChoiceGetAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.ChoiceGetAllResponse) => void): grpc.ClientUnaryCall;
    choiceCreate(request: web_survey_v1_survey_question_service_pb.ChoiceCreateRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.ChoiceCreateResponse) => void): grpc.ClientUnaryCall;
    choiceCreate(request: web_survey_v1_survey_question_service_pb.ChoiceCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.ChoiceCreateResponse) => void): grpc.ClientUnaryCall;
    choiceCreate(request: web_survey_v1_survey_question_service_pb.ChoiceCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.ChoiceCreateResponse) => void): grpc.ClientUnaryCall;
    choiceUpdate(request: web_survey_v1_survey_question_service_pb.ChoiceUpdateRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.ChoiceUpdateResponse) => void): grpc.ClientUnaryCall;
    choiceUpdate(request: web_survey_v1_survey_question_service_pb.ChoiceUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.ChoiceUpdateResponse) => void): grpc.ClientUnaryCall;
    choiceUpdate(request: web_survey_v1_survey_question_service_pb.ChoiceUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.ChoiceUpdateResponse) => void): grpc.ClientUnaryCall;
    choiceDelete(request: web_survey_v1_survey_question_service_pb.ChoiceDeleteRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.ChoiceDeleteResponse) => void): grpc.ClientUnaryCall;
    choiceDelete(request: web_survey_v1_survey_question_service_pb.ChoiceDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.ChoiceDeleteResponse) => void): grpc.ClientUnaryCall;
    choiceDelete(request: web_survey_v1_survey_question_service_pb.ChoiceDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.ChoiceDeleteResponse) => void): grpc.ClientUnaryCall;
}

export class SurveyQuestionServiceClient extends grpc.Client implements ISurveyQuestionServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public questionGetOne(request: web_survey_v1_survey_question_service_pb.QuestionGetOneRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.QuestionGetOneResponse) => void): grpc.ClientUnaryCall;
    public questionGetOne(request: web_survey_v1_survey_question_service_pb.QuestionGetOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.QuestionGetOneResponse) => void): grpc.ClientUnaryCall;
    public questionGetOne(request: web_survey_v1_survey_question_service_pb.QuestionGetOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.QuestionGetOneResponse) => void): grpc.ClientUnaryCall;
    public questionGetAll(request: web_survey_v1_survey_question_service_pb.QuestionGetAllRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.QuestionGetAllResponse) => void): grpc.ClientUnaryCall;
    public questionGetAll(request: web_survey_v1_survey_question_service_pb.QuestionGetAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.QuestionGetAllResponse) => void): grpc.ClientUnaryCall;
    public questionGetAll(request: web_survey_v1_survey_question_service_pb.QuestionGetAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.QuestionGetAllResponse) => void): grpc.ClientUnaryCall;
    public questionCreate(request: web_survey_v1_survey_question_service_pb.QuestionCreateRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.QuestionCreateResponse) => void): grpc.ClientUnaryCall;
    public questionCreate(request: web_survey_v1_survey_question_service_pb.QuestionCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.QuestionCreateResponse) => void): grpc.ClientUnaryCall;
    public questionCreate(request: web_survey_v1_survey_question_service_pb.QuestionCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.QuestionCreateResponse) => void): grpc.ClientUnaryCall;
    public questionUpdate(request: web_survey_v1_survey_question_service_pb.QuestionUpdateRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.QuestionUpdateResponse) => void): grpc.ClientUnaryCall;
    public questionUpdate(request: web_survey_v1_survey_question_service_pb.QuestionUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.QuestionUpdateResponse) => void): grpc.ClientUnaryCall;
    public questionUpdate(request: web_survey_v1_survey_question_service_pb.QuestionUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.QuestionUpdateResponse) => void): grpc.ClientUnaryCall;
    public questionDelete(request: web_survey_v1_survey_question_service_pb.QuestionDeleteRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.QuestionDeleteResponse) => void): grpc.ClientUnaryCall;
    public questionDelete(request: web_survey_v1_survey_question_service_pb.QuestionDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.QuestionDeleteResponse) => void): grpc.ClientUnaryCall;
    public questionDelete(request: web_survey_v1_survey_question_service_pb.QuestionDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.QuestionDeleteResponse) => void): grpc.ClientUnaryCall;
    public choiceGetAll(request: web_survey_v1_survey_question_service_pb.ChoiceGetAllRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.ChoiceGetAllResponse) => void): grpc.ClientUnaryCall;
    public choiceGetAll(request: web_survey_v1_survey_question_service_pb.ChoiceGetAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.ChoiceGetAllResponse) => void): grpc.ClientUnaryCall;
    public choiceGetAll(request: web_survey_v1_survey_question_service_pb.ChoiceGetAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.ChoiceGetAllResponse) => void): grpc.ClientUnaryCall;
    public choiceCreate(request: web_survey_v1_survey_question_service_pb.ChoiceCreateRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.ChoiceCreateResponse) => void): grpc.ClientUnaryCall;
    public choiceCreate(request: web_survey_v1_survey_question_service_pb.ChoiceCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.ChoiceCreateResponse) => void): grpc.ClientUnaryCall;
    public choiceCreate(request: web_survey_v1_survey_question_service_pb.ChoiceCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.ChoiceCreateResponse) => void): grpc.ClientUnaryCall;
    public choiceUpdate(request: web_survey_v1_survey_question_service_pb.ChoiceUpdateRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.ChoiceUpdateResponse) => void): grpc.ClientUnaryCall;
    public choiceUpdate(request: web_survey_v1_survey_question_service_pb.ChoiceUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.ChoiceUpdateResponse) => void): grpc.ClientUnaryCall;
    public choiceUpdate(request: web_survey_v1_survey_question_service_pb.ChoiceUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.ChoiceUpdateResponse) => void): grpc.ClientUnaryCall;
    public choiceDelete(request: web_survey_v1_survey_question_service_pb.ChoiceDeleteRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.ChoiceDeleteResponse) => void): grpc.ClientUnaryCall;
    public choiceDelete(request: web_survey_v1_survey_question_service_pb.ChoiceDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.ChoiceDeleteResponse) => void): grpc.ClientUnaryCall;
    public choiceDelete(request: web_survey_v1_survey_question_service_pb.ChoiceDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_question_service_pb.ChoiceDeleteResponse) => void): grpc.ClientUnaryCall;
}
