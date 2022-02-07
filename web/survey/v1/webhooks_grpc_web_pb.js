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
proto.web.survey.v1 = require('./webhooks_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.web.survey.v1.WebhookServiceClient =
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
proto.web.survey.v1.WebhookServicePromiseClient =
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
 *   !proto.web.survey.v1.WebhookGetOneRequest,
 *   !proto.web.survey.v1.WebhookGetOneResponse>}
 */
const methodDescriptor_WebhookService_WebhookGetOne = new grpc.web.MethodDescriptor(
  '/web.survey.v1.WebhookService/WebhookGetOne',
  grpc.web.MethodType.UNARY,
  proto.web.survey.v1.WebhookGetOneRequest,
  proto.web.survey.v1.WebhookGetOneResponse,
  /**
   * @param {!proto.web.survey.v1.WebhookGetOneRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.WebhookGetOneResponse.deserializeBinary
);


/**
 * @param {!proto.web.survey.v1.WebhookGetOneRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.web.survey.v1.WebhookGetOneResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.survey.v1.WebhookGetOneResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.survey.v1.WebhookServiceClient.prototype.webhookGetOne =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.survey.v1.WebhookService/WebhookGetOne',
      request,
      metadata || {},
      methodDescriptor_WebhookService_WebhookGetOne,
      callback);
};


/**
 * @param {!proto.web.survey.v1.WebhookGetOneRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.survey.v1.WebhookGetOneResponse>}
 *     Promise that resolves to the response
 */
proto.web.survey.v1.WebhookServicePromiseClient.prototype.webhookGetOne =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.survey.v1.WebhookService/WebhookGetOne',
      request,
      metadata || {},
      methodDescriptor_WebhookService_WebhookGetOne);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.survey.v1.WebhookCreateRequest,
 *   !proto.web.survey.v1.WebhookCreateResponse>}
 */
const methodDescriptor_WebhookService_WebhookCreate = new grpc.web.MethodDescriptor(
  '/web.survey.v1.WebhookService/WebhookCreate',
  grpc.web.MethodType.UNARY,
  proto.web.survey.v1.WebhookCreateRequest,
  proto.web.survey.v1.WebhookCreateResponse,
  /**
   * @param {!proto.web.survey.v1.WebhookCreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.WebhookCreateResponse.deserializeBinary
);


/**
 * @param {!proto.web.survey.v1.WebhookCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.web.survey.v1.WebhookCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.survey.v1.WebhookCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.survey.v1.WebhookServiceClient.prototype.webhookCreate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.survey.v1.WebhookService/WebhookCreate',
      request,
      metadata || {},
      methodDescriptor_WebhookService_WebhookCreate,
      callback);
};


/**
 * @param {!proto.web.survey.v1.WebhookCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.survey.v1.WebhookCreateResponse>}
 *     Promise that resolves to the response
 */
proto.web.survey.v1.WebhookServicePromiseClient.prototype.webhookCreate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.survey.v1.WebhookService/WebhookCreate',
      request,
      metadata || {},
      methodDescriptor_WebhookService_WebhookCreate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.survey.v1.WebhookUpdateRequest,
 *   !proto.web.survey.v1.WebhookUpdateResponse>}
 */
const methodDescriptor_WebhookService_WebhookUpdate = new grpc.web.MethodDescriptor(
  '/web.survey.v1.WebhookService/WebhookUpdate',
  grpc.web.MethodType.UNARY,
  proto.web.survey.v1.WebhookUpdateRequest,
  proto.web.survey.v1.WebhookUpdateResponse,
  /**
   * @param {!proto.web.survey.v1.WebhookUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.WebhookUpdateResponse.deserializeBinary
);


/**
 * @param {!proto.web.survey.v1.WebhookUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.web.survey.v1.WebhookUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.survey.v1.WebhookUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.survey.v1.WebhookServiceClient.prototype.webhookUpdate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.survey.v1.WebhookService/WebhookUpdate',
      request,
      metadata || {},
      methodDescriptor_WebhookService_WebhookUpdate,
      callback);
};


/**
 * @param {!proto.web.survey.v1.WebhookUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.survey.v1.WebhookUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.web.survey.v1.WebhookServicePromiseClient.prototype.webhookUpdate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.survey.v1.WebhookService/WebhookUpdate',
      request,
      metadata || {},
      methodDescriptor_WebhookService_WebhookUpdate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.survey.v1.WebhookDeleteRequest,
 *   !proto.web.survey.v1.WebhookDeleteResponse>}
 */
const methodDescriptor_WebhookService_WebhookDelete = new grpc.web.MethodDescriptor(
  '/web.survey.v1.WebhookService/WebhookDelete',
  grpc.web.MethodType.UNARY,
  proto.web.survey.v1.WebhookDeleteRequest,
  proto.web.survey.v1.WebhookDeleteResponse,
  /**
   * @param {!proto.web.survey.v1.WebhookDeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.WebhookDeleteResponse.deserializeBinary
);


/**
 * @param {!proto.web.survey.v1.WebhookDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.web.survey.v1.WebhookDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.survey.v1.WebhookDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.survey.v1.WebhookServiceClient.prototype.webhookDelete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.survey.v1.WebhookService/WebhookDelete',
      request,
      metadata || {},
      methodDescriptor_WebhookService_WebhookDelete,
      callback);
};


/**
 * @param {!proto.web.survey.v1.WebhookDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.survey.v1.WebhookDeleteResponse>}
 *     Promise that resolves to the response
 */
proto.web.survey.v1.WebhookServicePromiseClient.prototype.webhookDelete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.survey.v1.WebhookService/WebhookDelete',
      request,
      metadata || {},
      methodDescriptor_WebhookService_WebhookDelete);
};


module.exports = proto.web.survey.v1;

