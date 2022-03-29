// package: web.survey.v1
// file: web/survey/v1/survey_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as web_survey_v1_types_pb from "../../../web/survey/v1/types_pb";

export class SurveyGetOneRequest extends jspb.Message { 
    getSurveyId(): number;
    setSurveyId(value: number): SurveyGetOneRequest;

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
        surveyId: number,
    }
}

export class SurveyGetOneResponse extends jspb.Message { 

    hasSurvey(): boolean;
    clearSurvey(): void;
    getSurvey(): web_survey_v1_types_pb.Survey | undefined;
    setSurvey(value?: web_survey_v1_types_pb.Survey): SurveyGetOneResponse;

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
        survey?: web_survey_v1_types_pb.Survey.AsObject,
    }
}

export class SurveyGetAllRequest extends jspb.Message { 
    getOrganizationId(): number;
    setOrganizationId(value: number): SurveyGetAllRequest;
    getFilterType(): web_survey_v1_types_pb.SurveyType;
    setFilterType(value: web_survey_v1_types_pb.SurveyType): SurveyGetAllRequest;
    getPage(): number;
    setPage(value: number): SurveyGetAllRequest;
    getContentPerPage(): number;
    setContentPerPage(value: number): SurveyGetAllRequest;
    getSearchByName(): string;
    setSearchByName(value: string): SurveyGetAllRequest;

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
        filterType: web_survey_v1_types_pb.SurveyType,
        page: number,
        contentPerPage: number,
        searchByName: string,
    }
}

export class SurveyGetAllResponse extends jspb.Message { 
    clearSurveysList(): void;
    getSurveysList(): Array<web_survey_v1_types_pb.Survey>;
    setSurveysList(value: Array<web_survey_v1_types_pb.Survey>): SurveyGetAllResponse;
    addSurveys(value?: web_survey_v1_types_pb.Survey, index?: number): web_survey_v1_types_pb.Survey;
    getCount(): number;
    setCount(value: number): SurveyGetAllResponse;
    getMaxPage(): number;
    setMaxPage(value: number): SurveyGetAllResponse;

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
        surveysList: Array<web_survey_v1_types_pb.Survey.AsObject>,
        count: number,
        maxPage: number,
    }
}

export class SurveyCreateRequest extends jspb.Message { 
    getOrganizationId(): number;
    setOrganizationId(value: number): SurveyCreateRequest;
    getName(): string;
    setName(value: string): SurveyCreateRequest;
    getType(): web_survey_v1_types_pb.SurveyType;
    setType(value: web_survey_v1_types_pb.SurveyType): SurveyCreateRequest;

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
        name: string,
        type: web_survey_v1_types_pb.SurveyType,
    }
}

export class SurveyCreateResponse extends jspb.Message { 

    hasSurvey(): boolean;
    clearSurvey(): void;
    getSurvey(): web_survey_v1_types_pb.Survey | undefined;
    setSurvey(value?: web_survey_v1_types_pb.Survey): SurveyCreateResponse;

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
        survey?: web_survey_v1_types_pb.Survey.AsObject,
    }
}

export class SurveyUpdateRequest extends jspb.Message { 
    getSurveyId(): number;
    setSurveyId(value: number): SurveyUpdateRequest;
    getNewName(): string;
    setNewName(value: string): SurveyUpdateRequest;

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
        surveyId: number,
        newName: string,
    }
}

export class SurveyUpdateResponse extends jspb.Message { 

    hasSurvey(): boolean;
    clearSurvey(): void;
    getSurvey(): web_survey_v1_types_pb.Survey | undefined;
    setSurvey(value?: web_survey_v1_types_pb.Survey): SurveyUpdateResponse;

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
        survey?: web_survey_v1_types_pb.Survey.AsObject,
    }
}

export class SurveyDeleteRequest extends jspb.Message { 
    getSurveyId(): number;
    setSurveyId(value: number): SurveyDeleteRequest;

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
        surveyId: number,
    }
}

export class SurveyDeleteResponse extends jspb.Message { 

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
    }
}
