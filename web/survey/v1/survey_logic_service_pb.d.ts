// package: web.survey.v1
// file: web/survey/v1/survey_logic_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as web_survey_v1_types_pb from "../../../web/survey/v1/types_pb";

export class LogicPageSourceGetListRequest extends jspb.Message { 
    getPageId(): number;
    setPageId(value: number): LogicPageSourceGetListRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogicPageSourceGetListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LogicPageSourceGetListRequest): LogicPageSourceGetListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogicPageSourceGetListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogicPageSourceGetListRequest;
    static deserializeBinaryFromReader(message: LogicPageSourceGetListRequest, reader: jspb.BinaryReader): LogicPageSourceGetListRequest;
}

export namespace LogicPageSourceGetListRequest {
    export type AsObject = {
        pageId: number,
    }
}

export class LogicPageSourceGetListResponse extends jspb.Message { 
    clearLogicPageSourcesList(): void;
    getLogicPageSourcesList(): Array<web_survey_v1_types_pb.SurveyLogicPageSource>;
    setLogicPageSourcesList(value: Array<web_survey_v1_types_pb.SurveyLogicPageSource>): LogicPageSourceGetListResponse;
    addLogicPageSources(value?: web_survey_v1_types_pb.SurveyLogicPageSource, index?: number): web_survey_v1_types_pb.SurveyLogicPageSource;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogicPageSourceGetListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LogicPageSourceGetListResponse): LogicPageSourceGetListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogicPageSourceGetListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogicPageSourceGetListResponse;
    static deserializeBinaryFromReader(message: LogicPageSourceGetListResponse, reader: jspb.BinaryReader): LogicPageSourceGetListResponse;
}

export namespace LogicPageSourceGetListResponse {
    export type AsObject = {
        logicPageSourcesList: Array<web_survey_v1_types_pb.SurveyLogicPageSource.AsObject>,
    }
}

export class LogicPageSourceCreateRequest extends jspb.Message { 
    getPageId(): number;
    setPageId(value: number): LogicPageSourceCreateRequest;
    getComparison(): web_survey_v1_types_pb.SurveyLogicPageSourceComparisonType;
    setComparison(value: web_survey_v1_types_pb.SurveyLogicPageSourceComparisonType): LogicPageSourceCreateRequest;
    getValue(): string;
    setValue(value: string): LogicPageSourceCreateRequest;
    getFromQuestionId(): number;
    setFromQuestionId(value: number): LogicPageSourceCreateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogicPageSourceCreateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LogicPageSourceCreateRequest): LogicPageSourceCreateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogicPageSourceCreateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogicPageSourceCreateRequest;
    static deserializeBinaryFromReader(message: LogicPageSourceCreateRequest, reader: jspb.BinaryReader): LogicPageSourceCreateRequest;
}

export namespace LogicPageSourceCreateRequest {
    export type AsObject = {
        pageId: number,
        comparison: web_survey_v1_types_pb.SurveyLogicPageSourceComparisonType,
        value: string,
        fromQuestionId: number,
    }
}

export class LogicPageSourceCreateResponse extends jspb.Message { 

    hasLogicPageSource(): boolean;
    clearLogicPageSource(): void;
    getLogicPageSource(): web_survey_v1_types_pb.SurveyLogicPageSource | undefined;
    setLogicPageSource(value?: web_survey_v1_types_pb.SurveyLogicPageSource): LogicPageSourceCreateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogicPageSourceCreateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LogicPageSourceCreateResponse): LogicPageSourceCreateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogicPageSourceCreateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogicPageSourceCreateResponse;
    static deserializeBinaryFromReader(message: LogicPageSourceCreateResponse, reader: jspb.BinaryReader): LogicPageSourceCreateResponse;
}

export namespace LogicPageSourceCreateResponse {
    export type AsObject = {
        logicPageSource?: web_survey_v1_types_pb.SurveyLogicPageSource.AsObject,
    }
}

