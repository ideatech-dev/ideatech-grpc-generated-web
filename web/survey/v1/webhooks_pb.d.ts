// package: web.survey.v1
// file: web/survey/v1/webhooks.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as web_survey_v1_types_pb from "../../../web/survey/v1/types_pb";

export class WebhookGetOneRequest extends jspb.Message { 
    getWebhookId(): number;
    setWebhookId(value: number): WebhookGetOneRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebhookGetOneRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WebhookGetOneRequest): WebhookGetOneRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebhookGetOneRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebhookGetOneRequest;
    static deserializeBinaryFromReader(message: WebhookGetOneRequest, reader: jspb.BinaryReader): WebhookGetOneRequest;
}

export namespace WebhookGetOneRequest {
    export type AsObject = {
        webhookId: number,
    }
}

export class WebhookGetOneResponse extends jspb.Message { 

    hasWebhook(): boolean;
    clearWebhook(): void;
    getWebhook(): web_survey_v1_types_pb.Webhook | undefined;
    setWebhook(value?: web_survey_v1_types_pb.Webhook): WebhookGetOneResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebhookGetOneResponse.AsObject;
    static toObject(includeInstance: boolean, msg: WebhookGetOneResponse): WebhookGetOneResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebhookGetOneResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebhookGetOneResponse;
    static deserializeBinaryFromReader(message: WebhookGetOneResponse, reader: jspb.BinaryReader): WebhookGetOneResponse;
}

export namespace WebhookGetOneResponse {
    export type AsObject = {
        webhook?: web_survey_v1_types_pb.Webhook.AsObject,
    }
}

export class WebhookCreateRequest extends jspb.Message { 
    getSurveyPageId(): number;
    setSurveyPageId(value: number): WebhookCreateRequest;
    getLink(): string;
    setLink(value: string): WebhookCreateRequest;
    getMethod(): web_survey_v1_types_pb.MethodType;
    setMethod(value: web_survey_v1_types_pb.MethodType): WebhookCreateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebhookCreateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WebhookCreateRequest): WebhookCreateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebhookCreateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebhookCreateRequest;
    static deserializeBinaryFromReader(message: WebhookCreateRequest, reader: jspb.BinaryReader): WebhookCreateRequest;
}

export namespace WebhookCreateRequest {
    export type AsObject = {
        surveyPageId: number,
        link: string,
        method: web_survey_v1_types_pb.MethodType,
    }
}

export class WebhookCreateResponse extends jspb.Message { 

    hasWebhook(): boolean;
    clearWebhook(): void;
    getWebhook(): web_survey_v1_types_pb.Webhook | undefined;
    setWebhook(value?: web_survey_v1_types_pb.Webhook): WebhookCreateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebhookCreateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: WebhookCreateResponse): WebhookCreateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebhookCreateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebhookCreateResponse;
    static deserializeBinaryFromReader(message: WebhookCreateResponse, reader: jspb.BinaryReader): WebhookCreateResponse;
}

export namespace WebhookCreateResponse {
    export type AsObject = {
        webhook?: web_survey_v1_types_pb.Webhook.AsObject,
    }
}

export class WebhookUpdateRequest extends jspb.Message { 
    getWebhookId(): number;
    setWebhookId(value: number): WebhookUpdateRequest;
    getNewLink(): string;
    setNewLink(value: string): WebhookUpdateRequest;
    getNewMethod(): web_survey_v1_types_pb.MethodType;
    setNewMethod(value: web_survey_v1_types_pb.MethodType): WebhookUpdateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebhookUpdateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WebhookUpdateRequest): WebhookUpdateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebhookUpdateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebhookUpdateRequest;
    static deserializeBinaryFromReader(message: WebhookUpdateRequest, reader: jspb.BinaryReader): WebhookUpdateRequest;
}

export namespace WebhookUpdateRequest {
    export type AsObject = {
        webhookId: number,
        newLink: string,
        newMethod: web_survey_v1_types_pb.MethodType,
    }
}

export class WebhookUpdateResponse extends jspb.Message { 

    hasWebhook(): boolean;
    clearWebhook(): void;
    getWebhook(): web_survey_v1_types_pb.Webhook | undefined;
    setWebhook(value?: web_survey_v1_types_pb.Webhook): WebhookUpdateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebhookUpdateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: WebhookUpdateResponse): WebhookUpdateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebhookUpdateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebhookUpdateResponse;
    static deserializeBinaryFromReader(message: WebhookUpdateResponse, reader: jspb.BinaryReader): WebhookUpdateResponse;
}

export namespace WebhookUpdateResponse {
    export type AsObject = {
        webhook?: web_survey_v1_types_pb.Webhook.AsObject,
    }
}

export class WebhookDeleteRequest extends jspb.Message { 
    getWebhookId(): number;
    setWebhookId(value: number): WebhookDeleteRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebhookDeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: WebhookDeleteRequest): WebhookDeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebhookDeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebhookDeleteRequest;
    static deserializeBinaryFromReader(message: WebhookDeleteRequest, reader: jspb.BinaryReader): WebhookDeleteRequest;
}

export namespace WebhookDeleteRequest {
    export type AsObject = {
        webhookId: number,
    }
}

export class WebhookDeleteResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WebhookDeleteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: WebhookDeleteResponse): WebhookDeleteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WebhookDeleteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WebhookDeleteResponse;
    static deserializeBinaryFromReader(message: WebhookDeleteResponse, reader: jspb.BinaryReader): WebhookDeleteResponse;
}

export namespace WebhookDeleteResponse {
    export type AsObject = {
    }
}
