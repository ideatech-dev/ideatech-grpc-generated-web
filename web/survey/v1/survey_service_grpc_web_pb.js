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
proto.web.survey.v1 = require('./survey_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.web.survey.v1.SurveyServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

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
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.web.survey.v1.SurveyServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

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
 *   !proto.web.survey.v1.SurveyGetOneRequest,
 *   !proto.web.survey.v1.SurveyGetOneResponse>}
 */
const methodDescriptor_SurveyService_SurveyGetOne = new grpc.web.MethodDescriptor(
  '/web.survey.v1.SurveyService/SurveyGetOne',
  grpc.web.MethodType.UNARY,
  proto.web.survey.v1.SurveyGetOneRequest,
  proto.web.survey.v1.SurveyGetOneResponse,
  /**
   * @param {!proto.web.survey.v1.SurveyGetOneRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.SurveyGetOneResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.web.survey.v1.SurveyGetOneRequest,
 *   !proto.web.survey.v1.SurveyGetOneResponse>}
 */
const methodInfo_SurveyService_SurveyGetOne = new grpc.web.AbstractClientBase.MethodInfo(
  proto.web.survey.v1.SurveyGetOneResponse,
  /**
   * @param {!proto.web.survey.v1.SurveyGetOneRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.SurveyGetOneResponse.deserializeBinary
);


/**
 * @param {!proto.web.survey.v1.SurveyGetOneRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.web.survey.v1.SurveyGetOneResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.survey.v1.SurveyGetOneResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.survey.v1.SurveyServiceClient.prototype.surveyGetOne =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.survey.v1.SurveyService/SurveyGetOne',
      request,
      metadata || {},
      methodDescriptor_SurveyService_SurveyGetOne,
      callback);
};


/**
 * @param {!proto.web.survey.v1.SurveyGetOneRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.survey.v1.SurveyGetOneResponse>}
 *     Promise that resolves to the response
 */
proto.web.survey.v1.SurveyServicePromiseClient.prototype.surveyGetOne =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.survey.v1.SurveyService/SurveyGetOne',
      request,
      metadata || {},
      methodDescriptor_SurveyService_SurveyGetOne);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.survey.v1.SurveyGetAllRequest,
 *   !proto.web.survey.v1.SurveyGetAllResponse>}
 */
const methodDescriptor_SurveyService_SurveyGetAll = new grpc.web.MethodDescriptor(
  '/web.survey.v1.SurveyService/SurveyGetAll',
  grpc.web.MethodType.UNARY,
  proto.web.survey.v1.SurveyGetAllRequest,
  proto.web.survey.v1.SurveyGetAllResponse,
  /**
   * @param {!proto.web.survey.v1.SurveyGetAllRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.SurveyGetAllResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.web.survey.v1.SurveyGetAllRequest,
 *   !proto.web.survey.v1.SurveyGetAllResponse>}
 */
const methodInfo_SurveyService_SurveyGetAll = new grpc.web.AbstractClientBase.MethodInfo(
  proto.web.survey.v1.SurveyGetAllResponse,
  /**
   * @param {!proto.web.survey.v1.SurveyGetAllRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.SurveyGetAllResponse.deserializeBinary
);


/**
 * @param {!proto.web.survey.v1.SurveyGetAllRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.web.survey.v1.SurveyGetAllResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.survey.v1.SurveyGetAllResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.survey.v1.SurveyServiceClient.prototype.surveyGetAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.survey.v1.SurveyService/SurveyGetAll',
      request,
      metadata || {},
      methodDescriptor_SurveyService_SurveyGetAll,
      callback);
};


/**
 * @param {!proto.web.survey.v1.SurveyGetAllRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.survey.v1.SurveyGetAllResponse>}
 *     Promise that resolves to the response
 */
proto.web.survey.v1.SurveyServicePromiseClient.prototype.surveyGetAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.survey.v1.SurveyService/SurveyGetAll',
      request,
      metadata || {},
      methodDescriptor_SurveyService_SurveyGetAll);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.survey.v1.SurveyCreateRequest,
 *   !proto.web.survey.v1.SurveyCreateResponse>}
 */
