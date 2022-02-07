// package: web.survey.v1
// file: web/survey/v1/webhooks.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as web_survey_v1_webhooks_pb from "../../../web/survey/v1/webhooks_pb";
import * as web_survey_v1_types_pb from "../../../web/survey/v1/types_pb";

interface IWebhookServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    webhookGetOne: IWebhookServiceService_IWebhookGetOne;
    webhookCreate: IWebhookServiceService_IWebhookCreate;
    webhookUpdate: IWebhookServiceService_IWebhookUpdate;
    webhookDelete: IWebhookServiceService_IWebhookDelete;
}

interface IWebhookServiceService_IWebhookGetOne extends grpc.MethodDefinition<web_survey_v1_webhooks_pb.WebhookGetOneRequest, web_survey_v1_webhooks_pb.WebhookGetOneResponse> {
    path: "/web.survey.v1.WebhookService/WebhookGetOne";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_survey_v1_webhooks_pb.WebhookGetOneRequest>;
    requestDeserialize: grpc.deserialize<web_survey_v1_webhooks_pb.WebhookGetOneRequest>;
    responseSerialize: grpc.serialize<web_survey_v1_webhooks_pb.WebhookGetOneResponse>;
    responseDeserialize: grpc.deserialize<web_survey_v1_webhooks_pb.WebhookGetOneResponse>;
}
interface IWebhookServiceService_IWebhookCreate extends grpc.MethodDefinition<web_survey_v1_webhooks_pb.WebhookCreateRequest, web_survey_v1_webhooks_pb.WebhookCreateResponse> {
    path: "/web.survey.v1.WebhookService/WebhookCreate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_survey_v1_webhooks_pb.WebhookCreateRequest>;
    requestDeserialize: grpc.deserialize<web_survey_v1_webhooks_pb.WebhookCreateRequest>;
    responseSerialize: grpc.serialize<web_survey_v1_webhooks_pb.WebhookCreateResponse>;
    responseDeserialize: grpc.deserialize<web_survey_v1_webhooks_pb.WebhookCreateResponse>;
}
interface IWebhookServiceService_IWebhookUpdate extends grpc.MethodDefinition<web_survey_v1_webhooks_pb.WebhookUpdateRequest, web_survey_v1_webhooks_pb.WebhookUpdateResponse> {
    path: "/web.survey.v1.WebhookService/WebhookUpdate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_survey_v1_webhooks_pb.WebhookUpdateRequest>;
    requestDeserialize: grpc.deserialize<web_survey_v1_webhooks_pb.WebhookUpdateRequest>;
    responseSerialize: grpc.serialize<web_survey_v1_webhooks_pb.WebhookUpdateResponse>;
    responseDeserialize: grpc.deserialize<web_survey_v1_webhooks_pb.WebhookUpdateResponse>;
}
interface IWebhookServiceService_IWebhookDelete extends grpc.MethodDefinition<web_survey_v1_webhooks_pb.WebhookDeleteRequest, web_survey_v1_webhooks_pb.WebhookDeleteResponse> {
    path: "/web.survey.v1.WebhookService/WebhookDelete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_survey_v1_webhooks_pb.WebhookDeleteRequest>;
    requestDeserialize: grpc.deserialize<web_survey_v1_webhooks_pb.WebhookDeleteRequest>;
    responseSerialize: grpc.serialize<web_survey_v1_webhooks_pb.WebhookDeleteResponse>;
    responseDeserialize: grpc.deserialize<web_survey_v1_webhooks_pb.WebhookDeleteResponse>;
}

export const WebhookServiceService: IWebhookServiceService;

export interface IWebhookServiceServer extends grpc.UntypedServiceImplementation {
    webhookGetOne: grpc.handleUnaryCall<web_survey_v1_webhooks_pb.WebhookGetOneRequest, web_survey_v1_webhooks_pb.WebhookGetOneResponse>;
    webhookCreate: grpc.handleUnaryCall<web_survey_v1_webhooks_pb.WebhookCreateRequest, web_survey_v1_webhooks_pb.WebhookCreateResponse>;
    webhookUpdate: grpc.handleUnaryCall<web_survey_v1_webhooks_pb.WebhookUpdateRequest, web_survey_v1_webhooks_pb.WebhookUpdateResponse>;
    webhookDelete: grpc.handleUnaryCall<web_survey_v1_webhooks_pb.WebhookDeleteRequest, web_survey_v1_webhooks_pb.WebhookDeleteResponse>;
}

