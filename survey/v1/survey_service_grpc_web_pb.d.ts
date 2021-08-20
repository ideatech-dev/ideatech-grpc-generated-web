import * as grpcWeb from 'grpc-web';

import * as survey_v1_survey_choice_pb from '../../survey/v1/survey_choice_pb';
import * as survey_v1_survey_question_pb from '../../survey/v1/survey_question_pb';
import * as survey_v1_survey_page_pb from '../../survey/v1/survey_page_pb';
import * as survey_v1_survey_pb from '../../survey/v1/survey_pb';


export class SurveyServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  surveyGetOne(
    request: survey_v1_survey_pb.SurveyGetOneRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: survey_v1_survey_pb.SurveyGetOneResponse) => void
  ): grpcWeb.ClientReadableStream<survey_v1_survey_pb.SurveyGetOneResponse>;

  surveyGetAll(
    request: survey_v1_survey_pb.SurveyGetAllRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: survey_v1_survey_pb.SurveyGetAllResponse) => void
  ): grpcWeb.ClientReadableStream<survey_v1_survey_pb.SurveyGetAllResponse>;

  surveyCreate(
    request: survey_v1_survey_pb.SurveyCreateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: survey_v1_survey_pb.SurveyCreateResponse) => void
  ): grpcWeb.ClientReadableStream<survey_v1_survey_pb.SurveyCreateResponse>;

  surveyUpdate(
    request: survey_v1_survey_pb.SurveyUpdateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: survey_v1_survey_pb.SurveyUpdateResponse) => void
  ): grpcWeb.ClientReadableStream<survey_v1_survey_pb.SurveyUpdateResponse>;

  surveyDelete(
    request: survey_v1_survey_pb.SurveyDeleteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: survey_v1_survey_pb.SurveyDeleteResponse) => void
  ): grpcWeb.ClientReadableStream<survey_v1_survey_pb.SurveyDeleteResponse>;

  pageGetOne(
    request: survey_v1_survey_page_pb.PageGetOneRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: survey_v1_survey_page_pb.PageGetOneResponse) => void
  ): grpcWeb.ClientReadableStream<survey_v1_survey_page_pb.PageGetOneResponse>;

  pageGetAll(
    request: survey_v1_survey_page_pb.PageGetAllRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: survey_v1_survey_page_pb.PageGetAllResponse) => void
  ): grpcWeb.ClientReadableStream<survey_v1_survey_page_pb.PageGetAllResponse>;

  pageCreate(
    request: survey_v1_survey_page_pb.PageCreateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: survey_v1_survey_page_pb.PageCreateResponse) => void
  ): grpcWeb.ClientReadableStream<survey_v1_survey_page_pb.PageCreateResponse>;

  pageUpdate(
    request: survey_v1_survey_page_pb.PageUpdateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: survey_v1_survey_page_pb.PageUpdateResponse) => void
  ): grpcWeb.ClientReadableStream<survey_v1_survey_page_pb.PageUpdateResponse>;

  pageDelete(
    request: survey_v1_survey_page_pb.PageDeleteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: survey_v1_survey_page_pb.PageDeleteResponse) => void
  ): grpcWeb.ClientReadableStream<survey_v1_survey_page_pb.PageDeleteResponse>;

  questionGetOne(
    request: survey_v1_survey_question_pb.QuestionGetOneRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: survey_v1_survey_question_pb.QuestionGetOneResponse) => void
  ): grpcWeb.ClientReadableStream<survey_v1_survey_question_pb.QuestionGetOneResponse>;

  questionGetAll(
    request: survey_v1_survey_question_pb.QuestionGetAllRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: survey_v1_survey_question_pb.QuestionGetAllResponse) => void
  ): grpcWeb.ClientReadableStream<survey_v1_survey_question_pb.QuestionGetAllResponse>;

  questionCreate(
    request: survey_v1_survey_question_pb.QuestionCreateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: survey_v1_survey_question_pb.QuestionCreateResponse) => void
  ): grpcWeb.ClientReadableStream<survey_v1_survey_question_pb.QuestionCreateResponse>;

  questionUpdate(
    request: survey_v1_survey_question_pb.QuestionUpdateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: survey_v1_survey_question_pb.QuestionUpdateResponse) => void
  ): grpcWeb.ClientReadableStream<survey_v1_survey_question_pb.QuestionUpdateResponse>;

  questionDelete(
    request: survey_v1_survey_question_pb.QuestionDeleteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: survey_v1_survey_question_pb.QuestionDeleteResponse) => void
  ): grpcWeb.ClientReadableStream<survey_v1_survey_question_pb.QuestionDeleteResponse>;

  choiceGetAll(
    request: survey_v1_survey_choice_pb.ChoiceGetAllRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: survey_v1_survey_choice_pb.ChoiceGetAllResponse) => void
  ): grpcWeb.ClientReadableStream<survey_v1_survey_choice_pb.ChoiceGetAllResponse>;

  choiceCreate(
    request: survey_v1_survey_choice_pb.ChoiceCreateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: survey_v1_survey_choice_pb.ChoiceCreateResponse) => void
  ): grpcWeb.ClientReadableStream<survey_v1_survey_choice_pb.ChoiceCreateResponse>;

  choiceUpdate(
    request: survey_v1_survey_choice_pb.ChoiceUpdateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: survey_v1_survey_choice_pb.ChoiceUpdateResponse) => void
  ): grpcWeb.ClientReadableStream<survey_v1_survey_choice_pb.ChoiceUpdateResponse>;

  choiceDelete(
    request: survey_v1_survey_choice_pb.ChoiceDeleteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: survey_v1_survey_choice_pb.ChoiceDeleteResponse) => void
  ): grpcWeb.ClientReadableStream<survey_v1_survey_choice_pb.ChoiceDeleteResponse>;

}

