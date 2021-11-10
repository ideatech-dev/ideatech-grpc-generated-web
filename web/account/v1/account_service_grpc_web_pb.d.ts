import * as grpcWeb from 'grpc-web';

import * as web_account_v1_account_service_pb from '../../../web/account/v1/account_service_pb';


export class AccountServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  login(
    request: web_account_v1_account_service_pb.LoginRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: web_account_v1_account_service_pb.LoginResponse) => void
  ): grpcWeb.ClientReadableStream<web_account_v1_account_service_pb.LoginResponse>;

  register(
    request: web_account_v1_account_service_pb.RegisterRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: web_account_v1_account_service_pb.RegisterResponse) => void
  ): grpcWeb.ClientReadableStream<web_account_v1_account_service_pb.RegisterResponse>;

  accountInformation(
    request: web_account_v1_account_service_pb.AccountInformationRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: web_account_v1_account_service_pb.AccountInformationResponse) => void
  ): grpcWeb.ClientReadableStream<web_account_v1_account_service_pb.AccountInformationResponse>;

}

export class AccountServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  login(
    request: web_account_v1_account_service_pb.LoginRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_account_v1_account_service_pb.LoginResponse>;

  register(
    request: web_account_v1_account_service_pb.RegisterRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_account_v1_account_service_pb.RegisterResponse>;

  accountInformation(
    request: web_account_v1_account_service_pb.AccountInformationRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<web_account_v1_account_service_pb.AccountInformationResponse>;

}