export class LogicPageSourceUpdateRequest extends jspb.Message { 
    getLogicPageSourceId(): number;
    setLogicPageSourceId(value: number): LogicPageSourceUpdateRequest;
    getComparison(): web_survey_v1_types_pb.SurveyLogicPageSourceComparisonType;
    setComparison(value: web_survey_v1_types_pb.SurveyLogicPageSourceComparisonType): LogicPageSourceUpdateRequest;
    getValue(): string;
    setValue(value: string): LogicPageSourceUpdateRequest;
    getFromQuestionId(): number;
    setFromQuestionId(value: number): LogicPageSourceUpdateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogicPageSourceUpdateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LogicPageSourceUpdateRequest): LogicPageSourceUpdateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogicPageSourceUpdateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogicPageSourceUpdateRequest;
    static deserializeBinaryFromReader(message: LogicPageSourceUpdateRequest, reader: jspb.BinaryReader): LogicPageSourceUpdateRequest;
}

export namespace LogicPageSourceUpdateRequest {
    export type AsObject = {
        logicPageSourceId: number,
        comparison: web_survey_v1_types_pb.SurveyLogicPageSourceComparisonType,
        value: string,
        fromQuestionId: number,
    }
}

export class LogicPageSourceUpdateResponse extends jspb.Message { 

    hasLogicPageSource(): boolean;
    clearLogicPageSource(): void;
    getLogicPageSource(): web_survey_v1_types_pb.SurveyLogicPageSource | undefined;
    setLogicPageSource(value?: web_survey_v1_types_pb.SurveyLogicPageSource): LogicPageSourceUpdateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogicPageSourceUpdateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LogicPageSourceUpdateResponse): LogicPageSourceUpdateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogicPageSourceUpdateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogicPageSourceUpdateResponse;
    static deserializeBinaryFromReader(message: LogicPageSourceUpdateResponse, reader: jspb.BinaryReader): LogicPageSourceUpdateResponse;
}

export namespace LogicPageSourceUpdateResponse {
    export type AsObject = {
        logicPageSource?: web_survey_v1_types_pb.SurveyLogicPageSource.AsObject,
    }
}

export class LogicPageSourceDeleteRequest extends jspb.Message { 
    getLogicPageSourceId(): number;
    setLogicPageSourceId(value: number): LogicPageSourceDeleteRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogicPageSourceDeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LogicPageSourceDeleteRequest): LogicPageSourceDeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogicPageSourceDeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogicPageSourceDeleteRequest;
    static deserializeBinaryFromReader(message: LogicPageSourceDeleteRequest, reader: jspb.BinaryReader): LogicPageSourceDeleteRequest;
}

export namespace LogicPageSourceDeleteRequest {
    export type AsObject = {
        logicPageSourceId: number,
    }
}

export class LogicPageSourceDeleteResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogicPageSourceDeleteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LogicPageSourceDeleteResponse): LogicPageSourceDeleteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogicPageSourceDeleteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogicPageSourceDeleteResponse;
    static deserializeBinaryFromReader(message: LogicPageSourceDeleteResponse, reader: jspb.BinaryReader): LogicPageSourceDeleteResponse;
}

export namespace LogicPageSourceDeleteResponse {
    export type AsObject = {
    }
}

export class LogicPageGateGetListRequest extends jspb.Message { 
    getPageId(): number;
    setPageId(value: number): LogicPageGateGetListRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogicPageGateGetListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LogicPageGateGetListRequest): LogicPageGateGetListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogicPageGateGetListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogicPageGateGetListRequest;
    static deserializeBinaryFromReader(message: LogicPageGateGetListRequest, reader: jspb.BinaryReader): LogicPageGateGetListRequest;
}

export namespace LogicPageGateGetListRequest {
    export type AsObject = {
        pageId: number,
    }
}

