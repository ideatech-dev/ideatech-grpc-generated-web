// package: survey.v1
// file: survey/v1/survey_page.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as survey_v1_survey_question_pb from "../../survey/v1/survey_question_pb";

export class SurveyPage extends jspb.Message { 
    getId(): number;
    setId(value: number): SurveyPage;

    getSurveyId(): number;
    setSurveyId(value: number): SurveyPage;

    getOrders(): number;
    setOrders(value: number): SurveyPage;

    clearQuestionsList(): void;
    getQuestionsList(): Array<survey_v1_survey_question_pb.SurveyQuestion>;
    setQuestionsList(value: Array<survey_v1_survey_question_pb.SurveyQuestion>): SurveyPage;
    addQuestions(value?: survey_v1_survey_question_pb.SurveyQuestion, index?: number): survey_v1_survey_question_pb.SurveyQuestion;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SurveyPage.AsObject;
    static toObject(includeInstance: boolean, msg: SurveyPage): SurveyPage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SurveyPage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SurveyPage;
    static deserializeBinaryFromReader(message: SurveyPage, reader: jspb.BinaryReader): SurveyPage;
}

export namespace SurveyPage {
    export type AsObject = {
        id: number,
        surveyId: number,
        orders: number,
        questionsList: Array<survey_v1_survey_question_pb.SurveyQuestion.AsObject>,
    }
}

export class SurveyPageCreateUpdate extends jspb.Message { 
    getOrders(): number;
    setOrders(value: number): SurveyPageCreateUpdate;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SurveyPageCreateUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: SurveyPageCreateUpdate): SurveyPageCreateUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SurveyPageCreateUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SurveyPageCreateUpdate;
    static deserializeBinaryFromReader(message: SurveyPageCreateUpdate, reader: jspb.BinaryReader): SurveyPageCreateUpdate;
}

export namespace SurveyPageCreateUpdate {
    export type AsObject = {
        orders: number,
    }
}

export class PageGetOneRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): PageGetOneRequest;

    getWithQuestion(): boolean;
    setWithQuestion(value: boolean): PageGetOneRequest;

    getWithQuestionOption(): boolean;
    setWithQuestionOption(value: boolean): PageGetOneRequest;

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
        id: number,
        withQuestion: boolean,
        withQuestionOption: boolean,
        withQuestionChoice: boolean,
    }
}

export class PageGetOneResponse extends jspb.Message { 

    hasPage(): boolean;
    clearPage(): void;
    getPage(): SurveyPage | undefined;
    setPage(value?: SurveyPage): PageGetOneResponse;


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
        page?: SurveyPage.AsObject,
    }
}

export class PageGetAllRequest extends jspb.Message { 
    getSurveyId(): number;
    setSurveyId(value: number): PageGetAllRequest;

    getWithQuestion(): boolean;
    setWithQuestion(value: boolean): PageGetAllRequest;

    getWithQuestionOption(): boolean;
    setWithQuestionOption(value: boolean): PageGetAllRequest;

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
        withQuestionOption: boolean,
        withQuestionChoice: boolean,
    }
}

export class PageGetAllResponse extends jspb.Message { 
    clearPagesList(): void;
    getPagesList(): Array<SurveyPage>;
    setPagesList(value: Array<SurveyPage>): PageGetAllResponse;
    addPages(value?: SurveyPage, index?: number): SurveyPage;


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
        pagesList: Array<SurveyPage.AsObject>,
    }
}

export class PageCreateRequest extends jspb.Message { 
    getSurveyId(): number;
    setSurveyId(value: number): PageCreateRequest;


    hasPage(): boolean;
    clearPage(): void;
    getPage(): SurveyPageCreateUpdate | undefined;
    setPage(value?: SurveyPageCreateUpdate): PageCreateRequest;


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
        page?: SurveyPageCreateUpdate.AsObject,
    }
}

export class PageCreateResponse extends jspb.Message { 

    hasPage(): boolean;
    clearPage(): void;
    getPage(): SurveyPage | undefined;
    setPage(value?: SurveyPage): PageCreateResponse;


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
        page?: SurveyPage.AsObject,
    }
}

export class PageUpdateRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): PageUpdateRequest;


    hasPage(): boolean;
    clearPage(): void;
    getPage(): SurveyPageCreateUpdate | undefined;
    setPage(value?: SurveyPageCreateUpdate): PageUpdateRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PageUpdateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: PageUpdateRequest): PageUpdateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PageUpdateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PageUpdateRequest;
    static deserializeBinaryFromReader(message: PageUpdateRequest, reader: jspb.BinaryReader): PageUpdateRequest;
}

export namespace PageUpdateRequest {
    export type AsObject = {
        id: number,
        page?: SurveyPageCreateUpdate.AsObject,
    }
}

export class PageUpdateResponse extends jspb.Message { 

    hasPage(): boolean;
    clearPage(): void;
    getPage(): SurveyPage | undefined;
    setPage(value?: SurveyPage): PageUpdateResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PageUpdateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: PageUpdateResponse): PageUpdateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PageUpdateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PageUpdateResponse;
    static deserializeBinaryFromReader(message: PageUpdateResponse, reader: jspb.BinaryReader): PageUpdateResponse;
}

export namespace PageUpdateResponse {
    export type AsObject = {
        page?: SurveyPage.AsObject,
    }
}

export class PageDeleteRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): PageDeleteRequest;


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
        id: number,
    }
}

export class PageDeleteResponse extends jspb.Message { 

    hasPage(): boolean;
    clearPage(): void;
    getPage(): SurveyPage | undefined;
    setPage(value?: SurveyPage): PageDeleteResponse;


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
        page?: SurveyPage.AsObject,
    }
}
