// package: web.survey.v1
// file: web/survey/v1/survey_logic_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as web_survey_v1_survey_logic_service_pb from "../../../web/survey/v1/survey_logic_service_pb";
import * as web_survey_v1_types_pb from "../../../web/survey/v1/types_pb";

interface ISurveyLogicPageServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    logicPageSourceGetList: ISurveyLogicPageServiceService_ILogicPageSourceGetList;
    logicPageSourceCreate: ISurveyLogicPageServiceService_ILogicPageSourceCreate;
    logicPageSourceUpdate: ISurveyLogicPageServiceService_ILogicPageSourceUpdate;
    logicPageSourceDelete: ISurveyLogicPageServiceService_ILogicPageSourceDelete;
    logicPageGateGetList: ISurveyLogicPageServiceService_ILogicPageGateGetList;
    logicPageGateCreate: ISurveyLogicPageServiceService_ILogicPageGateCreate;
    logicPageGateUpdate: ISurveyLogicPageServiceService_ILogicPageGateUpdate;
    logicPageGateDelete: ISurveyLogicPageServiceService_ILogicPageGateDelete;
    logicPageActionGetList: ISurveyLogicPageServiceService_ILogicPageActionGetList;
    logicPageActionCreate: ISurveyLogicPageServiceService_ILogicPageActionCreate;
    logicPageActionUpdate: ISurveyLogicPageServiceService_ILogicPageActionUpdate;
    logicPageActionDelete: ISurveyLogicPageServiceService_ILogicPageActionDelete;
}

