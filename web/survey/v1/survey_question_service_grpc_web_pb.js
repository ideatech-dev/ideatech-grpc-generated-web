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
proto.web.survey.v1 = require('./survey_question_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.web.survey.v1.SurveyQuestionServiceClient =
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
proto.web.survey.v1.SurveyQuestionServicePromiseClient =
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
 *   !proto.web.survey.v1.QuestionGetOneRequest,
 *   !proto.web.survey.v1.QuestionGetOneResponse>}
 */
const methodDescriptor_SurveyQuestionService_QuestionGetOne = new grpc.web.MethodDescriptor(
  '/web.survey.v1.SurveyQuestionService/QuestionGetOne',
  grpc.web.MethodType.UNARY,
  proto.web.survey.v1.QuestionGetOneRequest,
  proto.web.survey.v1.QuestionGetOneResponse,
  /**
   * @param {!proto.web.survey.v1.QuestionGetOneRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.QuestionGetOneResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.web.survey.v1.QuestionGetOneRequest,
 *   !proto.web.survey.v1.QuestionGetOneResponse>}
 */
const methodInfo_SurveyQuestionService_QuestionGetOne = new grpc.web.AbstractClientBase.MethodInfo(
  proto.web.survey.v1.QuestionGetOneResponse,
  /**
   * @param {!proto.web.survey.v1.QuestionGetOneRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.QuestionGetOneResponse.deserializeBinary
);


/**
 * @param {!proto.web.survey.v1.QuestionGetOneRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.web.survey.v1.QuestionGetOneResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.survey.v1.QuestionGetOneResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.survey.v1.SurveyQuestionServiceClient.prototype.questionGetOne =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.survey.v1.SurveyQuestionService/QuestionGetOne',
      request,
      metadata || {},
      methodDescriptor_SurveyQuestionService_QuestionGetOne,
      callback);
};


/**
 * @param {!proto.web.survey.v1.QuestionGetOneRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.survey.v1.QuestionGetOneResponse>}
 *     Promise that resolves to the response
 */
proto.web.survey.v1.SurveyQuestionServicePromiseClient.prototype.questionGetOne =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.survey.v1.SurveyQuestionService/QuestionGetOne',
      request,
      metadata || {},
      methodDescriptor_SurveyQuestionService_QuestionGetOne);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.survey.v1.QuestionGetAllRequest,
 *   !proto.web.survey.v1.QuestionGetAllResponse>}
 */
const methodDescriptor_SurveyQuestionService_QuestionGetAll = new grpc.web.MethodDescriptor(
  '/web.survey.v1.SurveyQuestionService/QuestionGetAll',
  grpc.web.MethodType.UNARY,
  proto.web.survey.v1.QuestionGetAllRequest,
  proto.web.survey.v1.QuestionGetAllResponse,
  /**
   * @param {!proto.web.survey.v1.QuestionGetAllRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.QuestionGetAllResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.web.survey.v1.QuestionGetAllRequest,
 *   !proto.web.survey.v1.QuestionGetAllResponse>}
 */
const methodInfo_SurveyQuestionService_QuestionGetAll = new grpc.web.AbstractClientBase.MethodInfo(
  proto.web.survey.v1.QuestionGetAllResponse,
  /**
   * @param {!proto.web.survey.v1.QuestionGetAllRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.QuestionGetAllResponse.deserializeBinary
);


/**
 * @param {!proto.web.survey.v1.QuestionGetAllRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.web.survey.v1.QuestionGetAllResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.survey.v1.QuestionGetAllResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.survey.v1.SurveyQuestionServiceClient.prototype.questionGetAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.survey.v1.SurveyQuestionService/QuestionGetAll',
      request,
      metadata || {},
      methodDescriptor_SurveyQuestionService_QuestionGetAll,
      callback);
};


/**
 * @param {!proto.web.survey.v1.QuestionGetAllRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.survey.v1.QuestionGetAllResponse>}
 *     Promise that resolves to the response
 */
proto.web.survey.v1.SurveyQuestionServicePromiseClient.prototype.questionGetAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.survey.v1.SurveyQuestionService/QuestionGetAll',
      request,
      metadata || {},
      methodDescriptor_SurveyQuestionService_QuestionGetAll);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.survey.v1.QuestionCreateRequest,
 *   !proto.web.survey.v1.QuestionCreateResponse>}
 */
