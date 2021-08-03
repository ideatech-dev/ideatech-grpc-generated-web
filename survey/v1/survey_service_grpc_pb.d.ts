// package: survey.v1
// file: survey/v1/survey_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as survey_v1_survey_service_pb from "../../survey/v1/survey_service_pb";
import * as survey_v1_survey_pb from "../../survey/v1/survey_pb";
import * as survey_v1_survey_page_pb from "../../survey/v1/survey_page_pb";
import * as survey_v1_survey_question_pb from "../../survey/v1/survey_question_pb";
import * as survey_v1_survey_choice_pb from "../../survey/v1/survey_choice_pb";

interface ISurveyServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    surveyGetOne: ISurveyServiceService_ISurveyGetOne;
    surveyGetAll: ISurveyServiceService_ISurveyGetAll;
    surveyCreate: ISurveyServiceService_ISurveyCreate;
    surveyUpdate: ISurveyServiceService_ISurveyUpdate;
    surveyDelete: ISurveyServiceService_ISurveyDelete;
    pageGetOne: ISurveyServiceService_IPageGetOne;
    pageGetAll: ISurveyServiceService_IPageGetAll;
    pageCreate: ISurveyServiceService_IPageCreate;
    pageUpdate: ISurveyServiceService_IPageUpdate;
    pageDelete: ISurveyServiceService_IPageDelete;
    questionGetOne: ISurveyServiceService_IQuestionGetOne;
    questionGetAll: ISurveyServiceService_IQuestionGetAll;
    questionCreate: ISurveyServiceService_IQuestionCreate;
    questionUpdate: ISurveyServiceService_IQuestionUpdate;
    questionDelete: ISurveyServiceService_IQuestionDelete;
    choiceGetAll: ISurveyServiceService_IChoiceGetAll;
    choiceCreate: ISurveyServiceService_IChoiceCreate;
    choiceUpdate: ISurveyServiceService_IChoiceUpdate;
    choiceDelete: ISurveyServiceService_IChoiceDelete;
}

