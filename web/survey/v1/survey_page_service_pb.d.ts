// package: web.survey.v1
// file: web/survey/v1/survey_page_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as web_survey_v1_types_pb from "../../../web/survey/v1/types_pb";

export class PageGetOneRequest extends jspb.Message { 
    getPageId(): number;
    setPageId(value: number): PageGetOneRequest;
    getWithQuestion(): boolean;
    setWithQuestion(value: boolean): PageGetOneRequest;
    getWithQuestionChoice(): boolean;
    setWithQuestionChoice(value: boolean): PageGetOneRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PageGetOneRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PageGetOneRequest): PageGetOneRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PageGetOneRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PageGetOneRequest;
    static deserializeBinaryFromReader(message: PageGetOneRequest, reader: jspb.BinaryReader): PageGetOneRequest;
}

export namespace PageGetOneRequest {
    export type AsObject = {
        pageId: number,
        withQuestion: boolean,
        withQuestionChoice: boolean,
    }
}

export class PageGetOneResponse extends jspb.Message { 

    hasPage(): boolean;
    clearPage(): void;
    getPage(): web_survey_v1_types_pb.SurveyPage | undefined;
    setPage(value?: web_survey_v1_types_pb.SurveyPage): PageGetOneResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PageGetOneResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PageGetOneResponse): PageGetOneResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PageGetOneResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PageGetOneResponse;
    static deserializeBinaryFromReader(message: PageGetOneResponse, reader: jspb.BinaryReader): PageGetOneResponse;
}

export namespace PageGetOneResponse {
    export type AsObject = {
        page?: web_survey_v1_types_pb.SurveyPage.AsObject,
    }
}

export class PageGetAllRequest extends jspb.Message { 
    getSurveyId(): number;
    setSurveyId(value: number): PageGetAllRequest;
    getWithQuestion(): boolean;
    setWithQuestion(value: boolean): PageGetAllRequest;
    getWithQuestionChoice(): boolean;
    setWithQuestionChoice(value: boolean): PageGetAllRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PageGetAllRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PageGetAllRequest): PageGetAllRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PageGetAllRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PageGetAllRequest;
    static deserializeBinaryFromReader(message: PageGetAllRequest, reader: jspb.BinaryReader): PageGetAllRequest;
}

export namespace PageGetAllRequest {
    export type AsObject = {
        surveyId: number,
        withQuestion: boolean,
        withQuestionChoice: boolean,
    }
}

export class PageGetAllResponse extends jspb.Message { 
    clearPagesList(): void;
    getPagesList(): Array<web_survey_v1_types_pb.SurveyPage>;
    setPagesList(value: Array<web_survey_v1_types_pb.SurveyPage>): PageGetAllResponse;
    addPages(value?: web_survey_v1_types_pb.SurveyPage, index?: number): web_survey_v1_types_pb.SurveyPage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PageGetAllResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PageGetAllResponse): PageGetAllResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PageGetAllResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PageGetAllResponse;
    static deserializeBinaryFromReader(message: PageGetAllResponse, reader: jspb.BinaryReader): PageGetAllResponse;
}

export namespace PageGetAllResponse {
    export type AsObject = {
        pagesList: Array<web_survey_v1_types_pb.SurveyPage.AsObject>,
    }
}

export class PageCreateRequest extends jspb.Message { 
    getSurveyId(): number;
    setSurveyId(value: number): PageCreateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PageCreateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PageCreateRequest): PageCreateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PageCreateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PageCreateRequest;
    static deserializeBinaryFromReader(message: PageCreateRequest, reader: jspb.BinaryReader): PageCreateRequest;
}

export namespace PageCreateRequest {
    export type AsObject = {
        surveyId: number,
    }
}

export class PageCreateResponse extends jspb.Message { 

    hasPage(): boolean;
    clearPage(): void;
    getPage(): web_survey_v1_types_pb.SurveyPage | undefined;
    setPage(value?: web_survey_v1_types_pb.SurveyPage): PageCreateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PageCreateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PageCreateResponse): PageCreateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PageCreateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PageCreateResponse;
    static deserializeBinaryFromReader(message: PageCreateResponse, reader: jspb.BinaryReader): PageCreateResponse;
}

export namespace PageCreateResponse {
    export type AsObject = {
        page?: web_survey_v1_types_pb.SurveyPage.AsObject,
    }
}

export class PageDeleteRequest extends jspb.Message { 
    getPageId(): number;
    setPageId(value: number): PageDeleteRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PageDeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PageDeleteRequest): PageDeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PageDeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PageDeleteRequest;
    static deserializeBinaryFromReader(message: PageDeleteRequest, reader: jspb.BinaryReader): PageDeleteRequest;
}

export namespace PageDeleteRequest {
    export type AsObject = {
        pageId: number,
    }
}

export class PageDeleteResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PageDeleteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PageDeleteResponse): PageDeleteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PageDeleteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PageDeleteResponse;
    static deserializeBinaryFromReader(message: PageDeleteResponse, reader: jspb.BinaryReader): PageDeleteResponse;
}

export namespace PageDeleteResponse {
    export type AsObject = {
    }
}
