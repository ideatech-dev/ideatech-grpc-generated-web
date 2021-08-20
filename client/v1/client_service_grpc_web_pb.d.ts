import * as grpcWeb from 'grpc-web';

import * as client_v1_question_answer_pb from '../../client/v1/question_answer_pb';


export class SurveyClientServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  startSurvey(
    request: client_v1_question_answer_pb.StartSurveyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: client_v1_question_answer_pb.StartSurveyResponse) => void
  ): grpcWeb.ClientReadableStream<client_v1_question_answer_pb.StartSurveyResponse>;

  getQuestion(
    request: client_v1_question_answer_pb.GetQuestionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: client_v1_question_answer_pb.GetQuestionResponse) => void
  ): grpcWeb.ClientReadableStream<client_v1_question_answer_pb.GetQuestionResponse>;

  submitAnswer(
    request: client_v1_question_answer_pb.SubmitAnswerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: client_v1_question_answer_pb.SubmitAnswerResponse) => void
  ): grpcWeb.ClientReadableStream<client_v1_question_answer_pb.SubmitAnswerResponse>;

}

export class SurveyClientServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  startSurvey(
    request: client_v1_question_answer_pb.StartSurveyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<client_v1_question_answer_pb.StartSurveyResponse>;

  getQuestion(
    request: client_v1_question_answer_pb.GetQuestionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<client_v1_question_answer_pb.GetQuestionResponse>;

  submitAnswer(
    request: client_v1_question_answer_pb.SubmitAnswerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<client_v1_question_answer_pb.SubmitAnswerResponse>;

}