interface ISurveyServiceService_ISurveyGetOne extends grpc.MethodDefinition<survey_v1_survey_pb.SurveyGetOneRequest, survey_v1_survey_pb.SurveyGetOneResponse> {
    path: "/survey.v1.SurveyService/SurveyGetOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<survey_v1_survey_pb.SurveyGetOneRequest>;
    requestDeserialize: grpc.deserialize<survey_v1_survey_pb.SurveyGetOneRequest>;
    responseSerialize: grpc.serialize<survey_v1_survey_pb.SurveyGetOneResponse>;
    responseDeserialize: grpc.deserialize<survey_v1_survey_pb.SurveyGetOneResponse>;
}
interface ISurveyServiceService_ISurveyGetAll extends grpc.MethodDefinition<survey_v1_survey_pb.SurveyGetAllRequest, survey_v1_survey_pb.SurveyGetAllResponse> {
    path: "/survey.v1.SurveyService/SurveyGetAll";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<survey_v1_survey_pb.SurveyGetAllRequest>;
    requestDeserialize: grpc.deserialize<survey_v1_survey_pb.SurveyGetAllRequest>;
    responseSerialize: grpc.serialize<survey_v1_survey_pb.SurveyGetAllResponse>;
    responseDeserialize: grpc.deserialize<survey_v1_survey_pb.SurveyGetAllResponse>;
}
interface ISurveyServiceService_ISurveyCreate extends grpc.MethodDefinition<survey_v1_survey_pb.SurveyCreateRequest, survey_v1_survey_pb.SurveyCreateResponse> {
    path: "/survey.v1.SurveyService/SurveyCreate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<survey_v1_survey_pb.SurveyCreateRequest>;
    requestDeserialize: grpc.deserialize<survey_v1_survey_pb.SurveyCreateRequest>;
    responseSerialize: grpc.serialize<survey_v1_survey_pb.SurveyCreateResponse>;
    responseDeserialize: grpc.deserialize<survey_v1_survey_pb.SurveyCreateResponse>;
}
interface ISurveyServiceService_ISurveyUpdate extends grpc.MethodDefinition<survey_v1_survey_pb.SurveyUpdateRequest, survey_v1_survey_pb.SurveyUpdateResponse> {
    path: "/survey.v1.SurveyService/SurveyUpdate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<survey_v1_survey_pb.SurveyUpdateRequest>;
    requestDeserialize: grpc.deserialize<survey_v1_survey_pb.SurveyUpdateRequest>;
    responseSerialize: grpc.serialize<survey_v1_survey_pb.SurveyUpdateResponse>;
    responseDeserialize: grpc.deserialize<survey_v1_survey_pb.SurveyUpdateResponse>;
}
interface ISurveyServiceService_ISurveyDelete extends grpc.MethodDefinition<survey_v1_survey_pb.SurveyDeleteRequest, survey_v1_survey_pb.SurveyDeleteResponse> {
    path: "/survey.v1.SurveyService/SurveyDelete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<survey_v1_survey_pb.SurveyDeleteRequest>;
    requestDeserialize: grpc.deserialize<survey_v1_survey_pb.SurveyDeleteRequest>;
    responseSerialize: grpc.serialize<survey_v1_survey_pb.SurveyDeleteResponse>;
    responseDeserialize: grpc.deserialize<survey_v1_survey_pb.SurveyDeleteResponse>;
}
interface ISurveyServiceService_IPageGetOne extends grpc.MethodDefinition<survey_v1_survey_page_pb.PageGetOneRequest, survey_v1_survey_page_pb.PageGetOneResponse> {
    path: "/survey.v1.SurveyService/PageGetOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<survey_v1_survey_page_pb.PageGetOneRequest>;
    requestDeserialize: grpc.deserialize<survey_v1_survey_page_pb.PageGetOneRequest>;
    responseSerialize: grpc.serialize<survey_v1_survey_page_pb.PageGetOneResponse>;
    responseDeserialize: grpc.deserialize<survey_v1_survey_page_pb.PageGetOneResponse>;
}
interface ISurveyServiceService_IPageGetAll extends grpc.MethodDefinition<survey_v1_survey_page_pb.PageGetAllRequest, survey_v1_survey_page_pb.PageGetAllResponse> {
    path: "/survey.v1.SurveyService/PageGetAll";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<survey_v1_survey_page_pb.PageGetAllRequest>;
    requestDeserialize: grpc.deserialize<survey_v1_survey_page_pb.PageGetAllRequest>;
    responseSerialize: grpc.serialize<survey_v1_survey_page_pb.PageGetAllResponse>;
    responseDeserialize: grpc.deserialize<survey_v1_survey_page_pb.PageGetAllResponse>;
}
interface ISurveyServiceService_IPageCreate extends grpc.MethodDefinition<survey_v1_survey_page_pb.PageCreateRequest, survey_v1_survey_page_pb.PageCreateResponse> {
    path: "/survey.v1.SurveyService/PageCreate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<survey_v1_survey_page_pb.PageCreateRequest>;
    requestDeserialize: grpc.deserialize<survey_v1_survey_page_pb.PageCreateRequest>;
    responseSerialize: grpc.serialize<survey_v1_survey_page_pb.PageCreateResponse>;
    responseDeserialize: grpc.deserialize<survey_v1_survey_page_pb.PageCreateResponse>;
}
interface ISurveyServiceService_IPageUpdate extends grpc.MethodDefinition<survey_v1_survey_page_pb.PageUpdateRequest, survey_v1_survey_page_pb.PageUpdateResponse> {
    path: "/survey.v1.SurveyService/PageUpdate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<survey_v1_survey_page_pb.PageUpdateRequest>;
    requestDeserialize: grpc.deserialize<survey_v1_survey_page_pb.PageUpdateRequest>;
    responseSerialize: grpc.serialize<survey_v1_survey_page_pb.PageUpdateResponse>;
    responseDeserialize: grpc.deserialize<survey_v1_survey_page_pb.PageUpdateResponse>;
}
interface ISurveyServiceService_IPageDelete extends grpc.MethodDefinition<survey_v1_survey_page_pb.PageDeleteRequest, survey_v1_survey_page_pb.PageDeleteResponse> {
    path: "/survey.v1.SurveyService/PageDelete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<survey_v1_survey_page_pb.PageDeleteRequest>;
    requestDeserialize: grpc.deserialize<survey_v1_survey_page_pb.PageDeleteRequest>;
    responseSerialize: grpc.serialize<survey_v1_survey_page_pb.PageDeleteResponse>;
    responseDeserialize: grpc.deserialize<survey_v1_survey_page_pb.PageDeleteResponse>;
}
interface ISurveyServiceService_IQuestionGetOne extends grpc.MethodDefinition<survey_v1_survey_question_pb.QuestionGetOneRequest, survey_v1_survey_question_pb.QuestionGetOneResponse> {
    path: "/survey.v1.SurveyService/QuestionGetOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<survey_v1_survey_question_pb.QuestionGetOneRequest>;
    requestDeserialize: grpc.deserialize<survey_v1_survey_question_pb.QuestionGetOneRequest>;
    responseSerialize: grpc.serialize<survey_v1_survey_question_pb.QuestionGetOneResponse>;
    responseDeserialize: grpc.deserialize<survey_v1_survey_question_pb.QuestionGetOneResponse>;
}
interface ISurveyServiceService_IQuestionGetAll extends grpc.MethodDefinition<survey_v1_survey_question_pb.QuestionGetAllRequest, survey_v1_survey_question_pb.QuestionGetAllResponse> {
    path: "/survey.v1.SurveyService/QuestionGetAll";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<survey_v1_survey_question_pb.QuestionGetAllRequest>;
    requestDeserialize: grpc.deserialize<survey_v1_survey_question_pb.QuestionGetAllRequest>;
    responseSerialize: grpc.serialize<survey_v1_survey_question_pb.QuestionGetAllResponse>;
    responseDeserialize: grpc.deserialize<survey_v1_survey_question_pb.QuestionGetAllResponse>;
}
interface ISurveyServiceService_IQuestionCreate extends grpc.MethodDefinition<survey_v1_survey_question_pb.QuestionCreateRequest, survey_v1_survey_question_pb.QuestionCreateResponse> {
    path: "/survey.v1.SurveyService/QuestionCreate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<survey_v1_survey_question_pb.QuestionCreateRequest>;
    requestDeserialize: grpc.deserialize<survey_v1_survey_question_pb.QuestionCreateRequest>;
    responseSerialize: grpc.serialize<survey_v1_survey_question_pb.QuestionCreateResponse>;
    responseDeserialize: grpc.deserialize<survey_v1_survey_question_pb.QuestionCreateResponse>;
}
interface ISurveyServiceService_IQuestionUpdate extends grpc.MethodDefinition<survey_v1_survey_question_pb.QuestionUpdateRequest, survey_v1_survey_question_pb.QuestionUpdateResponse> {
    path: "/survey.v1.SurveyService/QuestionUpdate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<survey_v1_survey_question_pb.QuestionUpdateRequest>;
    requestDeserialize: grpc.deserialize<survey_v1_survey_question_pb.QuestionUpdateRequest>;
    responseSerialize: grpc.serialize<survey_v1_survey_question_pb.QuestionUpdateResponse>;
    responseDeserialize: grpc.deserialize<survey_v1_survey_question_pb.QuestionUpdateResponse>;
}
interface ISurveyServiceService_IQuestionDelete extends grpc.MethodDefinition<survey_v1_survey_question_pb.QuestionDeleteRequest, survey_v1_survey_question_pb.QuestionDeleteResponse> {
    path: "/survey.v1.SurveyService/QuestionDelete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<survey_v1_survey_question_pb.QuestionDeleteRequest>;
    requestDeserialize: grpc.deserialize<survey_v1_survey_question_pb.QuestionDeleteRequest>;
    responseSerialize: grpc.serialize<survey_v1_survey_question_pb.QuestionDeleteResponse>;
    responseDeserialize: grpc.deserialize<survey_v1_survey_question_pb.QuestionDeleteResponse>;
}
interface ISurveyServiceService_IChoiceGetAll extends grpc.MethodDefinition<survey_v1_survey_choice_pb.ChoiceGetAllRequest, survey_v1_survey_choice_pb.ChoiceGetAllResponse> {
    path: "/survey.v1.SurveyService/ChoiceGetAll";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<survey_v1_survey_choice_pb.ChoiceGetAllRequest>;
    requestDeserialize: grpc.deserialize<survey_v1_survey_choice_pb.ChoiceGetAllRequest>;
    responseSerialize: grpc.serialize<survey_v1_survey_choice_pb.ChoiceGetAllResponse>;
    responseDeserialize: grpc.deserialize<survey_v1_survey_choice_pb.ChoiceGetAllResponse>;
}
interface ISurveyServiceService_IChoiceCreate extends grpc.MethodDefinition<survey_v1_survey_choice_pb.ChoiceCreateRequest, survey_v1_survey_choice_pb.ChoiceCreateResponse> {
    path: "/survey.v1.SurveyService/ChoiceCreate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<survey_v1_survey_choice_pb.ChoiceCreateRequest>;
    requestDeserialize: grpc.deserialize<survey_v1_survey_choice_pb.ChoiceCreateRequest>;
    responseSerialize: grpc.serialize<survey_v1_survey_choice_pb.ChoiceCreateResponse>;
    responseDeserialize: grpc.deserialize<survey_v1_survey_choice_pb.ChoiceCreateResponse>;
}
interface ISurveyServiceService_IChoiceUpdate extends grpc.MethodDefinition<survey_v1_survey_choice_pb.ChoiceUpdateRequest, survey_v1_survey_choice_pb.ChoiceUpdateResponse> {
    path: "/survey.v1.SurveyService/ChoiceUpdate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<survey_v1_survey_choice_pb.ChoiceUpdateRequest>;
    requestDeserialize: grpc.deserialize<survey_v1_survey_choice_pb.ChoiceUpdateRequest>;
    responseSerialize: grpc.serialize<survey_v1_survey_choice_pb.ChoiceUpdateResponse>;
    responseDeserialize: grpc.deserialize<survey_v1_survey_choice_pb.ChoiceUpdateResponse>;
}
interface ISurveyServiceService_IChoiceDelete extends grpc.MethodDefinition<survey_v1_survey_choice_pb.ChoiceDeleteRequest, survey_v1_survey_choice_pb.ChoiceDeleteResponse> {
    path: "/survey.v1.SurveyService/ChoiceDelete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<survey_v1_survey_choice_pb.ChoiceDeleteRequest>;
    requestDeserialize: grpc.deserialize<survey_v1_survey_choice_pb.ChoiceDeleteRequest>;
    responseSerialize: grpc.serialize<survey_v1_survey_choice_pb.ChoiceDeleteResponse>;
    responseDeserialize: grpc.deserialize<survey_v1_survey_choice_pb.ChoiceDeleteResponse>;
}

