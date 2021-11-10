import * as grpcWeb from 'grpc-web';

import * as web_survey_v1_survey_response_service_pb from '../../../web/survey/v1/survey_response_service_pb';


export class SurveyResponseServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  responseGetAll(
    request: web_survey_v1_survey_response_service_pb.ResponseGetAllRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: web_survey_v1_survey_response_service_pb.ResponseGetAllResponse) => void
  ): grpcWeb.ClientReadableStream<web_survey_v1_survey_response_service_pb.ResponseGetAllResponse>;

  responseGetOne(
    request: web_survey_v1_survey_response_service_pb.ResponseGetOneRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: web_survey_v1_survey_response_service_pb.ResponseGetOneResponse) => void
  ): grpcWeb.ClientReadableStream<web_survey_v1_survey_response_service_pb.ResponseGetOneResponse>;

  responseAnswerGetList(
    request: web_survey_v1_survey_response_service_pb.ResponseAnswerGetListRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: web_survey_v1_survey_response_service_pb.ResponseAnswerGetListResponse) => void
  ): grpcWeb.ClientReadableStream<web_survey_v1_survey_response_service_pb.ResponseAnswerGetListResponse>;

}

export class SurveyResponseServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  responseGetAll(
    request: web_survey_v1_survey_response_service_pb.ResponseGetAllRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_survey_v1_survey_response_service_pb.ResponseGetAllResponse>;

  responseGetOne(
    request: web_survey_v1_survey_response_service_pb.ResponseGetOneRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_survey_v1_survey_response_service_pb.ResponseGetOneResponse>;

  responseAnswerGetList(
    request: web_survey_v1_survey_response_service_pb.ResponseAnswerGetListRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_survey_v1_survey_response_service_pb.ResponseAnswerGetListResponse>;

}

