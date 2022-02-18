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
proto.web.survey.v1 = require('./survey_redirect_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.web.survey.v1.SurveyRedirectServiceClient =
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
proto.web.survey.v1.SurveyRedirectServicePromiseClient =
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
 *   !proto.web.survey.v1.SurveyRedirectGetOneRequest,
 *   !proto.web.survey.v1.SurveyRedirectGetOneResponse>}
 */
const methodDescriptor_SurveyRedirectService_SurveyRedirectGetOne = new grpc.web.MethodDescriptor(
  '/web.survey.v1.SurveyRedirectService/SurveyRedirectGetOne',
  grpc.web.MethodType.UNARY,
  proto.web.survey.v1.SurveyRedirectGetOneRequest,
  proto.web.survey.v1.SurveyRedirectGetOneResponse,
  /**
   * @param {!proto.web.survey.v1.SurveyRedirectGetOneRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.SurveyRedirectGetOneResponse.deserializeBinary
);


/**
 * @param {!proto.web.survey.v1.SurveyRedirectGetOneRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.web.survey.v1.SurveyRedirectGetOneResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.survey.v1.SurveyRedirectGetOneResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.survey.v1.SurveyRedirectServiceClient.prototype.surveyRedirectGetOne =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.survey.v1.SurveyRedirectService/SurveyRedirectGetOne',
      request,
      metadata || {},
      methodDescriptor_SurveyRedirectService_SurveyRedirectGetOne,
      callback);
};


/**
 * @param {!proto.web.survey.v1.SurveyRedirectGetOneRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.survey.v1.SurveyRedirectGetOneResponse>}
 *     Promise that resolves to the response
 */
proto.web.survey.v1.SurveyRedirectServicePromiseClient.prototype.surveyRedirectGetOne =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.survey.v1.SurveyRedirectService/SurveyRedirectGetOne',
      request,
      metadata || {},
      methodDescriptor_SurveyRedirectService_SurveyRedirectGetOne);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.survey.v1.SurveyRedirectCreateRequest,
 *   !proto.web.survey.v1.SurveyRedirectCreateResponse>}
 */
const methodDescriptor_SurveyRedirectService_SurveyRedirectCreate = new grpc.web.MethodDescriptor(
  '/web.survey.v1.SurveyRedirectService/SurveyRedirectCreate',
  grpc.web.MethodType.UNARY,
  proto.web.survey.v1.SurveyRedirectCreateRequest,
  proto.web.survey.v1.SurveyRedirectCreateResponse,
  /**
   * @param {!proto.web.survey.v1.SurveyRedirectCreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.SurveyRedirectCreateResponse.deserializeBinary
);


/**
 * @param {!proto.web.survey.v1.SurveyRedirectCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.web.survey.v1.SurveyRedirectCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.survey.v1.SurveyRedirectCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.survey.v1.SurveyRedirectServiceClient.prototype.surveyRedirectCreate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.survey.v1.SurveyRedirectService/SurveyRedirectCreate',
      request,
      metadata || {},
      methodDescriptor_SurveyRedirectService_SurveyRedirectCreate,
      callback);
};


/**
 * @param {!proto.web.survey.v1.SurveyRedirectCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.survey.v1.SurveyRedirectCreateResponse>}
 *     Promise that resolves to the response
 */
proto.web.survey.v1.SurveyRedirectServicePromiseClient.prototype.surveyRedirectCreate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.survey.v1.SurveyRedirectService/SurveyRedirectCreate',
      request,
      metadata || {},
      methodDescriptor_SurveyRedirectService_SurveyRedirectCreate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.survey.v1.SurveyRedirectUpdateRequest,
 *   !proto.web.survey.v1.SurveyRedirectUpdateResponse>}
 */
const methodDescriptor_SurveyRedirectService_SurveyRedirectUpdate = new grpc.web.MethodDescriptor(
  '/web.survey.v1.SurveyRedirectService/SurveyRedirectUpdate',
  grpc.web.MethodType.UNARY,
  proto.web.survey.v1.SurveyRedirectUpdateRequest,
  proto.web.survey.v1.SurveyRedirectUpdateResponse,
  /**
   * @param {!proto.web.survey.v1.SurveyRedirectUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.SurveyRedirectUpdateResponse.deserializeBinary
);


/**
 * @param {!proto.web.survey.v1.SurveyRedirectUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.web.survey.v1.SurveyRedirectUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.survey.v1.SurveyRedirectUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.survey.v1.SurveyRedirectServiceClient.prototype.surveyRedirectUpdate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.survey.v1.SurveyRedirectService/SurveyRedirectUpdate',
      request,
      metadata || {},
      methodDescriptor_SurveyRedirectService_SurveyRedirectUpdate,
      callback);
};


/**
 * @param {!proto.web.survey.v1.SurveyRedirectUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.survey.v1.SurveyRedirectUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.web.survey.v1.SurveyRedirectServicePromiseClient.prototype.surveyRedirectUpdate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.survey.v1.SurveyRedirectService/SurveyRedirectUpdate',
      request,
      metadata || {},
      methodDescriptor_SurveyRedirectService_SurveyRedirectUpdate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.survey.v1.SurveyRedirectDeleteRequest,
 *   !proto.web.survey.v1.SurveyRedirectDeleteResponse>}
 */
const methodDescriptor_SurveyRedirectService_SurveyRedirectDelete = new grpc.web.MethodDescriptor(
  '/web.survey.v1.SurveyRedirectService/SurveyRedirectDelete',
  grpc.web.MethodType.UNARY,
  proto.web.survey.v1.SurveyRedirectDeleteRequest,
  proto.web.survey.v1.SurveyRedirectDeleteResponse,
  /**
   * @param {!proto.web.survey.v1.SurveyRedirectDeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.SurveyRedirectDeleteResponse.deserializeBinary
);


/**
 * @param {!proto.web.survey.v1.SurveyRedirectDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.web.survey.v1.SurveyRedirectDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.survey.v1.SurveyRedirectDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.survey.v1.SurveyRedirectServiceClient.prototype.surveyRedirectDelete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.survey.v1.SurveyRedirectService/SurveyRedirectDelete',
      request,
      metadata || {},
      methodDescriptor_SurveyRedirectService_SurveyRedirectDelete,
      callback);
};


/**
 * @param {!proto.web.survey.v1.SurveyRedirectDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.survey.v1.SurveyRedirectDeleteResponse>}
 *     Promise that resolves to the response
 */
proto.web.survey.v1.SurveyRedirectServicePromiseClient.prototype.surveyRedirectDelete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.survey.v1.SurveyRedirectService/SurveyRedirectDelete',
      request,
      metadata || {},
      methodDescriptor_SurveyRedirectService_SurveyRedirectDelete);
};


module.exports = proto.web.survey.v1;

