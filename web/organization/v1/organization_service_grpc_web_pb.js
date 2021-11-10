/**
 * @fileoverview gRPC-Web generated client stub for web.organization.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var web_organization_v1_types_pb = require('../../../web/organization/v1/types_pb.js')
const proto = {};
proto.web = {};
proto.web.organization = {};
proto.web.organization.v1 = require('./organization_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.web.organization.v1.OrganizationServiceClient =
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
proto.web.organization.v1.OrganizationServicePromiseClient =
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
 *   !proto.web.organization.v1.GetOneRequest,
 *   !proto.web.organization.v1.GetOneResponse>}
 */
const methodDescriptor_OrganizationService_GetOne = new grpc.web.MethodDescriptor(
  '/web.organization.v1.OrganizationService/GetOne',
  grpc.web.MethodType.UNARY,
  proto.web.organization.v1.GetOneRequest,
  proto.web.organization.v1.GetOneResponse,
  /**
   * @param {!proto.web.organization.v1.GetOneRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.organization.v1.GetOneResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.web.organization.v1.GetOneRequest,
 *   !proto.web.organization.v1.GetOneResponse>}
 */
const methodInfo_OrganizationService_GetOne = new grpc.web.AbstractClientBase.MethodInfo(
  proto.web.organization.v1.GetOneResponse,
  /**
   * @param {!proto.web.organization.v1.GetOneRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.organization.v1.GetOneResponse.deserializeBinary
);


/**
 * @param {!proto.web.organization.v1.GetOneRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.web.organization.v1.GetOneResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.organization.v1.GetOneResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.organization.v1.OrganizationServiceClient.prototype.getOne =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.organization.v1.OrganizationService/GetOne',
      request,
      metadata || {},
      methodDescriptor_OrganizationService_GetOne,
      callback);
};


/**
 * @param {!proto.web.organization.v1.GetOneRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.organization.v1.GetOneResponse>}
 *     Promise that resolves to the response
 */
proto.web.organization.v1.OrganizationServicePromiseClient.prototype.getOne =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.organization.v1.OrganizationService/GetOne',
      request,
      metadata || {},
      methodDescriptor_OrganizationService_GetOne);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.organization.v1.GetListRequest,
 *   !proto.web.organization.v1.GetListResponse>}
 */