interface ISurveyLogicPageServiceService_ILogicPageSourceGetList extends grpc.MethodDefinition<web_survey_v1_survey_logic_service_pb.LogicPageSourceGetListRequest, web_survey_v1_survey_logic_service_pb.LogicPageSourceGetListResponse> {
    path: "/web.survey.v1.SurveyLogicPageService/LogicPageSourceGetList";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_survey_v1_survey_logic_service_pb.LogicPageSourceGetListRequest>;
    requestDeserialize: grpc.deserialize<web_survey_v1_survey_logic_service_pb.LogicPageSourceGetListRequest>;
    responseSerialize: grpc.serialize<web_survey_v1_survey_logic_service_pb.LogicPageSourceGetListResponse>;
    responseDeserialize: grpc.deserialize<web_survey_v1_survey_logic_service_pb.LogicPageSourceGetListResponse>;
}
interface ISurveyLogicPageServiceService_ILogicPageSourceCreate extends grpc.MethodDefinition<web_survey_v1_survey_logic_service_pb.LogicPageSourceCreateRequest, web_survey_v1_survey_logic_service_pb.LogicPageSourceCreateResponse> {
    path: "/web.survey.v1.SurveyLogicPageService/LogicPageSourceCreate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_survey_v1_survey_logic_service_pb.LogicPageSourceCreateRequest>;
    requestDeserialize: grpc.deserialize<web_survey_v1_survey_logic_service_pb.LogicPageSourceCreateRequest>;
    responseSerialize: grpc.serialize<web_survey_v1_survey_logic_service_pb.LogicPageSourceCreateResponse>;
    responseDeserialize: grpc.deserialize<web_survey_v1_survey_logic_service_pb.LogicPageSourceCreateResponse>;
}
interface ISurveyLogicPageServiceService_ILogicPageSourceUpdate extends grpc.MethodDefinition<web_survey_v1_survey_logic_service_pb.LogicPageSourceUpdateRequest, web_survey_v1_survey_logic_service_pb.LogicPageSourceUpdateResponse> {
    path: "/web.survey.v1.SurveyLogicPageService/LogicPageSourceUpdate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_survey_v1_survey_logic_service_pb.LogicPageSourceUpdateRequest>;
    requestDeserialize: grpc.deserialize<web_survey_v1_survey_logic_service_pb.LogicPageSourceUpdateRequest>;
    responseSerialize: grpc.serialize<web_survey_v1_survey_logic_service_pb.LogicPageSourceUpdateResponse>;
    responseDeserialize: grpc.deserialize<web_survey_v1_survey_logic_service_pb.LogicPageSourceUpdateResponse>;
}
interface ISurveyLogicPageServiceService_ILogicPageSourceDelete extends grpc.MethodDefinition<web_survey_v1_survey_logic_service_pb.LogicPageSourceDeleteRequest, web_survey_v1_survey_logic_service_pb.LogicPageSourceDeleteResponse> {
    path: "/web.survey.v1.SurveyLogicPageService/LogicPageSourceDelete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_survey_v1_survey_logic_service_pb.LogicPageSourceDeleteRequest>;
    requestDeserialize: grpc.deserialize<web_survey_v1_survey_logic_service_pb.LogicPageSourceDeleteRequest>;
    responseSerialize: grpc.serialize<web_survey_v1_survey_logic_service_pb.LogicPageSourceDeleteResponse>;
    responseDeserialize: grpc.deserialize<web_survey_v1_survey_logic_service_pb.LogicPageSourceDeleteResponse>;
}
interface ISurveyLogicPageServiceService_ILogicPageGateGetList extends grpc.MethodDefinition<web_survey_v1_survey_logic_service_pb.LogicPageGateGetListRequest, web_survey_v1_survey_logic_service_pb.LogicPageGateGetListResponse> {
    path: "/web.survey.v1.SurveyLogicPageService/LogicPageGateGetList";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_survey_v1_survey_logic_service_pb.LogicPageGateGetListRequest>;
    requestDeserialize: grpc.deserialize<web_survey_v1_survey_logic_service_pb.LogicPageGateGetListRequest>;
    responseSerialize: grpc.serialize<web_survey_v1_survey_logic_service_pb.LogicPageGateGetListResponse>;
    responseDeserialize: grpc.deserialize<web_survey_v1_survey_logic_service_pb.LogicPageGateGetListResponse>;
}
interface ISurveyLogicPageServiceService_ILogicPageGateCreate extends grpc.MethodDefinition<web_survey_v1_survey_logic_service_pb.LogicPageGateCreateRequest, web_survey_v1_survey_logic_service_pb.LogicPageGateCreateResponse> {
    path: "/web.survey.v1.SurveyLogicPageService/LogicPageGateCreate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_survey_v1_survey_logic_service_pb.LogicPageGateCreateRequest>;
    requestDeserialize: grpc.deserialize<web_survey_v1_survey_logic_service_pb.LogicPageGateCreateRequest>;
    responseSerialize: grpc.serialize<web_survey_v1_survey_logic_service_pb.LogicPageGateCreateResponse>;
    responseDeserialize: grpc.deserialize<web_survey_v1_survey_logic_service_pb.LogicPageGateCreateResponse>;
}
interface ISurveyLogicPageServiceService_ILogicPageGateUpdate extends grpc.MethodDefinition<web_survey_v1_survey_logic_service_pb.LogicPageGateUpdateRequest, web_survey_v1_survey_logic_service_pb.LogicPageGateUpdateResponse> {
    path: "/web.survey.v1.SurveyLogicPageService/LogicPageGateUpdate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_survey_v1_survey_logic_service_pb.LogicPageGateUpdateRequest>;
    requestDeserialize: grpc.deserialize<web_survey_v1_survey_logic_service_pb.LogicPageGateUpdateRequest>;
    responseSerialize: grpc.serialize<web_survey_v1_survey_logic_service_pb.LogicPageGateUpdateResponse>;
    responseDeserialize: grpc.deserialize<web_survey_v1_survey_logic_service_pb.LogicPageGateUpdateResponse>;
}
interface ISurveyLogicPageServiceService_ILogicPageGateDelete extends grpc.MethodDefinition<web_survey_v1_survey_logic_service_pb.LogicPageGateDeleteRequest, web_survey_v1_survey_logic_service_pb.LogicPageGateDeleteResponse> {
    path: "/web.survey.v1.SurveyLogicPageService/LogicPageGateDelete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_survey_v1_survey_logic_service_pb.LogicPageGateDeleteRequest>;
    requestDeserialize: grpc.deserialize<web_survey_v1_survey_logic_service_pb.LogicPageGateDeleteRequest>;
    responseSerialize: grpc.serialize<web_survey_v1_survey_logic_service_pb.LogicPageGateDeleteResponse>;
    responseDeserialize: grpc.deserialize<web_survey_v1_survey_logic_service_pb.LogicPageGateDeleteResponse>;
}
interface ISurveyLogicPageServiceService_ILogicPageActionGetList extends grpc.MethodDefinition<web_survey_v1_survey_logic_service_pb.LogicPageActionGetListRequest, web_survey_v1_survey_logic_service_pb.LogicPageActionGetListResponse> {
    path: "/web.survey.v1.SurveyLogicPageService/LogicPageActionGetList";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_survey_v1_survey_logic_service_pb.LogicPageActionGetListRequest>;
    requestDeserialize: grpc.deserialize<web_survey_v1_survey_logic_service_pb.LogicPageActionGetListRequest>;
    responseSerialize: grpc.serialize<web_survey_v1_survey_logic_service_pb.LogicPageActionGetListResponse>;
    responseDeserialize: grpc.deserialize<web_survey_v1_survey_logic_service_pb.LogicPageActionGetListResponse>;
}
interface ISurveyLogicPageServiceService_ILogicPageActionCreate extends grpc.MethodDefinition<web_survey_v1_survey_logic_service_pb.LogicPageActionCreateRequest, web_survey_v1_survey_logic_service_pb.LogicPageActionCreateResponse> {
    path: "/web.survey.v1.SurveyLogicPageService/LogicPageActionCreate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_survey_v1_survey_logic_service_pb.LogicPageActionCreateRequest>;
    requestDeserialize: grpc.deserialize<web_survey_v1_survey_logic_service_pb.LogicPageActionCreateRequest>;
    responseSerialize: grpc.serialize<web_survey_v1_survey_logic_service_pb.LogicPageActionCreateResponse>;
    responseDeserialize: grpc.deserialize<web_survey_v1_survey_logic_service_pb.LogicPageActionCreateResponse>;
}
interface ISurveyLogicPageServiceService_ILogicPageActionUpdate extends grpc.MethodDefinition<web_survey_v1_survey_logic_service_pb.LogicPageActionUpdateRequest, web_survey_v1_survey_logic_service_pb.LogicPageActionUpdateResponse> {
    path: "/web.survey.v1.SurveyLogicPageService/LogicPageActionUpdate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_survey_v1_survey_logic_service_pb.LogicPageActionUpdateRequest>;
    requestDeserialize: grpc.deserialize<web_survey_v1_survey_logic_service_pb.LogicPageActionUpdateRequest>;
    responseSerialize: grpc.serialize<web_survey_v1_survey_logic_service_pb.LogicPageActionUpdateResponse>;
    responseDeserialize: grpc.deserialize<web_survey_v1_survey_logic_service_pb.LogicPageActionUpdateResponse>;
}
interface ISurveyLogicPageServiceService_ILogicPageActionDelete extends grpc.MethodDefinition<web_survey_v1_survey_logic_service_pb.LogicPageActionDeleteRequest, web_survey_v1_survey_logic_service_pb.LogicPageActionDeleteResponse> {
    path: "/web.survey.v1.SurveyLogicPageService/LogicPageActionDelete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<web_survey_v1_survey_logic_service_pb.LogicPageActionDeleteRequest>;
    requestDeserialize: grpc.deserialize<web_survey_v1_survey_logic_service_pb.LogicPageActionDeleteRequest>;
    responseSerialize: grpc.serialize<web_survey_v1_survey_logic_service_pb.LogicPageActionDeleteResponse>;
    responseDeserialize: grpc.deserialize<web_survey_v1_survey_logic_service_pb.LogicPageActionDeleteResponse>;
}

