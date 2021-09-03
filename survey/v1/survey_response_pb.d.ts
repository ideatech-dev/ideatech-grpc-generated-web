// package: survey.v1
// file: survey/v1/survey_response.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class SurveyResponse extends jspb.Message { 
    getId(): number;
    setId(value: number): SurveyResponse;
    getSurveyId(): number;
    setSurveyId(value: number): SurveyResponse;
    getLastSurveyPageId(): number;
    setLastSurveyPageId(value: number): SurveyResponse;
    getSession(): string;
    setSession(value: string): SurveyResponse;
    getUrl(): string;
    setUrl(value: string): SurveyResponse;
    getUrlParam(): string;
    setUrlParam(value: string): SurveyResponse;

    hasDatetimeStart(): boolean;
    clearDatetimeStart(): void;
    getDatetimeStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDatetimeStart(value?: google_protobuf_timestamp_pb.Timestamp): SurveyResponse;

    hasDatetimeEnd(): boolean;
    clearDatetimeEnd(): void;
    getDatetimeEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDatetimeEnd(value?: google_protobuf_timestamp_pb.Timestamp): SurveyResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SurveyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SurveyResponse): SurveyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SurveyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SurveyResponse;
    static deserializeBinaryFromReader(message: SurveyResponse, reader: jspb.BinaryReader): SurveyResponse;
}

export namespace SurveyResponse {
    export type AsObject = {
        id: number,
        surveyId: number,
        lastSurveyPageId: number,
        session: string,
        url: string,
        urlParam: string,
        datetimeStart?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        datetimeEnd?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class SurveyResponseAnswer extends jspb.Message { 
    getId(): number;
    setId(value: number): SurveyResponseAnswer;
    getResponseId(): number;
    setResponseId(value: number): SurveyResponseAnswer;
    getQuestionId(): number;
    setQuestionId(value: number): SurveyResponseAnswer;
    clearValuesList(): void;
    getValuesList(): Array<string>;
    setValuesList(value: Array<string>): SurveyResponseAnswer;
    addValues(value: string, index?: number): string;

    hasDatetimeCreated(): boolean;
    clearDatetimeCreated(): void;
    getDatetimeCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDatetimeCreated(value?: google_protobuf_timestamp_pb.Timestamp): SurveyResponseAnswer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SurveyResponseAnswer.AsObject;
    static toObject(includeInstance: boolean, msg: SurveyResponseAnswer): SurveyResponseAnswer.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SurveyResponseAnswer, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SurveyResponseAnswer;
    static deserializeBinaryFromReader(message: SurveyResponseAnswer, reader: jspb.BinaryReader): SurveyResponseAnswer;
}

export namespace SurveyResponseAnswer {
    export type AsObject = {
        id: number,
        responseId: number,
        questionId: number,
        valuesList: Array<string>,
        datetimeCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

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
    getResponseList(): Array<SurveyResponse>;
    setResponseList(value: Array<SurveyResponse>): ResponseGetAllResponse;
    addResponse(value?: SurveyResponse, index?: number): SurveyResponse;
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
        responseList: Array<SurveyResponse.AsObject>,
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
    getResponse(): SurveyResponse | undefined;
    setResponse(value?: SurveyResponse): ResponseGetOneResponse;

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
        response?: SurveyResponse.AsObject,
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
    getAnswersList(): Array<SurveyResponseAnswer>;
    setAnswersList(value: Array<SurveyResponseAnswer>): ResponseAnswerGetListResponse;
    addAnswers(value?: SurveyResponseAnswer, index?: number): SurveyResponseAnswer;

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
        answersList: Array<SurveyResponseAnswer.AsObject>,
    }
}