export class LogicPageGateGetListResponse extends jspb.Message { 
    clearLogicPageGatesList(): void;
    getLogicPageGatesList(): Array<web_survey_v1_types_pb.SurveyLogicPageGate>;
    setLogicPageGatesList(value: Array<web_survey_v1_types_pb.SurveyLogicPageGate>): LogicPageGateGetListResponse;
    addLogicPageGates(value?: web_survey_v1_types_pb.SurveyLogicPageGate, index?: number): web_survey_v1_types_pb.SurveyLogicPageGate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogicPageGateGetListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LogicPageGateGetListResponse): LogicPageGateGetListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogicPageGateGetListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogicPageGateGetListResponse;
    static deserializeBinaryFromReader(message: LogicPageGateGetListResponse, reader: jspb.BinaryReader): LogicPageGateGetListResponse;
}

export namespace LogicPageGateGetListResponse {
    export type AsObject = {
        logicPageGatesList: Array<web_survey_v1_types_pb.SurveyLogicPageGate.AsObject>,
    }
}

export class LogicPageGateCreateRequest extends jspb.Message { 
    getPageId(): number;
    setPageId(value: number): LogicPageGateCreateRequest;
    getComparison(): web_survey_v1_types_pb.SurveyLogicPageGateComparisonType;
    setComparison(value: web_survey_v1_types_pb.SurveyLogicPageGateComparisonType): LogicPageGateCreateRequest;
    getFrom1Selector(): web_survey_v1_types_pb.SurveyLogicPageGateFromType;
    setFrom1Selector(value: web_survey_v1_types_pb.SurveyLogicPageGateFromType): LogicPageGateCreateRequest;
    getFrom1LogicPageSourceId(): number;
    setFrom1LogicPageSourceId(value: number): LogicPageGateCreateRequest;
    getFrom1LogicPageGateId(): number;
    setFrom1LogicPageGateId(value: number): LogicPageGateCreateRequest;
    getFrom2Selector(): web_survey_v1_types_pb.SurveyLogicPageGateFromType;
    setFrom2Selector(value: web_survey_v1_types_pb.SurveyLogicPageGateFromType): LogicPageGateCreateRequest;
    getFrom2LogicPageSourceId(): number;
    setFrom2LogicPageSourceId(value: number): LogicPageGateCreateRequest;
    getFrom2LogicPageGateId(): number;
    setFrom2LogicPageGateId(value: number): LogicPageGateCreateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogicPageGateCreateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LogicPageGateCreateRequest): LogicPageGateCreateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogicPageGateCreateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogicPageGateCreateRequest;
    static deserializeBinaryFromReader(message: LogicPageGateCreateRequest, reader: jspb.BinaryReader): LogicPageGateCreateRequest;
}

export namespace LogicPageGateCreateRequest {
    export type AsObject = {
        pageId: number,
        comparison: web_survey_v1_types_pb.SurveyLogicPageGateComparisonType,
        from1Selector: web_survey_v1_types_pb.SurveyLogicPageGateFromType,
        from1LogicPageSourceId: number,
        from1LogicPageGateId: number,
        from2Selector: web_survey_v1_types_pb.SurveyLogicPageGateFromType,
        from2LogicPageSourceId: number,
        from2LogicPageGateId: number,
    }
}

export class LogicPageGateCreateResponse extends jspb.Message { 

    hasLogicPageGate(): boolean;
    clearLogicPageGate(): void;
    getLogicPageGate(): web_survey_v1_types_pb.SurveyLogicPageGate | undefined;
    setLogicPageGate(value?: web_survey_v1_types_pb.SurveyLogicPageGate): LogicPageGateCreateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogicPageGateCreateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LogicPageGateCreateResponse): LogicPageGateCreateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogicPageGateCreateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogicPageGateCreateResponse;
    static deserializeBinaryFromReader(message: LogicPageGateCreateResponse, reader: jspb.BinaryReader): LogicPageGateCreateResponse;
}

export namespace LogicPageGateCreateResponse {
    export type AsObject = {
        logicPageGate?: web_survey_v1_types_pb.SurveyLogicPageGate.AsObject,
    }
}

