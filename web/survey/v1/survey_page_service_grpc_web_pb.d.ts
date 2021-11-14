import * as grpcWeb from 'grpc-web';

import * as web_survey_v1_survey_page_service_pb from '../../../web/survey/v1/survey_page_service_pb';


export class SurveyPageServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  pageGetOne(
    request: web_survey_v1_survey_page_service_pb.PageGetOneRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: web_survey_v1_survey_page_service_pb.PageGetOneResponse) => void
  ): grpcWeb.ClientReadableStream<web_survey_v1_survey_page_service_pb.PageGetOneResponse>;

  pageGetAll(
    request: web_survey_v1_survey_page_service_pb.PageGetAllRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: web_survey_v1_survey_page_service_pb.PageGetAllResponse) => void
  ): grpcWeb.ClientReadableStream<web_survey_v1_survey_page_service_pb.PageGetAllResponse>;

  pageCreate(
    request: web_survey_v1_survey_page_service_pb.PageCreateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: web_survey_v1_survey_page_service_pb.PageCreateResponse) => void
  ): grpcWeb.ClientReadableStream<web_survey_v1_survey_page_service_pb.PageCreateResponse>;

  pageDelete(
    request: web_survey_v1_survey_page_service_pb.PageDeleteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: web_survey_v1_survey_page_service_pb.PageDeleteResponse) => void
  ): grpcWeb.ClientReadableStream<web_survey_v1_survey_page_service_pb.PageDeleteResponse>;

}

export class SurveyPageServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  pageGetOne(
    request: web_survey_v1_survey_page_service_pb.PageGetOneRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_survey_v1_survey_page_service_pb.PageGetOneResponse>;

  pageGetAll(
    request: web_survey_v1_survey_page_service_pb.PageGetAllRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_survey_v1_survey_page_service_pb.PageGetAllResponse>;

  pageCreate(
    request: web_survey_v1_survey_page_service_pb.PageCreateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_survey_v1_survey_page_service_pb.PageCreateResponse>;

  pageDelete(
    request: web_survey_v1_survey_page_service_pb.PageDeleteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_survey_v1_survey_page_service_pb.PageDeleteResponse>;

}

