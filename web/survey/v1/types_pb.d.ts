// package: web.survey.v1
// file: web/survey/v1/types.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

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
    }
}

export class SurveyPage extends jspb.Message { 
    getId(): number;
    setId(value: number): SurveyPage;
    getSurveyId(): number;
    setSurveyId(value: number): SurveyPage;
    getOrders(): number;
    setOrders(value: number): SurveyPage;
    clearQuestionsList(): void;
    getQuestionsList(): Array<SurveyQuestion>;
    setQuestionsList(value: Array<SurveyQuestion>): SurveyPage;
    addQuestions(value?: SurveyQuestion, index?: number): SurveyQuestion;

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
        questionsList: Array<SurveyQuestion.AsObject>,
    }
}

export class SurveyQuestion extends jspb.Message { 
    getId(): number;
    setId(value: number): SurveyQuestion;
    getSurveyPageId(): number;
    setSurveyPageId(value: number): SurveyQuestion;
    getQuestion(): string;
    setQuestion(value: string): SurveyQuestion;
    getOrders(): number;
    setOrders(value: number): SurveyQuestion;
    getType(): SurveyQuestionType;
    setType(value: SurveyQuestionType): SurveyQuestion;

    hasOption(): boolean;
    clearOption(): void;
    getOption(): SurveyQuestionOption | undefined;
    setOption(value?: SurveyQuestionOption): SurveyQuestion;
    clearChoicesList(): void;
    getChoicesList(): Array<SurveyChoice>;
    setChoicesList(value: Array<SurveyChoice>): SurveyQuestion;
    addChoices(value?: SurveyChoice, index?: number): SurveyChoice;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SurveyQuestion.AsObject;
    static toObject(includeInstance: boolean, msg: SurveyQuestion): SurveyQuestion.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SurveyQuestion, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SurveyQuestion;
    static deserializeBinaryFromReader(message: SurveyQuestion, reader: jspb.BinaryReader): SurveyQuestion;
}

export namespace SurveyQuestion {
    export type AsObject = {
        id: number,
        surveyPageId: number,
        question: string,
        orders: number,
        type: SurveyQuestionType,
        option?: SurveyQuestionOption.AsObject,
        choicesList: Array<SurveyChoice.AsObject>,
    }
}

export class SurveyQuestionOption extends jspb.Message { 
    getIsRequired(): boolean;
    setIsRequired(value: boolean): SurveyQuestionOption;
    getIsRandomChoice(): boolean;
    setIsRandomChoice(value: boolean): SurveyQuestionOption;
    getIsTextfieldOnlyNumber(): boolean;
    setIsTextfieldOnlyNumber(value: boolean): SurveyQuestionOption;
    getIsTextfieldMultiline(): boolean;
    setIsTextfieldMultiline(value: boolean): SurveyQuestionOption;
    getRedirectUrl(): string;
    setRedirectUrl(value: string): SurveyQuestionOption;
    getRedirectTimeOffset(): number;
    setRedirectTimeOffset(value: number): SurveyQuestionOption;
    getWebhookUrl(): string;
    setWebhookUrl(value: string): SurveyQuestionOption;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SurveyQuestionOption.AsObject;
    static toObject(includeInstance: boolean, msg: SurveyQuestionOption): SurveyQuestionOption.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SurveyQuestionOption, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SurveyQuestionOption;
    static deserializeBinaryFromReader(message: SurveyQuestionOption, reader: jspb.BinaryReader): SurveyQuestionOption;
}

export namespace SurveyQuestionOption {
    export type AsObject = {
        isRequired: boolean,
        isRandomChoice: boolean,
        isTextfieldOnlyNumber: boolean,
        isTextfieldMultiline: boolean,
        redirectUrl: string,
        redirectTimeOffset: number,
        webhookUrl: string,
    }
}

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

export enum SurveyType {
    SURVEY_TYPE_ALL_UNSPECIFIED = 0,
    SURVEY_TYPE_FORM = 1,
    SURVEY_TYPE_QUIZ = 2,
}

export enum SurveyQuestionType {
    QUESTION_MODE_TEXT_UNSPECIFIED = 0,
    QUESTION_MODE_TEXTFIELD = 1,
    QUESTION_MODE_RADIO = 2,
    QUESTION_MODE_CHECKBOX = 3,
    QUESTION_MODE_DATE = 4,
    QUESTION_MODE_WEBHOOK = 5,
    QUESTION_MODE_RATING = 6,
    QUESTION_MODE_TIME = 7,
    QUESTION_MODE_DATETIME = 8,
    QUESTION_MODE_UPLOAD = 9,
    QUESTION_MODE_PARAGRAPH = 10,
    QUESTION_MODE_REDIRECT = 11,
}