const methodDescriptor_SurveyQuestionService_QuestionCreate = new grpc.web.MethodDescriptor(
  '/web.survey.v1.SurveyQuestionService/QuestionCreate',
  grpc.web.MethodType.UNARY,
  proto.web.survey.v1.QuestionCreateRequest,
  proto.web.survey.v1.QuestionCreateResponse,
  /**
   * @param {!proto.web.survey.v1.QuestionCreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.QuestionCreateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.web.survey.v1.QuestionCreateRequest,
 *   !proto.web.survey.v1.QuestionCreateResponse>}
 */
const methodInfo_SurveyQuestionService_QuestionCreate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.web.survey.v1.QuestionCreateResponse,
  /**
   * @param {!proto.web.survey.v1.QuestionCreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.QuestionCreateResponse.deserializeBinary
);


/**
 * @param {!proto.web.survey.v1.QuestionCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.web.survey.v1.QuestionCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.survey.v1.QuestionCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.survey.v1.SurveyQuestionServiceClient.prototype.questionCreate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.survey.v1.SurveyQuestionService/QuestionCreate',
      request,
      metadata || {},
      methodDescriptor_SurveyQuestionService_QuestionCreate,
      callback);
};


/**
 * @param {!proto.web.survey.v1.QuestionCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.survey.v1.QuestionCreateResponse>}
 *     Promise that resolves to the response
 */
proto.web.survey.v1.SurveyQuestionServicePromiseClient.prototype.questionCreate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.survey.v1.SurveyQuestionService/QuestionCreate',
      request,
      metadata || {},
      methodDescriptor_SurveyQuestionService_QuestionCreate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.survey.v1.QuestionUpdateRequest,
 *   !proto.web.survey.v1.QuestionUpdateResponse>}
 */