export const SurveyServiceService: ISurveyServiceService;

export interface ISurveyServiceServer {
    surveyGetOne: grpc.handleUnaryCall<survey_v1_survey_pb.SurveyGetOneRequest, survey_v1_survey_pb.SurveyGetOneResponse>;
    surveyGetAll: grpc.handleUnaryCall<survey_v1_survey_pb.SurveyGetAllRequest, survey_v1_survey_pb.SurveyGetAllResponse>;
    surveyCreate: grpc.handleUnaryCall<survey_v1_survey_pb.SurveyCreateRequest, survey_v1_survey_pb.SurveyCreateResponse>;
    surveyUpdate: grpc.handleUnaryCall<survey_v1_survey_pb.SurveyUpdateRequest, survey_v1_survey_pb.SurveyUpdateResponse>;
    surveyDelete: grpc.handleUnaryCall<survey_v1_survey_pb.SurveyDeleteRequest, survey_v1_survey_pb.SurveyDeleteResponse>;
    pageGetOne: grpc.handleUnaryCall<survey_v1_survey_page_pb.PageGetOneRequest, survey_v1_survey_page_pb.PageGetOneResponse>;
    pageGetAll: grpc.handleUnaryCall<survey_v1_survey_page_pb.PageGetAllRequest, survey_v1_survey_page_pb.PageGetAllResponse>;
    pageCreate: grpc.handleUnaryCall<survey_v1_survey_page_pb.PageCreateRequest, survey_v1_survey_page_pb.PageCreateResponse>;
    pageUpdate: grpc.handleUnaryCall<survey_v1_survey_page_pb.PageUpdateRequest, survey_v1_survey_page_pb.PageUpdateResponse>;
    pageDelete: grpc.handleUnaryCall<survey_v1_survey_page_pb.PageDeleteRequest, survey_v1_survey_page_pb.PageDeleteResponse>;
    questionGetOne: grpc.handleUnaryCall<survey_v1_survey_question_pb.QuestionGetOneRequest, survey_v1_survey_question_pb.QuestionGetOneResponse>;
    questionGetAll: grpc.handleUnaryCall<survey_v1_survey_question_pb.QuestionGetAllRequest, survey_v1_survey_question_pb.QuestionGetAllResponse>;
    questionCreate: grpc.handleUnaryCall<survey_v1_survey_question_pb.QuestionCreateRequest, survey_v1_survey_question_pb.QuestionCreateResponse>;
    questionUpdate: grpc.handleUnaryCall<survey_v1_survey_question_pb.QuestionUpdateRequest, survey_v1_survey_question_pb.QuestionUpdateResponse>;
    questionDelete: grpc.handleUnaryCall<survey_v1_survey_question_pb.QuestionDeleteRequest, survey_v1_survey_question_pb.QuestionDeleteResponse>;
    choiceGetAll: grpc.handleUnaryCall<survey_v1_survey_choice_pb.ChoiceGetAllRequest, survey_v1_survey_choice_pb.ChoiceGetAllResponse>;
    choiceCreate: grpc.handleUnaryCall<survey_v1_survey_choice_pb.ChoiceCreateRequest, survey_v1_survey_choice_pb.ChoiceCreateResponse>;
    choiceUpdate: grpc.handleUnaryCall<survey_v1_survey_choice_pb.ChoiceUpdateRequest, survey_v1_survey_choice_pb.ChoiceUpdateResponse>;
    choiceDelete: grpc.handleUnaryCall<survey_v1_survey_choice_pb.ChoiceDeleteRequest, survey_v1_survey_choice_pb.ChoiceDeleteResponse>;
}