export class SurveyServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  surveyGetOne(
    request: survey_v1_survey_pb.SurveyGetOneRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<survey_v1_survey_pb.SurveyGetOneResponse>;

  surveyGetAll(
    request: survey_v1_survey_pb.SurveyGetAllRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<survey_v1_survey_pb.SurveyGetAllResponse>;

  surveyCreate(
    request: survey_v1_survey_pb.SurveyCreateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<survey_v1_survey_pb.SurveyCreateResponse>;

  surveyUpdate(
    request: survey_v1_survey_pb.SurveyUpdateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<survey_v1_survey_pb.SurveyUpdateResponse>;

  surveyDelete(
    request: survey_v1_survey_pb.SurveyDeleteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<survey_v1_survey_pb.SurveyDeleteResponse>;

  pageGetOne(
    request: survey_v1_survey_page_pb.PageGetOneRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<survey_v1_survey_page_pb.PageGetOneResponse>;

  pageGetAll(
    request: survey_v1_survey_page_pb.PageGetAllRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<survey_v1_survey_page_pb.PageGetAllResponse>;

  pageCreate(
    request: survey_v1_survey_page_pb.PageCreateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<survey_v1_survey_page_pb.PageCreateResponse>;

  pageUpdate(
    request: survey_v1_survey_page_pb.PageUpdateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<survey_v1_survey_page_pb.PageUpdateResponse>;

  pageDelete(
    request: survey_v1_survey_page_pb.PageDeleteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<survey_v1_survey_page_pb.PageDeleteResponse>;

  questionGetOne(
    request: survey_v1_survey_question_pb.QuestionGetOneRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<survey_v1_survey_question_pb.QuestionGetOneResponse>;

  questionGetAll(
    request: survey_v1_survey_question_pb.QuestionGetAllRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<survey_v1_survey_question_pb.QuestionGetAllResponse>;

  questionCreate(
    request: survey_v1_survey_question_pb.QuestionCreateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<survey_v1_survey_question_pb.QuestionCreateResponse>;

  questionUpdate(
    request: survey_v1_survey_question_pb.QuestionUpdateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<survey_v1_survey_question_pb.QuestionUpdateResponse>;

  questionDelete(
    request: survey_v1_survey_question_pb.QuestionDeleteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<survey_v1_survey_question_pb.QuestionDeleteResponse>;

  choiceGetAll(
    request: survey_v1_survey_choice_pb.ChoiceGetAllRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<survey_v1_survey_choice_pb.ChoiceGetAllResponse>;

  choiceCreate(
    request: survey_v1_survey_choice_pb.ChoiceCreateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<survey_v1_survey_choice_pb.ChoiceCreateResponse>;

  choiceUpdate(
    request: survey_v1_survey_choice_pb.ChoiceUpdateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<survey_v1_survey_choice_pb.ChoiceUpdateResponse>;

  choiceDelete(
    request: survey_v1_survey_choice_pb.ChoiceDeleteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<survey_v1_survey_choice_pb.ChoiceDeleteResponse>;

}

