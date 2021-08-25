// package: survey.v1
// file: survey/v1/survey.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as survey_v1_survey_page_pb from "../../survey/v1/survey_page_pb";

export class Survey extends jspb.Message { 
    getId(): number;
    setId(value: number): Survey;


    hasDatetimeCreated(): boolean;
    clearDatetimeCreated(): void;
    getDatetimeCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDatetimeCreated(value?: google_protobuf_timestamp_pb.Timestamp): Survey;


    hasDatetimeUpdated(): boolean;
    clearDatetimeUpdated(): void;
    getDatetimeUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDatetimeUpdated(value?: google_protobuf_timestamp_pb.Timestamp): Survey;

    getOrganizationId(): number;
    setOrganizationId(value: number): Survey;

    getName(): string;
    setName(value: string): Survey;

    getType(): SurveyType;
    setType(value: SurveyType): Survey;

    clearPagesList(): void;
    getPagesList(): Array<survey_v1_survey_page_pb.SurveyPage>;
    setPagesList(value: Array<survey_v1_survey_page_pb.SurveyPage>): Survey;
    addPages(value?: survey_v1_survey_page_pb.SurveyPage, index?: number): survey_v1_survey_page_pb.SurveyPage;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Survey.AsObject;
    static toObject(includeInstance: boolean, msg: Survey): Survey.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Survey, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Survey;
    static deserializeBinaryFromReader(message: Survey, reader: jspb.BinaryReader): Survey;
}

export namespace Survey {
    export type AsObject = {
        id: number,
        datetimeCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        datetimeUpdated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        organizationId: number,
        name: string,
        type: SurveyType,
        pagesList: Array<survey_v1_survey_page_pb.SurveyPage.AsObject>,
    }
}

export class SurveyCreateUpdate extends jspb.Message { 
    getName(): string;
    setName(value: string): SurveyCreateUpdate;

    getType(): SurveyType;
    setType(value: SurveyType): SurveyCreateUpdate;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SurveyCreateUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: SurveyCreateUpdate): SurveyCreateUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SurveyCreateUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SurveyCreateUpdate;
    static deserializeBinaryFromReader(message: SurveyCreateUpdate, reader: jspb.BinaryReader): SurveyCreateUpdate;
}

export namespace SurveyCreateUpdate {
    export type AsObject = {
        name: string,
        type: SurveyType,
    }
}

export class SurveyGetOneRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): SurveyGetOneRequest;

    getWithPage(): boolean;
    setWithPage(value: boolean): SurveyGetOneRequest;

    getWithQuestion(): boolean;
    setWithQuestion(value: boolean): SurveyGetOneRequest;

    getWithQuestionOption(): boolean;
    setWithQuestionOption(value: boolean): SurveyGetOneRequest;

    getWithQuestionChoice(): boolean;
    setWithQuestionChoice(value: boolean): SurveyGetOneRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SurveyGetOneRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SurveyGetOneRequest): SurveyGetOneRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SurveyGetOneRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SurveyGetOneRequest;
    static deserializeBinaryFromReader(message: SurveyGetOneRequest, reader: jspb.BinaryReader): SurveyGetOneRequest;
}

export namespace SurveyGetOneRequest {
    export type AsObject = {
        id: number,
        withPage: boolean,
        withQuestion: boolean,
        withQuestionOption: boolean,
        withQuestionChoice: boolean,
    }
}

export class SurveyGetOneResponse extends jspb.Message { 

    hasSurvey(): boolean;
    clearSurvey(): void;
    getSurvey(): Survey | undefined;
    setSurvey(value?: Survey): SurveyGetOneResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SurveyGetOneResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SurveyGetOneResponse): SurveyGetOneResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SurveyGetOneResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SurveyGetOneResponse;
    static deserializeBinaryFromReader(message: SurveyGetOneResponse, reader: jspb.BinaryReader): SurveyGetOneResponse;
}

export namespace SurveyGetOneResponse {
    export type AsObject = {
        survey?: Survey.AsObject,
    }
}

export class SurveyGetAllRequest extends jspb.Message { 
    getOrganizationId(): number;
    setOrganizationId(value: number): SurveyGetAllRequest;

    getFilterType(): SurveyType;
    setFilterType(value: SurveyType): SurveyGetAllRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SurveyGetAllRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SurveyGetAllRequest): SurveyGetAllRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SurveyGetAllRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SurveyGetAllRequest;
    static deserializeBinaryFromReader(message: SurveyGetAllRequest, reader: jspb.BinaryReader): SurveyGetAllRequest;
}

export namespace SurveyGetAllRequest {
    export type AsObject = {
        organizationId: number,
        filterType: SurveyType,
    }
}

