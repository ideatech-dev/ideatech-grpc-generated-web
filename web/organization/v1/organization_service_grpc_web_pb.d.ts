import * as grpcWeb from 'grpc-web';

import * as web_organization_v1_organization_service_pb from '../../../web/organization/v1/organization_service_pb';


export class OrganizationServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getOne(
    request: web_organization_v1_organization_service_pb.GetOneRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: web_organization_v1_organization_service_pb.GetOneResponse) => void
  ): grpcWeb.ClientReadableStream<web_organization_v1_organization_service_pb.GetOneResponse>;

  getList(
    request: web_organization_v1_organization_service_pb.GetListRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: web_organization_v1_organization_service_pb.GetListResponse) => void
  ): grpcWeb.ClientReadableStream<web_organization_v1_organization_service_pb.GetListResponse>;

  create(
    request: web_organization_v1_organization_service_pb.CreateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: web_organization_v1_organization_service_pb.CreateResponse) => void
  ): grpcWeb.ClientReadableStream<web_organization_v1_organization_service_pb.CreateResponse>;

  update(
    request: web_organization_v1_organization_service_pb.UpdateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: web_organization_v1_organization_service_pb.UpdateResponse) => void
  ): grpcWeb.ClientReadableStream<web_organization_v1_organization_service_pb.UpdateResponse>;

  delete(
    request: web_organization_v1_organization_service_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: web_organization_v1_organization_service_pb.DeleteResponse) => void
  ): grpcWeb.ClientReadableStream<web_organization_v1_organization_service_pb.DeleteResponse>;

}

export class OrganizationServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getOne(
    request: web_organization_v1_organization_service_pb.GetOneRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_organization_v1_organization_service_pb.GetOneResponse>;

  getList(
    request: web_organization_v1_organization_service_pb.GetListRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_organization_v1_organization_service_pb.GetListResponse>;

  create(
    request: web_organization_v1_organization_service_pb.CreateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_organization_v1_organization_service_pb.CreateResponse>;

  update(
    request: web_organization_v1_organization_service_pb.UpdateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_organization_v1_organization_service_pb.UpdateResponse>;

  delete(
    request: web_organization_v1_organization_service_pb.DeleteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_organization_v1_organization_service_pb.DeleteResponse>;

}

