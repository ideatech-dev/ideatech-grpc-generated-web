/**
 * @fileoverview gRPC-Web generated client stub for survey.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var survey_v1_survey_pb = require('../../survey/v1/survey_pb.js')

var survey_v1_survey_page_pb = require('../../survey/v1/survey_page_pb.js')

var survey_v1_survey_question_pb = require('../../survey/v1/survey_question_pb.js')

var survey_v1_survey_choice_pb = require('../../survey/v1/survey_choice_pb.js')

var survey_v1_survey_response_pb = require('../../survey/v1/survey_response_pb.js')
const proto = {};
proto.survey = {};
proto.survey.v1 = require('./survey_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.survey.v1.SurveyServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

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
proto.survey.v1.SurveyServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

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
 *   !proto.survey.v1.SurveyGetOneRequest,
 *   !proto.survey.v1.SurveyGetOneResponse>}
 */
const methodDescriptor_SurveyService_SurveyGetOne = new grpc.web.MethodDescriptor(
  '/survey.v1.SurveyService/SurveyGetOne',
  grpc.web.MethodType.UNARY,
  survey_v1_survey_pb.SurveyGetOneRequest,
  survey_v1_survey_pb.SurveyGetOneResponse,
  /**
   * @param {!proto.survey.v1.SurveyGetOneRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_pb.SurveyGetOneResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.survey.v1.SurveyGetOneRequest,
 *   !proto.survey.v1.SurveyGetOneResponse>}
 */
const methodInfo_SurveyService_SurveyGetOne = new grpc.web.AbstractClientBase.MethodInfo(
  survey_v1_survey_pb.SurveyGetOneResponse,
  /**
   * @param {!proto.survey.v1.SurveyGetOneRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_pb.SurveyGetOneResponse.deserializeBinary
);


/**
 * @param {!proto.survey.v1.SurveyGetOneRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.survey.v1.SurveyGetOneResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.survey.v1.SurveyGetOneResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.survey.v1.SurveyServiceClient.prototype.surveyGetOne =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/survey.v1.SurveyService/SurveyGetOne',
      request,
      metadata || {},
      methodDescriptor_SurveyService_SurveyGetOne,
      callback);
};


/**
 * @param {!proto.survey.v1.SurveyGetOneRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.survey.v1.SurveyGetOneResponse>}
 *     Promise that resolves to the response
 */
proto.survey.v1.SurveyServicePromiseClient.prototype.surveyGetOne =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/survey.v1.SurveyService/SurveyGetOne',
      request,
      metadata || {},
      methodDescriptor_SurveyService_SurveyGetOne);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.survey.v1.SurveyGetAllRequest,
 *   !proto.survey.v1.SurveyGetAllResponse>}
 */
const methodDescriptor_SurveyService_SurveyGetAll = new grpc.web.MethodDescriptor(
  '/survey.v1.SurveyService/SurveyGetAll',
  grpc.web.MethodType.UNARY,
  survey_v1_survey_pb.SurveyGetAllRequest,
  survey_v1_survey_pb.SurveyGetAllResponse,
  /**
   * @param {!proto.survey.v1.SurveyGetAllRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_pb.SurveyGetAllResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.survey.v1.SurveyGetAllRequest,
 *   !proto.survey.v1.SurveyGetAllResponse>}
 */
const methodInfo_SurveyService_SurveyGetAll = new grpc.web.AbstractClientBase.MethodInfo(
  survey_v1_survey_pb.SurveyGetAllResponse,
  /**
   * @param {!proto.survey.v1.SurveyGetAllRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_pb.SurveyGetAllResponse.deserializeBinary
);


/**
 * @param {!proto.survey.v1.SurveyGetAllRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.survey.v1.SurveyGetAllResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.survey.v1.SurveyGetAllResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.survey.v1.SurveyServiceClient.prototype.surveyGetAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/survey.v1.SurveyService/SurveyGetAll',
      request,
      metadata || {},
      methodDescriptor_SurveyService_SurveyGetAll,
      callback);
};


/**
 * @param {!proto.survey.v1.SurveyGetAllRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.survey.v1.SurveyGetAllResponse>}
 *     Promise that resolves to the response
 */
proto.survey.v1.SurveyServicePromiseClient.prototype.surveyGetAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/survey.v1.SurveyService/SurveyGetAll',
      request,
      metadata || {},
      methodDescriptor_SurveyService_SurveyGetAll);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.survey.v1.SurveyCreateRequest,
 *   !proto.survey.v1.SurveyCreateResponse>}
 */