export const SurveyLogicPageServiceService: ISurveyLogicPageServiceService;

export interface ISurveyLogicPageServiceServer extends grpc.UntypedServiceImplementation {
    logicPageSourceGetList: grpc.handleUnaryCall<web_survey_v1_survey_logic_service_pb.LogicPageSourceGetListRequest, web_survey_v1_survey_logic_service_pb.LogicPageSourceGetListResponse>;
    logicPageSourceCreate: grpc.handleUnaryCall<web_survey_v1_survey_logic_service_pb.LogicPageSourceCreateRequest, web_survey_v1_survey_logic_service_pb.LogicPageSourceCreateResponse>;
    logicPageSourceUpdate: grpc.handleUnaryCall<web_survey_v1_survey_logic_service_pb.LogicPageSourceUpdateRequest, web_survey_v1_survey_logic_service_pb.LogicPageSourceUpdateResponse>;
    logicPageSourceDelete: grpc.handleUnaryCall<web_survey_v1_survey_logic_service_pb.LogicPageSourceDeleteRequest, web_survey_v1_survey_logic_service_pb.LogicPageSourceDeleteResponse>;
    logicPageGateGetList: grpc.handleUnaryCall<web_survey_v1_survey_logic_service_pb.LogicPageGateGetListRequest, web_survey_v1_survey_logic_service_pb.LogicPageGateGetListResponse>;
    logicPageGateCreate: grpc.handleUnaryCall<web_survey_v1_survey_logic_service_pb.LogicPageGateCreateRequest, web_survey_v1_survey_logic_service_pb.LogicPageGateCreateResponse>;
    logicPageGateUpdate: grpc.handleUnaryCall<web_survey_v1_survey_logic_service_pb.LogicPageGateUpdateRequest, web_survey_v1_survey_logic_service_pb.LogicPageGateUpdateResponse>;
    logicPageGateDelete: grpc.handleUnaryCall<web_survey_v1_survey_logic_service_pb.LogicPageGateDeleteRequest, web_survey_v1_survey_logic_service_pb.LogicPageGateDeleteResponse>;
    logicPageActionGetList: grpc.handleUnaryCall<web_survey_v1_survey_logic_service_pb.LogicPageActionGetListRequest, web_survey_v1_survey_logic_service_pb.LogicPageActionGetListResponse>;
    logicPageActionCreate: grpc.handleUnaryCall<web_survey_v1_survey_logic_service_pb.LogicPageActionCreateRequest, web_survey_v1_survey_logic_service_pb.LogicPageActionCreateResponse>;
    logicPageActionUpdate: grpc.handleUnaryCall<web_survey_v1_survey_logic_service_pb.LogicPageActionUpdateRequest, web_survey_v1_survey_logic_service_pb.LogicPageActionUpdateResponse>;
    logicPageActionDelete: grpc.handleUnaryCall<web_survey_v1_survey_logic_service_pb.LogicPageActionDeleteRequest, web_survey_v1_survey_logic_service_pb.LogicPageActionDeleteResponse>;
}