export interface ISurveyServiceClient {
    surveyGetOne(request: survey_v1_survey_pb.SurveyGetOneRequest, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_pb.SurveyGetOneResponse) => void): grpc.ClientUnaryCall;
    surveyGetOne(request: survey_v1_survey_pb.SurveyGetOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_pb.SurveyGetOneResponse) => void): grpc.ClientUnaryCall;
    surveyGetOne(request: survey_v1_survey_pb.SurveyGetOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_pb.SurveyGetOneResponse) => void): grpc.ClientUnaryCall;
    surveyGetAll(request: survey_v1_survey_pb.SurveyGetAllRequest, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_pb.SurveyGetAllResponse) => void): grpc.ClientUnaryCall;
    surveyGetAll(request: survey_v1_survey_pb.SurveyGetAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_pb.SurveyGetAllResponse) => void): grpc.ClientUnaryCall;
    surveyGetAll(request: survey_v1_survey_pb.SurveyGetAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_pb.SurveyGetAllResponse) => void): grpc.ClientUnaryCall;
    surveyCreate(request: survey_v1_survey_pb.SurveyCreateRequest, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_pb.SurveyCreateResponse) => void): grpc.ClientUnaryCall;
    surveyCreate(request: survey_v1_survey_pb.SurveyCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_pb.SurveyCreateResponse) => void): grpc.ClientUnaryCall;
    surveyCreate(request: survey_v1_survey_pb.SurveyCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_pb.SurveyCreateResponse) => void): grpc.ClientUnaryCall;
    surveyUpdate(request: survey_v1_survey_pb.SurveyUpdateRequest, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_pb.SurveyUpdateResponse) => void): grpc.ClientUnaryCall;
    surveyUpdate(request: survey_v1_survey_pb.SurveyUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_pb.SurveyUpdateResponse) => void): grpc.ClientUnaryCall;
    surveyUpdate(request: survey_v1_survey_pb.SurveyUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_pb.SurveyUpdateResponse) => void): grpc.ClientUnaryCall;
    surveyDelete(request: survey_v1_survey_pb.SurveyDeleteRequest, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_pb.SurveyDeleteResponse) => void): grpc.ClientUnaryCall;
    surveyDelete(request: survey_v1_survey_pb.SurveyDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_pb.SurveyDeleteResponse) => void): grpc.ClientUnaryCall;
    surveyDelete(request: survey_v1_survey_pb.SurveyDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_pb.SurveyDeleteResponse) => void): grpc.ClientUnaryCall;
    pageGetOne(request: survey_v1_survey_page_pb.PageGetOneRequest, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_page_pb.PageGetOneResponse) => void): grpc.ClientUnaryCall;
    pageGetOne(request: survey_v1_survey_page_pb.PageGetOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_page_pb.PageGetOneResponse) => void): grpc.ClientUnaryCall;
    pageGetOne(request: survey_v1_survey_page_pb.PageGetOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_page_pb.PageGetOneResponse) => void): grpc.ClientUnaryCall;
    pageGetAll(request: survey_v1_survey_page_pb.PageGetAllRequest, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_page_pb.PageGetAllResponse) => void): grpc.ClientUnaryCall;
    pageGetAll(request: survey_v1_survey_page_pb.PageGetAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_page_pb.PageGetAllResponse) => void): grpc.ClientUnaryCall;
    pageGetAll(request: survey_v1_survey_page_pb.PageGetAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_page_pb.PageGetAllResponse) => void): grpc.ClientUnaryCall;
    pageCreate(request: survey_v1_survey_page_pb.PageCreateRequest, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_page_pb.PageCreateResponse) => void): grpc.ClientUnaryCall;
    pageCreate(request: survey_v1_survey_page_pb.PageCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_page_pb.PageCreateResponse) => void): grpc.ClientUnaryCall;
    pageCreate(request: survey_v1_survey_page_pb.PageCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_page_pb.PageCreateResponse) => void): grpc.ClientUnaryCall;
    pageUpdate(request: survey_v1_survey_page_pb.PageUpdateRequest, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_page_pb.PageUpdateResponse) => void): grpc.ClientUnaryCall;
    pageUpdate(request: survey_v1_survey_page_pb.PageUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_page_pb.PageUpdateResponse) => void): grpc.ClientUnaryCall;
    pageUpdate(request: survey_v1_survey_page_pb.PageUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_page_pb.PageUpdateResponse) => void): grpc.ClientUnaryCall;
    pageDelete(request: survey_v1_survey_page_pb.PageDeleteRequest, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_page_pb.PageDeleteResponse) => void): grpc.ClientUnaryCall;
    pageDelete(request: survey_v1_survey_page_pb.PageDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_page_pb.PageDeleteResponse) => void): grpc.ClientUnaryCall;
    pageDelete(request: survey_v1_survey_page_pb.PageDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_page_pb.PageDeleteResponse) => void): grpc.ClientUnaryCall;
    questionGetOne(request: survey_v1_survey_question_pb.QuestionGetOneRequest, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_question_pb.QuestionGetOneResponse) => void): grpc.ClientUnaryCall;
    questionGetOne(request: survey_v1_survey_question_pb.QuestionGetOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_question_pb.QuestionGetOneResponse) => void): grpc.ClientUnaryCall;
    questionGetOne(request: survey_v1_survey_question_pb.QuestionGetOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_question_pb.QuestionGetOneResponse) => void): grpc.ClientUnaryCall;
    questionGetAll(request: survey_v1_survey_question_pb.QuestionGetAllRequest, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_question_pb.QuestionGetAllResponse) => void): grpc.ClientUnaryCall;
    questionGetAll(request: survey_v1_survey_question_pb.QuestionGetAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_question_pb.QuestionGetAllResponse) => void): grpc.ClientUnaryCall;
    questionGetAll(request: survey_v1_survey_question_pb.QuestionGetAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_question_pb.QuestionGetAllResponse) => void): grpc.ClientUnaryCall;
    questionCreate(request: survey_v1_survey_question_pb.QuestionCreateRequest, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_question_pb.QuestionCreateResponse) => void): grpc.ClientUnaryCall;
    questionCreate(request: survey_v1_survey_question_pb.QuestionCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_question_pb.QuestionCreateResponse) => void): grpc.ClientUnaryCall;
    questionCreate(request: survey_v1_survey_question_pb.QuestionCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_question_pb.QuestionCreateResponse) => void): grpc.ClientUnaryCall;
    questionUpdate(request: survey_v1_survey_question_pb.QuestionUpdateRequest, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_question_pb.QuestionUpdateResponse) => void): grpc.ClientUnaryCall;
    questionUpdate(request: survey_v1_survey_question_pb.QuestionUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_question_pb.QuestionUpdateResponse) => void): grpc.ClientUnaryCall;
    questionUpdate(request: survey_v1_survey_question_pb.QuestionUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_question_pb.QuestionUpdateResponse) => void): grpc.ClientUnaryCall;
    questionDelete(request: survey_v1_survey_question_pb.QuestionDeleteRequest, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_question_pb.QuestionDeleteResponse) => void): grpc.ClientUnaryCall;
    questionDelete(request: survey_v1_survey_question_pb.QuestionDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_question_pb.QuestionDeleteResponse) => void): grpc.ClientUnaryCall;
    questionDelete(request: survey_v1_survey_question_pb.QuestionDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_question_pb.QuestionDeleteResponse) => void): grpc.ClientUnaryCall;
    choiceGetAll(request: survey_v1_survey_choice_pb.ChoiceGetAllRequest, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_choice_pb.ChoiceGetAllResponse) => void): grpc.ClientUnaryCall;
    choiceGetAll(request: survey_v1_survey_choice_pb.ChoiceGetAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_choice_pb.ChoiceGetAllResponse) => void): grpc.ClientUnaryCall;
    choiceGetAll(request: survey_v1_survey_choice_pb.ChoiceGetAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_choice_pb.ChoiceGetAllResponse) => void): grpc.ClientUnaryCall;
    choiceCreate(request: survey_v1_survey_choice_pb.ChoiceCreateRequest, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_choice_pb.ChoiceCreateResponse) => void): grpc.ClientUnaryCall;
    choiceCreate(request: survey_v1_survey_choice_pb.ChoiceCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_choice_pb.ChoiceCreateResponse) => void): grpc.ClientUnaryCall;
    choiceCreate(request: survey_v1_survey_choice_pb.ChoiceCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_choice_pb.ChoiceCreateResponse) => void): grpc.ClientUnaryCall;
    choiceUpdate(request: survey_v1_survey_choice_pb.ChoiceUpdateRequest, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_choice_pb.ChoiceUpdateResponse) => void): grpc.ClientUnaryCall;
    choiceUpdate(request: survey_v1_survey_choice_pb.ChoiceUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_choice_pb.ChoiceUpdateResponse) => void): grpc.ClientUnaryCall;
    choiceUpdate(request: survey_v1_survey_choice_pb.ChoiceUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_choice_pb.ChoiceUpdateResponse) => void): grpc.ClientUnaryCall;
    choiceDelete(request: survey_v1_survey_choice_pb.ChoiceDeleteRequest, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_choice_pb.ChoiceDeleteResponse) => void): grpc.ClientUnaryCall;
    choiceDelete(request: survey_v1_survey_choice_pb.ChoiceDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_choice_pb.ChoiceDeleteResponse) => void): grpc.ClientUnaryCall;
    choiceDelete(request: survey_v1_survey_choice_pb.ChoiceDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_choice_pb.ChoiceDeleteResponse) => void): grpc.ClientUnaryCall;
}

