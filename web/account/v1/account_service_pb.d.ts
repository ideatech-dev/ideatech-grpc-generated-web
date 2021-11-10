// package: web.account.v1
// file: web/account/v1/account_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as web_account_v1_types_pb from "../../../web/account/v1/types_pb";

export class LoginRequest extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): LoginRequest;
    getPassword(): string;
    setPassword(value: string): LoginRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginRequest;
    static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
    export type AsObject = {
        email: string,
        password: string,
    }
}

export class LoginResponse extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): web_account_v1_types_pb.User | undefined;
    setUser(value?: web_account_v1_types_pb.User): LoginResponse;
    getAccessToken(): string;
    setAccessToken(value: string): LoginResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LoginResponse): LoginResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginResponse;
    static deserializeBinaryFromReader(message: LoginResponse, reader: jspb.BinaryReader): LoginResponse;
}

export namespace LoginResponse {
    export type AsObject = {
        user?: web_account_v1_types_pb.User.AsObject,
        accessToken: string,
    }
}

export class RegisterRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): RegisterRequest;
    getEmail(): string;
    setEmail(value: string): RegisterRequest;
    getPassword(): string;
    setPassword(value: string): RegisterRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterRequest): RegisterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterRequest;
    static deserializeBinaryFromReader(message: RegisterRequest, reader: jspb.BinaryReader): RegisterRequest;
}

export namespace RegisterRequest {
    export type AsObject = {
        name: string,
        email: string,
        password: string,
    }
}

export class RegisterResponse extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): web_account_v1_types_pb.User | undefined;
    setUser(value?: web_account_v1_types_pb.User): RegisterResponse;
    getAccessToken(): string;
    setAccessToken(value: string): RegisterResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterResponse): RegisterResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterResponse;
    static deserializeBinaryFromReader(message: RegisterResponse, reader: jspb.BinaryReader): RegisterResponse;
}

export namespace RegisterResponse {
    export type AsObject = {
        user?: web_account_v1_types_pb.User.AsObject,
        accessToken: string,
    }
}

export class AccountInformationRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccountInformationRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AccountInformationRequest): AccountInformationRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccountInformationRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccountInformationRequest;
    static deserializeBinaryFromReader(message: AccountInformationRequest, reader: jspb.BinaryReader): AccountInformationRequest;
}

export namespace AccountInformationRequest {
    export type AsObject = {
    }
}

export class AccountInformationResponse extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): web_account_v1_types_pb.User | undefined;
    setUser(value?: web_account_v1_types_pb.User): AccountInformationResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AccountInformationResponse.AsObject;
    static toObject(includeInstance: boolean, msg: AccountInformationResponse): AccountInformationResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AccountInformationResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AccountInformationResponse;
    static deserializeBinaryFromReader(message: AccountInformationResponse, reader: jspb.BinaryReader): AccountInformationResponse;
}

export namespace AccountInformationResponse {
    export type AsObject = {
        user?: web_account_v1_types_pb.User.AsObject,
    }
}
