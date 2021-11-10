import * as grpcWeb from 'grpc-web';

import * as web_survey_v1_survey_question_service_pb from '../../../web/survey/v1/survey_question_service_pb';


export class SurveyQuestionServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  questionGetOne(
    request: web_survey_v1_survey_question_service_pb.QuestionGetOneRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: web_survey_v1_survey_question_service_pb.QuestionGetOneResponse) => void
  ): grpcWeb.ClientReadableStream<web_survey_v1_survey_question_service_pb.QuestionGetOneResponse>;

  questionGetAll(
    request: web_survey_v1_survey_question_service_pb.QuestionGetAllRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: web_survey_v1_survey_question_service_pb.QuestionGetAllResponse) => void
  ): grpcWeb.ClientReadableStream<web_survey_v1_survey_question_service_pb.QuestionGetAllResponse>;

  questionCreate(
    request: web_survey_v1_survey_question_service_pb.QuestionCreateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: web_survey_v1_survey_question_service_pb.QuestionCreateResponse) => void
  ): grpcWeb.ClientReadableStream<web_survey_v1_survey_question_service_pb.QuestionCreateResponse>;

  questionUpdate(
    request: web_survey_v1_survey_question_service_pb.QuestionUpdateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: web_survey_v1_survey_question_service_pb.QuestionUpdateResponse) => void
  ): grpcWeb.ClientReadableStream<web_survey_v1_survey_question_service_pb.QuestionUpdateResponse>;

  questionDelete(
    request: web_survey_v1_survey_question_service_pb.QuestionDeleteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: web_survey_v1_survey_question_service_pb.QuestionDeleteResponse) => void
  ): grpcWeb.ClientReadableStream<web_survey_v1_survey_question_service_pb.QuestionDeleteResponse>;

  choiceGetAll(
    request: web_survey_v1_survey_question_service_pb.ChoiceGetAllRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: web_survey_v1_survey_question_service_pb.ChoiceGetAllResponse) => void
  ): grpcWeb.ClientReadableStream<web_survey_v1_survey_question_service_pb.ChoiceGetAllResponse>;

  choiceCreate(
    request: web_survey_v1_survey_question_service_pb.ChoiceCreateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: web_survey_v1_survey_question_service_pb.ChoiceCreateResponse) => void
  ): grpcWeb.ClientReadableStream<web_survey_v1_survey_question_service_pb.ChoiceCreateResponse>;

  choiceUpdate(
    request: web_survey_v1_survey_question_service_pb.ChoiceUpdateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: web_survey_v1_survey_question_service_pb.ChoiceUpdateResponse) => void
  ): grpcWeb.ClientReadableStream<web_survey_v1_survey_question_service_pb.ChoiceUpdateResponse>;

  choiceDelete(
    request: web_survey_v1_survey_question_service_pb.ChoiceDeleteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: web_survey_v1_survey_question_service_pb.ChoiceDeleteResponse) => void
  ): grpcWeb.ClientReadableStream<web_survey_v1_survey_question_service_pb.ChoiceDeleteResponse>;

}

export class SurveyQuestionServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  questionGetOne(
    request: web_survey_v1_survey_question_service_pb.QuestionGetOneRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_survey_v1_survey_question_service_pb.QuestionGetOneResponse>;

  questionGetAll(
    request: web_survey_v1_survey_question_service_pb.QuestionGetAllRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_survey_v1_survey_question_service_pb.QuestionGetAllResponse>;

  questionCreate(
    request: web_survey_v1_survey_question_service_pb.QuestionCreateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_survey_v1_survey_question_service_pb.QuestionCreateResponse>;

  questionUpdate(
    request: web_survey_v1_survey_question_service_pb.QuestionUpdateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_survey_v1_survey_question_service_pb.QuestionUpdateResponse>;

  questionDelete(
    request: web_survey_v1_survey_question_service_pb.QuestionDeleteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_survey_v1_survey_question_service_pb.QuestionDeleteResponse>;

  choiceGetAll(
    request: web_survey_v1_survey_question_service_pb.ChoiceGetAllRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_survey_v1_survey_question_service_pb.ChoiceGetAllResponse>;

  choiceCreate(
    request: web_survey_v1_survey_question_service_pb.ChoiceCreateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_survey_v1_survey_question_service_pb.ChoiceCreateResponse>;

  choiceUpdate(
    request: web_survey_v1_survey_question_service_pb.ChoiceUpdateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_survey_v1_survey_question_service_pb.ChoiceUpdateResponse>;

  choiceDelete(
    request: web_survey_v1_survey_question_service_pb.ChoiceDeleteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_survey_v1_survey_question_service_pb.ChoiceDeleteResponse>;

}

