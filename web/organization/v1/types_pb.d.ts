// package: web.organization.v1
// file: web/organization/v1/types.proto

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