export class SurveyGetAllResponse extends jspb.Message { 
    clearSurveysList(): void;
    getSurveysList(): Array<Survey>;
    setSurveysList(value: Array<Survey>): SurveyGetAllResponse;
    addSurveys(value?: Survey, index?: number): Survey;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SurveyGetAllResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SurveyGetAllResponse): SurveyGetAllResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SurveyGetAllResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SurveyGetAllResponse;
    static deserializeBinaryFromReader(message: SurveyGetAllResponse, reader: jspb.BinaryReader): SurveyGetAllResponse;
}

export namespace SurveyGetAllResponse {
    export type AsObject = {
        surveysList: Array<Survey.AsObject>,
    }
}

export class SurveyCreateRequest extends jspb.Message { 
    getOrganizationId(): number;
    setOrganizationId(value: number): SurveyCreateRequest;


    hasSurvey(): boolean;
    clearSurvey(): void;
    getSurvey(): SurveyCreateUpdate | undefined;
    setSurvey(value?: SurveyCreateUpdate): SurveyCreateRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SurveyCreateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SurveyCreateRequest): SurveyCreateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SurveyCreateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SurveyCreateRequest;
    static deserializeBinaryFromReader(message: SurveyCreateRequest, reader: jspb.BinaryReader): SurveyCreateRequest;
}

export namespace SurveyCreateRequest {
    export type AsObject = {
        organizationId: number,
        survey?: SurveyCreateUpdate.AsObject,
    }
}

export class SurveyCreateResponse extends jspb.Message { 

    hasSurvey(): boolean;
    clearSurvey(): void;
    getSurvey(): Survey | undefined;
    setSurvey(value?: Survey): SurveyCreateResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SurveyCreateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SurveyCreateResponse): SurveyCreateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SurveyCreateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SurveyCreateResponse;
    static deserializeBinaryFromReader(message: SurveyCreateResponse, reader: jspb.BinaryReader): SurveyCreateResponse;
}

export namespace SurveyCreateResponse {
    export type AsObject = {
        survey?: Survey.AsObject,
    }
}

export class SurveyUpdateRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): SurveyUpdateRequest;


    hasSurvey(): boolean;
    clearSurvey(): void;
    getSurvey(): SurveyCreateUpdate | undefined;
    setSurvey(value?: SurveyCreateUpdate): SurveyUpdateRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SurveyUpdateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SurveyUpdateRequest): SurveyUpdateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SurveyUpdateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SurveyUpdateRequest;
    static deserializeBinaryFromReader(message: SurveyUpdateRequest, reader: jspb.BinaryReader): SurveyUpdateRequest;
}

export namespace SurveyUpdateRequest {
    export type AsObject = {
        id: number,
        survey?: SurveyCreateUpdate.AsObject,
    }
}

export class SurveyUpdateResponse extends jspb.Message { 

    hasSurvey(): boolean;
    clearSurvey(): void;
    getSurvey(): Survey | undefined;
    setSurvey(value?: Survey): SurveyUpdateResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SurveyUpdateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SurveyUpdateResponse): SurveyUpdateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SurveyUpdateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SurveyUpdateResponse;
    static deserializeBinaryFromReader(message: SurveyUpdateResponse, reader: jspb.BinaryReader): SurveyUpdateResponse;
}

export namespace SurveyUpdateResponse {
    export type AsObject = {
        survey?: Survey.AsObject,
    }
}

export class SurveyDeleteRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): SurveyDeleteRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SurveyDeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SurveyDeleteRequest): SurveyDeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SurveyDeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SurveyDeleteRequest;
    static deserializeBinaryFromReader(message: SurveyDeleteRequest, reader: jspb.BinaryReader): SurveyDeleteRequest;
}

export namespace SurveyDeleteRequest {
    export type AsObject = {
        id: number,
    }
}

export class SurveyDeleteResponse extends jspb.Message { 

    hasSurvey(): boolean;
    clearSurvey(): void;
    getSurvey(): Survey | undefined;
    setSurvey(value?: Survey): SurveyDeleteResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SurveyDeleteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SurveyDeleteResponse): SurveyDeleteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SurveyDeleteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SurveyDeleteResponse;
    static deserializeBinaryFromReader(message: SurveyDeleteResponse, reader: jspb.BinaryReader): SurveyDeleteResponse;
}

export namespace SurveyDeleteResponse {
    export type AsObject = {
        survey?: Survey.AsObject,
    }
}

export enum SurveyType {
    SURVEY_TYPE_ALL_UNSPECIFIED = 0,
    SURVEY_TYPE_FORM = 1,
    SURVEY_TYPE_QUIZ = 2,
}