export interface IWebhookServiceClient {
    webhookGetOne(request: web_survey_v1_webhooks_pb.WebhookGetOneRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_webhooks_pb.WebhookGetOneResponse) => void): grpc.ClientUnaryCall;
    webhookGetOne(request: web_survey_v1_webhooks_pb.WebhookGetOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_webhooks_pb.WebhookGetOneResponse) => void): grpc.ClientUnaryCall;
    webhookGetOne(request: web_survey_v1_webhooks_pb.WebhookGetOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_webhooks_pb.WebhookGetOneResponse) => void): grpc.ClientUnaryCall;
    webhookCreate(request: web_survey_v1_webhooks_pb.WebhookCreateRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_webhooks_pb.WebhookCreateResponse) => void): grpc.ClientUnaryCall;
    webhookCreate(request: web_survey_v1_webhooks_pb.WebhookCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_webhooks_pb.WebhookCreateResponse) => void): grpc.ClientUnaryCall;
    webhookCreate(request: web_survey_v1_webhooks_pb.WebhookCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_webhooks_pb.WebhookCreateResponse) => void): grpc.ClientUnaryCall;
    webhookUpdate(request: web_survey_v1_webhooks_pb.WebhookUpdateRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_webhooks_pb.WebhookUpdateResponse) => void): grpc.ClientUnaryCall;
    webhookUpdate(request: web_survey_v1_webhooks_pb.WebhookUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_webhooks_pb.WebhookUpdateResponse) => void): grpc.ClientUnaryCall;
    webhookUpdate(request: web_survey_v1_webhooks_pb.WebhookUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_webhooks_pb.WebhookUpdateResponse) => void): grpc.ClientUnaryCall;
    webhookDelete(request: web_survey_v1_webhooks_pb.WebhookDeleteRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_webhooks_pb.WebhookDeleteResponse) => void): grpc.ClientUnaryCall;
    webhookDelete(request: web_survey_v1_webhooks_pb.WebhookDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_webhooks_pb.WebhookDeleteResponse) => void): grpc.ClientUnaryCall;
    webhookDelete(request: web_survey_v1_webhooks_pb.WebhookDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_webhooks_pb.WebhookDeleteResponse) => void): grpc.ClientUnaryCall;
}

export class WebhookServiceClient extends grpc.Client implements IWebhookServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public webhookGetOne(request: web_survey_v1_webhooks_pb.WebhookGetOneRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_webhooks_pb.WebhookGetOneResponse) => void): grpc.ClientUnaryCall;
    public webhookGetOne(request: web_survey_v1_webhooks_pb.WebhookGetOneRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_webhooks_pb.WebhookGetOneResponse) => void): grpc.ClientUnaryCall;
    public webhookGetOne(request: web_survey_v1_webhooks_pb.WebhookGetOneRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_webhooks_pb.WebhookGetOneResponse) => void): grpc.ClientUnaryCall;
    public webhookCreate(request: web_survey_v1_webhooks_pb.WebhookCreateRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_webhooks_pb.WebhookCreateResponse) => void): grpc.ClientUnaryCall;
    public webhookCreate(request: web_survey_v1_webhooks_pb.WebhookCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_webhooks_pb.WebhookCreateResponse) => void): grpc.ClientUnaryCall;
    public webhookCreate(request: web_survey_v1_webhooks_pb.WebhookCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_webhooks_pb.WebhookCreateResponse) => void): grpc.ClientUnaryCall;
    public webhookUpdate(request: web_survey_v1_webhooks_pb.WebhookUpdateRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_webhooks_pb.WebhookUpdateResponse) => void): grpc.ClientUnaryCall;
    public webhookUpdate(request: web_survey_v1_webhooks_pb.WebhookUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_webhooks_pb.WebhookUpdateResponse) => void): grpc.ClientUnaryCall;
    public webhookUpdate(request: web_survey_v1_webhooks_pb.WebhookUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_webhooks_pb.WebhookUpdateResponse) => void): grpc.ClientUnaryCall;
    public webhookDelete(request: web_survey_v1_webhooks_pb.WebhookDeleteRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_webhooks_pb.WebhookDeleteResponse) => void): grpc.ClientUnaryCall;
    public webhookDelete(request: web_survey_v1_webhooks_pb.WebhookDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_webhooks_pb.WebhookDeleteResponse) => void): grpc.ClientUnaryCall;
    public webhookDelete(request: web_survey_v1_webhooks_pb.WebhookDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_webhooks_pb.WebhookDeleteResponse) => void): grpc.ClientUnaryCall;
}