export class LogicPageGateUpdateRequest extends jspb.Message { 
    getLogicPageGateId(): number;
    setLogicPageGateId(value: number): LogicPageGateUpdateRequest;
    getComparison(): web_survey_v1_types_pb.SurveyLogicPageGateComparisonType;
    setComparison(value: web_survey_v1_types_pb.SurveyLogicPageGateComparisonType): LogicPageGateUpdateRequest;
    getFrom1Selector(): web_survey_v1_types_pb.SurveyLogicPageGateFromType;
    setFrom1Selector(value: web_survey_v1_types_pb.SurveyLogicPageGateFromType): LogicPageGateUpdateRequest;
    getFrom1LogicPageSourceId(): number;
    setFrom1LogicPageSourceId(value: number): LogicPageGateUpdateRequest;
    getFrom1LogicPageGateId(): number;
    setFrom1LogicPageGateId(value: number): LogicPageGateUpdateRequest;
    getFrom2Selector(): web_survey_v1_types_pb.SurveyLogicPageGateFromType;
    setFrom2Selector(value: web_survey_v1_types_pb.SurveyLogicPageGateFromType): LogicPageGateUpdateRequest;
    getFrom2LogicPageSourceId(): number;
    setFrom2LogicPageSourceId(value: number): LogicPageGateUpdateRequest;
    getFrom2LogicPageGateId(): number;
    setFrom2LogicPageGateId(value: number): LogicPageGateUpdateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogicPageGateUpdateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LogicPageGateUpdateRequest): LogicPageGateUpdateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogicPageGateUpdateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogicPageGateUpdateRequest;
    static deserializeBinaryFromReader(message: LogicPageGateUpdateRequest, reader: jspb.BinaryReader): LogicPageGateUpdateRequest;
}

export namespace LogicPageGateUpdateRequest {
    export type AsObject = {
        logicPageGateId: number,
        comparison: web_survey_v1_types_pb.SurveyLogicPageGateComparisonType,
        from1Selector: web_survey_v1_types_pb.SurveyLogicPageGateFromType,
        from1LogicPageSourceId: number,
        from1LogicPageGateId: number,
        from2Selector: web_survey_v1_types_pb.SurveyLogicPageGateFromType,
        from2LogicPageSourceId: number,
        from2LogicPageGateId: number,
    }
}

export class LogicPageGateUpdateResponse extends jspb.Message { 

    hasLogicPageGate(): boolean;
    clearLogicPageGate(): void;
    getLogicPageGate(): web_survey_v1_types_pb.SurveyLogicPageGate | undefined;
    setLogicPageGate(value?: web_survey_v1_types_pb.SurveyLogicPageGate): LogicPageGateUpdateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogicPageGateUpdateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LogicPageGateUpdateResponse): LogicPageGateUpdateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogicPageGateUpdateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogicPageGateUpdateResponse;
    static deserializeBinaryFromReader(message: LogicPageGateUpdateResponse, reader: jspb.BinaryReader): LogicPageGateUpdateResponse;
}

export namespace LogicPageGateUpdateResponse {
    export type AsObject = {
        logicPageGate?: web_survey_v1_types_pb.SurveyLogicPageGate.AsObject,
    }
}

export class LogicPageGateDeleteRequest extends jspb.Message { 
    getLogicPageGateId(): number;
    setLogicPageGateId(value: number): LogicPageGateDeleteRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogicPageGateDeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LogicPageGateDeleteRequest): LogicPageGateDeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogicPageGateDeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogicPageGateDeleteRequest;
    static deserializeBinaryFromReader(message: LogicPageGateDeleteRequest, reader: jspb.BinaryReader): LogicPageGateDeleteRequest;
}

export namespace LogicPageGateDeleteRequest {
    export type AsObject = {
        logicPageGateId: number,
    }
}

export class LogicPageGateDeleteResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogicPageGateDeleteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LogicPageGateDeleteResponse): LogicPageGateDeleteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogicPageGateDeleteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogicPageGateDeleteResponse;
    static deserializeBinaryFromReader(message: LogicPageGateDeleteResponse, reader: jspb.BinaryReader): LogicPageGateDeleteResponse;
}

export namespace LogicPageGateDeleteResponse {
    export type AsObject = {
    }
}

