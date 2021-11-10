// package: web.client.v1
// file: web/client/v1/client_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as web_survey_v1_types_pb from "../../../web/survey/v1/types_pb";

export class StartSurveyRequest extends jspb.Message { 
    getDryRun(): boolean;
    setDryRun(value: boolean): StartSurveyRequest;
    getSession(): string;
    setSession(value: string): StartSurveyRequest;
    getSurveyId(): number;
    setSurveyId(value: number): StartSurveyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartSurveyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: StartSurveyRequest): StartSurveyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartSurveyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartSurveyRequest;
    static deserializeBinaryFromReader(message: StartSurveyRequest, reader: jspb.BinaryReader): StartSurveyRequest;
}

export namespace StartSurveyRequest {
    export type AsObject = {
        dryRun: boolean,
        session: string,
        surveyId: number,
    }
}

export class StartSurveyResponse extends jspb.Message { 
    getStartPageId(): number;
    setStartPageId(value: number): StartSurveyResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StartSurveyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: StartSurveyResponse): StartSurveyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StartSurveyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StartSurveyResponse;
    static deserializeBinaryFromReader(message: StartSurveyResponse, reader: jspb.BinaryReader): StartSurveyResponse;
}

export namespace StartSurveyResponse {
    export type AsObject = {
        startPageId: number,
    }
}

export class GetQuestionRequest extends jspb.Message { 
    getCurrentPageId(): number;
    setCurrentPageId(value: number): GetQuestionRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetQuestionRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetQuestionRequest): GetQuestionRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetQuestionRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetQuestionRequest;
    static deserializeBinaryFromReader(message: GetQuestionRequest, reader: jspb.BinaryReader): GetQuestionRequest;
}

export namespace GetQuestionRequest {
    export type AsObject = {
        currentPageId: number,
    }
}

export class GetQuestionResponse extends jspb.Message { 
    clearQuestionsList(): void;
    getQuestionsList(): Array<web_survey_v1_types_pb.SurveyQuestion>;
    setQuestionsList(value: Array<web_survey_v1_types_pb.SurveyQuestion>): GetQuestionResponse;
    addQuestions(value?: web_survey_v1_types_pb.SurveyQuestion, index?: number): web_survey_v1_types_pb.SurveyQuestion;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetQuestionResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetQuestionResponse): GetQuestionResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetQuestionResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetQuestionResponse;
    static deserializeBinaryFromReader(message: GetQuestionResponse, reader: jspb.BinaryReader): GetQuestionResponse;
}

export namespace GetQuestionResponse {
    export type AsObject = {
        questionsList: Array<web_survey_v1_types_pb.SurveyQuestion.AsObject>,
    }
}

export class SubmitAnswerRequest extends jspb.Message { 
    getDryRun(): boolean;
    setDryRun(value: boolean): SubmitAnswerRequest;
    getCurrentPageId(): number;
    setCurrentPageId(value: number): SubmitAnswerRequest;
    getSession(): string;
    setSession(value: string): SubmitAnswerRequest;
    clearAnswersList(): void;
    getAnswersList(): Array<SubmitAnswerRequest.Answer>;
    setAnswersList(value: Array<SubmitAnswerRequest.Answer>): SubmitAnswerRequest;
    addAnswers(value?: SubmitAnswerRequest.Answer, index?: number): SubmitAnswerRequest.Answer;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubmitAnswerRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SubmitAnswerRequest): SubmitAnswerRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubmitAnswerRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubmitAnswerRequest;
    static deserializeBinaryFromReader(message: SubmitAnswerRequest, reader: jspb.BinaryReader): SubmitAnswerRequest;
}

export namespace SubmitAnswerRequest {
    export type AsObject = {
        dryRun: boolean,
        currentPageId: number,
        session: string,
        answersList: Array<SubmitAnswerRequest.Answer.AsObject>,
    }


    export class Answer extends jspb.Message { 
        getQuestionId(): number;
        setQuestionId(value: number): Answer;
        clearValuesList(): void;
        getValuesList(): Array<string>;
        setValuesList(value: Array<string>): Answer;
        addValues(value: string, index?: number): string;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Answer.AsObject;
        static toObject(includeInstance: boolean, msg: Answer): Answer.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Answer, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Answer;
        static deserializeBinaryFromReader(message: Answer, reader: jspb.BinaryReader): Answer;
    }

    export namespace Answer {
        export type AsObject = {
            questionId: number,
            valuesList: Array<string>,
        }
    }

}

export class SubmitAnswerResponse extends jspb.Message { 
    getNextPageId(): number;
    setNextPageId(value: number): SubmitAnswerResponse;
    getIsCompleted(): boolean;
    setIsCompleted(value: boolean): SubmitAnswerResponse;
    getIsDisqualified(): boolean;
    setIsDisqualified(value: boolean): SubmitAnswerResponse;
    getIsNonactive(): boolean;
    setIsNonactive(value: boolean): SubmitAnswerResponse;
    getRedirectTo(): string;
    setRedirectTo(value: string): SubmitAnswerResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubmitAnswerResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SubmitAnswerResponse): SubmitAnswerResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubmitAnswerResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubmitAnswerResponse;
    static deserializeBinaryFromReader(message: SubmitAnswerResponse, reader: jspb.BinaryReader): SubmitAnswerResponse;
}

export namespace SubmitAnswerResponse {
    export type AsObject = {
        nextPageId: number,
        isCompleted: boolean,
        isDisqualified: boolean,
        isNonactive: boolean,
        redirectTo: string,
    }
}
