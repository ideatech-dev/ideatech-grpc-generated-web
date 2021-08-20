// package: survey.v1
// file: survey/v1/survey_question.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as survey_v1_survey_choice_pb from "../../survey/v1/survey_choice_pb";

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


    hasOptionChoice(): boolean;
    clearOptionChoice(): void;
    getOptionChoice(): survey_v1_survey_choice_pb.SurveyChoiceOption | undefined;
    setOptionChoice(value?: survey_v1_survey_choice_pb.SurveyChoiceOption): SurveyQuestion;

    clearChoicesList(): void;
    getChoicesList(): Array<survey_v1_survey_choice_pb.SurveyChoice>;
    setChoicesList(value: Array<survey_v1_survey_choice_pb.SurveyChoice>): SurveyQuestion;
    addChoices(value?: survey_v1_survey_choice_pb.SurveyChoice, index?: number): survey_v1_survey_choice_pb.SurveyChoice;


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
        optionChoice?: survey_v1_survey_choice_pb.SurveyChoiceOption.AsObject,
        choicesList: Array<survey_v1_survey_choice_pb.SurveyChoice.AsObject>,
    }
}

export class SurveyQuestionCreateUpdate extends jspb.Message { 
    getQuestion(): string;
    setQuestion(value: string): SurveyQuestionCreateUpdate;

    getOrders(): number;
    setOrders(value: number): SurveyQuestionCreateUpdate;

    getType(): SurveyQuestionType;
    setType(value: SurveyQuestionType): SurveyQuestionCreateUpdate;


    hasOptionChoice(): boolean;
    clearOptionChoice(): void;
    getOptionChoice(): survey_v1_survey_choice_pb.SurveyChoiceOption | undefined;
    setOptionChoice(value?: survey_v1_survey_choice_pb.SurveyChoiceOption): SurveyQuestionCreateUpdate;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SurveyQuestionCreateUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: SurveyQuestionCreateUpdate): SurveyQuestionCreateUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SurveyQuestionCreateUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SurveyQuestionCreateUpdate;
    static deserializeBinaryFromReader(message: SurveyQuestionCreateUpdate, reader: jspb.BinaryReader): SurveyQuestionCreateUpdate;
}

export namespace SurveyQuestionCreateUpdate {
    export type AsObject = {
        question: string,
        orders: number,
        type: SurveyQuestionType,
        optionChoice?: survey_v1_survey_choice_pb.SurveyChoiceOption.AsObject,
    }
}

export class QuestionGetOneRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): QuestionGetOneRequest;

    getWithOption(): boolean;
    setWithOption(value: boolean): QuestionGetOneRequest;

    getWithChoice(): boolean;
    setWithChoice(value: boolean): QuestionGetOneRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuestionGetOneRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QuestionGetOneRequest): QuestionGetOneRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QuestionGetOneRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuestionGetOneRequest;
    static deserializeBinaryFromReader(message: QuestionGetOneRequest, reader: jspb.BinaryReader): QuestionGetOneRequest;
}

export namespace QuestionGetOneRequest {
    export type AsObject = {
        id: number,
        withOption: boolean,
        withChoice: boolean,
    }
}

export class QuestionGetOneResponse extends jspb.Message { 

    hasQuestion(): boolean;
    clearQuestion(): void;
    getQuestion(): SurveyQuestion | undefined;
    setQuestion(value?: SurveyQuestion): QuestionGetOneResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuestionGetOneResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QuestionGetOneResponse): QuestionGetOneResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QuestionGetOneResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuestionGetOneResponse;
    static deserializeBinaryFromReader(message: QuestionGetOneResponse, reader: jspb.BinaryReader): QuestionGetOneResponse;
}

export namespace QuestionGetOneResponse {
    export type AsObject = {
        question?: SurveyQuestion.AsObject,
    }
}

export class QuestionGetAllRequest extends jspb.Message { 
    getPageId(): number;
    setPageId(value: number): QuestionGetAllRequest;

    getWithOption(): boolean;
    setWithOption(value: boolean): QuestionGetAllRequest;

    getWithChoice(): boolean;
    setWithChoice(value: boolean): QuestionGetAllRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuestionGetAllRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QuestionGetAllRequest): QuestionGetAllRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QuestionGetAllRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuestionGetAllRequest;
    static deserializeBinaryFromReader(message: QuestionGetAllRequest, reader: jspb.BinaryReader): QuestionGetAllRequest;
}

export namespace QuestionGetAllRequest {
    export type AsObject = {
        pageId: number,
        withOption: boolean,
        withChoice: boolean,
    }
}

