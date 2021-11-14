import * as grpcWeb from 'grpc-web';

import * as web_organization_v1_organization_usermanagement_service_pb from '../../../web/organization/v1/organization_usermanagement_service_pb';


export class OrganizationUserManagementServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getUsers(
    request: web_organization_v1_organization_usermanagement_service_pb.GetUsersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: web_organization_v1_organization_usermanagement_service_pb.GetUsersResponse) => void
  ): grpcWeb.ClientReadableStream<web_organization_v1_organization_usermanagement_service_pb.GetUsersResponse>;

  inviteUser(
    request: web_organization_v1_organization_usermanagement_service_pb.InviteUserRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: web_organization_v1_organization_usermanagement_service_pb.InviteUserResponse) => void
  ): grpcWeb.ClientReadableStream<web_organization_v1_organization_usermanagement_service_pb.InviteUserResponse>;

  removeUser(
    request: web_organization_v1_organization_usermanagement_service_pb.RemoveUserRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: web_organization_v1_organization_usermanagement_service_pb.RemoveUserResponse) => void
  ): grpcWeb.ClientReadableStream<web_organization_v1_organization_usermanagement_service_pb.RemoveUserResponse>;

}

export class OrganizationUserManagementServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getUsers(
    request: web_organization_v1_organization_usermanagement_service_pb.GetUsersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_organization_v1_organization_usermanagement_service_pb.GetUsersResponse>;

  inviteUser(
    request: web_organization_v1_organization_usermanagement_service_pb.InviteUserRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_organization_v1_organization_usermanagement_service_pb.InviteUserResponse>;

  removeUser(
    request: web_organization_v1_organization_usermanagement_service_pb.RemoveUserRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_organization_v1_organization_usermanagement_service_pb.RemoveUserResponse>;

}

