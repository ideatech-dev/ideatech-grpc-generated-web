// package: web.organization.v1
// file: web/organization/v1/organization_usermanagement_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as web_account_v1_types_pb from "../../../web/account/v1/types_pb";

export class GetUsersRequest extends jspb.Message { 
    getOrganizationId(): number;
    setOrganizationId(value: number): GetUsersRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUsersRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUsersRequest): GetUsersRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUsersRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUsersRequest;
    static deserializeBinaryFromReader(message: GetUsersRequest, reader: jspb.BinaryReader): GetUsersRequest;
}

export namespace GetUsersRequest {
    export type AsObject = {
        organizationId: number,
    }
}

export class GetUsersResponse extends jspb.Message { 
    clearUsersList(): void;
    getUsersList(): Array<web_account_v1_types_pb.User>;
    setUsersList(value: Array<web_account_v1_types_pb.User>): GetUsersResponse;
    addUsers(value?: web_account_v1_types_pb.User, index?: number): web_account_v1_types_pb.User;
    getCount(): number;
    setCount(value: number): GetUsersResponse;
    getMaxPage(): number;
    setMaxPage(value: number): GetUsersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUsersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetUsersResponse): GetUsersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUsersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUsersResponse;
    static deserializeBinaryFromReader(message: GetUsersResponse, reader: jspb.BinaryReader): GetUsersResponse;
}

export namespace GetUsersResponse {
    export type AsObject = {
        usersList: Array<web_account_v1_types_pb.User.AsObject>,
        count: number,
        maxPage: number,
    }
}

export class InviteUserRequest extends jspb.Message { 
    getOrganizationId(): number;
    setOrganizationId(value: number): InviteUserRequest;
    getEmail(): string;
    setEmail(value: string): InviteUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InviteUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: InviteUserRequest): InviteUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InviteUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InviteUserRequest;
    static deserializeBinaryFromReader(message: InviteUserRequest, reader: jspb.BinaryReader): InviteUserRequest;
}

export namespace InviteUserRequest {
    export type AsObject = {
        organizationId: number,
        email: string,
    }
}

export class InviteUserResponse extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): web_account_v1_types_pb.User | undefined;
    setUser(value?: web_account_v1_types_pb.User): InviteUserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): InviteUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: InviteUserResponse): InviteUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: InviteUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): InviteUserResponse;
    static deserializeBinaryFromReader(message: InviteUserResponse, reader: jspb.BinaryReader): InviteUserResponse;
}

export namespace InviteUserResponse {
    export type AsObject = {
        user?: web_account_v1_types_pb.User.AsObject,
    }
}

export class RemoveUserRequest extends jspb.Message { 
    getOrganizationId(): number;
    setOrganizationId(value: number): RemoveUserRequest;
    getUserId(): number;
    setUserId(value: number): RemoveUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveUserRequest): RemoveUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveUserRequest;
    static deserializeBinaryFromReader(message: RemoveUserRequest, reader: jspb.BinaryReader): RemoveUserRequest;
}

export namespace RemoveUserRequest {
    export type AsObject = {
        organizationId: number,
        userId: number,
    }
}

export class RemoveUserResponse extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): web_account_v1_types_pb.User | undefined;
    setUser(value?: web_account_v1_types_pb.User): RemoveUserResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RemoveUserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: RemoveUserResponse): RemoveUserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RemoveUserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RemoveUserResponse;
    static deserializeBinaryFromReader(message: RemoveUserResponse, reader: jspb.BinaryReader): RemoveUserResponse;
}

export namespace RemoveUserResponse {
    export type AsObject = {
        user?: web_account_v1_types_pb.User.AsObject,
    }
}
