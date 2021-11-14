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
proto.web.survey.v1 = require('./survey_response_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.web.survey.v1.SurveyResponseServiceClient =
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
proto.web.survey.v1.SurveyResponseServicePromiseClient =
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
 *   !proto.web.survey.v1.ResponseGetAllRequest,
 *   !proto.web.survey.v1.ResponseGetAllResponse>}
 */
const methodDescriptor_SurveyResponseService_ResponseGetAll = new grpc.web.MethodDescriptor(
  '/web.survey.v1.SurveyResponseService/ResponseGetAll',
  grpc.web.MethodType.UNARY,
  proto.web.survey.v1.ResponseGetAllRequest,
  proto.web.survey.v1.ResponseGetAllResponse,
  /**
   * @param {!proto.web.survey.v1.ResponseGetAllRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.ResponseGetAllResponse.deserializeBinary
);


/**
 * @param {!proto.web.survey.v1.ResponseGetAllRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.web.survey.v1.ResponseGetAllResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.survey.v1.ResponseGetAllResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.survey.v1.SurveyResponseServiceClient.prototype.responseGetAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.survey.v1.SurveyResponseService/ResponseGetAll',
      request,
      metadata || {},
      methodDescriptor_SurveyResponseService_ResponseGetAll,
      callback);
};


/**
 * @param {!proto.web.survey.v1.ResponseGetAllRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.survey.v1.ResponseGetAllResponse>}
 *     Promise that resolves to the response
 */
proto.web.survey.v1.SurveyResponseServicePromiseClient.prototype.responseGetAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.survey.v1.SurveyResponseService/ResponseGetAll',
      request,
      metadata || {},
      methodDescriptor_SurveyResponseService_ResponseGetAll);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.survey.v1.ResponseGetOneRequest,
 *   !proto.web.survey.v1.ResponseGetOneResponse>}
 */
const methodDescriptor_SurveyResponseService_ResponseGetOne = new grpc.web.MethodDescriptor(
  '/web.survey.v1.SurveyResponseService/ResponseGetOne',
  grpc.web.MethodType.UNARY,
  proto.web.survey.v1.ResponseGetOneRequest,
  proto.web.survey.v1.ResponseGetOneResponse,
  /**
   * @param {!proto.web.survey.v1.ResponseGetOneRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.ResponseGetOneResponse.deserializeBinary
);


/**
 * @param {!proto.web.survey.v1.ResponseGetOneRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.web.survey.v1.ResponseGetOneResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.survey.v1.ResponseGetOneResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.survey.v1.SurveyResponseServiceClient.prototype.responseGetOne =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.survey.v1.SurveyResponseService/ResponseGetOne',
      request,
      metadata || {},
      methodDescriptor_SurveyResponseService_ResponseGetOne,
      callback);
};


/**
 * @param {!proto.web.survey.v1.ResponseGetOneRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.survey.v1.ResponseGetOneResponse>}
 *     Promise that resolves to the response
 */
proto.web.survey.v1.SurveyResponseServicePromiseClient.prototype.responseGetOne =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.survey.v1.SurveyResponseService/ResponseGetOne',
      request,
      metadata || {},
      methodDescriptor_SurveyResponseService_ResponseGetOne);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.survey.v1.ResponseAnswerGetListRequest,
 *   !proto.web.survey.v1.ResponseAnswerGetListResponse>}
 */
const methodDescriptor_SurveyResponseService_ResponseAnswerGetList = new grpc.web.MethodDescriptor(
  '/web.survey.v1.SurveyResponseService/ResponseAnswerGetList',
  grpc.web.MethodType.UNARY,
  proto.web.survey.v1.ResponseAnswerGetListRequest,
  proto.web.survey.v1.ResponseAnswerGetListResponse,
  /**
   * @param {!proto.web.survey.v1.ResponseAnswerGetListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.ResponseAnswerGetListResponse.deserializeBinary
);


/**
 * @param {!proto.web.survey.v1.ResponseAnswerGetListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.web.survey.v1.ResponseAnswerGetListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.survey.v1.ResponseAnswerGetListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.survey.v1.SurveyResponseServiceClient.prototype.responseAnswerGetList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.survey.v1.SurveyResponseService/ResponseAnswerGetList',
      request,
      metadata || {},
      methodDescriptor_SurveyResponseService_ResponseAnswerGetList,
      callback);
};


/**
 * @param {!proto.web.survey.v1.ResponseAnswerGetListRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.survey.v1.ResponseAnswerGetListResponse>}
 *     Promise that resolves to the response
 */
proto.web.survey.v1.SurveyResponseServicePromiseClient.prototype.responseAnswerGetList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.survey.v1.SurveyResponseService/ResponseAnswerGetList',
      request,
      metadata || {},
      methodDescriptor_SurveyResponseService_ResponseAnswerGetList);
};


module.exports = proto.web.survey.v1;