export interface ISurveyLogicPageServiceClient {
    logicPageSourceGetList(request: web_survey_v1_survey_logic_service_pb.LogicPageSourceGetListRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageSourceGetListResponse) => void): grpc.ClientUnaryCall;
    logicPageSourceGetList(request: web_survey_v1_survey_logic_service_pb.LogicPageSourceGetListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageSourceGetListResponse) => void): grpc.ClientUnaryCall;
    logicPageSourceGetList(request: web_survey_v1_survey_logic_service_pb.LogicPageSourceGetListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageSourceGetListResponse) => void): grpc.ClientUnaryCall;
    logicPageSourceCreate(request: web_survey_v1_survey_logic_service_pb.LogicPageSourceCreateRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageSourceCreateResponse) => void): grpc.ClientUnaryCall;
    logicPageSourceCreate(request: web_survey_v1_survey_logic_service_pb.LogicPageSourceCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageSourceCreateResponse) => void): grpc.ClientUnaryCall;
    logicPageSourceCreate(request: web_survey_v1_survey_logic_service_pb.LogicPageSourceCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageSourceCreateResponse) => void): grpc.ClientUnaryCall;
    logicPageSourceUpdate(request: web_survey_v1_survey_logic_service_pb.LogicPageSourceUpdateRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageSourceUpdateResponse) => void): grpc.ClientUnaryCall;
    logicPageSourceUpdate(request: web_survey_v1_survey_logic_service_pb.LogicPageSourceUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageSourceUpdateResponse) => void): grpc.ClientUnaryCall;
    logicPageSourceUpdate(request: web_survey_v1_survey_logic_service_pb.LogicPageSourceUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageSourceUpdateResponse) => void): grpc.ClientUnaryCall;
    logicPageSourceDelete(request: web_survey_v1_survey_logic_service_pb.LogicPageSourceDeleteRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageSourceDeleteResponse) => void): grpc.ClientUnaryCall;
    logicPageSourceDelete(request: web_survey_v1_survey_logic_service_pb.LogicPageSourceDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageSourceDeleteResponse) => void): grpc.ClientUnaryCall;
    logicPageSourceDelete(request: web_survey_v1_survey_logic_service_pb.LogicPageSourceDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageSourceDeleteResponse) => void): grpc.ClientUnaryCall;
    logicPageGateGetList(request: web_survey_v1_survey_logic_service_pb.LogicPageGateGetListRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageGateGetListResponse) => void): grpc.ClientUnaryCall;
    logicPageGateGetList(request: web_survey_v1_survey_logic_service_pb.LogicPageGateGetListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageGateGetListResponse) => void): grpc.ClientUnaryCall;
    logicPageGateGetList(request: web_survey_v1_survey_logic_service_pb.LogicPageGateGetListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageGateGetListResponse) => void): grpc.ClientUnaryCall;
    logicPageGateCreate(request: web_survey_v1_survey_logic_service_pb.LogicPageGateCreateRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageGateCreateResponse) => void): grpc.ClientUnaryCall;
    logicPageGateCreate(request: web_survey_v1_survey_logic_service_pb.LogicPageGateCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageGateCreateResponse) => void): grpc.ClientUnaryCall;
    logicPageGateCreate(request: web_survey_v1_survey_logic_service_pb.LogicPageGateCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageGateCreateResponse) => void): grpc.ClientUnaryCall;
    logicPageGateUpdate(request: web_survey_v1_survey_logic_service_pb.LogicPageGateUpdateRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageGateUpdateResponse) => void): grpc.ClientUnaryCall;
    logicPageGateUpdate(request: web_survey_v1_survey_logic_service_pb.LogicPageGateUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageGateUpdateResponse) => void): grpc.ClientUnaryCall;
    logicPageGateUpdate(request: web_survey_v1_survey_logic_service_pb.LogicPageGateUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageGateUpdateResponse) => void): grpc.ClientUnaryCall;
    logicPageGateDelete(request: web_survey_v1_survey_logic_service_pb.LogicPageGateDeleteRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageGateDeleteResponse) => void): grpc.ClientUnaryCall;
    logicPageGateDelete(request: web_survey_v1_survey_logic_service_pb.LogicPageGateDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageGateDeleteResponse) => void): grpc.ClientUnaryCall;
    logicPageGateDelete(request: web_survey_v1_survey_logic_service_pb.LogicPageGateDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageGateDeleteResponse) => void): grpc.ClientUnaryCall;
    logicPageActionGetList(request: web_survey_v1_survey_logic_service_pb.LogicPageActionGetListRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageActionGetListResponse) => void): grpc.ClientUnaryCall;
    logicPageActionGetList(request: web_survey_v1_survey_logic_service_pb.LogicPageActionGetListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageActionGetListResponse) => void): grpc.ClientUnaryCall;
    logicPageActionGetList(request: web_survey_v1_survey_logic_service_pb.LogicPageActionGetListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageActionGetListResponse) => void): grpc.ClientUnaryCall;
    logicPageActionCreate(request: web_survey_v1_survey_logic_service_pb.LogicPageActionCreateRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageActionCreateResponse) => void): grpc.ClientUnaryCall;
    logicPageActionCreate(request: web_survey_v1_survey_logic_service_pb.LogicPageActionCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageActionCreateResponse) => void): grpc.ClientUnaryCall;
    logicPageActionCreate(request: web_survey_v1_survey_logic_service_pb.LogicPageActionCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageActionCreateResponse) => void): grpc.ClientUnaryCall;
    logicPageActionUpdate(request: web_survey_v1_survey_logic_service_pb.LogicPageActionUpdateRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageActionUpdateResponse) => void): grpc.ClientUnaryCall;
    logicPageActionUpdate(request: web_survey_v1_survey_logic_service_pb.LogicPageActionUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageActionUpdateResponse) => void): grpc.ClientUnaryCall;
    logicPageActionUpdate(request: web_survey_v1_survey_logic_service_pb.LogicPageActionUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageActionUpdateResponse) => void): grpc.ClientUnaryCall;
    logicPageActionDelete(request: web_survey_v1_survey_logic_service_pb.LogicPageActionDeleteRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageActionDeleteResponse) => void): grpc.ClientUnaryCall;
    logicPageActionDelete(request: web_survey_v1_survey_logic_service_pb.LogicPageActionDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageActionDeleteResponse) => void): grpc.ClientUnaryCall;
    logicPageActionDelete(request: web_survey_v1_survey_logic_service_pb.LogicPageActionDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageActionDeleteResponse) => void): grpc.ClientUnaryCall;
}

