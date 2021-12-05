// package: web.survey.v1
// file: web/survey/v1/survey_question_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as web_survey_v1_types_pb from "../../../web/survey/v1/types_pb";

export class QuestionGetOneRequest extends jspb.Message { 
    getQuestionId(): number;
    setQuestionId(value: number): QuestionGetOneRequest;
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
        questionId: number,
        withChoice: boolean,
    }
}

export class QuestionGetOneResponse extends jspb.Message { 

    hasQuestion(): boolean;
    clearQuestion(): void;
    getQuestion(): web_survey_v1_types_pb.SurveyQuestion | undefined;
    setQuestion(value?: web_survey_v1_types_pb.SurveyQuestion): QuestionGetOneResponse;

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
        question?: web_survey_v1_types_pb.SurveyQuestion.AsObject,
    }
}

export class QuestionGetAllRequest extends jspb.Message { 
    getPageId(): number;
    setPageId(value: number): QuestionGetAllRequest;
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
        withChoice: boolean,
    }
}

export class QuestionGetAllResponse extends jspb.Message { 
    clearQuestionsList(): void;
    getQuestionsList(): Array<web_survey_v1_types_pb.SurveyQuestion>;
    setQuestionsList(value: Array<web_survey_v1_types_pb.SurveyQuestion>): QuestionGetAllResponse;
    addQuestions(value?: web_survey_v1_types_pb.SurveyQuestion, index?: number): web_survey_v1_types_pb.SurveyQuestion;

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
        questionsList: Array<web_survey_v1_types_pb.SurveyQuestion.AsObject>,
    }
}

export class QuestionCreateRequest extends jspb.Message { 
    getPageId(): number;
    setPageId(value: number): QuestionCreateRequest;
    getQuestion(): string;
    setQuestion(value: string): QuestionCreateRequest;
    getType(): web_survey_v1_types_pb.SurveyQuestionType;
    setType(value: web_survey_v1_types_pb.SurveyQuestionType): QuestionCreateRequest;

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
        pageId: number,
        question: string,
        type: web_survey_v1_types_pb.SurveyQuestionType,
    }
}

export class QuestionCreateResponse extends jspb.Message { 

    hasQuestion(): boolean;
    clearQuestion(): void;
    getQuestion(): web_survey_v1_types_pb.SurveyQuestion | undefined;
    setQuestion(value?: web_survey_v1_types_pb.SurveyQuestion): QuestionCreateResponse;

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
        question?: web_survey_v1_types_pb.SurveyQuestion.AsObject,
    }
}

export class QuestionUpdateRequest extends jspb.Message { 
    getQuestionId(): number;
    setQuestionId(value: number): QuestionUpdateRequest;
    getNewQuestion(): string;
    setNewQuestion(value: string): QuestionUpdateRequest;
    getNewType(): web_survey_v1_types_pb.SurveyQuestionType;
    setNewType(value: web_survey_v1_types_pb.SurveyQuestionType): QuestionUpdateRequest;

    hasNewOption(): boolean;
    clearNewOption(): void;
    getNewOption(): web_survey_v1_types_pb.SurveyQuestionOption | undefined;
    setNewOption(value?: web_survey_v1_types_pb.SurveyQuestionOption): QuestionUpdateRequest;

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
        questionId: number,
        newQuestion: string,
        newType: web_survey_v1_types_pb.SurveyQuestionType,
        newOption?: web_survey_v1_types_pb.SurveyQuestionOption.AsObject,
    }
}

export class QuestionUpdateResponse extends jspb.Message { 

    hasQuestion(): boolean;
    clearQuestion(): void;
    getQuestion(): web_survey_v1_types_pb.SurveyQuestion | undefined;
    setQuestion(value?: web_survey_v1_types_pb.SurveyQuestion): QuestionUpdateResponse;

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
        question?: web_survey_v1_types_pb.SurveyQuestion.AsObject,
    }
}

export class QuestionDeleteRequest extends jspb.Message { 
    getQuestionId(): number;
    setQuestionId(value: number): QuestionDeleteRequest;

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
        questionId: number,
    }
}

export class QuestionDeleteResponse extends jspb.Message { 

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
    getChoicesList(): Array<web_survey_v1_types_pb.SurveyChoice>;
    setChoicesList(value: Array<web_survey_v1_types_pb.SurveyChoice>): ChoiceGetAllResponse;
    addChoices(value?: web_survey_v1_types_pb.SurveyChoice, index?: number): web_survey_v1_types_pb.SurveyChoice;

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
        choicesList: Array<web_survey_v1_types_pb.SurveyChoice.AsObject>,
    }
}

export class ChoiceCreateRequest extends jspb.Message { 
    getSurveyQuestionId(): number;
    setSurveyQuestionId(value: number): ChoiceCreateRequest;
    getChoice(): string;
    setChoice(value: string): ChoiceCreateRequest;
    getScore(): number;
    setScore(value: number): ChoiceCreateRequest;

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
        surveyQuestionId: number,
        choice: string,
        score: number,
    }
}

export class ChoiceCreateResponse extends jspb.Message { 

    hasChoice(): boolean;
    clearChoice(): void;
    getChoice(): web_survey_v1_types_pb.SurveyChoice | undefined;
    setChoice(value?: web_survey_v1_types_pb.SurveyChoice): ChoiceCreateResponse;

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
        choice?: web_survey_v1_types_pb.SurveyChoice.AsObject,
    }
}

export class ChoiceUpdateRequest extends jspb.Message { 
    getChoiceId(): number;
    setChoiceId(value: number): ChoiceUpdateRequest;
    getChoice(): string;
    setChoice(value: string): ChoiceUpdateRequest;
    getScore(): number;
    setScore(value: number): ChoiceUpdateRequest;

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
        choiceId: number,
        choice: string,
        score: number,
    }
}

export class ChoiceUpdateResponse extends jspb.Message { 

    hasChoice(): boolean;
    clearChoice(): void;
    getChoice(): web_survey_v1_types_pb.SurveyChoice | undefined;
    setChoice(value?: web_survey_v1_types_pb.SurveyChoice): ChoiceUpdateResponse;

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
        choice?: web_survey_v1_types_pb.SurveyChoice.AsObject,
    }
}

export class ChoiceDeleteRequest extends jspb.Message { 
    getChoiceId(): number;
    setChoiceId(value: number): ChoiceDeleteRequest;

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
        choiceId: number,
    }
}

export class ChoiceDeleteResponse extends jspb.Message { 

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
    }
}
