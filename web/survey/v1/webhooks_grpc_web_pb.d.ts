import * as grpcWeb from 'grpc-web';

import * as web_survey_v1_webhooks_pb from '../../../web/survey/v1/webhooks_pb';


export class WebhookServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  webhookGetOne(
    request: web_survey_v1_webhooks_pb.WebhookGetOneRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: web_survey_v1_webhooks_pb.WebhookGetOneResponse) => void
  ): grpcWeb.ClientReadableStream<web_survey_v1_webhooks_pb.WebhookGetOneResponse>;

  webhookCreate(
    request: web_survey_v1_webhooks_pb.WebhookCreateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: web_survey_v1_webhooks_pb.WebhookCreateResponse) => void
  ): grpcWeb.ClientReadableStream<web_survey_v1_webhooks_pb.WebhookCreateResponse>;

  webhookUpdate(
    request: web_survey_v1_webhooks_pb.WebhookUpdateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: web_survey_v1_webhooks_pb.WebhookUpdateResponse) => void
  ): grpcWeb.ClientReadableStream<web_survey_v1_webhooks_pb.WebhookUpdateResponse>;

  webhookDelete(
    request: web_survey_v1_webhooks_pb.WebhookDeleteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: web_survey_v1_webhooks_pb.WebhookDeleteResponse) => void
  ): grpcWeb.ClientReadableStream<web_survey_v1_webhooks_pb.WebhookDeleteResponse>;

}

export class WebhookServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  webhookGetOne(
    request: web_survey_v1_webhooks_pb.WebhookGetOneRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_survey_v1_webhooks_pb.WebhookGetOneResponse>;

  webhookCreate(
    request: web_survey_v1_webhooks_pb.WebhookCreateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_survey_v1_webhooks_pb.WebhookCreateResponse>;

  webhookUpdate(
    request: web_survey_v1_webhooks_pb.WebhookUpdateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_survey_v1_webhooks_pb.WebhookUpdateResponse>;

  webhookDelete(
    request: web_survey_v1_webhooks_pb.WebhookDeleteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_survey_v1_webhooks_pb.WebhookDeleteResponse>;

}

