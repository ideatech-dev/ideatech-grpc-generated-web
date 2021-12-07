/**
 * @fileoverview gRPC-Web generated client stub for web.survey.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var web_survey_v1_types_pb = require('../../../web/survey/v1/types_pb.js')
const proto = {};
proto.web = {};
proto.web.survey = {};
proto.web.survey.v1 = require('./survey_logic_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.web.survey.v1.SurveyLogicPageServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.web.survey.v1.SurveyLogicPageServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.survey.v1.LogicPageSourceGetListRequest,
 *   !proto.web.survey.v1.LogicPageSourceGetListResponse>}
 */
const methodDescriptor_SurveyLogicPageService_LogicPageSourceGetList = new grpc.web.MethodDescriptor(
  '/web.survey.v1.SurveyLogicPageService/LogicPageSourceGetList',
  grpc.web.MethodType.UNARY,
  proto.web.survey.v1.LogicPageSourceGetListRequest,
  proto.web.survey.v1.LogicPageSourceGetListResponse,
  /**
   * @param {!proto.web.survey.v1.LogicPageSourceGetListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.LogicPageSourceGetListResponse.deserializeBinary
);


/**
 * @param {!proto.web.survey.v1.LogicPageSourceGetListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.web.survey.v1.LogicPageSourceGetListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.survey.v1.LogicPageSourceGetListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.survey.v1.SurveyLogicPageServiceClient.prototype.logicPageSourceGetList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.survey.v1.SurveyLogicPageService/LogicPageSourceGetList',
      request,
      metadata || {},
      methodDescriptor_SurveyLogicPageService_LogicPageSourceGetList,
      callback);
};


/**
 * @param {!proto.web.survey.v1.LogicPageSourceGetListRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.survey.v1.LogicPageSourceGetListResponse>}
 *     Promise that resolves to the response
 */
proto.web.survey.v1.SurveyLogicPageServicePromiseClient.prototype.logicPageSourceGetList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.survey.v1.SurveyLogicPageService/LogicPageSourceGetList',
      request,
      metadata || {},
      methodDescriptor_SurveyLogicPageService_LogicPageSourceGetList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.survey.v1.LogicPageSourceCreateRequest,
 *   !proto.web.survey.v1.LogicPageSourceCreateResponse>}
 */
const methodDescriptor_SurveyLogicPageService_LogicPageSourceCreate = new grpc.web.MethodDescriptor(
  '/web.survey.v1.SurveyLogicPageService/LogicPageSourceCreate',
  grpc.web.MethodType.UNARY,
  proto.web.survey.v1.LogicPageSourceCreateRequest,
  proto.web.survey.v1.LogicPageSourceCreateResponse,
  /**
   * @param {!proto.web.survey.v1.LogicPageSourceCreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.LogicPageSourceCreateResponse.deserializeBinary
);


/**
 * @param {!proto.web.survey.v1.LogicPageSourceCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.web.survey.v1.LogicPageSourceCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.survey.v1.LogicPageSourceCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.survey.v1.SurveyLogicPageServiceClient.prototype.logicPageSourceCreate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.survey.v1.SurveyLogicPageService/LogicPageSourceCreate',
      request,
      metadata || {},
      methodDescriptor_SurveyLogicPageService_LogicPageSourceCreate,
      callback);
};


/**
 * @param {!proto.web.survey.v1.LogicPageSourceCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.survey.v1.LogicPageSourceCreateResponse>}
 *     Promise that resolves to the response
 */
proto.web.survey.v1.SurveyLogicPageServicePromiseClient.prototype.logicPageSourceCreate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.survey.v1.SurveyLogicPageService/LogicPageSourceCreate',
      request,
      metadata || {},
      methodDescriptor_SurveyLogicPageService_LogicPageSourceCreate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.survey.v1.LogicPageSourceUpdateRequest,
 *   !proto.web.survey.v1.LogicPageSourceUpdateResponse>}
 */