const methodDescriptor_SurveyService_SurveyCreate = new grpc.web.MethodDescriptor(
  '/web.survey.v1.SurveyService/SurveyCreate',
  grpc.web.MethodType.UNARY,
  proto.web.survey.v1.SurveyCreateRequest,
  proto.web.survey.v1.SurveyCreateResponse,
  /**
   * @param {!proto.web.survey.v1.SurveyCreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.SurveyCreateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.web.survey.v1.SurveyCreateRequest,
 *   !proto.web.survey.v1.SurveyCreateResponse>}
 */
const methodInfo_SurveyService_SurveyCreate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.web.survey.v1.SurveyCreateResponse,
  /**
   * @param {!proto.web.survey.v1.SurveyCreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.SurveyCreateResponse.deserializeBinary
);


/**
 * @param {!proto.web.survey.v1.SurveyCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.web.survey.v1.SurveyCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.survey.v1.SurveyCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.survey.v1.SurveyServiceClient.prototype.surveyCreate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.survey.v1.SurveyService/SurveyCreate',
      request,
      metadata || {},
      methodDescriptor_SurveyService_SurveyCreate,
      callback);
};


/**
 * @param {!proto.web.survey.v1.SurveyCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.survey.v1.SurveyCreateResponse>}
 *     Promise that resolves to the response
 */
proto.web.survey.v1.SurveyServicePromiseClient.prototype.surveyCreate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.survey.v1.SurveyService/SurveyCreate',
      request,
      metadata || {},
      methodDescriptor_SurveyService_SurveyCreate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.survey.v1.SurveyUpdateRequest,
 *   !proto.web.survey.v1.SurveyUpdateResponse>}
 */
const methodDescriptor_SurveyService_SurveyUpdate = new grpc.web.MethodDescriptor(
  '/web.survey.v1.SurveyService/SurveyUpdate',
  grpc.web.MethodType.UNARY,
  proto.web.survey.v1.SurveyUpdateRequest,
  proto.web.survey.v1.SurveyUpdateResponse,
  /**
   * @param {!proto.web.survey.v1.SurveyUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.SurveyUpdateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.web.survey.v1.SurveyUpdateRequest,
 *   !proto.web.survey.v1.SurveyUpdateResponse>}
 */
const methodInfo_SurveyService_SurveyUpdate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.web.survey.v1.SurveyUpdateResponse,
  /**
   * @param {!proto.web.survey.v1.SurveyUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.SurveyUpdateResponse.deserializeBinary
);


/**
 * @param {!proto.web.survey.v1.SurveyUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.web.survey.v1.SurveyUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.survey.v1.SurveyUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.survey.v1.SurveyServiceClient.prototype.surveyUpdate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.survey.v1.SurveyService/SurveyUpdate',
      request,
      metadata || {},
      methodDescriptor_SurveyService_SurveyUpdate,
      callback);
};


/**
 * @param {!proto.web.survey.v1.SurveyUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.survey.v1.SurveyUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.web.survey.v1.SurveyServicePromiseClient.prototype.surveyUpdate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.survey.v1.SurveyService/SurveyUpdate',
      request,
      metadata || {},
      methodDescriptor_SurveyService_SurveyUpdate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.survey.v1.SurveyDeleteRequest,
 *   !proto.web.survey.v1.SurveyDeleteResponse>}
 */
const methodDescriptor_SurveyService_SurveyDelete = new grpc.web.MethodDescriptor(
  '/web.survey.v1.SurveyService/SurveyDelete',
  grpc.web.MethodType.UNARY,
  proto.web.survey.v1.SurveyDeleteRequest,
  proto.web.survey.v1.SurveyDeleteResponse,
  /**
   * @param {!proto.web.survey.v1.SurveyDeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.SurveyDeleteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.web.survey.v1.SurveyDeleteRequest,
 *   !proto.web.survey.v1.SurveyDeleteResponse>}
 */
const methodInfo_SurveyService_SurveyDelete = new grpc.web.AbstractClientBase.MethodInfo(
  proto.web.survey.v1.SurveyDeleteResponse,
  /**
   * @param {!proto.web.survey.v1.SurveyDeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.SurveyDeleteResponse.deserializeBinary
);


/**
 * @param {!proto.web.survey.v1.SurveyDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.web.survey.v1.SurveyDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.survey.v1.SurveyDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.survey.v1.SurveyServiceClient.prototype.surveyDelete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.survey.v1.SurveyService/SurveyDelete',
      request,
      metadata || {},
      methodDescriptor_SurveyService_SurveyDelete,
      callback);
};


/**
 * @param {!proto.web.survey.v1.SurveyDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.survey.v1.SurveyDeleteResponse>}
 *     Promise that resolves to the response
 */
proto.web.survey.v1.SurveyServicePromiseClient.prototype.surveyDelete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.survey.v1.SurveyService/SurveyDelete',
      request,
      metadata || {},
      methodDescriptor_SurveyService_SurveyDelete);
};


module.exports = proto.web.survey.v1;

