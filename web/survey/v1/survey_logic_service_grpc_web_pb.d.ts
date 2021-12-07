import * as grpcWeb from 'grpc-web';

import * as web_survey_v1_survey_logic_service_pb from '../../../web/survey/v1/survey_logic_service_pb';


export class SurveyLogicPageServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  logicPageSourceGetList(
    request: web_survey_v1_survey_logic_service_pb.LogicPageSourceGetListRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: web_survey_v1_survey_logic_service_pb.LogicPageSourceGetListResponse) => void
  ): grpcWeb.ClientReadableStream<web_survey_v1_survey_logic_service_pb.LogicPageSourceGetListResponse>;

  logicPageSourceCreate(
    request: web_survey_v1_survey_logic_service_pb.LogicPageSourceCreateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: web_survey_v1_survey_logic_service_pb.LogicPageSourceCreateResponse) => void
  ): grpcWeb.ClientReadableStream<web_survey_v1_survey_logic_service_pb.LogicPageSourceCreateResponse>;

  logicPageSourceUpdate(
    request: web_survey_v1_survey_logic_service_pb.LogicPageSourceUpdateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: web_survey_v1_survey_logic_service_pb.LogicPageSourceUpdateResponse) => void
  ): grpcWeb.ClientReadableStream<web_survey_v1_survey_logic_service_pb.LogicPageSourceUpdateResponse>;

  logicPageSourceDelete(
    request: web_survey_v1_survey_logic_service_pb.LogicPageSourceDeleteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: web_survey_v1_survey_logic_service_pb.LogicPageSourceDeleteResponse) => void
  ): grpcWeb.ClientReadableStream<web_survey_v1_survey_logic_service_pb.LogicPageSourceDeleteResponse>;

  logicPageGateGetList(
    request: web_survey_v1_survey_logic_service_pb.LogicPageGateGetListRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: web_survey_v1_survey_logic_service_pb.LogicPageGateGetListResponse) => void
  ): grpcWeb.ClientReadableStream<web_survey_v1_survey_logic_service_pb.LogicPageGateGetListResponse>;

  logicPageGateCreate(
    request: web_survey_v1_survey_logic_service_pb.LogicPageGateCreateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: web_survey_v1_survey_logic_service_pb.LogicPageGateCreateResponse) => void
  ): grpcWeb.ClientReadableStream<web_survey_v1_survey_logic_service_pb.LogicPageGateCreateResponse>;

  logicPageGateUpdate(
    request: web_survey_v1_survey_logic_service_pb.LogicPageGateUpdateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: web_survey_v1_survey_logic_service_pb.LogicPageGateUpdateResponse) => void
  ): grpcWeb.ClientReadableStream<web_survey_v1_survey_logic_service_pb.LogicPageGateUpdateResponse>;

  logicPageGateDelete(
    request: web_survey_v1_survey_logic_service_pb.LogicPageGateDeleteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: web_survey_v1_survey_logic_service_pb.LogicPageGateDeleteResponse) => void
  ): grpcWeb.ClientReadableStream<web_survey_v1_survey_logic_service_pb.LogicPageGateDeleteResponse>;

  logicPageActionGetList(
    request: web_survey_v1_survey_logic_service_pb.LogicPageActionGetListRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: web_survey_v1_survey_logic_service_pb.LogicPageActionGetListResponse) => void
  ): grpcWeb.ClientReadableStream<web_survey_v1_survey_logic_service_pb.LogicPageActionGetListResponse>;

  logicPageActionCreate(
    request: web_survey_v1_survey_logic_service_pb.LogicPageActionCreateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: web_survey_v1_survey_logic_service_pb.LogicPageActionCreateResponse) => void
  ): grpcWeb.ClientReadableStream<web_survey_v1_survey_logic_service_pb.LogicPageActionCreateResponse>;

  logicPageActionUpdate(
    request: web_survey_v1_survey_logic_service_pb.LogicPageActionUpdateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: web_survey_v1_survey_logic_service_pb.LogicPageActionUpdateResponse) => void
  ): grpcWeb.ClientReadableStream<web_survey_v1_survey_logic_service_pb.LogicPageActionUpdateResponse>;

  logicPageActionDelete(
    request: web_survey_v1_survey_logic_service_pb.LogicPageActionDeleteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: web_survey_v1_survey_logic_service_pb.LogicPageActionDeleteResponse) => void
  ): grpcWeb.ClientReadableStream<web_survey_v1_survey_logic_service_pb.LogicPageActionDeleteResponse>;

}

export class SurveyLogicPageServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  logicPageSourceGetList(
    request: web_survey_v1_survey_logic_service_pb.LogicPageSourceGetListRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_survey_v1_survey_logic_service_pb.LogicPageSourceGetListResponse>;

  logicPageSourceCreate(
    request: web_survey_v1_survey_logic_service_pb.LogicPageSourceCreateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_survey_v1_survey_logic_service_pb.LogicPageSourceCreateResponse>;

  logicPageSourceUpdate(
    request: web_survey_v1_survey_logic_service_pb.LogicPageSourceUpdateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_survey_v1_survey_logic_service_pb.LogicPageSourceUpdateResponse>;

  logicPageSourceDelete(
    request: web_survey_v1_survey_logic_service_pb.LogicPageSourceDeleteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_survey_v1_survey_logic_service_pb.LogicPageSourceDeleteResponse>;

  logicPageGateGetList(
    request: web_survey_v1_survey_logic_service_pb.LogicPageGateGetListRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_survey_v1_survey_logic_service_pb.LogicPageGateGetListResponse>;

  logicPageGateCreate(
    request: web_survey_v1_survey_logic_service_pb.LogicPageGateCreateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_survey_v1_survey_logic_service_pb.LogicPageGateCreateResponse>;

  logicPageGateUpdate(
    request: web_survey_v1_survey_logic_service_pb.LogicPageGateUpdateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_survey_v1_survey_logic_service_pb.LogicPageGateUpdateResponse>;

  logicPageGateDelete(
    request: web_survey_v1_survey_logic_service_pb.LogicPageGateDeleteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_survey_v1_survey_logic_service_pb.LogicPageGateDeleteResponse>;

  logicPageActionGetList(
    request: web_survey_v1_survey_logic_service_pb.LogicPageActionGetListRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_survey_v1_survey_logic_service_pb.LogicPageActionGetListResponse>;

  logicPageActionCreate(
    request: web_survey_v1_survey_logic_service_pb.LogicPageActionCreateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_survey_v1_survey_logic_service_pb.LogicPageActionCreateResponse>;

  logicPageActionUpdate(
    request: web_survey_v1_survey_logic_service_pb.LogicPageActionUpdateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_survey_v1_survey_logic_service_pb.LogicPageActionUpdateResponse>;

  logicPageActionDelete(
    request: web_survey_v1_survey_logic_service_pb.LogicPageActionDeleteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_survey_v1_survey_logic_service_pb.LogicPageActionDeleteResponse>;

}