const methodDescriptor_SurveyLogicPageService_LogicPageSourceUpdate = new grpc.web.MethodDescriptor(
  '/web.survey.v1.SurveyLogicPageService/LogicPageSourceUpdate',
  grpc.web.MethodType.UNARY,
  proto.web.survey.v1.LogicPageSourceUpdateRequest,
  proto.web.survey.v1.LogicPageSourceUpdateResponse,
  /**
   * @param {!proto.web.survey.v1.LogicPageSourceUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.LogicPageSourceUpdateResponse.deserializeBinary
);


/**
 * @param {!proto.web.survey.v1.LogicPageSourceUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.web.survey.v1.LogicPageSourceUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.survey.v1.LogicPageSourceUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.survey.v1.SurveyLogicPageServiceClient.prototype.logicPageSourceUpdate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.survey.v1.SurveyLogicPageService/LogicPageSourceUpdate',
      request,
      metadata || {},
      methodDescriptor_SurveyLogicPageService_LogicPageSourceUpdate,
      callback);
};


/**
 * @param {!proto.web.survey.v1.LogicPageSourceUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.survey.v1.LogicPageSourceUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.web.survey.v1.SurveyLogicPageServicePromiseClient.prototype.logicPageSourceUpdate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.survey.v1.SurveyLogicPageService/LogicPageSourceUpdate',
      request,
      metadata || {},
      methodDescriptor_SurveyLogicPageService_LogicPageSourceUpdate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.survey.v1.LogicPageSourceDeleteRequest,
 *   !proto.web.survey.v1.LogicPageSourceDeleteResponse>}
 */
const methodDescriptor_SurveyLogicPageService_LogicPageSourceDelete = new grpc.web.MethodDescriptor(
  '/web.survey.v1.SurveyLogicPageService/LogicPageSourceDelete',
  grpc.web.MethodType.UNARY,
  proto.web.survey.v1.LogicPageSourceDeleteRequest,
  proto.web.survey.v1.LogicPageSourceDeleteResponse,
  /**
   * @param {!proto.web.survey.v1.LogicPageSourceDeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.LogicPageSourceDeleteResponse.deserializeBinary
);


/**
 * @param {!proto.web.survey.v1.LogicPageSourceDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.web.survey.v1.LogicPageSourceDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.survey.v1.LogicPageSourceDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.survey.v1.SurveyLogicPageServiceClient.prototype.logicPageSourceDelete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.survey.v1.SurveyLogicPageService/LogicPageSourceDelete',
      request,
      metadata || {},
      methodDescriptor_SurveyLogicPageService_LogicPageSourceDelete,
      callback);
};


/**
 * @param {!proto.web.survey.v1.LogicPageSourceDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.survey.v1.LogicPageSourceDeleteResponse>}
 *     Promise that resolves to the response
 */
proto.web.survey.v1.SurveyLogicPageServicePromiseClient.prototype.logicPageSourceDelete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.survey.v1.SurveyLogicPageService/LogicPageSourceDelete',
      request,
      metadata || {},
      methodDescriptor_SurveyLogicPageService_LogicPageSourceDelete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.survey.v1.LogicPageGateGetListRequest,
 *   !proto.web.survey.v1.LogicPageGateGetListResponse>}
 */
const methodDescriptor_SurveyLogicPageService_LogicPageGateGetList = new grpc.web.MethodDescriptor(
  '/web.survey.v1.SurveyLogicPageService/LogicPageGateGetList',
  grpc.web.MethodType.UNARY,
  proto.web.survey.v1.LogicPageGateGetListRequest,
  proto.web.survey.v1.LogicPageGateGetListResponse,
  /**
   * @param {!proto.web.survey.v1.LogicPageGateGetListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.LogicPageGateGetListResponse.deserializeBinary
);


/**
 * @param {!proto.web.survey.v1.LogicPageGateGetListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.web.survey.v1.LogicPageGateGetListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.survey.v1.LogicPageGateGetListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.survey.v1.SurveyLogicPageServiceClient.prototype.logicPageGateGetList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.survey.v1.SurveyLogicPageService/LogicPageGateGetList',
      request,
      metadata || {},
      methodDescriptor_SurveyLogicPageService_LogicPageGateGetList,
      callback);
};


/**
 * @param {!proto.web.survey.v1.LogicPageGateGetListRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.survey.v1.LogicPageGateGetListResponse>}
 *     Promise that resolves to the response
 */
proto.web.survey.v1.SurveyLogicPageServicePromiseClient.prototype.logicPageGateGetList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.survey.v1.SurveyLogicPageService/LogicPageGateGetList',
      request,
      metadata || {},
      methodDescriptor_SurveyLogicPageService_LogicPageGateGetList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.survey.v1.LogicPageGateCreateRequest,
 *   !proto.web.survey.v1.LogicPageGateCreateResponse>}
 */
const methodDescriptor_SurveyLogicPageService_LogicPageGateCreate = new grpc.web.MethodDescriptor(
  '/web.survey.v1.SurveyLogicPageService/LogicPageGateCreate',
  grpc.web.MethodType.UNARY,
  proto.web.survey.v1.LogicPageGateCreateRequest,
  proto.web.survey.v1.LogicPageGateCreateResponse,
  /**
   * @param {!proto.web.survey.v1.LogicPageGateCreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.LogicPageGateCreateResponse.deserializeBinary
);


/**
 * @param {!proto.web.survey.v1.LogicPageGateCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.web.survey.v1.LogicPageGateCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.survey.v1.LogicPageGateCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.survey.v1.SurveyLogicPageServiceClient.prototype.logicPageGateCreate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.survey.v1.SurveyLogicPageService/LogicPageGateCreate',
      request,
      metadata || {},
      methodDescriptor_SurveyLogicPageService_LogicPageGateCreate,
      callback);
};


/**
 * @param {!proto.web.survey.v1.LogicPageGateCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.survey.v1.LogicPageGateCreateResponse>}
 *     Promise that resolves to the response
 */
proto.web.survey.v1.SurveyLogicPageServicePromiseClient.prototype.logicPageGateCreate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.survey.v1.SurveyLogicPageService/LogicPageGateCreate',
      request,
      metadata || {},
      methodDescriptor_SurveyLogicPageService_LogicPageGateCreate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.survey.v1.LogicPageGateUpdateRequest,
 *   !proto.web.survey.v1.LogicPageGateUpdateResponse>}
 */
const methodDescriptor_SurveyLogicPageService_LogicPageGateUpdate = new grpc.web.MethodDescriptor(
  '/web.survey.v1.SurveyLogicPageService/LogicPageGateUpdate',
  grpc.web.MethodType.UNARY,
  proto.web.survey.v1.LogicPageGateUpdateRequest,
  proto.web.survey.v1.LogicPageGateUpdateResponse,
  /**
   * @param {!proto.web.survey.v1.LogicPageGateUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.LogicPageGateUpdateResponse.deserializeBinary
);


/**
 * @param {!proto.web.survey.v1.LogicPageGateUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.web.survey.v1.LogicPageGateUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.survey.v1.LogicPageGateUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.survey.v1.SurveyLogicPageServiceClient.prototype.logicPageGateUpdate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.survey.v1.SurveyLogicPageService/LogicPageGateUpdate',
      request,
      metadata || {},
      methodDescriptor_SurveyLogicPageService_LogicPageGateUpdate,
      callback);
};


/**
 * @param {!proto.web.survey.v1.LogicPageGateUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.survey.v1.LogicPageGateUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.web.survey.v1.SurveyLogicPageServicePromiseClient.prototype.logicPageGateUpdate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.survey.v1.SurveyLogicPageService/LogicPageGateUpdate',
      request,
      metadata || {},
      methodDescriptor_SurveyLogicPageService_LogicPageGateUpdate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.survey.v1.LogicPageGateDeleteRequest,
 *   !proto.web.survey.v1.LogicPageGateDeleteResponse>}
 */
const methodDescriptor_SurveyLogicPageService_LogicPageGateDelete = new grpc.web.MethodDescriptor(
  '/web.survey.v1.SurveyLogicPageService/LogicPageGateDelete',
  grpc.web.MethodType.UNARY,
  proto.web.survey.v1.LogicPageGateDeleteRequest,
  proto.web.survey.v1.LogicPageGateDeleteResponse,
  /**
   * @param {!proto.web.survey.v1.LogicPageGateDeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.LogicPageGateDeleteResponse.deserializeBinary
);


/**
 * @param {!proto.web.survey.v1.LogicPageGateDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.web.survey.v1.LogicPageGateDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.survey.v1.LogicPageGateDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.survey.v1.SurveyLogicPageServiceClient.prototype.logicPageGateDelete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.survey.v1.SurveyLogicPageService/LogicPageGateDelete',
      request,
      metadata || {},
      methodDescriptor_SurveyLogicPageService_LogicPageGateDelete,
      callback);
};


/**
 * @param {!proto.web.survey.v1.LogicPageGateDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.survey.v1.LogicPageGateDeleteResponse>}
 *     Promise that resolves to the response
 */
proto.web.survey.v1.SurveyLogicPageServicePromiseClient.prototype.logicPageGateDelete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.survey.v1.SurveyLogicPageService/LogicPageGateDelete',
      request,
      metadata || {},
      methodDescriptor_SurveyLogicPageService_LogicPageGateDelete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.survey.v1.LogicPageActionGetListRequest,
 *   !proto.web.survey.v1.LogicPageActionGetListResponse>}
 */
const methodDescriptor_SurveyLogicPageService_LogicPageActionGetList = new grpc.web.MethodDescriptor(
  '/web.survey.v1.SurveyLogicPageService/LogicPageActionGetList',
  grpc.web.MethodType.UNARY,
  proto.web.survey.v1.LogicPageActionGetListRequest,
  proto.web.survey.v1.LogicPageActionGetListResponse,
  /**
   * @param {!proto.web.survey.v1.LogicPageActionGetListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.LogicPageActionGetListResponse.deserializeBinary
);


/**
 * @param {!proto.web.survey.v1.LogicPageActionGetListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.web.survey.v1.LogicPageActionGetListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.survey.v1.LogicPageActionGetListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.survey.v1.SurveyLogicPageServiceClient.prototype.logicPageActionGetList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.survey.v1.SurveyLogicPageService/LogicPageActionGetList',
      request,
      metadata || {},
      methodDescriptor_SurveyLogicPageService_LogicPageActionGetList,
      callback);
};


/**
 * @param {!proto.web.survey.v1.LogicPageActionGetListRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.survey.v1.LogicPageActionGetListResponse>}
 *     Promise that resolves to the response
 */
proto.web.survey.v1.SurveyLogicPageServicePromiseClient.prototype.logicPageActionGetList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.survey.v1.SurveyLogicPageService/LogicPageActionGetList',
      request,
      metadata || {},
      methodDescriptor_SurveyLogicPageService_LogicPageActionGetList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.survey.v1.LogicPageActionCreateRequest,
 *   !proto.web.survey.v1.LogicPageActionCreateResponse>}
 */
const methodDescriptor_SurveyLogicPageService_LogicPageActionCreate = new grpc.web.MethodDescriptor(
  '/web.survey.v1.SurveyLogicPageService/LogicPageActionCreate',
  grpc.web.MethodType.UNARY,
  proto.web.survey.v1.LogicPageActionCreateRequest,
  proto.web.survey.v1.LogicPageActionCreateResponse,
  /**
   * @param {!proto.web.survey.v1.LogicPageActionCreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.LogicPageActionCreateResponse.deserializeBinary
);


/**
 * @param {!proto.web.survey.v1.LogicPageActionCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.web.survey.v1.LogicPageActionCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.survey.v1.LogicPageActionCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.survey.v1.SurveyLogicPageServiceClient.prototype.logicPageActionCreate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.survey.v1.SurveyLogicPageService/LogicPageActionCreate',
      request,
      metadata || {},
      methodDescriptor_SurveyLogicPageService_LogicPageActionCreate,
      callback);
};


/**
 * @param {!proto.web.survey.v1.LogicPageActionCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.survey.v1.LogicPageActionCreateResponse>}
 *     Promise that resolves to the response
 */
proto.web.survey.v1.SurveyLogicPageServicePromiseClient.prototype.logicPageActionCreate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.survey.v1.SurveyLogicPageService/LogicPageActionCreate',
      request,
      metadata || {},
      methodDescriptor_SurveyLogicPageService_LogicPageActionCreate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.survey.v1.LogicPageActionUpdateRequest,
 *   !proto.web.survey.v1.LogicPageActionUpdateResponse>}
 */
const methodDescriptor_SurveyLogicPageService_LogicPageActionUpdate = new grpc.web.MethodDescriptor(
  '/web.survey.v1.SurveyLogicPageService/LogicPageActionUpdate',
  grpc.web.MethodType.UNARY,
  proto.web.survey.v1.LogicPageActionUpdateRequest,
  proto.web.survey.v1.LogicPageActionUpdateResponse,
  /**
   * @param {!proto.web.survey.v1.LogicPageActionUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.LogicPageActionUpdateResponse.deserializeBinary
);


/**
 * @param {!proto.web.survey.v1.LogicPageActionUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.web.survey.v1.LogicPageActionUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.survey.v1.LogicPageActionUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.survey.v1.SurveyLogicPageServiceClient.prototype.logicPageActionUpdate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.survey.v1.SurveyLogicPageService/LogicPageActionUpdate',
      request,
      metadata || {},
      methodDescriptor_SurveyLogicPageService_LogicPageActionUpdate,
      callback);
};


/**
 * @param {!proto.web.survey.v1.LogicPageActionUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.survey.v1.LogicPageActionUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.web.survey.v1.SurveyLogicPageServicePromiseClient.prototype.logicPageActionUpdate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.survey.v1.SurveyLogicPageService/LogicPageActionUpdate',
      request,
      metadata || {},
      methodDescriptor_SurveyLogicPageService_LogicPageActionUpdate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.survey.v1.LogicPageActionDeleteRequest,
 *   !proto.web.survey.v1.LogicPageActionDeleteResponse>}
 */
const methodDescriptor_SurveyLogicPageService_LogicPageActionDelete = new grpc.web.MethodDescriptor(
  '/web.survey.v1.SurveyLogicPageService/LogicPageActionDelete',
  grpc.web.MethodType.UNARY,
  proto.web.survey.v1.LogicPageActionDeleteRequest,
  proto.web.survey.v1.LogicPageActionDeleteResponse,
  /**
   * @param {!proto.web.survey.v1.LogicPageActionDeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.LogicPageActionDeleteResponse.deserializeBinary
);


/**
 * @param {!proto.web.survey.v1.LogicPageActionDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.web.survey.v1.LogicPageActionDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.survey.v1.LogicPageActionDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.survey.v1.SurveyLogicPageServiceClient.prototype.logicPageActionDelete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.survey.v1.SurveyLogicPageService/LogicPageActionDelete',
      request,
      metadata || {},
      methodDescriptor_SurveyLogicPageService_LogicPageActionDelete,
      callback);
};


/**
 * @param {!proto.web.survey.v1.LogicPageActionDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.survey.v1.LogicPageActionDeleteResponse>}
 *     Promise that resolves to the response
 */
proto.web.survey.v1.SurveyLogicPageServicePromiseClient.prototype.logicPageActionDelete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.survey.v1.SurveyLogicPageService/LogicPageActionDelete',
      request,
      metadata || {},
      methodDescriptor_SurveyLogicPageService_LogicPageActionDelete);
};


module.exports = proto.web.survey.v1;