const methodDescriptor_SurveyQuestionService_QuestionUpdate = new grpc.web.MethodDescriptor(
  '/web.survey.v1.SurveyQuestionService/QuestionUpdate',
  grpc.web.MethodType.UNARY,
  proto.web.survey.v1.QuestionUpdateRequest,
  proto.web.survey.v1.QuestionUpdateResponse,
  /**
   * @param {!proto.web.survey.v1.QuestionUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.QuestionUpdateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.web.survey.v1.QuestionUpdateRequest,
 *   !proto.web.survey.v1.QuestionUpdateResponse>}
 */
const methodInfo_SurveyQuestionService_QuestionUpdate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.web.survey.v1.QuestionUpdateResponse,
  /**
   * @param {!proto.web.survey.v1.QuestionUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.QuestionUpdateResponse.deserializeBinary
);


/**
 * @param {!proto.web.survey.v1.QuestionUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.web.survey.v1.QuestionUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.survey.v1.QuestionUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.survey.v1.SurveyQuestionServiceClient.prototype.questionUpdate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.survey.v1.SurveyQuestionService/QuestionUpdate',
      request,
      metadata || {},
      methodDescriptor_SurveyQuestionService_QuestionUpdate,
      callback);
};


/**
 * @param {!proto.web.survey.v1.QuestionUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.survey.v1.QuestionUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.web.survey.v1.SurveyQuestionServicePromiseClient.prototype.questionUpdate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.survey.v1.SurveyQuestionService/QuestionUpdate',
      request,
      metadata || {},
      methodDescriptor_SurveyQuestionService_QuestionUpdate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.survey.v1.QuestionDeleteRequest,
 *   !proto.web.survey.v1.QuestionDeleteResponse>}
 */
const methodDescriptor_SurveyQuestionService_QuestionDelete = new grpc.web.MethodDescriptor(
  '/web.survey.v1.SurveyQuestionService/QuestionDelete',
  grpc.web.MethodType.UNARY,
  proto.web.survey.v1.QuestionDeleteRequest,
  proto.web.survey.v1.QuestionDeleteResponse,
  /**
   * @param {!proto.web.survey.v1.QuestionDeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.QuestionDeleteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.web.survey.v1.QuestionDeleteRequest,
 *   !proto.web.survey.v1.QuestionDeleteResponse>}
 */
const methodInfo_SurveyQuestionService_QuestionDelete = new grpc.web.AbstractClientBase.MethodInfo(
  proto.web.survey.v1.QuestionDeleteResponse,
  /**
   * @param {!proto.web.survey.v1.QuestionDeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.QuestionDeleteResponse.deserializeBinary
);


/**
 * @param {!proto.web.survey.v1.QuestionDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.web.survey.v1.QuestionDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.survey.v1.QuestionDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.survey.v1.SurveyQuestionServiceClient.prototype.questionDelete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.survey.v1.SurveyQuestionService/QuestionDelete',
      request,
      metadata || {},
      methodDescriptor_SurveyQuestionService_QuestionDelete,
      callback);
};


/**
 * @param {!proto.web.survey.v1.QuestionDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.survey.v1.QuestionDeleteResponse>}
 *     Promise that resolves to the response
 */
proto.web.survey.v1.SurveyQuestionServicePromiseClient.prototype.questionDelete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.survey.v1.SurveyQuestionService/QuestionDelete',
      request,
      metadata || {},
      methodDescriptor_SurveyQuestionService_QuestionDelete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.survey.v1.ChoiceGetAllRequest,
 *   !proto.web.survey.v1.ChoiceGetAllResponse>}
 */
const methodDescriptor_SurveyQuestionService_ChoiceGetAll = new grpc.web.MethodDescriptor(
  '/web.survey.v1.SurveyQuestionService/ChoiceGetAll',
  grpc.web.MethodType.UNARY,
  proto.web.survey.v1.ChoiceGetAllRequest,
  proto.web.survey.v1.ChoiceGetAllResponse,
  /**
   * @param {!proto.web.survey.v1.ChoiceGetAllRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.ChoiceGetAllResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.web.survey.v1.ChoiceGetAllRequest,
 *   !proto.web.survey.v1.ChoiceGetAllResponse>}
 */
const methodInfo_SurveyQuestionService_ChoiceGetAll = new grpc.web.AbstractClientBase.MethodInfo(
  proto.web.survey.v1.ChoiceGetAllResponse,
  /**
   * @param {!proto.web.survey.v1.ChoiceGetAllRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.ChoiceGetAllResponse.deserializeBinary
);


/**
 * @param {!proto.web.survey.v1.ChoiceGetAllRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.web.survey.v1.ChoiceGetAllResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.survey.v1.ChoiceGetAllResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.survey.v1.SurveyQuestionServiceClient.prototype.choiceGetAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.survey.v1.SurveyQuestionService/ChoiceGetAll',
      request,
      metadata || {},
      methodDescriptor_SurveyQuestionService_ChoiceGetAll,
      callback);
};


/**
 * @param {!proto.web.survey.v1.ChoiceGetAllRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.survey.v1.ChoiceGetAllResponse>}
 *     Promise that resolves to the response
 */
proto.web.survey.v1.SurveyQuestionServicePromiseClient.prototype.choiceGetAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.survey.v1.SurveyQuestionService/ChoiceGetAll',
      request,
      metadata || {},
      methodDescriptor_SurveyQuestionService_ChoiceGetAll);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.survey.v1.ChoiceCreateRequest,
 *   !proto.web.survey.v1.ChoiceCreateResponse>}
 */
const methodDescriptor_SurveyQuestionService_ChoiceCreate = new grpc.web.MethodDescriptor(
  '/web.survey.v1.SurveyQuestionService/ChoiceCreate',
  grpc.web.MethodType.UNARY,
  proto.web.survey.v1.ChoiceCreateRequest,
  proto.web.survey.v1.ChoiceCreateResponse,
  /**
   * @param {!proto.web.survey.v1.ChoiceCreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.ChoiceCreateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.web.survey.v1.ChoiceCreateRequest,
 *   !proto.web.survey.v1.ChoiceCreateResponse>}
 */
const methodInfo_SurveyQuestionService_ChoiceCreate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.web.survey.v1.ChoiceCreateResponse,
  /**
   * @param {!proto.web.survey.v1.ChoiceCreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.ChoiceCreateResponse.deserializeBinary
);


/**
 * @param {!proto.web.survey.v1.ChoiceCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.web.survey.v1.ChoiceCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.survey.v1.ChoiceCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.survey.v1.SurveyQuestionServiceClient.prototype.choiceCreate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.survey.v1.SurveyQuestionService/ChoiceCreate',
      request,
      metadata || {},
      methodDescriptor_SurveyQuestionService_ChoiceCreate,
      callback);
};


/**
 * @param {!proto.web.survey.v1.ChoiceCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.survey.v1.ChoiceCreateResponse>}
 *     Promise that resolves to the response
 */
proto.web.survey.v1.SurveyQuestionServicePromiseClient.prototype.choiceCreate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.survey.v1.SurveyQuestionService/ChoiceCreate',
      request,
      metadata || {},
      methodDescriptor_SurveyQuestionService_ChoiceCreate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.survey.v1.ChoiceUpdateRequest,
 *   !proto.web.survey.v1.ChoiceUpdateResponse>}
 */
const methodDescriptor_SurveyQuestionService_ChoiceUpdate = new grpc.web.MethodDescriptor(
  '/web.survey.v1.SurveyQuestionService/ChoiceUpdate',
  grpc.web.MethodType.UNARY,
  proto.web.survey.v1.ChoiceUpdateRequest,
  proto.web.survey.v1.ChoiceUpdateResponse,
  /**
   * @param {!proto.web.survey.v1.ChoiceUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.ChoiceUpdateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.web.survey.v1.ChoiceUpdateRequest,
 *   !proto.web.survey.v1.ChoiceUpdateResponse>}
 */
const methodInfo_SurveyQuestionService_ChoiceUpdate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.web.survey.v1.ChoiceUpdateResponse,
  /**
   * @param {!proto.web.survey.v1.ChoiceUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.ChoiceUpdateResponse.deserializeBinary
);


/**
 * @param {!proto.web.survey.v1.ChoiceUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.web.survey.v1.ChoiceUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.survey.v1.ChoiceUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.survey.v1.SurveyQuestionServiceClient.prototype.choiceUpdate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.survey.v1.SurveyQuestionService/ChoiceUpdate',
      request,
      metadata || {},
      methodDescriptor_SurveyQuestionService_ChoiceUpdate,
      callback);
};


/**
 * @param {!proto.web.survey.v1.ChoiceUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.survey.v1.ChoiceUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.web.survey.v1.SurveyQuestionServicePromiseClient.prototype.choiceUpdate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.survey.v1.SurveyQuestionService/ChoiceUpdate',
      request,
      metadata || {},
      methodDescriptor_SurveyQuestionService_ChoiceUpdate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.survey.v1.ChoiceDeleteRequest,
 *   !proto.web.survey.v1.ChoiceDeleteResponse>}
 */
const methodDescriptor_SurveyQuestionService_ChoiceDelete = new grpc.web.MethodDescriptor(
  '/web.survey.v1.SurveyQuestionService/ChoiceDelete',
  grpc.web.MethodType.UNARY,
  proto.web.survey.v1.ChoiceDeleteRequest,
  proto.web.survey.v1.ChoiceDeleteResponse,
  /**
   * @param {!proto.web.survey.v1.ChoiceDeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.ChoiceDeleteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.web.survey.v1.ChoiceDeleteRequest,
 *   !proto.web.survey.v1.ChoiceDeleteResponse>}
 */
const methodInfo_SurveyQuestionService_ChoiceDelete = new grpc.web.AbstractClientBase.MethodInfo(
  proto.web.survey.v1.ChoiceDeleteResponse,
  /**
   * @param {!proto.web.survey.v1.ChoiceDeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.survey.v1.ChoiceDeleteResponse.deserializeBinary
);


/**
 * @param {!proto.web.survey.v1.ChoiceDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.web.survey.v1.ChoiceDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.survey.v1.ChoiceDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.survey.v1.SurveyQuestionServiceClient.prototype.choiceDelete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.survey.v1.SurveyQuestionService/ChoiceDelete',
      request,
      metadata || {},
      methodDescriptor_SurveyQuestionService_ChoiceDelete,
      callback);
};


/**
 * @param {!proto.web.survey.v1.ChoiceDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.survey.v1.ChoiceDeleteResponse>}
 *     Promise that resolves to the response
 */
proto.web.survey.v1.SurveyQuestionServicePromiseClient.prototype.choiceDelete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.survey.v1.SurveyQuestionService/ChoiceDelete',
      request,
      metadata || {},
      methodDescriptor_SurveyQuestionService_ChoiceDelete);
};


module.exports = proto.web.survey.v1;