const methodDescriptor_SurveyService_SurveyCreate = new grpc.web.MethodDescriptor(
  '/survey.v1.SurveyService/SurveyCreate',
  grpc.web.MethodType.UNARY,
  survey_v1_survey_pb.SurveyCreateRequest,
  survey_v1_survey_pb.SurveyCreateResponse,
  /**
   * @param {!proto.survey.v1.SurveyCreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_pb.SurveyCreateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.survey.v1.SurveyCreateRequest,
 *   !proto.survey.v1.SurveyCreateResponse>}
 */
const methodInfo_SurveyService_SurveyCreate = new grpc.web.AbstractClientBase.MethodInfo(
  survey_v1_survey_pb.SurveyCreateResponse,
  /**
   * @param {!proto.survey.v1.SurveyCreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_pb.SurveyCreateResponse.deserializeBinary
);


/**
 * @param {!proto.survey.v1.SurveyCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.survey.v1.SurveyCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.survey.v1.SurveyCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.survey.v1.SurveyServiceClient.prototype.surveyCreate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/survey.v1.SurveyService/SurveyCreate',
      request,
      metadata || {},
      methodDescriptor_SurveyService_SurveyCreate,
      callback);
};


/**
 * @param {!proto.survey.v1.SurveyCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.survey.v1.SurveyCreateResponse>}
 *     Promise that resolves to the response
 */
proto.survey.v1.SurveyServicePromiseClient.prototype.surveyCreate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/survey.v1.SurveyService/SurveyCreate',
      request,
      metadata || {},
      methodDescriptor_SurveyService_SurveyCreate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.survey.v1.SurveyUpdateRequest,
 *   !proto.survey.v1.SurveyUpdateResponse>}
 */
const methodDescriptor_SurveyService_SurveyUpdate = new grpc.web.MethodDescriptor(
  '/survey.v1.SurveyService/SurveyUpdate',
  grpc.web.MethodType.UNARY,
  survey_v1_survey_pb.SurveyUpdateRequest,
  survey_v1_survey_pb.SurveyUpdateResponse,
  /**
   * @param {!proto.survey.v1.SurveyUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_pb.SurveyUpdateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.survey.v1.SurveyUpdateRequest,
 *   !proto.survey.v1.SurveyUpdateResponse>}
 */
const methodInfo_SurveyService_SurveyUpdate = new grpc.web.AbstractClientBase.MethodInfo(
  survey_v1_survey_pb.SurveyUpdateResponse,
  /**
   * @param {!proto.survey.v1.SurveyUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_pb.SurveyUpdateResponse.deserializeBinary
);


/**
 * @param {!proto.survey.v1.SurveyUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.survey.v1.SurveyUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.survey.v1.SurveyUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.survey.v1.SurveyServiceClient.prototype.surveyUpdate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/survey.v1.SurveyService/SurveyUpdate',
      request,
      metadata || {},
      methodDescriptor_SurveyService_SurveyUpdate,
      callback);
};


/**
 * @param {!proto.survey.v1.SurveyUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.survey.v1.SurveyUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.survey.v1.SurveyServicePromiseClient.prototype.surveyUpdate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/survey.v1.SurveyService/SurveyUpdate',
      request,
      metadata || {},
      methodDescriptor_SurveyService_SurveyUpdate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.survey.v1.SurveyDeleteRequest,
 *   !proto.survey.v1.SurveyDeleteResponse>}
 */
const methodDescriptor_SurveyService_SurveyDelete = new grpc.web.MethodDescriptor(
  '/survey.v1.SurveyService/SurveyDelete',
  grpc.web.MethodType.UNARY,
  survey_v1_survey_pb.SurveyDeleteRequest,
  survey_v1_survey_pb.SurveyDeleteResponse,
  /**
   * @param {!proto.survey.v1.SurveyDeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_pb.SurveyDeleteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.survey.v1.SurveyDeleteRequest,
 *   !proto.survey.v1.SurveyDeleteResponse>}
 */
const methodInfo_SurveyService_SurveyDelete = new grpc.web.AbstractClientBase.MethodInfo(
  survey_v1_survey_pb.SurveyDeleteResponse,
  /**
   * @param {!proto.survey.v1.SurveyDeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_pb.SurveyDeleteResponse.deserializeBinary
);


/**
 * @param {!proto.survey.v1.SurveyDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.survey.v1.SurveyDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.survey.v1.SurveyDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.survey.v1.SurveyServiceClient.prototype.surveyDelete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/survey.v1.SurveyService/SurveyDelete',
      request,
      metadata || {},
      methodDescriptor_SurveyService_SurveyDelete,
      callback);
};


/**
 * @param {!proto.survey.v1.SurveyDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.survey.v1.SurveyDeleteResponse>}
 *     Promise that resolves to the response
 */
proto.survey.v1.SurveyServicePromiseClient.prototype.surveyDelete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/survey.v1.SurveyService/SurveyDelete',
      request,
      metadata || {},
      methodDescriptor_SurveyService_SurveyDelete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.survey.v1.PageGetOneRequest,
 *   !proto.survey.v1.PageGetOneResponse>}
 */
const methodDescriptor_SurveyService_PageGetOne = new grpc.web.MethodDescriptor(
  '/survey.v1.SurveyService/PageGetOne',
  grpc.web.MethodType.UNARY,
  survey_v1_survey_page_pb.PageGetOneRequest,
  survey_v1_survey_page_pb.PageGetOneResponse,
  /**
   * @param {!proto.survey.v1.PageGetOneRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_page_pb.PageGetOneResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.survey.v1.PageGetOneRequest,
 *   !proto.survey.v1.PageGetOneResponse>}
 */
const methodInfo_SurveyService_PageGetOne = new grpc.web.AbstractClientBase.MethodInfo(
  survey_v1_survey_page_pb.PageGetOneResponse,
  /**
   * @param {!proto.survey.v1.PageGetOneRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_page_pb.PageGetOneResponse.deserializeBinary
);


/**
 * @param {!proto.survey.v1.PageGetOneRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.survey.v1.PageGetOneResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.survey.v1.PageGetOneResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.survey.v1.SurveyServiceClient.prototype.pageGetOne =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/survey.v1.SurveyService/PageGetOne',
      request,
      metadata || {},
      methodDescriptor_SurveyService_PageGetOne,
      callback);
};


/**
 * @param {!proto.survey.v1.PageGetOneRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.survey.v1.PageGetOneResponse>}
 *     Promise that resolves to the response
 */
proto.survey.v1.SurveyServicePromiseClient.prototype.pageGetOne =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/survey.v1.SurveyService/PageGetOne',
      request,
      metadata || {},
      methodDescriptor_SurveyService_PageGetOne);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.survey.v1.PageGetAllRequest,
 *   !proto.survey.v1.PageGetAllResponse>}
 */
const methodDescriptor_SurveyService_PageGetAll = new grpc.web.MethodDescriptor(
  '/survey.v1.SurveyService/PageGetAll',
  grpc.web.MethodType.UNARY,
  survey_v1_survey_page_pb.PageGetAllRequest,
  survey_v1_survey_page_pb.PageGetAllResponse,
  /**
   * @param {!proto.survey.v1.PageGetAllRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_page_pb.PageGetAllResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.survey.v1.PageGetAllRequest,
 *   !proto.survey.v1.PageGetAllResponse>}
 */
const methodInfo_SurveyService_PageGetAll = new grpc.web.AbstractClientBase.MethodInfo(
  survey_v1_survey_page_pb.PageGetAllResponse,
  /**
   * @param {!proto.survey.v1.PageGetAllRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_page_pb.PageGetAllResponse.deserializeBinary
);


/**
 * @param {!proto.survey.v1.PageGetAllRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.survey.v1.PageGetAllResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.survey.v1.PageGetAllResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.survey.v1.SurveyServiceClient.prototype.pageGetAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/survey.v1.SurveyService/PageGetAll',
      request,
      metadata || {},
      methodDescriptor_SurveyService_PageGetAll,
      callback);
};


/**
 * @param {!proto.survey.v1.PageGetAllRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.survey.v1.PageGetAllResponse>}
 *     Promise that resolves to the response
 */
proto.survey.v1.SurveyServicePromiseClient.prototype.pageGetAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/survey.v1.SurveyService/PageGetAll',
      request,
      metadata || {},
      methodDescriptor_SurveyService_PageGetAll);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.survey.v1.PageCreateRequest,
 *   !proto.survey.v1.PageCreateResponse>}
 */
const methodDescriptor_SurveyService_PageCreate = new grpc.web.MethodDescriptor(
  '/survey.v1.SurveyService/PageCreate',
  grpc.web.MethodType.UNARY,
  survey_v1_survey_page_pb.PageCreateRequest,
  survey_v1_survey_page_pb.PageCreateResponse,
  /**
   * @param {!proto.survey.v1.PageCreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_page_pb.PageCreateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.survey.v1.PageCreateRequest,
 *   !proto.survey.v1.PageCreateResponse>}
 */
const methodInfo_SurveyService_PageCreate = new grpc.web.AbstractClientBase.MethodInfo(
  survey_v1_survey_page_pb.PageCreateResponse,
  /**
   * @param {!proto.survey.v1.PageCreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_page_pb.PageCreateResponse.deserializeBinary
);


/**
 * @param {!proto.survey.v1.PageCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.survey.v1.PageCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.survey.v1.PageCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.survey.v1.SurveyServiceClient.prototype.pageCreate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/survey.v1.SurveyService/PageCreate',
      request,
      metadata || {},
      methodDescriptor_SurveyService_PageCreate,
      callback);
};


/**
 * @param {!proto.survey.v1.PageCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.survey.v1.PageCreateResponse>}
 *     Promise that resolves to the response
 */
proto.survey.v1.SurveyServicePromiseClient.prototype.pageCreate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/survey.v1.SurveyService/PageCreate',
      request,
      metadata || {},
      methodDescriptor_SurveyService_PageCreate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.survey.v1.PageUpdateRequest,
 *   !proto.survey.v1.PageUpdateResponse>}
 */
const methodDescriptor_SurveyService_PageUpdate = new grpc.web.MethodDescriptor(
  '/survey.v1.SurveyService/PageUpdate',
  grpc.web.MethodType.UNARY,
  survey_v1_survey_page_pb.PageUpdateRequest,
  survey_v1_survey_page_pb.PageUpdateResponse,
  /**
   * @param {!proto.survey.v1.PageUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_page_pb.PageUpdateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.survey.v1.PageUpdateRequest,
 *   !proto.survey.v1.PageUpdateResponse>}
 */
const methodInfo_SurveyService_PageUpdate = new grpc.web.AbstractClientBase.MethodInfo(
  survey_v1_survey_page_pb.PageUpdateResponse,
  /**
   * @param {!proto.survey.v1.PageUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_page_pb.PageUpdateResponse.deserializeBinary
);


/**
 * @param {!proto.survey.v1.PageUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.survey.v1.PageUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.survey.v1.PageUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.survey.v1.SurveyServiceClient.prototype.pageUpdate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/survey.v1.SurveyService/PageUpdate',
      request,
      metadata || {},
      methodDescriptor_SurveyService_PageUpdate,
      callback);
};


/**
 * @param {!proto.survey.v1.PageUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.survey.v1.PageUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.survey.v1.SurveyServicePromiseClient.prototype.pageUpdate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/survey.v1.SurveyService/PageUpdate',
      request,
      metadata || {},
      methodDescriptor_SurveyService_PageUpdate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.survey.v1.PageDeleteRequest,
 *   !proto.survey.v1.PageDeleteResponse>}
 */
const methodDescriptor_SurveyService_PageDelete = new grpc.web.MethodDescriptor(
  '/survey.v1.SurveyService/PageDelete',
  grpc.web.MethodType.UNARY,
  survey_v1_survey_page_pb.PageDeleteRequest,
  survey_v1_survey_page_pb.PageDeleteResponse,
  /**
   * @param {!proto.survey.v1.PageDeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_page_pb.PageDeleteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.survey.v1.PageDeleteRequest,
 *   !proto.survey.v1.PageDeleteResponse>}
 */
const methodInfo_SurveyService_PageDelete = new grpc.web.AbstractClientBase.MethodInfo(
  survey_v1_survey_page_pb.PageDeleteResponse,
  /**
   * @param {!proto.survey.v1.PageDeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_page_pb.PageDeleteResponse.deserializeBinary
);


/**
 * @param {!proto.survey.v1.PageDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.survey.v1.PageDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.survey.v1.PageDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.survey.v1.SurveyServiceClient.prototype.pageDelete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/survey.v1.SurveyService/PageDelete',
      request,
      metadata || {},
      methodDescriptor_SurveyService_PageDelete,
      callback);
};


/**
 * @param {!proto.survey.v1.PageDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.survey.v1.PageDeleteResponse>}
 *     Promise that resolves to the response
 */
proto.survey.v1.SurveyServicePromiseClient.prototype.pageDelete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/survey.v1.SurveyService/PageDelete',
      request,
      metadata || {},
      methodDescriptor_SurveyService_PageDelete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.survey.v1.QuestionGetOneRequest,
 *   !proto.survey.v1.QuestionGetOneResponse>}
 */
const methodDescriptor_SurveyService_QuestionGetOne = new grpc.web.MethodDescriptor(
  '/survey.v1.SurveyService/QuestionGetOne',
  grpc.web.MethodType.UNARY,
  survey_v1_survey_question_pb.QuestionGetOneRequest,
  survey_v1_survey_question_pb.QuestionGetOneResponse,
  /**
   * @param {!proto.survey.v1.QuestionGetOneRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_question_pb.QuestionGetOneResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.survey.v1.QuestionGetOneRequest,
 *   !proto.survey.v1.QuestionGetOneResponse>}
 */
const methodInfo_SurveyService_QuestionGetOne = new grpc.web.AbstractClientBase.MethodInfo(
  survey_v1_survey_question_pb.QuestionGetOneResponse,
  /**
   * @param {!proto.survey.v1.QuestionGetOneRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_question_pb.QuestionGetOneResponse.deserializeBinary
);


/**
 * @param {!proto.survey.v1.QuestionGetOneRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.survey.v1.QuestionGetOneResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.survey.v1.QuestionGetOneResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.survey.v1.SurveyServiceClient.prototype.questionGetOne =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/survey.v1.SurveyService/QuestionGetOne',
      request,
      metadata || {},
      methodDescriptor_SurveyService_QuestionGetOne,
      callback);
};


/**
 * @param {!proto.survey.v1.QuestionGetOneRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.survey.v1.QuestionGetOneResponse>}
 *     Promise that resolves to the response
 */
proto.survey.v1.SurveyServicePromiseClient.prototype.questionGetOne =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/survey.v1.SurveyService/QuestionGetOne',
      request,
      metadata || {},
      methodDescriptor_SurveyService_QuestionGetOne);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.survey.v1.QuestionGetAllRequest,
 *   !proto.survey.v1.QuestionGetAllResponse>}
 */
const methodDescriptor_SurveyService_QuestionGetAll = new grpc.web.MethodDescriptor(
  '/survey.v1.SurveyService/QuestionGetAll',
  grpc.web.MethodType.UNARY,
  survey_v1_survey_question_pb.QuestionGetAllRequest,
  survey_v1_survey_question_pb.QuestionGetAllResponse,
  /**
   * @param {!proto.survey.v1.QuestionGetAllRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_question_pb.QuestionGetAllResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.survey.v1.QuestionGetAllRequest,
 *   !proto.survey.v1.QuestionGetAllResponse>}
 */
const methodInfo_SurveyService_QuestionGetAll = new grpc.web.AbstractClientBase.MethodInfo(
  survey_v1_survey_question_pb.QuestionGetAllResponse,
  /**
   * @param {!proto.survey.v1.QuestionGetAllRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_question_pb.QuestionGetAllResponse.deserializeBinary
);


/**
 * @param {!proto.survey.v1.QuestionGetAllRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.survey.v1.QuestionGetAllResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.survey.v1.QuestionGetAllResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.survey.v1.SurveyServiceClient.prototype.questionGetAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/survey.v1.SurveyService/QuestionGetAll',
      request,
      metadata || {},
      methodDescriptor_SurveyService_QuestionGetAll,
      callback);
};


/**
 * @param {!proto.survey.v1.QuestionGetAllRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.survey.v1.QuestionGetAllResponse>}
 *     Promise that resolves to the response
 */
proto.survey.v1.SurveyServicePromiseClient.prototype.questionGetAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/survey.v1.SurveyService/QuestionGetAll',
      request,
      metadata || {},
      methodDescriptor_SurveyService_QuestionGetAll);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.survey.v1.QuestionCreateRequest,
 *   !proto.survey.v1.QuestionCreateResponse>}
 */
const methodDescriptor_SurveyService_QuestionCreate = new grpc.web.MethodDescriptor(
  '/survey.v1.SurveyService/QuestionCreate',
  grpc.web.MethodType.UNARY,
  survey_v1_survey_question_pb.QuestionCreateRequest,
  survey_v1_survey_question_pb.QuestionCreateResponse,
  /**
   * @param {!proto.survey.v1.QuestionCreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_question_pb.QuestionCreateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.survey.v1.QuestionCreateRequest,
 *   !proto.survey.v1.QuestionCreateResponse>}
 */
const methodInfo_SurveyService_QuestionCreate = new grpc.web.AbstractClientBase.MethodInfo(
  survey_v1_survey_question_pb.QuestionCreateResponse,
  /**
   * @param {!proto.survey.v1.QuestionCreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_question_pb.QuestionCreateResponse.deserializeBinary
);


/**
 * @param {!proto.survey.v1.QuestionCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.survey.v1.QuestionCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.survey.v1.QuestionCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.survey.v1.SurveyServiceClient.prototype.questionCreate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/survey.v1.SurveyService/QuestionCreate',
      request,
      metadata || {},
      methodDescriptor_SurveyService_QuestionCreate,
      callback);
};


/**
 * @param {!proto.survey.v1.QuestionCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.survey.v1.QuestionCreateResponse>}
 *     Promise that resolves to the response
 */
proto.survey.v1.SurveyServicePromiseClient.prototype.questionCreate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/survey.v1.SurveyService/QuestionCreate',
      request,
      metadata || {},
      methodDescriptor_SurveyService_QuestionCreate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.survey.v1.QuestionUpdateRequest,
 *   !proto.survey.v1.QuestionUpdateResponse>}
 */
const methodDescriptor_SurveyService_QuestionUpdate = new grpc.web.MethodDescriptor(
  '/survey.v1.SurveyService/QuestionUpdate',
  grpc.web.MethodType.UNARY,
  survey_v1_survey_question_pb.QuestionUpdateRequest,
  survey_v1_survey_question_pb.QuestionUpdateResponse,
  /**
   * @param {!proto.survey.v1.QuestionUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_question_pb.QuestionUpdateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.survey.v1.QuestionUpdateRequest,
 *   !proto.survey.v1.QuestionUpdateResponse>}
 */
const methodInfo_SurveyService_QuestionUpdate = new grpc.web.AbstractClientBase.MethodInfo(
  survey_v1_survey_question_pb.QuestionUpdateResponse,
  /**
   * @param {!proto.survey.v1.QuestionUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_question_pb.QuestionUpdateResponse.deserializeBinary
);


/**
 * @param {!proto.survey.v1.QuestionUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.survey.v1.QuestionUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.survey.v1.QuestionUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.survey.v1.SurveyServiceClient.prototype.questionUpdate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/survey.v1.SurveyService/QuestionUpdate',
      request,
      metadata || {},
      methodDescriptor_SurveyService_QuestionUpdate,
      callback);
};


/**
 * @param {!proto.survey.v1.QuestionUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.survey.v1.QuestionUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.survey.v1.SurveyServicePromiseClient.prototype.questionUpdate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/survey.v1.SurveyService/QuestionUpdate',
      request,
      metadata || {},
      methodDescriptor_SurveyService_QuestionUpdate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.survey.v1.QuestionDeleteRequest,
 *   !proto.survey.v1.QuestionDeleteResponse>}
 */
const methodDescriptor_SurveyService_QuestionDelete = new grpc.web.MethodDescriptor(
  '/survey.v1.SurveyService/QuestionDelete',
  grpc.web.MethodType.UNARY,
  survey_v1_survey_question_pb.QuestionDeleteRequest,
  survey_v1_survey_question_pb.QuestionDeleteResponse,
  /**
   * @param {!proto.survey.v1.QuestionDeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_question_pb.QuestionDeleteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.survey.v1.QuestionDeleteRequest,
 *   !proto.survey.v1.QuestionDeleteResponse>}
 */
const methodInfo_SurveyService_QuestionDelete = new grpc.web.AbstractClientBase.MethodInfo(
  survey_v1_survey_question_pb.QuestionDeleteResponse,
  /**
   * @param {!proto.survey.v1.QuestionDeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_question_pb.QuestionDeleteResponse.deserializeBinary
);


/**
 * @param {!proto.survey.v1.QuestionDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.survey.v1.QuestionDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.survey.v1.QuestionDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.survey.v1.SurveyServiceClient.prototype.questionDelete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/survey.v1.SurveyService/QuestionDelete',
      request,
      metadata || {},
      methodDescriptor_SurveyService_QuestionDelete,
      callback);
};


/**
 * @param {!proto.survey.v1.QuestionDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.survey.v1.QuestionDeleteResponse>}
 *     Promise that resolves to the response
 */
proto.survey.v1.SurveyServicePromiseClient.prototype.questionDelete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/survey.v1.SurveyService/QuestionDelete',
      request,
      metadata || {},
      methodDescriptor_SurveyService_QuestionDelete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.survey.v1.ChoiceGetAllRequest,
 *   !proto.survey.v1.ChoiceGetAllResponse>}
 */
const methodDescriptor_SurveyService_ChoiceGetAll = new grpc.web.MethodDescriptor(
  '/survey.v1.SurveyService/ChoiceGetAll',
  grpc.web.MethodType.UNARY,
  survey_v1_survey_choice_pb.ChoiceGetAllRequest,
  survey_v1_survey_choice_pb.ChoiceGetAllResponse,
  /**
   * @param {!proto.survey.v1.ChoiceGetAllRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_choice_pb.ChoiceGetAllResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.survey.v1.ChoiceGetAllRequest,
 *   !proto.survey.v1.ChoiceGetAllResponse>}
 */
const methodInfo_SurveyService_ChoiceGetAll = new grpc.web.AbstractClientBase.MethodInfo(
  survey_v1_survey_choice_pb.ChoiceGetAllResponse,
  /**
   * @param {!proto.survey.v1.ChoiceGetAllRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_choice_pb.ChoiceGetAllResponse.deserializeBinary
);


/**
 * @param {!proto.survey.v1.ChoiceGetAllRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.survey.v1.ChoiceGetAllResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.survey.v1.ChoiceGetAllResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.survey.v1.SurveyServiceClient.prototype.choiceGetAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/survey.v1.SurveyService/ChoiceGetAll',
      request,
      metadata || {},
      methodDescriptor_SurveyService_ChoiceGetAll,
      callback);
};


/**
 * @param {!proto.survey.v1.ChoiceGetAllRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.survey.v1.ChoiceGetAllResponse>}
 *     Promise that resolves to the response
 */
proto.survey.v1.SurveyServicePromiseClient.prototype.choiceGetAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/survey.v1.SurveyService/ChoiceGetAll',
      request,
      metadata || {},
      methodDescriptor_SurveyService_ChoiceGetAll);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.survey.v1.ChoiceCreateRequest,
 *   !proto.survey.v1.ChoiceCreateResponse>}
 */
const methodDescriptor_SurveyService_ChoiceCreate = new grpc.web.MethodDescriptor(
  '/survey.v1.SurveyService/ChoiceCreate',
  grpc.web.MethodType.UNARY,
  survey_v1_survey_choice_pb.ChoiceCreateRequest,
  survey_v1_survey_choice_pb.ChoiceCreateResponse,
  /**
   * @param {!proto.survey.v1.ChoiceCreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_choice_pb.ChoiceCreateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.survey.v1.ChoiceCreateRequest,
 *   !proto.survey.v1.ChoiceCreateResponse>}
 */
const methodInfo_SurveyService_ChoiceCreate = new grpc.web.AbstractClientBase.MethodInfo(
  survey_v1_survey_choice_pb.ChoiceCreateResponse,
  /**
   * @param {!proto.survey.v1.ChoiceCreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_choice_pb.ChoiceCreateResponse.deserializeBinary
);


/**
 * @param {!proto.survey.v1.ChoiceCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.survey.v1.ChoiceCreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.survey.v1.ChoiceCreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.survey.v1.SurveyServiceClient.prototype.choiceCreate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/survey.v1.SurveyService/ChoiceCreate',
      request,
      metadata || {},
      methodDescriptor_SurveyService_ChoiceCreate,
      callback);
};


/**
 * @param {!proto.survey.v1.ChoiceCreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.survey.v1.ChoiceCreateResponse>}
 *     Promise that resolves to the response
 */
proto.survey.v1.SurveyServicePromiseClient.prototype.choiceCreate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/survey.v1.SurveyService/ChoiceCreate',
      request,
      metadata || {},
      methodDescriptor_SurveyService_ChoiceCreate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.survey.v1.ChoiceUpdateRequest,
 *   !proto.survey.v1.ChoiceUpdateResponse>}
 */
const methodDescriptor_SurveyService_ChoiceUpdate = new grpc.web.MethodDescriptor(
  '/survey.v1.SurveyService/ChoiceUpdate',
  grpc.web.MethodType.UNARY,
  survey_v1_survey_choice_pb.ChoiceUpdateRequest,
  survey_v1_survey_choice_pb.ChoiceUpdateResponse,
  /**
   * @param {!proto.survey.v1.ChoiceUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_choice_pb.ChoiceUpdateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.survey.v1.ChoiceUpdateRequest,
 *   !proto.survey.v1.ChoiceUpdateResponse>}
 */
const methodInfo_SurveyService_ChoiceUpdate = new grpc.web.AbstractClientBase.MethodInfo(
  survey_v1_survey_choice_pb.ChoiceUpdateResponse,
  /**
   * @param {!proto.survey.v1.ChoiceUpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_choice_pb.ChoiceUpdateResponse.deserializeBinary
);


/**
 * @param {!proto.survey.v1.ChoiceUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.survey.v1.ChoiceUpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.survey.v1.ChoiceUpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.survey.v1.SurveyServiceClient.prototype.choiceUpdate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/survey.v1.SurveyService/ChoiceUpdate',
      request,
      metadata || {},
      methodDescriptor_SurveyService_ChoiceUpdate,
      callback);
};


/**
 * @param {!proto.survey.v1.ChoiceUpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.survey.v1.ChoiceUpdateResponse>}
 *     Promise that resolves to the response
 */
proto.survey.v1.SurveyServicePromiseClient.prototype.choiceUpdate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/survey.v1.SurveyService/ChoiceUpdate',
      request,
      metadata || {},
      methodDescriptor_SurveyService_ChoiceUpdate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.survey.v1.ChoiceDeleteRequest,
 *   !proto.survey.v1.ChoiceDeleteResponse>}
 */
const methodDescriptor_SurveyService_ChoiceDelete = new grpc.web.MethodDescriptor(
  '/survey.v1.SurveyService/ChoiceDelete',
  grpc.web.MethodType.UNARY,
  survey_v1_survey_choice_pb.ChoiceDeleteRequest,
  survey_v1_survey_choice_pb.ChoiceDeleteResponse,
  /**
   * @param {!proto.survey.v1.ChoiceDeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_choice_pb.ChoiceDeleteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.survey.v1.ChoiceDeleteRequest,
 *   !proto.survey.v1.ChoiceDeleteResponse>}
 */
const methodInfo_SurveyService_ChoiceDelete = new grpc.web.AbstractClientBase.MethodInfo(
  survey_v1_survey_choice_pb.ChoiceDeleteResponse,
  /**
   * @param {!proto.survey.v1.ChoiceDeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_choice_pb.ChoiceDeleteResponse.deserializeBinary
);


/**
 * @param {!proto.survey.v1.ChoiceDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.survey.v1.ChoiceDeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.survey.v1.ChoiceDeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.survey.v1.SurveyServiceClient.prototype.choiceDelete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/survey.v1.SurveyService/ChoiceDelete',
      request,
      metadata || {},
      methodDescriptor_SurveyService_ChoiceDelete,
      callback);
};


/**
 * @param {!proto.survey.v1.ChoiceDeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.survey.v1.ChoiceDeleteResponse>}
 *     Promise that resolves to the response
 */
proto.survey.v1.SurveyServicePromiseClient.prototype.choiceDelete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/survey.v1.SurveyService/ChoiceDelete',
      request,
      metadata || {},
      methodDescriptor_SurveyService_ChoiceDelete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.survey.v1.ResponseGetAllRequest,
 *   !proto.survey.v1.ResponseGetAllResponse>}
 */
const methodDescriptor_SurveyService_ResponseGetAll = new grpc.web.MethodDescriptor(
  '/survey.v1.SurveyService/ResponseGetAll',
  grpc.web.MethodType.UNARY,
  survey_v1_survey_response_pb.ResponseGetAllRequest,
  survey_v1_survey_response_pb.ResponseGetAllResponse,
  /**
   * @param {!proto.survey.v1.ResponseGetAllRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_response_pb.ResponseGetAllResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.survey.v1.ResponseGetAllRequest,
 *   !proto.survey.v1.ResponseGetAllResponse>}
 */
const methodInfo_SurveyService_ResponseGetAll = new grpc.web.AbstractClientBase.MethodInfo(
  survey_v1_survey_response_pb.ResponseGetAllResponse,
  /**
   * @param {!proto.survey.v1.ResponseGetAllRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_response_pb.ResponseGetAllResponse.deserializeBinary
);


/**
 * @param {!proto.survey.v1.ResponseGetAllRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.survey.v1.ResponseGetAllResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.survey.v1.ResponseGetAllResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.survey.v1.SurveyServiceClient.prototype.responseGetAll =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/survey.v1.SurveyService/ResponseGetAll',
      request,
      metadata || {},
      methodDescriptor_SurveyService_ResponseGetAll,
      callback);
};


/**
 * @param {!proto.survey.v1.ResponseGetAllRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.survey.v1.ResponseGetAllResponse>}
 *     Promise that resolves to the response
 */
proto.survey.v1.SurveyServicePromiseClient.prototype.responseGetAll =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/survey.v1.SurveyService/ResponseGetAll',
      request,
      metadata || {},
      methodDescriptor_SurveyService_ResponseGetAll);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.survey.v1.ResponseGetOneRequest,
 *   !proto.survey.v1.ResponseGetOneResponse>}
 */
const methodDescriptor_SurveyService_ResponseGetOne = new grpc.web.MethodDescriptor(
  '/survey.v1.SurveyService/ResponseGetOne',
  grpc.web.MethodType.UNARY,
  survey_v1_survey_response_pb.ResponseGetOneRequest,
  survey_v1_survey_response_pb.ResponseGetOneResponse,
  /**
   * @param {!proto.survey.v1.ResponseGetOneRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_response_pb.ResponseGetOneResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.survey.v1.ResponseGetOneRequest,
 *   !proto.survey.v1.ResponseGetOneResponse>}
 */
const methodInfo_SurveyService_ResponseGetOne = new grpc.web.AbstractClientBase.MethodInfo(
  survey_v1_survey_response_pb.ResponseGetOneResponse,
  /**
   * @param {!proto.survey.v1.ResponseGetOneRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_response_pb.ResponseGetOneResponse.deserializeBinary
);


/**
 * @param {!proto.survey.v1.ResponseGetOneRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.survey.v1.ResponseGetOneResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.survey.v1.ResponseGetOneResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.survey.v1.SurveyServiceClient.prototype.responseGetOne =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/survey.v1.SurveyService/ResponseGetOne',
      request,
      metadata || {},
      methodDescriptor_SurveyService_ResponseGetOne,
      callback);
};


/**
 * @param {!proto.survey.v1.ResponseGetOneRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.survey.v1.ResponseGetOneResponse>}
 *     Promise that resolves to the response
 */
proto.survey.v1.SurveyServicePromiseClient.prototype.responseGetOne =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/survey.v1.SurveyService/ResponseGetOne',
      request,
      metadata || {},
      methodDescriptor_SurveyService_ResponseGetOne);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.survey.v1.ResponseAnswerGetListRequest,
 *   !proto.survey.v1.ResponseAnswerGetListResponse>}
 */
const methodDescriptor_SurveyService_ResponseAnswerGetList = new grpc.web.MethodDescriptor(
  '/survey.v1.SurveyService/ResponseAnswerGetList',
  grpc.web.MethodType.UNARY,
  survey_v1_survey_response_pb.ResponseAnswerGetListRequest,
  survey_v1_survey_response_pb.ResponseAnswerGetListResponse,
  /**
   * @param {!proto.survey.v1.ResponseAnswerGetListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_response_pb.ResponseAnswerGetListResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.survey.v1.ResponseAnswerGetListRequest,
 *   !proto.survey.v1.ResponseAnswerGetListResponse>}
 */
const methodInfo_SurveyService_ResponseAnswerGetList = new grpc.web.AbstractClientBase.MethodInfo(
  survey_v1_survey_response_pb.ResponseAnswerGetListResponse,
  /**
   * @param {!proto.survey.v1.ResponseAnswerGetListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  survey_v1_survey_response_pb.ResponseAnswerGetListResponse.deserializeBinary
);


/**
 * @param {!proto.survey.v1.ResponseAnswerGetListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.survey.v1.ResponseAnswerGetListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.survey.v1.ResponseAnswerGetListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.survey.v1.SurveyServiceClient.prototype.responseAnswerGetList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/survey.v1.SurveyService/ResponseAnswerGetList',
      request,
      metadata || {},
      methodDescriptor_SurveyService_ResponseAnswerGetList,
      callback);
};


/**
 * @param {!proto.survey.v1.ResponseAnswerGetListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.survey.v1.ResponseAnswerGetListResponse>}
 *     Promise that resolves to the response
 */
proto.survey.v1.SurveyServicePromiseClient.prototype.responseAnswerGetList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/survey.v1.SurveyService/ResponseAnswerGetList',
      request,
      metadata || {},
      methodDescriptor_SurveyService_ResponseAnswerGetList);
};


module.exports = proto.survey.v1;

