import * as grpcWeb from 'grpc-web';

import * as account_v1_auth_pb from '../../account/v1/auth_pb';


export class AccountServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  login(
    request: account_v1_auth_pb.LoginRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: account_v1_auth_pb.LoginResponse) => void
  ): grpcWeb.ClientReadableStream<account_v1_auth_pb.LoginResponse>;

  register(
    request: account_v1_auth_pb.RegisterRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: account_v1_auth_pb.RegisterResponse) => void
  ): grpcWeb.ClientReadableStream<account_v1_auth_pb.RegisterResponse>;

  accountInformation(
    request: account_v1_auth_pb.AccountInformationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: account_v1_auth_pb.AccountInformationResponse) => void
  ): grpcWeb.ClientReadableStream<account_v1_auth_pb.AccountInformationResponse>;

}

export class AccountServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  login(
    request: account_v1_auth_pb.LoginRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<account_v1_auth_pb.LoginResponse>;

  register(
    request: account_v1_auth_pb.RegisterRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<account_v1_auth_pb.RegisterResponse>;

  accountInformation(
    request: account_v1_auth_pb.AccountInformationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<account_v1_auth_pb.AccountInformationResponse>;

}