export class LogicPageActionGetListRequest extends jspb.Message { 
    getPageId(): number;
    setPageId(value: number): LogicPageActionGetListRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogicPageActionGetListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LogicPageActionGetListRequest): LogicPageActionGetListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogicPageActionGetListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogicPageActionGetListRequest;
    static deserializeBinaryFromReader(message: LogicPageActionGetListRequest, reader: jspb.BinaryReader): LogicPageActionGetListRequest;
}

export namespace LogicPageActionGetListRequest {
    export type AsObject = {
        pageId: number,
    }
}

export class LogicPageActionGetListResponse extends jspb.Message { 
    clearLogicPageActionsList(): void;
    getLogicPageActionsList(): Array<web_survey_v1_types_pb.SurveyLogicPageAction>;
    setLogicPageActionsList(value: Array<web_survey_v1_types_pb.SurveyLogicPageAction>): LogicPageActionGetListResponse;
    addLogicPageActions(value?: web_survey_v1_types_pb.SurveyLogicPageAction, index?: number): web_survey_v1_types_pb.SurveyLogicPageAction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogicPageActionGetListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LogicPageActionGetListResponse): LogicPageActionGetListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogicPageActionGetListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogicPageActionGetListResponse;
    static deserializeBinaryFromReader(message: LogicPageActionGetListResponse, reader: jspb.BinaryReader): LogicPageActionGetListResponse;
}

export namespace LogicPageActionGetListResponse {
    export type AsObject = {
        logicPageActionsList: Array<web_survey_v1_types_pb.SurveyLogicPageAction.AsObject>,
    }
}

export class LogicPageActionCreateRequest extends jspb.Message { 
    getPageId(): number;
    setPageId(value: number): LogicPageActionCreateRequest;
    getPriority(): number;
    setPriority(value: number): LogicPageActionCreateRequest;
    getFromSelector(): web_survey_v1_types_pb.SurveyLogicPageActionFromType;
    setFromSelector(value: web_survey_v1_types_pb.SurveyLogicPageActionFromType): LogicPageActionCreateRequest;
    getFromLogicPageSourceId(): number;
    setFromLogicPageSourceId(value: number): LogicPageActionCreateRequest;
    getFromLogicPageGateId(): number;
    setFromLogicPageGateId(value: number): LogicPageActionCreateRequest;
    getToSelector(): web_survey_v1_types_pb.SurveyLogicPageActionToType;
    setToSelector(value: web_survey_v1_types_pb.SurveyLogicPageActionToType): LogicPageActionCreateRequest;
    getToDisqualified(): boolean;
    setToDisqualified(value: boolean): LogicPageActionCreateRequest;
    getToSurveyPageId(): number;
    setToSurveyPageId(value: number): LogicPageActionCreateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogicPageActionCreateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LogicPageActionCreateRequest): LogicPageActionCreateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogicPageActionCreateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogicPageActionCreateRequest;
    static deserializeBinaryFromReader(message: LogicPageActionCreateRequest, reader: jspb.BinaryReader): LogicPageActionCreateRequest;
}

export namespace LogicPageActionCreateRequest {
    export type AsObject = {
        pageId: number,
        priority: number,
        fromSelector: web_survey_v1_types_pb.SurveyLogicPageActionFromType,
        fromLogicPageSourceId: number,
        fromLogicPageGateId: number,
        toSelector: web_survey_v1_types_pb.SurveyLogicPageActionToType,
        toDisqualified: boolean,
        toSurveyPageId: number,
    }
}

export class LogicPageActionCreateResponse extends jspb.Message { 

    hasLogicPageAction(): boolean;
    clearLogicPageAction(): void;
    getLogicPageAction(): web_survey_v1_types_pb.SurveyLogicPageAction | undefined;
    setLogicPageAction(value?: web_survey_v1_types_pb.SurveyLogicPageAction): LogicPageActionCreateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogicPageActionCreateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LogicPageActionCreateResponse): LogicPageActionCreateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogicPageActionCreateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogicPageActionCreateResponse;
    static deserializeBinaryFromReader(message: LogicPageActionCreateResponse, reader: jspb.BinaryReader): LogicPageActionCreateResponse;
}

