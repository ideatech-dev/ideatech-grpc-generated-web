import * as grpcWeb from 'grpc-web';

import * as web_client_v1_client_service_pb from '../../../web/client/v1/client_service_pb';


export class SurveyClientServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  startSurvey(
    request: web_client_v1_client_service_pb.StartSurveyRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: web_client_v1_client_service_pb.StartSurveyResponse) => void
  ): grpcWeb.ClientReadableStream<web_client_v1_client_service_pb.StartSurveyResponse>;

  getQuestion(
    request: web_client_v1_client_service_pb.GetQuestionRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: web_client_v1_client_service_pb.GetQuestionResponse) => void
  ): grpcWeb.ClientReadableStream<web_client_v1_client_service_pb.GetQuestionResponse>;

  submitAnswer(
    request: web_client_v1_client_service_pb.SubmitAnswerRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: web_client_v1_client_service_pb.SubmitAnswerResponse) => void
  ): grpcWeb.ClientReadableStream<web_client_v1_client_service_pb.SubmitAnswerResponse>;

}

export class SurveyClientServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  startSurvey(
    request: web_client_v1_client_service_pb.StartSurveyRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_client_v1_client_service_pb.StartSurveyResponse>;

  getQuestion(
    request: web_client_v1_client_service_pb.GetQuestionRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_client_v1_client_service_pb.GetQuestionResponse>;

  submitAnswer(
    request: web_client_v1_client_service_pb.SubmitAnswerRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_client_v1_client_service_pb.SubmitAnswerResponse>;

}

