import * as grpcWeb from 'grpc-web';

import * as organization_v1_organization_pb from '../../organization/v1/organization_pb';
import * as organization_v1_organization_user_pb from '../../organization/v1/organization_user_pb';


export class OrganizationServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getOne(
    request: organization_v1_organization_pb.GetOneRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: organization_v1_organization_pb.GetOneResponse) => void
  ): grpcWeb.ClientReadableStream<organization_v1_organization_pb.GetOneResponse>;

  getList(
    request: organization_v1_organization_pb.GetListRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: organization_v1_organization_pb.GetListResponse) => void
  ): grpcWeb.ClientReadableStream<organization_v1_organization_pb.GetListResponse>;

  create(
    request: organization_v1_organization_pb.CreateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: organization_v1_organization_pb.CreateResponse) => void
  ): grpcWeb.ClientReadableStream<organization_v1_organization_pb.CreateResponse>;

  update(
    request: organization_v1_organization_pb.UpdateRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: organization_v1_organization_pb.UpdateResponse) => void
  ): grpcWeb.ClientReadableStream<organization_v1_organization_pb.UpdateResponse>;

  delete(
    request: organization_v1_organization_pb.DeleteRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: organization_v1_organization_pb.DeleteResponse) => void
  ): grpcWeb.ClientReadableStream<organization_v1_organization_pb.DeleteResponse>;

  getUsers(
    request: organization_v1_organization_user_pb.GetUsersRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: organization_v1_organization_user_pb.GetUsersResponse) => void
  ): grpcWeb.ClientReadableStream<organization_v1_organization_user_pb.GetUsersResponse>;

  inviteUser(
    request: organization_v1_organization_user_pb.InviteUserRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: organization_v1_organization_user_pb.InviteUserResponse) => void
  ): grpcWeb.ClientReadableStream<organization_v1_organization_user_pb.InviteUserResponse>;

  removeUser(
    request: organization_v1_organization_user_pb.RemoveUserRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: organization_v1_organization_user_pb.RemoveUserResponse) => void
  ): grpcWeb.ClientReadableStream<organization_v1_organization_user_pb.RemoveUserResponse>;

}

export class OrganizationServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  getOne(
    request: organization_v1_organization_pb.GetOneRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<organization_v1_organization_pb.GetOneResponse>;

  getList(
    request: organization_v1_organization_pb.GetListRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<organization_v1_organization_pb.GetListResponse>;

  create(
    request: organization_v1_organization_pb.CreateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<organization_v1_organization_pb.CreateResponse>;

  update(
    request: organization_v1_organization_pb.UpdateRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<organization_v1_organization_pb.UpdateResponse>;

  delete(
    request: organization_v1_organization_pb.DeleteRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<organization_v1_organization_pb.DeleteResponse>;

  getUsers(
    request: organization_v1_organization_user_pb.GetUsersRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<organization_v1_organization_user_pb.GetUsersResponse>;

  inviteUser(
    request: organization_v1_organization_user_pb.InviteUserRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<organization_v1_organization_user_pb.InviteUserResponse>;

  removeUser(
    request: organization_v1_organization_user_pb.RemoveUserRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<organization_v1_organization_user_pb.RemoveUserResponse>;

}

