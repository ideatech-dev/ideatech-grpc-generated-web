import * as grpcWeb from 'grpc-web';

import * as web_survey_v1_survey_redirect_pb from '../../../web/survey/v1/survey_redirect_pb';


export class SurveyRedirectServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  surveyRedirectGetOne(
    request: web_survey_v1_survey_redirect_pb.SurveyRedirectGetOneRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: web_survey_v1_survey_redirect_pb.SurveyRedirectGetOneResponse) => void
  ): grpcWeb.ClientReadableStream<web_survey_v1_survey_redirect_pb.SurveyRedirectGetOneResponse>;

  surveyRedirectCreate(
    request: web_survey_v1_survey_redirect_pb.SurveyRedirectCreateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: web_survey_v1_survey_redirect_pb.SurveyRedirectCreateResponse) => void
  ): grpcWeb.ClientReadableStream<web_survey_v1_survey_redirect_pb.SurveyRedirectCreateResponse>;

  surveyRedirectUpdate(
    request: web_survey_v1_survey_redirect_pb.SurveyRedirectUpdateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: web_survey_v1_survey_redirect_pb.SurveyRedirectUpdateResponse) => void
  ): grpcWeb.ClientReadableStream<web_survey_v1_survey_redirect_pb.SurveyRedirectUpdateResponse>;

  surveyRedirectDelete(
    request: web_survey_v1_survey_redirect_pb.SurveyRedirectDeleteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: web_survey_v1_survey_redirect_pb.SurveyRedirectDeleteResponse) => void
  ): grpcWeb.ClientReadableStream<web_survey_v1_survey_redirect_pb.SurveyRedirectDeleteResponse>;

}

export class SurveyRedirectServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  surveyRedirectGetOne(
    request: web_survey_v1_survey_redirect_pb.SurveyRedirectGetOneRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_survey_v1_survey_redirect_pb.SurveyRedirectGetOneResponse>;

  surveyRedirectCreate(
    request: web_survey_v1_survey_redirect_pb.SurveyRedirectCreateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_survey_v1_survey_redirect_pb.SurveyRedirectCreateResponse>;

  surveyRedirectUpdate(
    request: web_survey_v1_survey_redirect_pb.SurveyRedirectUpdateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_survey_v1_survey_redirect_pb.SurveyRedirectUpdateResponse>;

  surveyRedirectDelete(
    request: web_survey_v1_survey_redirect_pb.SurveyRedirectDeleteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_survey_v1_survey_redirect_pb.SurveyRedirectDeleteResponse>;

}

