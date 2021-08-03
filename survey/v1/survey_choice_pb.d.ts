// package: survey.v1
// file: survey/v1/survey_choice.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class SurveyChoice extends jspb.Message { 
    getId(): number;
    setId(value: number): SurveyChoice;

    getSurveyQuestionId(): number;
    setSurveyQuestionId(value: number): SurveyChoice;

    getChoice(): string;
    setChoice(value: string): SurveyChoice;

    getOrders(): number;
    setOrders(value: number): SurveyChoice;

    getScore(): number;
    setScore(value: number): SurveyChoice;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SurveyChoice.AsObject;
    static toObject(includeInstance: boolean, msg: SurveyChoice): SurveyChoice.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SurveyChoice, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SurveyChoice;
    static deserializeBinaryFromReader(message: SurveyChoice, reader: jspb.BinaryReader): SurveyChoice;
}

export namespace SurveyChoice {
    export type AsObject = {
        id: number,
        surveyQuestionId: number,
        choice: string,
        orders: number,
        score: number,
    }
}

export class SurveyChoiceCreateUpdate extends jspb.Message { 
    getSurveyQuestionId(): number;
    setSurveyQuestionId(value: number): SurveyChoiceCreateUpdate;

    getChoice(): string;
    setChoice(value: string): SurveyChoiceCreateUpdate;

    getOrders(): number;
    setOrders(value: number): SurveyChoiceCreateUpdate;

    getScore(): number;
    setScore(value: number): SurveyChoiceCreateUpdate;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SurveyChoiceCreateUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: SurveyChoiceCreateUpdate): SurveyChoiceCreateUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SurveyChoiceCreateUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SurveyChoiceCreateUpdate;
    static deserializeBinaryFromReader(message: SurveyChoiceCreateUpdate, reader: jspb.BinaryReader): SurveyChoiceCreateUpdate;
}

export namespace SurveyChoiceCreateUpdate {
    export type AsObject = {
        surveyQuestionId: number,
        choice: string,
        orders: number,
        score: number,
    }
}

export class SurveyChoiceOption extends jspb.Message { 
    getIsRandom(): boolean;
    setIsRandom(value: boolean): SurveyChoiceOption;

    getMode(): SurveyChoiceOptionMode;
    setMode(value: SurveyChoiceOptionMode): SurveyChoiceOption;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SurveyChoiceOption.AsObject;
    static toObject(includeInstance: boolean, msg: SurveyChoiceOption): SurveyChoiceOption.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SurveyChoiceOption, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SurveyChoiceOption;
    static deserializeBinaryFromReader(message: SurveyChoiceOption, reader: jspb.BinaryReader): SurveyChoiceOption;
}

export namespace SurveyChoiceOption {
    export type AsObject = {
        isRandom: boolean,
        mode: SurveyChoiceOptionMode,
    }
}

export class ChoiceGetAllRequest extends jspb.Message { 
    getQuestionId(): number;
    setQuestionId(value: number): ChoiceGetAllRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChoiceGetAllRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ChoiceGetAllRequest): ChoiceGetAllRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChoiceGetAllRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChoiceGetAllRequest;
    static deserializeBinaryFromReader(message: ChoiceGetAllRequest, reader: jspb.BinaryReader): ChoiceGetAllRequest;
}

export namespace ChoiceGetAllRequest {
    export type AsObject = {
        questionId: number,
    }
}

export class ChoiceGetAllResponse extends jspb.Message { 
    clearChoicesList(): void;
    getChoicesList(): Array<SurveyChoice>;
    setChoicesList(value: Array<SurveyChoice>): ChoiceGetAllResponse;
    addChoices(value?: SurveyChoice, index?: number): SurveyChoice;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChoiceGetAllResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ChoiceGetAllResponse): ChoiceGetAllResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChoiceGetAllResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChoiceGetAllResponse;
    static deserializeBinaryFromReader(message: ChoiceGetAllResponse, reader: jspb.BinaryReader): ChoiceGetAllResponse;
}

export namespace ChoiceGetAllResponse {
    export type AsObject = {
        choicesList: Array<SurveyChoice.AsObject>,
    }
}