export class SurveyServiceClient extends grpc.Client implements ISurveyServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public surveyGetOne(request: survey_v1_survey_pb.SurveyGetOneRequest, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_pb.SurveyGetOneResponse) => void): grpc.ClientUnaryCall;
    public surveyGetOne(request: survey_v1_survey_pb.SurveyGetOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_pb.SurveyGetOneResponse) => void): grpc.ClientUnaryCall;
    public surveyGetOne(request: survey_v1_survey_pb.SurveyGetOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_pb.SurveyGetOneResponse) => void): grpc.ClientUnaryCall;
    public surveyGetAll(request: survey_v1_survey_pb.SurveyGetAllRequest, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_pb.SurveyGetAllResponse) => void): grpc.ClientUnaryCall;
    public surveyGetAll(request: survey_v1_survey_pb.SurveyGetAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_pb.SurveyGetAllResponse) => void): grpc.ClientUnaryCall;
    public surveyGetAll(request: survey_v1_survey_pb.SurveyGetAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_pb.SurveyGetAllResponse) => void): grpc.ClientUnaryCall;
    public surveyCreate(request: survey_v1_survey_pb.SurveyCreateRequest, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_pb.SurveyCreateResponse) => void): grpc.ClientUnaryCall;
    public surveyCreate(request: survey_v1_survey_pb.SurveyCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_pb.SurveyCreateResponse) => void): grpc.ClientUnaryCall;
    public surveyCreate(request: survey_v1_survey_pb.SurveyCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_pb.SurveyCreateResponse) => void): grpc.ClientUnaryCall;
    public surveyUpdate(request: survey_v1_survey_pb.SurveyUpdateRequest, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_pb.SurveyUpdateResponse) => void): grpc.ClientUnaryCall;
    public surveyUpdate(request: survey_v1_survey_pb.SurveyUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_pb.SurveyUpdateResponse) => void): grpc.ClientUnaryCall;
    public surveyUpdate(request: survey_v1_survey_pb.SurveyUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_pb.SurveyUpdateResponse) => void): grpc.ClientUnaryCall;
    public surveyDelete(request: survey_v1_survey_pb.SurveyDeleteRequest, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_pb.SurveyDeleteResponse) => void): grpc.ClientUnaryCall;
    public surveyDelete(request: survey_v1_survey_pb.SurveyDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_pb.SurveyDeleteResponse) => void): grpc.ClientUnaryCall;
    public surveyDelete(request: survey_v1_survey_pb.SurveyDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_pb.SurveyDeleteResponse) => void): grpc.ClientUnaryCall;
    public pageGetOne(request: survey_v1_survey_page_pb.PageGetOneRequest, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_page_pb.PageGetOneResponse) => void): grpc.ClientUnaryCall;
    public pageGetOne(request: survey_v1_survey_page_pb.PageGetOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_page_pb.PageGetOneResponse) => void): grpc.ClientUnaryCall;
    public pageGetOne(request: survey_v1_survey_page_pb.PageGetOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_page_pb.PageGetOneResponse) => void): grpc.ClientUnaryCall;
    public pageGetAll(request: survey_v1_survey_page_pb.PageGetAllRequest, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_page_pb.PageGetAllResponse) => void): grpc.ClientUnaryCall;
    public pageGetAll(request: survey_v1_survey_page_pb.PageGetAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_page_pb.PageGetAllResponse) => void): grpc.ClientUnaryCall;
    public pageGetAll(request: survey_v1_survey_page_pb.PageGetAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_page_pb.PageGetAllResponse) => void): grpc.ClientUnaryCall;
    public pageCreate(request: survey_v1_survey_page_pb.PageCreateRequest, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_page_pb.PageCreateResponse) => void): grpc.ClientUnaryCall;
    public pageCreate(request: survey_v1_survey_page_pb.PageCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_page_pb.PageCreateResponse) => void): grpc.ClientUnaryCall;
    public pageCreate(request: survey_v1_survey_page_pb.PageCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_page_pb.PageCreateResponse) => void): grpc.ClientUnaryCall;
    public pageUpdate(request: survey_v1_survey_page_pb.PageUpdateRequest, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_page_pb.PageUpdateResponse) => void): grpc.ClientUnaryCall;
    public pageUpdate(request: survey_v1_survey_page_pb.PageUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_page_pb.PageUpdateResponse) => void): grpc.ClientUnaryCall;
    public pageUpdate(request: survey_v1_survey_page_pb.PageUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_page_pb.PageUpdateResponse) => void): grpc.ClientUnaryCall;
    public pageDelete(request: survey_v1_survey_page_pb.PageDeleteRequest, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_page_pb.PageDeleteResponse) => void): grpc.ClientUnaryCall;
    public pageDelete(request: survey_v1_survey_page_pb.PageDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_page_pb.PageDeleteResponse) => void): grpc.ClientUnaryCall;
    public pageDelete(request: survey_v1_survey_page_pb.PageDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_page_pb.PageDeleteResponse) => void): grpc.ClientUnaryCall;
    public questionGetOne(request: survey_v1_survey_question_pb.QuestionGetOneRequest, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_question_pb.QuestionGetOneResponse) => void): grpc.ClientUnaryCall;
    public questionGetOne(request: survey_v1_survey_question_pb.QuestionGetOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_question_pb.QuestionGetOneResponse) => void): grpc.ClientUnaryCall;
    public questionGetOne(request: survey_v1_survey_question_pb.QuestionGetOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_question_pb.QuestionGetOneResponse) => void): grpc.ClientUnaryCall;
    public questionGetAll(request: survey_v1_survey_question_pb.QuestionGetAllRequest, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_question_pb.QuestionGetAllResponse) => void): grpc.ClientUnaryCall;
    public questionGetAll(request: survey_v1_survey_question_pb.QuestionGetAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_question_pb.QuestionGetAllResponse) => void): grpc.ClientUnaryCall;
    public questionGetAll(request: survey_v1_survey_question_pb.QuestionGetAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_question_pb.QuestionGetAllResponse) => void): grpc.ClientUnaryCall;
    public questionCreate(request: survey_v1_survey_question_pb.QuestionCreateRequest, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_question_pb.QuestionCreateResponse) => void): grpc.ClientUnaryCall;
    public questionCreate(request: survey_v1_survey_question_pb.QuestionCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_question_pb.QuestionCreateResponse) => void): grpc.ClientUnaryCall;
    public questionCreate(request: survey_v1_survey_question_pb.QuestionCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_question_pb.QuestionCreateResponse) => void): grpc.ClientUnaryCall;
    public questionUpdate(request: survey_v1_survey_question_pb.QuestionUpdateRequest, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_question_pb.QuestionUpdateResponse) => void): grpc.ClientUnaryCall;
    public questionUpdate(request: survey_v1_survey_question_pb.QuestionUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_question_pb.QuestionUpdateResponse) => void): grpc.ClientUnaryCall;
    public questionUpdate(request: survey_v1_survey_question_pb.QuestionUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_question_pb.QuestionUpdateResponse) => void): grpc.ClientUnaryCall;
    public questionDelete(request: survey_v1_survey_question_pb.QuestionDeleteRequest, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_question_pb.QuestionDeleteResponse) => void): grpc.ClientUnaryCall;
    public questionDelete(request: survey_v1_survey_question_pb.QuestionDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_question_pb.QuestionDeleteResponse) => void): grpc.ClientUnaryCall;
    public questionDelete(request: survey_v1_survey_question_pb.QuestionDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_question_pb.QuestionDeleteResponse) => void): grpc.ClientUnaryCall;
    public choiceGetAll(request: survey_v1_survey_choice_pb.ChoiceGetAllRequest, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_choice_pb.ChoiceGetAllResponse) => void): grpc.ClientUnaryCall;
    public choiceGetAll(request: survey_v1_survey_choice_pb.ChoiceGetAllRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_choice_pb.ChoiceGetAllResponse) => void): grpc.ClientUnaryCall;
    public choiceGetAll(request: survey_v1_survey_choice_pb.ChoiceGetAllRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_choice_pb.ChoiceGetAllResponse) => void): grpc.ClientUnaryCall;
    public choiceCreate(request: survey_v1_survey_choice_pb.ChoiceCreateRequest, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_choice_pb.ChoiceCreateResponse) => void): grpc.ClientUnaryCall;
    public choiceCreate(request: survey_v1_survey_choice_pb.ChoiceCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_choice_pb.ChoiceCreateResponse) => void): grpc.ClientUnaryCall;
    public choiceCreate(request: survey_v1_survey_choice_pb.ChoiceCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_choice_pb.ChoiceCreateResponse) => void): grpc.ClientUnaryCall;
    public choiceUpdate(request: survey_v1_survey_choice_pb.ChoiceUpdateRequest, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_choice_pb.ChoiceUpdateResponse) => void): grpc.ClientUnaryCall;
    public choiceUpdate(request: survey_v1_survey_choice_pb.ChoiceUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_choice_pb.ChoiceUpdateResponse) => void): grpc.ClientUnaryCall;
    public choiceUpdate(request: survey_v1_survey_choice_pb.ChoiceUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_choice_pb.ChoiceUpdateResponse) => void): grpc.ClientUnaryCall;
    public choiceDelete(request: survey_v1_survey_choice_pb.ChoiceDeleteRequest, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_choice_pb.ChoiceDeleteResponse) => void): grpc.ClientUnaryCall;
    public choiceDelete(request: survey_v1_survey_choice_pb.ChoiceDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_choice_pb.ChoiceDeleteResponse) => void): grpc.ClientUnaryCall;
    public choiceDelete(request: survey_v1_survey_choice_pb.ChoiceDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: survey_v1_survey_choice_pb.ChoiceDeleteResponse) => void): grpc.ClientUnaryCall;
}
