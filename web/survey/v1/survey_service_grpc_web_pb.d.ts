import * as grpcWeb from 'grpc-web';

import * as web_survey_v1_survey_service_pb from '../../../web/survey/v1/survey_service_pb';


export class SurveyServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  surveyGetOne(
    request: web_survey_v1_survey_service_pb.SurveyGetOneRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: web_survey_v1_survey_service_pb.SurveyGetOneResponse) => void
  ): grpcWeb.ClientReadableStream<web_survey_v1_survey_service_pb.SurveyGetOneResponse>;

  surveyGetAll(
    request: web_survey_v1_survey_service_pb.SurveyGetAllRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: web_survey_v1_survey_service_pb.SurveyGetAllResponse) => void
  ): grpcWeb.ClientReadableStream<web_survey_v1_survey_service_pb.SurveyGetAllResponse>;

  surveyCreate(
    request: web_survey_v1_survey_service_pb.SurveyCreateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: web_survey_v1_survey_service_pb.SurveyCreateResponse) => void
  ): grpcWeb.ClientReadableStream<web_survey_v1_survey_service_pb.SurveyCreateResponse>;

  surveyUpdate(
    request: web_survey_v1_survey_service_pb.SurveyUpdateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: web_survey_v1_survey_service_pb.SurveyUpdateResponse) => void
  ): grpcWeb.ClientReadableStream<web_survey_v1_survey_service_pb.SurveyUpdateResponse>;

  surveyDelete(
    request: web_survey_v1_survey_service_pb.SurveyDeleteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: web_survey_v1_survey_service_pb.SurveyDeleteResponse) => void
  ): grpcWeb.ClientReadableStream<web_survey_v1_survey_service_pb.SurveyDeleteResponse>;

}

export class SurveyServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  surveyGetOne(
    request: web_survey_v1_survey_service_pb.SurveyGetOneRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_survey_v1_survey_service_pb.SurveyGetOneResponse>;

  surveyGetAll(
    request: web_survey_v1_survey_service_pb.SurveyGetAllRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_survey_v1_survey_service_pb.SurveyGetAllResponse>;

  surveyCreate(
    request: web_survey_v1_survey_service_pb.SurveyCreateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_survey_v1_survey_service_pb.SurveyCreateResponse>;

  surveyUpdate(
    request: web_survey_v1_survey_service_pb.SurveyUpdateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_survey_v1_survey_service_pb.SurveyUpdateResponse>;

  surveyDelete(
    request: web_survey_v1_survey_service_pb.SurveyDeleteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_survey_v1_survey_service_pb.SurveyDeleteResponse>;

}

