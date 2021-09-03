// package: organization.v1
// file: organization/v1/organization.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class Organization extends jspb.Message { 
    getId(): number;
    setId(value: number): Organization;

    hasDatetimeCreated(): boolean;
    clearDatetimeCreated(): void;
    getDatetimeCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDatetimeCreated(value?: google_protobuf_timestamp_pb.Timestamp): Organization;

    hasDatetimeUpdated(): boolean;
    clearDatetimeUpdated(): void;
    getDatetimeUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDatetimeUpdated(value?: google_protobuf_timestamp_pb.Timestamp): Organization;
    getName(): string;
    setName(value: string): Organization;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Organization.AsObject;
    static toObject(includeInstance: boolean, msg: Organization): Organization.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Organization, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Organization;
    static deserializeBinaryFromReader(message: Organization, reader: jspb.BinaryReader): Organization;
}

export namespace Organization {
    export type AsObject = {
        id: number,
        datetimeCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        datetimeUpdated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        name: string,
    }
}

export class OrganizationCreateUpdate extends jspb.Message { 
    getName(): string;
    setName(value: string): OrganizationCreateUpdate;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OrganizationCreateUpdate.AsObject;
    static toObject(includeInstance: boolean, msg: OrganizationCreateUpdate): OrganizationCreateUpdate.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OrganizationCreateUpdate, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OrganizationCreateUpdate;
    static deserializeBinaryFromReader(message: OrganizationCreateUpdate, reader: jspb.BinaryReader): OrganizationCreateUpdate;
}

export namespace OrganizationCreateUpdate {
    export type AsObject = {
        name: string,
    }
}

export class GetOneRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): GetOneRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOneRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetOneRequest): GetOneRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOneRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOneRequest;
    static deserializeBinaryFromReader(message: GetOneRequest, reader: jspb.BinaryReader): GetOneRequest;
}

export namespace GetOneRequest {
    export type AsObject = {
        id: number,
    }
}

export class GetOneResponse extends jspb.Message { 

    hasOrganization(): boolean;
    clearOrganization(): void;
    getOrganization(): Organization | undefined;
    setOrganization(value?: Organization): GetOneResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetOneResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetOneResponse): GetOneResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetOneResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetOneResponse;
    static deserializeBinaryFromReader(message: GetOneResponse, reader: jspb.BinaryReader): GetOneResponse;
}

export namespace GetOneResponse {
    export type AsObject = {
        organization?: Organization.AsObject,
    }
}

export class GetListRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetListRequest): GetListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetListRequest;
    static deserializeBinaryFromReader(message: GetListRequest, reader: jspb.BinaryReader): GetListRequest;
}

export namespace GetListRequest {
    export type AsObject = {
    }
}

export class GetListResponse extends jspb.Message { 
    clearOrganizationList(): void;
    getOrganizationList(): Array<Organization>;
    setOrganizationList(value: Array<Organization>): GetListResponse;
    addOrganization(value?: Organization, index?: number): Organization;
    getCount(): number;
    setCount(value: number): GetListResponse;
    getMaxPage(): number;
    setMaxPage(value: number): GetListResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetListResponse): GetListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetListResponse;
    static deserializeBinaryFromReader(message: GetListResponse, reader: jspb.BinaryReader): GetListResponse;
}

export namespace GetListResponse {
    export type AsObject = {
        organizationList: Array<Organization.AsObject>,
        count: number,
        maxPage: number,
    }
}

export class CreateRequest extends jspb.Message { 

    hasOrganization(): boolean;
    clearOrganization(): void;
    getOrganization(): OrganizationCreateUpdate | undefined;
    setOrganization(value?: OrganizationCreateUpdate): CreateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateRequest): CreateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateRequest;
    static deserializeBinaryFromReader(message: CreateRequest, reader: jspb.BinaryReader): CreateRequest;
}

export namespace CreateRequest {
    export type AsObject = {
        organization?: OrganizationCreateUpdate.AsObject,
    }
}

export class CreateResponse extends jspb.Message { 

    hasOrganization(): boolean;
    clearOrganization(): void;
    getOrganization(): Organization | undefined;
    setOrganization(value?: Organization): CreateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: CreateResponse): CreateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateResponse;
    static deserializeBinaryFromReader(message: CreateResponse, reader: jspb.BinaryReader): CreateResponse;
}

export namespace CreateResponse {
    export type AsObject = {
        organization?: Organization.AsObject,
    }
}

export class UpdateRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): UpdateRequest;

    hasOrganization(): boolean;
    clearOrganization(): void;
    getOrganization(): OrganizationCreateUpdate | undefined;
    setOrganization(value?: OrganizationCreateUpdate): UpdateRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateRequest): UpdateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateRequest;
    static deserializeBinaryFromReader(message: UpdateRequest, reader: jspb.BinaryReader): UpdateRequest;
}

export namespace UpdateRequest {
    export type AsObject = {
        id: number,
        organization?: OrganizationCreateUpdate.AsObject,
    }
}

export class UpdateResponse extends jspb.Message { 

    hasOrganization(): boolean;
    clearOrganization(): void;
    getOrganization(): Organization | undefined;
    setOrganization(value?: Organization): UpdateResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateResponse): UpdateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateResponse;
    static deserializeBinaryFromReader(message: UpdateResponse, reader: jspb.BinaryReader): UpdateResponse;
}

export namespace UpdateResponse {
    export type AsObject = {
        organization?: Organization.AsObject,
    }
}

export class DeleteRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): DeleteRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteRequest): DeleteRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteRequest;
    static deserializeBinaryFromReader(message: DeleteRequest, reader: jspb.BinaryReader): DeleteRequest;
}

export namespace DeleteRequest {
    export type AsObject = {
        id: number,
    }
}

export class DeleteResponse extends jspb.Message { 

    hasOrganization(): boolean;
    clearOrganization(): void;
    getOrganization(): Organization | undefined;
    setOrganization(value?: Organization): DeleteResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteResponse): DeleteResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteResponse;
    static deserializeBinaryFromReader(message: DeleteResponse, reader: jspb.BinaryReader): DeleteResponse;
}

export namespace DeleteResponse {
    export type AsObject = {
        organization?: Organization.AsObject,
    }
}