export class QuestionGetAllResponse extends jspb.Message { 
    clearQuestionsList(): void;
    getQuestionsList(): Array<SurveyQuestion>;
    setQuestionsList(value: Array<SurveyQuestion>): QuestionGetAllResponse;
    addQuestions(value?: SurveyQuestion, index?: number): SurveyQuestion;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuestionGetAllResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QuestionGetAllResponse): QuestionGetAllResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QuestionGetAllResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuestionGetAllResponse;
    static deserializeBinaryFromReader(message: QuestionGetAllResponse, reader: jspb.BinaryReader): QuestionGetAllResponse;
}

export namespace QuestionGetAllResponse {
    export type AsObject = {
        questionsList: Array<SurveyQuestion.AsObject>,
    }
}

export class QuestionCreateRequest extends jspb.Message { 
    getSurveyPageId(): number;
    setSurveyPageId(value: number): QuestionCreateRequest;


    hasQuestion(): boolean;
    clearQuestion(): void;
    getQuestion(): SurveyQuestionCreateUpdate | undefined;
    setQuestion(value?: SurveyQuestionCreateUpdate): QuestionCreateRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuestionCreateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QuestionCreateRequest): QuestionCreateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QuestionCreateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuestionCreateRequest;
    static deserializeBinaryFromReader(message: QuestionCreateRequest, reader: jspb.BinaryReader): QuestionCreateRequest;
}

export namespace QuestionCreateRequest {
    export type AsObject = {
        surveyPageId: number,
        question?: SurveyQuestionCreateUpdate.AsObject,
    }
}

export class QuestionCreateResponse extends jspb.Message { 

    hasQuestion(): boolean;
    clearQuestion(): void;
    getQuestion(): SurveyQuestion | undefined;
    setQuestion(value?: SurveyQuestion): QuestionCreateResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuestionCreateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QuestionCreateResponse): QuestionCreateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QuestionCreateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuestionCreateResponse;
    static deserializeBinaryFromReader(message: QuestionCreateResponse, reader: jspb.BinaryReader): QuestionCreateResponse;
}

export namespace QuestionCreateResponse {
    export type AsObject = {
        question?: SurveyQuestion.AsObject,
    }
}

export class QuestionUpdateRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): QuestionUpdateRequest;


    hasQuestion(): boolean;
    clearQuestion(): void;
    getQuestion(): SurveyQuestionCreateUpdate | undefined;
    setQuestion(value?: SurveyQuestionCreateUpdate): QuestionUpdateRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuestionUpdateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QuestionUpdateRequest): QuestionUpdateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QuestionUpdateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuestionUpdateRequest;
    static deserializeBinaryFromReader(message: QuestionUpdateRequest, reader: jspb.BinaryReader): QuestionUpdateRequest;
}

export namespace QuestionUpdateRequest {
    export type AsObject = {
        id: number,
        question?: SurveyQuestionCreateUpdate.AsObject,
    }
}

export class QuestionUpdateResponse extends jspb.Message { 

    hasQuestion(): boolean;
    clearQuestion(): void;
    getQuestion(): SurveyQuestion | undefined;
    setQuestion(value?: SurveyQuestion): QuestionUpdateResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuestionUpdateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QuestionUpdateResponse): QuestionUpdateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QuestionUpdateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuestionUpdateResponse;
    static deserializeBinaryFromReader(message: QuestionUpdateResponse, reader: jspb.BinaryReader): QuestionUpdateResponse;
}

export namespace QuestionUpdateResponse {
    export type AsObject = {
        question?: SurveyQuestion.AsObject,
    }
}

export class QuestionDeleteRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): QuestionDeleteRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuestionDeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: QuestionDeleteRequest): QuestionDeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QuestionDeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuestionDeleteRequest;
    static deserializeBinaryFromReader(message: QuestionDeleteRequest, reader: jspb.BinaryReader): QuestionDeleteRequest;
}

export namespace QuestionDeleteRequest {
    export type AsObject = {
        id: number,
    }
}

export class QuestionDeleteResponse extends jspb.Message { 

    hasQuestion(): boolean;
    clearQuestion(): void;
    getQuestion(): SurveyQuestion | undefined;
    setQuestion(value?: SurveyQuestion): QuestionDeleteResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): QuestionDeleteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: QuestionDeleteResponse): QuestionDeleteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: QuestionDeleteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): QuestionDeleteResponse;
    static deserializeBinaryFromReader(message: QuestionDeleteResponse, reader: jspb.BinaryReader): QuestionDeleteResponse;
}

export namespace QuestionDeleteResponse {
    export type AsObject = {
        question?: SurveyQuestion.AsObject,
    }
}

export enum SurveyQuestionType {
    QUESTION_MODE_TEXT_UNSPECIFIED = 0,
    QUESTION_MODE_CHOICE = 1,
    QUESTION_MODE_REDIRECT = 2,
    QUESTION_MODE_WEBHOOK = 3,
}