export class SurveyLogicPageServiceClient extends grpc.Client implements ISurveyLogicPageServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public logicPageSourceGetList(request: web_survey_v1_survey_logic_service_pb.LogicPageSourceGetListRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageSourceGetListResponse) => void): grpc.ClientUnaryCall;
    public logicPageSourceGetList(request: web_survey_v1_survey_logic_service_pb.LogicPageSourceGetListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageSourceGetListResponse) => void): grpc.ClientUnaryCall;
    public logicPageSourceGetList(request: web_survey_v1_survey_logic_service_pb.LogicPageSourceGetListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageSourceGetListResponse) => void): grpc.ClientUnaryCall;
    public logicPageSourceCreate(request: web_survey_v1_survey_logic_service_pb.LogicPageSourceCreateRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageSourceCreateResponse) => void): grpc.ClientUnaryCall;
    public logicPageSourceCreate(request: web_survey_v1_survey_logic_service_pb.LogicPageSourceCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageSourceCreateResponse) => void): grpc.ClientUnaryCall;
    public logicPageSourceCreate(request: web_survey_v1_survey_logic_service_pb.LogicPageSourceCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageSourceCreateResponse) => void): grpc.ClientUnaryCall;
    public logicPageSourceUpdate(request: web_survey_v1_survey_logic_service_pb.LogicPageSourceUpdateRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageSourceUpdateResponse) => void): grpc.ClientUnaryCall;
    public logicPageSourceUpdate(request: web_survey_v1_survey_logic_service_pb.LogicPageSourceUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageSourceUpdateResponse) => void): grpc.ClientUnaryCall;
    public logicPageSourceUpdate(request: web_survey_v1_survey_logic_service_pb.LogicPageSourceUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageSourceUpdateResponse) => void): grpc.ClientUnaryCall;
    public logicPageSourceDelete(request: web_survey_v1_survey_logic_service_pb.LogicPageSourceDeleteRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageSourceDeleteResponse) => void): grpc.ClientUnaryCall;
    public logicPageSourceDelete(request: web_survey_v1_survey_logic_service_pb.LogicPageSourceDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageSourceDeleteResponse) => void): grpc.ClientUnaryCall;
    public logicPageSourceDelete(request: web_survey_v1_survey_logic_service_pb.LogicPageSourceDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageSourceDeleteResponse) => void): grpc.ClientUnaryCall;
    public logicPageGateGetList(request: web_survey_v1_survey_logic_service_pb.LogicPageGateGetListRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageGateGetListResponse) => void): grpc.ClientUnaryCall;
    public logicPageGateGetList(request: web_survey_v1_survey_logic_service_pb.LogicPageGateGetListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageGateGetListResponse) => void): grpc.ClientUnaryCall;
    public logicPageGateGetList(request: web_survey_v1_survey_logic_service_pb.LogicPageGateGetListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageGateGetListResponse) => void): grpc.ClientUnaryCall;
    public logicPageGateCreate(request: web_survey_v1_survey_logic_service_pb.LogicPageGateCreateRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageGateCreateResponse) => void): grpc.ClientUnaryCall;
    public logicPageGateCreate(request: web_survey_v1_survey_logic_service_pb.LogicPageGateCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageGateCreateResponse) => void): grpc.ClientUnaryCall;
    public logicPageGateCreate(request: web_survey_v1_survey_logic_service_pb.LogicPageGateCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageGateCreateResponse) => void): grpc.ClientUnaryCall;
    public logicPageGateUpdate(request: web_survey_v1_survey_logic_service_pb.LogicPageGateUpdateRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageGateUpdateResponse) => void): grpc.ClientUnaryCall;
    public logicPageGateUpdate(request: web_survey_v1_survey_logic_service_pb.LogicPageGateUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageGateUpdateResponse) => void): grpc.ClientUnaryCall;
    public logicPageGateUpdate(request: web_survey_v1_survey_logic_service_pb.LogicPageGateUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageGateUpdateResponse) => void): grpc.ClientUnaryCall;
    public logicPageGateDelete(request: web_survey_v1_survey_logic_service_pb.LogicPageGateDeleteRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageGateDeleteResponse) => void): grpc.ClientUnaryCall;
    public logicPageGateDelete(request: web_survey_v1_survey_logic_service_pb.LogicPageGateDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageGateDeleteResponse) => void): grpc.ClientUnaryCall;
    public logicPageGateDelete(request: web_survey_v1_survey_logic_service_pb.LogicPageGateDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageGateDeleteResponse) => void): grpc.ClientUnaryCall;
    public logicPageActionGetList(request: web_survey_v1_survey_logic_service_pb.LogicPageActionGetListRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageActionGetListResponse) => void): grpc.ClientUnaryCall;
    public logicPageActionGetList(request: web_survey_v1_survey_logic_service_pb.LogicPageActionGetListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageActionGetListResponse) => void): grpc.ClientUnaryCall;
    public logicPageActionGetList(request: web_survey_v1_survey_logic_service_pb.LogicPageActionGetListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageActionGetListResponse) => void): grpc.ClientUnaryCall;
    public logicPageActionCreate(request: web_survey_v1_survey_logic_service_pb.LogicPageActionCreateRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageActionCreateResponse) => void): grpc.ClientUnaryCall;
    public logicPageActionCreate(request: web_survey_v1_survey_logic_service_pb.LogicPageActionCreateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageActionCreateResponse) => void): grpc.ClientUnaryCall;
    public logicPageActionCreate(request: web_survey_v1_survey_logic_service_pb.LogicPageActionCreateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageActionCreateResponse) => void): grpc.ClientUnaryCall;
    public logicPageActionUpdate(request: web_survey_v1_survey_logic_service_pb.LogicPageActionUpdateRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageActionUpdateResponse) => void): grpc.ClientUnaryCall;
    public logicPageActionUpdate(request: web_survey_v1_survey_logic_service_pb.LogicPageActionUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageActionUpdateResponse) => void): grpc.ClientUnaryCall;
    public logicPageActionUpdate(request: web_survey_v1_survey_logic_service_pb.LogicPageActionUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageActionUpdateResponse) => void): grpc.ClientUnaryCall;
    public logicPageActionDelete(request: web_survey_v1_survey_logic_service_pb.LogicPageActionDeleteRequest, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageActionDeleteResponse) => void): grpc.ClientUnaryCall;
    public logicPageActionDelete(request: web_survey_v1_survey_logic_service_pb.LogicPageActionDeleteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageActionDeleteResponse) => void): grpc.ClientUnaryCall;
    public logicPageActionDelete(request: web_survey_v1_survey_logic_service_pb.LogicPageActionDeleteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: web_survey_v1_survey_logic_service_pb.LogicPageActionDeleteResponse) => void): grpc.ClientUnaryCall;
}