const methodDescriptor_OrganizationService_GetList = new grpc.web.MethodDescriptor(
  '/web.organization.v1.OrganizationService/GetList',
  grpc.web.MethodType.UNARY,
  proto.web.organization.v1.GetListRequest,
  proto.web.organization.v1.GetListResponse,
  /**
   * @param {!proto.web.organization.v1.GetListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.organization.v1.GetListResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.web.organization.v1.GetListRequest,
 *   !proto.web.organization.v1.GetListResponse>}
 */
const methodInfo_OrganizationService_GetList = new grpc.web.AbstractClientBase.MethodInfo(
  proto.web.organization.v1.GetListResponse,
  /**
   * @param {!proto.web.organization.v1.GetListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.organization.v1.GetListResponse.deserializeBinary
);


/**
 * @param {!proto.web.organization.v1.GetListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.web.organization.v1.GetListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.organization.v1.GetListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.organization.v1.OrganizationServiceClient.prototype.getList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.organization.v1.OrganizationService/GetList',
      request,
      metadata || {},
      methodDescriptor_OrganizationService_GetList,
      callback);
};


/**
 * @param {!proto.web.organization.v1.GetListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.organization.v1.GetListResponse>}
 *     Promise that resolves to the response
 */
proto.web.organization.v1.OrganizationServicePromiseClient.prototype.getList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.organization.v1.OrganizationService/GetList',
      request,
      metadata || {},
      methodDescriptor_OrganizationService_GetList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.organization.v1.CreateRequest,
 *   !proto.web.organization.v1.CreateResponse>}
 */
const methodDescriptor_OrganizationService_Create = new grpc.web.MethodDescriptor(
  '/web.organization.v1.OrganizationService/Create',
  grpc.web.MethodType.UNARY,
  proto.web.organization.v1.CreateRequest,
  proto.web.organization.v1.CreateResponse,
  /**
   * @param {!proto.web.organization.v1.CreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.organization.v1.CreateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.web.organization.v1.CreateRequest,
 *   !proto.web.organization.v1.CreateResponse>}
 */
const methodInfo_OrganizationService_Create = new grpc.web.AbstractClientBase.MethodInfo(
  proto.web.organization.v1.CreateResponse,
  /**
   * @param {!proto.web.organization.v1.CreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.organization.v1.CreateResponse.deserializeBinary
);


/**
 * @param {!proto.web.organization.v1.CreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.web.organization.v1.CreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.organization.v1.CreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.organization.v1.OrganizationServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.organization.v1.OrganizationService/Create',
      request,
      metadata || {},
      methodDescriptor_OrganizationService_Create,
      callback);
};


/**
 * @param {!proto.web.organization.v1.CreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.organization.v1.CreateResponse>}
 *     Promise that resolves to the response
 */
proto.web.organization.v1.OrganizationServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.organization.v1.OrganizationService/Create',
      request,
      metadata || {},
      methodDescriptor_OrganizationService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.organization.v1.UpdateRequest,
 *   !proto.web.organization.v1.UpdateResponse>}
 */
const methodDescriptor_OrganizationService_Update = new grpc.web.MethodDescriptor(
  '/web.organization.v1.OrganizationService/Update',
  grpc.web.MethodType.UNARY,
  proto.web.organization.v1.UpdateRequest,
  proto.web.organization.v1.UpdateResponse,
  /**
   * @param {!proto.web.organization.v1.UpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.organization.v1.UpdateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.web.organization.v1.UpdateRequest,
 *   !proto.web.organization.v1.UpdateResponse>}
 */
const methodInfo_OrganizationService_Update = new grpc.web.AbstractClientBase.MethodInfo(
  proto.web.organization.v1.UpdateResponse,
  /**
   * @param {!proto.web.organization.v1.UpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.organization.v1.UpdateResponse.deserializeBinary
);


/**
 * @param {!proto.web.organization.v1.UpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.web.organization.v1.UpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.organization.v1.UpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.organization.v1.OrganizationServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.organization.v1.OrganizationService/Update',
      request,
      metadata || {},
      methodDescriptor_OrganizationService_Update,
      callback);
};


/**
 * @param {!proto.web.organization.v1.UpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.organization.v1.UpdateResponse>}
 *     Promise that resolves to the response
 */
proto.web.organization.v1.OrganizationServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.organization.v1.OrganizationService/Update',
      request,
      metadata || {},
      methodDescriptor_OrganizationService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.organization.v1.DeleteRequest,
 *   !proto.web.organization.v1.DeleteResponse>}
 */
const methodDescriptor_OrganizationService_Delete = new grpc.web.MethodDescriptor(
  '/web.organization.v1.OrganizationService/Delete',
  grpc.web.MethodType.UNARY,
  proto.web.organization.v1.DeleteRequest,
  proto.web.organization.v1.DeleteResponse,
  /**
   * @param {!proto.web.organization.v1.DeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.organization.v1.DeleteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.web.organization.v1.DeleteRequest,
 *   !proto.web.organization.v1.DeleteResponse>}
 */
const methodInfo_OrganizationService_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  proto.web.organization.v1.DeleteResponse,
  /**
   * @param {!proto.web.organization.v1.DeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.organization.v1.DeleteResponse.deserializeBinary
);


/**
 * @param {!proto.web.organization.v1.DeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.web.organization.v1.DeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.organization.v1.DeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.organization.v1.OrganizationServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.organization.v1.OrganizationService/Delete',
      request,
      metadata || {},
      methodDescriptor_OrganizationService_Delete,
      callback);
};


/**
 * @param {!proto.web.organization.v1.DeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.organization.v1.DeleteResponse>}
 *     Promise that resolves to the response
 */
proto.web.organization.v1.OrganizationServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.organization.v1.OrganizationService/Delete',
      request,
      metadata || {},
      methodDescriptor_OrganizationService_Delete);
};


module.exports = proto.web.organization.v1;

