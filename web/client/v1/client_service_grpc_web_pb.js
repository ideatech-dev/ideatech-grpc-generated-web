/**
 * @fileoverview gRPC-Web generated client stub for web.client.v1
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
proto.web.client = {};
proto.web.client.v1 = require('./client_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.web.client.v1.SurveyClientServiceClient =
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
proto.web.client.v1.SurveyClientServicePromiseClient =
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
 *   !proto.web.client.v1.StartSurveyRequest,
 *   !proto.web.client.v1.StartSurveyResponse>}
 */
const methodDescriptor_SurveyClientService_StartSurvey = new grpc.web.MethodDescriptor(
  '/web.client.v1.SurveyClientService/StartSurvey',
  grpc.web.MethodType.UNARY,
  proto.web.client.v1.StartSurveyRequest,
  proto.web.client.v1.StartSurveyResponse,
  /**
   * @param {!proto.web.client.v1.StartSurveyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.client.v1.StartSurveyResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.web.client.v1.StartSurveyRequest,
 *   !proto.web.client.v1.StartSurveyResponse>}
 */
const methodInfo_SurveyClientService_StartSurvey = new grpc.web.AbstractClientBase.MethodInfo(
  proto.web.client.v1.StartSurveyResponse,
  /**
   * @param {!proto.web.client.v1.StartSurveyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.client.v1.StartSurveyResponse.deserializeBinary
);


/**
 * @param {!proto.web.client.v1.StartSurveyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.web.client.v1.StartSurveyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.client.v1.StartSurveyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.client.v1.SurveyClientServiceClient.prototype.startSurvey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.client.v1.SurveyClientService/StartSurvey',
      request,
      metadata || {},
      methodDescriptor_SurveyClientService_StartSurvey,
      callback);
};


/**
 * @param {!proto.web.client.v1.StartSurveyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.client.v1.StartSurveyResponse>}
 *     Promise that resolves to the response
 */
proto.web.client.v1.SurveyClientServicePromiseClient.prototype.startSurvey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.client.v1.SurveyClientService/StartSurvey',
      request,
      metadata || {},
      methodDescriptor_SurveyClientService_StartSurvey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.client.v1.GetQuestionRequest,
 *   !proto.web.client.v1.GetQuestionResponse>}
 */
const methodDescriptor_SurveyClientService_GetQuestion = new grpc.web.MethodDescriptor(
  '/web.client.v1.SurveyClientService/GetQuestion',
  grpc.web.MethodType.UNARY,
  proto.web.client.v1.GetQuestionRequest,
  proto.web.client.v1.GetQuestionResponse,
  /**
   * @param {!proto.web.client.v1.GetQuestionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.client.v1.GetQuestionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.web.client.v1.GetQuestionRequest,
 *   !proto.web.client.v1.GetQuestionResponse>}
 */
const methodInfo_SurveyClientService_GetQuestion = new grpc.web.AbstractClientBase.MethodInfo(
  proto.web.client.v1.GetQuestionResponse,
  /**
   * @param {!proto.web.client.v1.GetQuestionRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.client.v1.GetQuestionResponse.deserializeBinary
);


/**
 * @param {!proto.web.client.v1.GetQuestionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.web.client.v1.GetQuestionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.client.v1.GetQuestionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.client.v1.SurveyClientServiceClient.prototype.getQuestion =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.client.v1.SurveyClientService/GetQuestion',
      request,
      metadata || {},
      methodDescriptor_SurveyClientService_GetQuestion,
      callback);
};


/**
 * @param {!proto.web.client.v1.GetQuestionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.client.v1.GetQuestionResponse>}
 *     Promise that resolves to the response
 */
proto.web.client.v1.SurveyClientServicePromiseClient.prototype.getQuestion =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.client.v1.SurveyClientService/GetQuestion',
      request,
      metadata || {},
      methodDescriptor_SurveyClientService_GetQuestion);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.client.v1.SubmitAnswerRequest,
 *   !proto.web.client.v1.SubmitAnswerResponse>}
 */
const methodDescriptor_SurveyClientService_SubmitAnswer = new grpc.web.MethodDescriptor(
  '/web.client.v1.SurveyClientService/SubmitAnswer',
  grpc.web.MethodType.UNARY,
  proto.web.client.v1.SubmitAnswerRequest,
  proto.web.client.v1.SubmitAnswerResponse,
  /**
   * @param {!proto.web.client.v1.SubmitAnswerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.client.v1.SubmitAnswerResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.web.client.v1.SubmitAnswerRequest,
 *   !proto.web.client.v1.SubmitAnswerResponse>}
 */
const methodInfo_SurveyClientService_SubmitAnswer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.web.client.v1.SubmitAnswerResponse,
  /**
   * @param {!proto.web.client.v1.SubmitAnswerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.client.v1.SubmitAnswerResponse.deserializeBinary
);


/**
 * @param {!proto.web.client.v1.SubmitAnswerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.web.client.v1.SubmitAnswerResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.client.v1.SubmitAnswerResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.client.v1.SurveyClientServiceClient.prototype.submitAnswer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.client.v1.SurveyClientService/SubmitAnswer',
      request,
      metadata || {},
      methodDescriptor_SurveyClientService_SubmitAnswer,
      callback);
};


/**
 * @param {!proto.web.client.v1.SubmitAnswerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.client.v1.SubmitAnswerResponse>}
 *     Promise that resolves to the response
 */
proto.web.client.v1.SurveyClientServicePromiseClient.prototype.submitAnswer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.client.v1.SurveyClientService/SubmitAnswer',
      request,
      metadata || {},
      methodDescriptor_SurveyClientService_SubmitAnswer);
};


module.exports = proto.web.client.v1;