export namespace LogicPageActionCreateResponse {
    export type AsObject = {
        logicPageAction?: web_survey_v1_types_pb.SurveyLogicPageAction.AsObject,
    }
}

export class LogicPageActionUpdateRequest extends jspb.Message { 
    getLogicPageActionId(): number;
    setLogicPageActionId(value: number): LogicPageActionUpdateRequest;
    getPriority(): number;
    setPriority(value: number): LogicPageActionUpdateRequest;
    getFromSelector(): web_survey_v1_types_pb.SurveyLogicPageActionFromType;
    setFromSelector(value: web_survey_v1_types_pb.SurveyLogicPageActionFromType): LogicPageActionUpdateRequest;
    getFromLogicPageSourceId(): number;
    setFromLogicPageSourceId(value: number): LogicPageActionUpdateRequest;
    getFromLogicPageGateId(): number;
    setFromLogicPageGateId(value: number): LogicPageActionUpdateRequest;
    getToSelector(): web_survey_v1_types_pb.SurveyLogicPageActionToType;
    setToSelector(value: web_survey_v1_types_pb.SurveyLogicPageActionToType): LogicPageActionUpdateRequest;
    getToDisqualified(): boolean;
    setToDisqualified(value: boolean): LogicPageActionUpdateRequest;
    getToSurveyPageId(): number;
    setToSurveyPageId(value: number): LogicPageActionUpdateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogicPageActionUpdateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LogicPageActionUpdateRequest): LogicPageActionUpdateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogicPageActionUpdateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogicPageActionUpdateRequest;
    static deserializeBinaryFromReader(message: LogicPageActionUpdateRequest, reader: jspb.BinaryReader): LogicPageActionUpdateRequest;
}

export namespace LogicPageActionUpdateRequest {
    export type AsObject = {
        logicPageActionId: number,
        priority: number,
        fromSelector: web_survey_v1_types_pb.SurveyLogicPageActionFromType,
        fromLogicPageSourceId: number,
        fromLogicPageGateId: number,
        toSelector: web_survey_v1_types_pb.SurveyLogicPageActionToType,
        toDisqualified: boolean,
        toSurveyPageId: number,
    }
}

export class LogicPageActionUpdateResponse extends jspb.Message { 

    hasLogicPageAction(): boolean;
    clearLogicPageAction(): void;
    getLogicPageAction(): web_survey_v1_types_pb.SurveyLogicPageAction | undefined;
    setLogicPageAction(value?: web_survey_v1_types_pb.SurveyLogicPageAction): LogicPageActionUpdateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogicPageActionUpdateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LogicPageActionUpdateResponse): LogicPageActionUpdateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogicPageActionUpdateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogicPageActionUpdateResponse;
    static deserializeBinaryFromReader(message: LogicPageActionUpdateResponse, reader: jspb.BinaryReader): LogicPageActionUpdateResponse;
}

export namespace LogicPageActionUpdateResponse {
    export type AsObject = {
        logicPageAction?: web_survey_v1_types_pb.SurveyLogicPageAction.AsObject,
    }
}

export class LogicPageActionDeleteRequest extends jspb.Message { 
    getLogicPageActionId(): number;
    setLogicPageActionId(value: number): LogicPageActionDeleteRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogicPageActionDeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LogicPageActionDeleteRequest): LogicPageActionDeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogicPageActionDeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogicPageActionDeleteRequest;
    static deserializeBinaryFromReader(message: LogicPageActionDeleteRequest, reader: jspb.BinaryReader): LogicPageActionDeleteRequest;
}

export namespace LogicPageActionDeleteRequest {
    export type AsObject = {
        logicPageActionId: number,
    }
}

export class LogicPageActionDeleteResponse extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LogicPageActionDeleteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LogicPageActionDeleteResponse): LogicPageActionDeleteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LogicPageActionDeleteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LogicPageActionDeleteResponse;
    static deserializeBinaryFromReader(message: LogicPageActionDeleteResponse, reader: jspb.BinaryReader): LogicPageActionDeleteResponse;
}

export namespace LogicPageActionDeleteResponse {
    export type AsObject = {
    }
}
