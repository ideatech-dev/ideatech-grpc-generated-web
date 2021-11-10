// package: web.survey.v1
// file: web/survey/v1/survey_response_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as web_survey_v1_types_pb from "../../../web/survey/v1/types_pb";

export class ResponseGetAllRequest extends jspb.Message { 
    getSurveyId(): number;
    setSurveyId(value: number): ResponseGetAllRequest;
    getPage(): number;
    setPage(value: number): ResponseGetAllRequest;
    getContentPerPage(): number;
    setContentPerPage(value: number): ResponseGetAllRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResponseGetAllRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ResponseGetAllRequest): ResponseGetAllRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResponseGetAllRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResponseGetAllRequest;
    static deserializeBinaryFromReader(message: ResponseGetAllRequest, reader: jspb.BinaryReader): ResponseGetAllRequest;
}

export namespace ResponseGetAllRequest {
    export type AsObject = {
        surveyId: number,
        page: number,
        contentPerPage: number,
    }
}

export class ResponseGetAllResponse extends jspb.Message { 
    clearResponseList(): void;
    getResponseList(): Array<web_survey_v1_types_pb.SurveyResponse>;
    setResponseList(value: Array<web_survey_v1_types_pb.SurveyResponse>): ResponseGetAllResponse;
    addResponse(value?: web_survey_v1_types_pb.SurveyResponse, index?: number): web_survey_v1_types_pb.SurveyResponse;
    getCount(): number;
    setCount(value: number): ResponseGetAllResponse;
    getMaxPage(): number;
    setMaxPage(value: number): ResponseGetAllResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResponseGetAllResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ResponseGetAllResponse): ResponseGetAllResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResponseGetAllResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResponseGetAllResponse;
    static deserializeBinaryFromReader(message: ResponseGetAllResponse, reader: jspb.BinaryReader): ResponseGetAllResponse;
}

export namespace ResponseGetAllResponse {
    export type AsObject = {
        responseList: Array<web_survey_v1_types_pb.SurveyResponse.AsObject>,
        count: number,
        maxPage: number,
    }
}

export class ResponseGetOneRequest extends jspb.Message { 
    getResponseId(): number;
    setResponseId(value: number): ResponseGetOneRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResponseGetOneRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ResponseGetOneRequest): ResponseGetOneRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResponseGetOneRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResponseGetOneRequest;
    static deserializeBinaryFromReader(message: ResponseGetOneRequest, reader: jspb.BinaryReader): ResponseGetOneRequest;
}

export namespace ResponseGetOneRequest {
    export type AsObject = {
        responseId: number,
    }
}

export class ResponseGetOneResponse extends jspb.Message { 

    hasResponse(): boolean;
    clearResponse(): void;
    getResponse(): web_survey_v1_types_pb.SurveyResponse | undefined;
    setResponse(value?: web_survey_v1_types_pb.SurveyResponse): ResponseGetOneResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResponseGetOneResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ResponseGetOneResponse): ResponseGetOneResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResponseGetOneResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResponseGetOneResponse;
    static deserializeBinaryFromReader(message: ResponseGetOneResponse, reader: jspb.BinaryReader): ResponseGetOneResponse;
}

export namespace ResponseGetOneResponse {
    export type AsObject = {
        response?: web_survey_v1_types_pb.SurveyResponse.AsObject,
    }
}

export class ResponseAnswerGetListRequest extends jspb.Message { 
    getResponseId(): number;
    setResponseId(value: number): ResponseAnswerGetListRequest;
    getQuestionId(): number;
    setQuestionId(value: number): ResponseAnswerGetListRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResponseAnswerGetListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ResponseAnswerGetListRequest): ResponseAnswerGetListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResponseAnswerGetListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResponseAnswerGetListRequest;
    static deserializeBinaryFromReader(message: ResponseAnswerGetListRequest, reader: jspb.BinaryReader): ResponseAnswerGetListRequest;
}

export namespace ResponseAnswerGetListRequest {
    export type AsObject = {
        responseId: number,
        questionId: number,
    }
}

export class ResponseAnswerGetListResponse extends jspb.Message { 
    clearAnswersList(): void;
    getAnswersList(): Array<web_survey_v1_types_pb.SurveyResponseAnswer>;
    setAnswersList(value: Array<web_survey_v1_types_pb.SurveyResponseAnswer>): ResponseAnswerGetListResponse;
    addAnswers(value?: web_survey_v1_types_pb.SurveyResponseAnswer, index?: number): web_survey_v1_types_pb.SurveyResponseAnswer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ResponseAnswerGetListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ResponseAnswerGetListResponse): ResponseAnswerGetListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ResponseAnswerGetListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ResponseAnswerGetListResponse;
    static deserializeBinaryFromReader(message: ResponseAnswerGetListResponse, reader: jspb.BinaryReader): ResponseAnswerGetListResponse;
}

export namespace ResponseAnswerGetListResponse {
    export type AsObject = {
        answersList: Array<web_survey_v1_types_pb.SurveyResponseAnswer.AsObject>,
    }
}
