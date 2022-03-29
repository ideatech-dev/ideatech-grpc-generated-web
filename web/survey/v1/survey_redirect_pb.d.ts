// package: web.survey.v1
// file: web/survey/v1/survey_redirect.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as web_survey_v1_types_pb from "../../../web/survey/v1/types_pb";

export class SurveyRedirectGetOneRequest extends jspb.Message { 
    getSurveyPageRedirectId(): number;
    setSurveyPageRedirectId(value: number): SurveyRedirectGetOneRequest;
    getSurveyPageId(): number;
    setSurveyPageId(value: number): SurveyRedirectGetOneRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SurveyRedirectGetOneRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SurveyRedirectGetOneRequest): SurveyRedirectGetOneRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SurveyRedirectGetOneRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SurveyRedirectGetOneRequest;
    static deserializeBinaryFromReader(message: SurveyRedirectGetOneRequest, reader: jspb.BinaryReader): SurveyRedirectGetOneRequest;
}

export namespace SurveyRedirectGetOneRequest {
    export type AsObject = {
        surveyPageRedirectId: number,
        surveyPageId: number,
    }
}

export class SurveyRedirectGetOneResponse extends jspb.Message { 

    hasSurveyRedirect(): boolean;
    clearSurveyRedirect(): void;
    getSurveyRedirect(): web_survey_v1_types_pb.SurveyPageRedirect | undefined;
    setSurveyRedirect(value?: web_survey_v1_types_pb.SurveyPageRedirect): SurveyRedirectGetOneResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SurveyRedirectGetOneResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SurveyRedirectGetOneResponse): SurveyRedirectGetOneResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SurveyRedirectGetOneResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SurveyRedirectGetOneResponse;
    static deserializeBinaryFromReader(message: SurveyRedirectGetOneResponse, reader: jspb.BinaryReader): SurveyRedirectGetOneResponse;
}

export namespace SurveyRedirectGetOneResponse {
    export type AsObject = {
        surveyRedirect?: web_survey_v1_types_pb.SurveyPageRedirect.AsObject,
    }
}

export class SurveyRedirectCreateRequest extends jspb.Message { 
    getSurveyPageId(): number;
    setSurveyPageId(value: number): SurveyRedirectCreateRequest;
    getLink(): string;
    setLink(value: string): SurveyRedirectCreateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SurveyRedirectCreateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SurveyRedirectCreateRequest): SurveyRedirectCreateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SurveyRedirectCreateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SurveyRedirectCreateRequest;
    static deserializeBinaryFromReader(message: SurveyRedirectCreateRequest, reader: jspb.BinaryReader): SurveyRedirectCreateRequest;
}

export namespace SurveyRedirectCreateRequest {
    export type AsObject = {
        surveyPageId: number,
        link: string,
    }
}

export class SurveyRedirectCreateResponse extends jspb.Message { 

    hasSurveyRedirect(): boolean;
    clearSurveyRedirect(): void;
    getSurveyRedirect(): web_survey_v1_types_pb.SurveyPageRedirect | undefined;
    setSurveyRedirect(value?: web_survey_v1_types_pb.SurveyPageRedirect): SurveyRedirectCreateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SurveyRedirectCreateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SurveyRedirectCreateResponse): SurveyRedirectCreateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SurveyRedirectCreateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SurveyRedirectCreateResponse;
    static deserializeBinaryFromReader(message: SurveyRedirectCreateResponse, reader: jspb.BinaryReader): SurveyRedirectCreateResponse;
}

export namespace SurveyRedirectCreateResponse {
    export type AsObject = {
        surveyRedirect?: web_survey_v1_types_pb.SurveyPageRedirect.AsObject,
    }
}

export class SurveyRedirectUpdateRequest extends jspb.Message { 
    getSurveyPageRedirectId(): number;
    setSurveyPageRedirectId(value: number): SurveyRedirectUpdateRequest;
    getNewLink(): string;
    setNewLink(value: string): SurveyRedirectUpdateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SurveyRedirectUpdateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SurveyRedirectUpdateRequest): SurveyRedirectUpdateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SurveyRedirectUpdateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SurveyRedirectUpdateRequest;
    static deserializeBinaryFromReader(message: SurveyRedirectUpdateRequest, reader: jspb.BinaryReader): SurveyRedirectUpdateRequest;
}

export namespace SurveyRedirectUpdateRequest {
    export type AsObject = {
        surveyPageRedirectId: number,
        newLink: string,
    }
}

export class SurveyRedirectUpdateResponse extends jspb.Message { 

    hasSurveyRedirect(): boolean;
    clearSurveyRedirect(): void;
    getSurveyRedirect(): web_survey_v1_types_pb.SurveyPageRedirect | undefined;
    setSurveyRedirect(value?: web_survey_v1_types_pb.SurveyPageRedirect): SurveyRedirectUpdateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SurveyRedirectUpdateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SurveyRedirectUpdateResponse): SurveyRedirectUpdateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SurveyRedirectUpdateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SurveyRedirectUpdateResponse;
    static deserializeBinaryFromReader(message: SurveyRedirectUpdateResponse, reader: jspb.BinaryReader): SurveyRedirectUpdateResponse;
}

export namespace SurveyRedirectUpdateResponse {
    export type AsObject = {
        surveyRedirect?: web_survey_v1_types_pb.SurveyPageRedirect.AsObject,
    }
}

export class SurveyRedirectDeleteRequest extends jspb.Message { 
    getSurveyPageRedirectId(): number;
    setSurveyPageRedirectId(value: number): SurveyRedirectDeleteRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SurveyRedirectDeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SurveyRedirectDeleteRequest): SurveyRedirectDeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SurveyRedirectDeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SurveyRedirectDeleteRequest;
    static deserializeBinaryFromReader(message: SurveyRedirectDeleteRequest, reader: jspb.BinaryReader): SurveyRedirectDeleteRequest;
}

export namespace SurveyRedirectDeleteRequest {
    export type AsObject = {
        surveyPageRedirectId: number,
    }
}

export class SurveyRedirectDeleteResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SurveyRedirectDeleteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SurveyRedirectDeleteResponse): SurveyRedirectDeleteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SurveyRedirectDeleteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SurveyRedirectDeleteResponse;
    static deserializeBinaryFromReader(message: SurveyRedirectDeleteResponse, reader: jspb.BinaryReader): SurveyRedirectDeleteResponse;
}

export namespace SurveyRedirectDeleteResponse {
    export type AsObject = {
    }
}
