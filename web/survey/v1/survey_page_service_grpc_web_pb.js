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
proto.web.survey.v1 = require('./survey_page_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.web.survey.v1.SurveyPageServiceClient =
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
proto.web.survey.v1.SurveyPageServicePromiseClient =
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
 *   !proto.web.survey.v1.PageGetOneRequest,
 *   !proto.web.survey.v1.PageGetOneResponse>}
 */
const methodDescriptor_SurveyPageService_PageGetOne = new grpc.web.MethodDescriptor(
  '/web.survey.v1.SurveyPageService/PageGetOne',
  grpc.web.MethodType.UNARY,
  proto.web.survey.v1.PageGetOneRequest,
  proto.web.survey.v1.PageGetOneResponse,
  /**
   * @param {!proto.web.survey.v1.PageGetOneRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.PageGetOneResponse.deserializeBinary
);


/**
 * @param {!proto.web.survey.v1.PageGetOneRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.web.survey.v1.PageGetOneResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.survey.v1.PageGetOneResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.survey.v1.SurveyPageServiceClient.prototype.pageGetOne =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.survey.v1.SurveyPageService/PageGetOne',
      request,
      metadata || {},
      methodDescriptor_SurveyPageService_PageGetOne,
      callback);
};


/**
 * @param {!proto.web.survey.v1.PageGetOneRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.survey.v1.PageGetOneResponse>}
 *     Promise that resolves to the response
 */
proto.web.survey.v1.SurveyPageServicePromiseClient.prototype.pageGetOne =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.survey.v1.SurveyPageService/PageGetOne',
      request,
      metadata || {},
      methodDescriptor_SurveyPageService_PageGetOne);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.survey.v1.PageGetAllRequest,
 *   !proto.web.survey.v1.PageGetAllResponse>}
 */
const methodDescriptor_SurveyPageService_PageGetAll = new grpc.web.MethodDescriptor(
  '/web.survey.v1.SurveyPageService/PageGetAll',
  grpc.web.MethodType.UNARY,
  proto.web.survey.v1.PageGetAllRequest,
  proto.web.survey.v1.PageGetAllResponse,
  /**
   * @param {!proto.web.survey.v1.PageGetAllRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.PageGetAllResponse.deserializeBinary
);


/**
 * @param {!proto.web.survey.v1.PageGetAllRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.web.survey.v1.PageGetAllResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.survey.v1.PageGetAllResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.survey.v1.SurveyPageServiceClient.prototype.pageGetAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.survey.v1.SurveyPageService/PageGetAll',
      request,
      metadata || {},
      methodDescriptor_SurveyPageService_PageGetAll,
      callback);
};


/**
 * @param {!proto.web.survey.v1.PageGetAllRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.survey.v1.PageGetAllResponse>}
 *     Promise that resolves to the response
 */
proto.web.survey.v1.SurveyPageServicePromiseClient.prototype.pageGetAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.survey.v1.SurveyPageService/PageGetAll',
      request,
      metadata || {},
      methodDescriptor_SurveyPageService_PageGetAll);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.survey.v1.PageCreateRequest,
 *   !proto.web.survey.v1.PageCreateResponse>}
 */
const methodDescriptor_SurveyPageService_PageCreate = new grpc.web.MethodDescriptor(
  '/web.survey.v1.SurveyPageService/PageCreate',
  grpc.web.MethodType.UNARY,
  proto.web.survey.v1.PageCreateRequest,
  proto.web.survey.v1.PageCreateResponse,
  /**
   * @param {!proto.web.survey.v1.PageCreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.PageCreateResponse.deserializeBinary
);


/**
 * @param {!proto.web.survey.v1.PageCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.web.survey.v1.PageCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.survey.v1.PageCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.survey.v1.SurveyPageServiceClient.prototype.pageCreate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.survey.v1.SurveyPageService/PageCreate',
      request,
      metadata || {},
      methodDescriptor_SurveyPageService_PageCreate,
      callback);
};


/**
 * @param {!proto.web.survey.v1.PageCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.survey.v1.PageCreateResponse>}
 *     Promise that resolves to the response
 */
proto.web.survey.v1.SurveyPageServicePromiseClient.prototype.pageCreate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.survey.v1.SurveyPageService/PageCreate',
      request,
      metadata || {},
      methodDescriptor_SurveyPageService_PageCreate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.survey.v1.PageDeleteRequest,
 *   !proto.web.survey.v1.PageDeleteResponse>}
 */
const methodDescriptor_SurveyPageService_PageDelete = new grpc.web.MethodDescriptor(
  '/web.survey.v1.SurveyPageService/PageDelete',
  grpc.web.MethodType.UNARY,
  proto.web.survey.v1.PageDeleteRequest,
  proto.web.survey.v1.PageDeleteResponse,
  /**
   * @param {!proto.web.survey.v1.PageDeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.PageDeleteResponse.deserializeBinary
);


/**
 * @param {!proto.web.survey.v1.PageDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.web.survey.v1.PageDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.survey.v1.PageDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.survey.v1.SurveyPageServiceClient.prototype.pageDelete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.survey.v1.SurveyPageService/PageDelete',
      request,
      metadata || {},
      methodDescriptor_SurveyPageService_PageDelete,
      callback);
};


/**
 * @param {!proto.web.survey.v1.PageDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.survey.v1.PageDeleteResponse>}
 *     Promise that resolves to the response
 */
proto.web.survey.v1.SurveyPageServicePromiseClient.prototype.pageDelete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.survey.v1.SurveyPageService/PageDelete',
      request,
      metadata || {},
      methodDescriptor_SurveyPageService_PageDelete);
};


module.exports = proto.web.survey.v1;