export class ChoiceCreateRequest extends jspb.Message { 

    hasChoice(): boolean;
    clearChoice(): void;
    getChoice(): SurveyChoiceCreateUpdate | undefined;
    setChoice(value?: SurveyChoiceCreateUpdate): ChoiceCreateRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChoiceCreateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ChoiceCreateRequest): ChoiceCreateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChoiceCreateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChoiceCreateRequest;
    static deserializeBinaryFromReader(message: ChoiceCreateRequest, reader: jspb.BinaryReader): ChoiceCreateRequest;
}

export namespace ChoiceCreateRequest {
    export type AsObject = {
        choice?: SurveyChoiceCreateUpdate.AsObject,
    }
}

export class ChoiceCreateResponse extends jspb.Message { 

    hasChoice(): boolean;
    clearChoice(): void;
    getChoice(): SurveyChoice | undefined;
    setChoice(value?: SurveyChoice): ChoiceCreateResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChoiceCreateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ChoiceCreateResponse): ChoiceCreateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChoiceCreateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChoiceCreateResponse;
    static deserializeBinaryFromReader(message: ChoiceCreateResponse, reader: jspb.BinaryReader): ChoiceCreateResponse;
}

export namespace ChoiceCreateResponse {
    export type AsObject = {
        choice?: SurveyChoice.AsObject,
    }
}

export class ChoiceUpdateRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): ChoiceUpdateRequest;


    hasChoice(): boolean;
    clearChoice(): void;
    getChoice(): SurveyChoiceCreateUpdate | undefined;
    setChoice(value?: SurveyChoiceCreateUpdate): ChoiceUpdateRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChoiceUpdateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ChoiceUpdateRequest): ChoiceUpdateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChoiceUpdateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChoiceUpdateRequest;
    static deserializeBinaryFromReader(message: ChoiceUpdateRequest, reader: jspb.BinaryReader): ChoiceUpdateRequest;
}

export namespace ChoiceUpdateRequest {
    export type AsObject = {
        id: number,
        choice?: SurveyChoiceCreateUpdate.AsObject,
    }
}

export class ChoiceUpdateResponse extends jspb.Message { 

    hasChoice(): boolean;
    clearChoice(): void;
    getChoice(): SurveyChoice | undefined;
    setChoice(value?: SurveyChoice): ChoiceUpdateResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChoiceUpdateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ChoiceUpdateResponse): ChoiceUpdateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChoiceUpdateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChoiceUpdateResponse;
    static deserializeBinaryFromReader(message: ChoiceUpdateResponse, reader: jspb.BinaryReader): ChoiceUpdateResponse;
}

export namespace ChoiceUpdateResponse {
    export type AsObject = {
        choice?: SurveyChoice.AsObject,
    }
}

export class ChoiceDeleteRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): ChoiceDeleteRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChoiceDeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ChoiceDeleteRequest): ChoiceDeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChoiceDeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChoiceDeleteRequest;
    static deserializeBinaryFromReader(message: ChoiceDeleteRequest, reader: jspb.BinaryReader): ChoiceDeleteRequest;
}

export namespace ChoiceDeleteRequest {
    export type AsObject = {
        id: number,
    }
}

export class ChoiceDeleteResponse extends jspb.Message { 

    hasChoice(): boolean;
    clearChoice(): void;
    getChoice(): SurveyChoice | undefined;
    setChoice(value?: SurveyChoice): ChoiceDeleteResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChoiceDeleteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ChoiceDeleteResponse): ChoiceDeleteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChoiceDeleteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChoiceDeleteResponse;
    static deserializeBinaryFromReader(message: ChoiceDeleteResponse, reader: jspb.BinaryReader): ChoiceDeleteResponse;
}

export namespace ChoiceDeleteResponse {
    export type AsObject = {
        choice?: SurveyChoice.AsObject,
    }
}

export enum SurveyChoiceOptionMode {
    CHOICE_MODE_FILL_UNSPECIFIED = 0,
    CHOICE_MODE_RADIO = 1,
    CHOICE_MODE_CHECKBOX = 2,
}
