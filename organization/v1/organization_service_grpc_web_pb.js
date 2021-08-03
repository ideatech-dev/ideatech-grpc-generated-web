/**
 * @fileoverview gRPC-Web generated client stub for organization.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var organization_v1_organization_pb = require('../../organization/v1/organization_pb.js')

var organization_v1_organization_user_pb = require('../../organization/v1/organization_user_pb.js')
const proto = {};
proto.organization = {};
proto.organization.v1 = require('./organization_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.organization.v1.OrganizationServiceClient =
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
proto.organization.v1.OrganizationServicePromiseClient =
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
 *   !proto.organization.v1.GetOneRequest,
 *   !proto.organization.v1.GetOneResponse>}
 */
const methodDescriptor_OrganizationService_GetOne = new grpc.web.MethodDescriptor(
  '/organization.v1.OrganizationService/GetOne',
  grpc.web.MethodType.UNARY,
  organization_v1_organization_pb.GetOneRequest,
  organization_v1_organization_pb.GetOneResponse,
  /**
   * @param {!proto.organization.v1.GetOneRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  organization_v1_organization_pb.GetOneResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.organization.v1.GetOneRequest,
 *   !proto.organization.v1.GetOneResponse>}
 */
const methodInfo_OrganizationService_GetOne = new grpc.web.AbstractClientBase.MethodInfo(
  organization_v1_organization_pb.GetOneResponse,
  /**
   * @param {!proto.organization.v1.GetOneRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  organization_v1_organization_pb.GetOneResponse.deserializeBinary
);


/**
 * @param {!proto.organization.v1.GetOneRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.organization.v1.GetOneResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.organization.v1.GetOneResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.organization.v1.OrganizationServiceClient.prototype.getOne =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/organization.v1.OrganizationService/GetOne',
      request,
      metadata || {},
      methodDescriptor_OrganizationService_GetOne,
      callback);
};


/**
 * @param {!proto.organization.v1.GetOneRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.organization.v1.GetOneResponse>}
 *     Promise that resolves to the response
 */
proto.organization.v1.OrganizationServicePromiseClient.prototype.getOne =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/organization.v1.OrganizationService/GetOne',
      request,
      metadata || {},
      methodDescriptor_OrganizationService_GetOne);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.organization.v1.GetListRequest,
 *   !proto.organization.v1.GetListResponse>}
 */
const methodDescriptor_OrganizationService_GetList = new grpc.web.MethodDescriptor(
  '/organization.v1.OrganizationService/GetList',
  grpc.web.MethodType.UNARY,
  organization_v1_organization_pb.GetListRequest,
  organization_v1_organization_pb.GetListResponse,
  /**
   * @param {!proto.organization.v1.GetListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  organization_v1_organization_pb.GetListResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.organization.v1.GetListRequest,
 *   !proto.organization.v1.GetListResponse>}
 */
const methodInfo_OrganizationService_GetList = new grpc.web.AbstractClientBase.MethodInfo(
  organization_v1_organization_pb.GetListResponse,
  /**
   * @param {!proto.organization.v1.GetListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  organization_v1_organization_pb.GetListResponse.deserializeBinary
);


/**
 * @param {!proto.organization.v1.GetListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.organization.v1.GetListResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.organization.v1.GetListResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.organization.v1.OrganizationServiceClient.prototype.getList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/organization.v1.OrganizationService/GetList',
      request,
      metadata || {},
      methodDescriptor_OrganizationService_GetList,
      callback);
};


/**
 * @param {!proto.organization.v1.GetListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.organization.v1.GetListResponse>}
 *     Promise that resolves to the response
 */
proto.organization.v1.OrganizationServicePromiseClient.prototype.getList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/organization.v1.OrganizationService/GetList',
      request,
      metadata || {},
      methodDescriptor_OrganizationService_GetList);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.organization.v1.CreateRequest,
 *   !proto.organization.v1.CreateResponse>}
 */
const methodDescriptor_OrganizationService_Create = new grpc.web.MethodDescriptor(
  '/organization.v1.OrganizationService/Create',
  grpc.web.MethodType.UNARY,
  organization_v1_organization_pb.CreateRequest,
  organization_v1_organization_pb.CreateResponse,
  /**
   * @param {!proto.organization.v1.CreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  organization_v1_organization_pb.CreateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.organization.v1.CreateRequest,
 *   !proto.organization.v1.CreateResponse>}
 */
const methodInfo_OrganizationService_Create = new grpc.web.AbstractClientBase.MethodInfo(
  organization_v1_organization_pb.CreateResponse,
  /**
   * @param {!proto.organization.v1.CreateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  organization_v1_organization_pb.CreateResponse.deserializeBinary
);


/**
 * @param {!proto.organization.v1.CreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.organization.v1.CreateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.organization.v1.CreateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.organization.v1.OrganizationServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/organization.v1.OrganizationService/Create',
      request,
      metadata || {},
      methodDescriptor_OrganizationService_Create,
      callback);
};


/**
 * @param {!proto.organization.v1.CreateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.organization.v1.CreateResponse>}
 *     Promise that resolves to the response
 */
proto.organization.v1.OrganizationServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/organization.v1.OrganizationService/Create',
      request,
      metadata || {},
      methodDescriptor_OrganizationService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.organization.v1.UpdateRequest,
 *   !proto.organization.v1.UpdateResponse>}
 */
const methodDescriptor_OrganizationService_Update = new grpc.web.MethodDescriptor(
  '/organization.v1.OrganizationService/Update',
  grpc.web.MethodType.UNARY,
  organization_v1_organization_pb.UpdateRequest,
  organization_v1_organization_pb.UpdateResponse,
  /**
   * @param {!proto.organization.v1.UpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  organization_v1_organization_pb.UpdateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.organization.v1.UpdateRequest,
 *   !proto.organization.v1.UpdateResponse>}
 */
const methodInfo_OrganizationService_Update = new grpc.web.AbstractClientBase.MethodInfo(
  organization_v1_organization_pb.UpdateResponse,
  /**
   * @param {!proto.organization.v1.UpdateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  organization_v1_organization_pb.UpdateResponse.deserializeBinary
);


/**
 * @param {!proto.organization.v1.UpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.organization.v1.UpdateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.organization.v1.UpdateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.organization.v1.OrganizationServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/organization.v1.OrganizationService/Update',
      request,
      metadata || {},
      methodDescriptor_OrganizationService_Update,
      callback);
};


/**
 * @param {!proto.organization.v1.UpdateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.organization.v1.UpdateResponse>}
 *     Promise that resolves to the response
 */
proto.organization.v1.OrganizationServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/organization.v1.OrganizationService/Update',
      request,
      metadata || {},
      methodDescriptor_OrganizationService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.organization.v1.DeleteRequest,
 *   !proto.organization.v1.DeleteResponse>}
 */
const methodDescriptor_OrganizationService_Delete = new grpc.web.MethodDescriptor(
  '/organization.v1.OrganizationService/Delete',
  grpc.web.MethodType.UNARY,
  organization_v1_organization_pb.DeleteRequest,
  organization_v1_organization_pb.DeleteResponse,
  /**
   * @param {!proto.organization.v1.DeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  organization_v1_organization_pb.DeleteResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.organization.v1.DeleteRequest,
 *   !proto.organization.v1.DeleteResponse>}
 */
const methodInfo_OrganizationService_Delete = new grpc.web.AbstractClientBase.MethodInfo(
  organization_v1_organization_pb.DeleteResponse,
  /**
   * @param {!proto.organization.v1.DeleteRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  organization_v1_organization_pb.DeleteResponse.deserializeBinary
);


/**
 * @param {!proto.organization.v1.DeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.organization.v1.DeleteResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.organization.v1.DeleteResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.organization.v1.OrganizationServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/organization.v1.OrganizationService/Delete',
      request,
      metadata || {},
      methodDescriptor_OrganizationService_Delete,
      callback);
};


/**
 * @param {!proto.organization.v1.DeleteRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.organization.v1.DeleteResponse>}
 *     Promise that resolves to the response
 */
proto.organization.v1.OrganizationServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/organization.v1.OrganizationService/Delete',
      request,
      metadata || {},
      methodDescriptor_OrganizationService_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.organization.v1.GetUsersRequest,
 *   !proto.organization.v1.GetUsersResponse>}
 */
const methodDescriptor_OrganizationService_GetUsers = new grpc.web.MethodDescriptor(
  '/organization.v1.OrganizationService/GetUsers',
  grpc.web.MethodType.UNARY,
  organization_v1_organization_user_pb.GetUsersRequest,
  organization_v1_organization_user_pb.GetUsersResponse,
  /**
   * @param {!proto.organization.v1.GetUsersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  organization_v1_organization_user_pb.GetUsersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.organization.v1.GetUsersRequest,
 *   !proto.organization.v1.GetUsersResponse>}
 */
const methodInfo_OrganizationService_GetUsers = new grpc.web.AbstractClientBase.MethodInfo(
  organization_v1_organization_user_pb.GetUsersResponse,
  /**
   * @param {!proto.organization.v1.GetUsersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  organization_v1_organization_user_pb.GetUsersResponse.deserializeBinary
);


/**
 * @param {!proto.organization.v1.GetUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.organization.v1.GetUsersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.organization.v1.GetUsersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.organization.v1.OrganizationServiceClient.prototype.getUsers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/organization.v1.OrganizationService/GetUsers',
      request,
      metadata || {},
      methodDescriptor_OrganizationService_GetUsers,
      callback);
};


/**
 * @param {!proto.organization.v1.GetUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.organization.v1.GetUsersResponse>}
 *     Promise that resolves to the response
 */
proto.organization.v1.OrganizationServicePromiseClient.prototype.getUsers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/organization.v1.OrganizationService/GetUsers',
      request,
      metadata || {},
      methodDescriptor_OrganizationService_GetUsers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.organization.v1.InviteUserRequest,
 *   !proto.organization.v1.InviteUserResponse>}
 */
const methodDescriptor_OrganizationService_InviteUser = new grpc.web.MethodDescriptor(
  '/organization.v1.OrganizationService/InviteUser',
  grpc.web.MethodType.UNARY,
  organization_v1_organization_user_pb.InviteUserRequest,
  organization_v1_organization_user_pb.InviteUserResponse,
  /**
   * @param {!proto.organization.v1.InviteUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  organization_v1_organization_user_pb.InviteUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.organization.v1.InviteUserRequest,
 *   !proto.organization.v1.InviteUserResponse>}
 */
const methodInfo_OrganizationService_InviteUser = new grpc.web.AbstractClientBase.MethodInfo(
  organization_v1_organization_user_pb.InviteUserResponse,
  /**
   * @param {!proto.organization.v1.InviteUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  organization_v1_organization_user_pb.InviteUserResponse.deserializeBinary
);


/**
 * @param {!proto.organization.v1.InviteUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.organization.v1.InviteUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.organization.v1.InviteUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.organization.v1.OrganizationServiceClient.prototype.inviteUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/organization.v1.OrganizationService/InviteUser',
      request,
      metadata || {},
      methodDescriptor_OrganizationService_InviteUser,
      callback);
};


/**
 * @param {!proto.organization.v1.InviteUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.organization.v1.InviteUserResponse>}
 *     Promise that resolves to the response
 */
proto.organization.v1.OrganizationServicePromiseClient.prototype.inviteUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/organization.v1.OrganizationService/InviteUser',
      request,
      metadata || {},
      methodDescriptor_OrganizationService_InviteUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.organization.v1.RemoveUserRequest,
 *   !proto.organization.v1.RemoveUserResponse>}
 */
const methodDescriptor_OrganizationService_RemoveUser = new grpc.web.MethodDescriptor(
  '/organization.v1.OrganizationService/RemoveUser',
  grpc.web.MethodType.UNARY,
  organization_v1_organization_user_pb.RemoveUserRequest,
  organization_v1_organization_user_pb.RemoveUserResponse,
  /**
   * @param {!proto.organization.v1.RemoveUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  organization_v1_organization_user_pb.RemoveUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.organization.v1.RemoveUserRequest,
 *   !proto.organization.v1.RemoveUserResponse>}
 */
const methodInfo_OrganizationService_RemoveUser = new grpc.web.AbstractClientBase.MethodInfo(
  organization_v1_organization_user_pb.RemoveUserResponse,
  /**
   * @param {!proto.organization.v1.RemoveUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  organization_v1_organization_user_pb.RemoveUserResponse.deserializeBinary
);


/**
 * @param {!proto.organization.v1.RemoveUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.organization.v1.RemoveUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.organization.v1.RemoveUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.organization.v1.OrganizationServiceClient.prototype.removeUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/organization.v1.OrganizationService/RemoveUser',
      request,
      metadata || {},
      methodDescriptor_OrganizationService_RemoveUser,
      callback);
};


/**
 * @param {!proto.organization.v1.RemoveUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.organization.v1.RemoveUserResponse>}
 *     Promise that resolves to the response
 */
proto.organization.v1.OrganizationServicePromiseClient.prototype.removeUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/organization.v1.OrganizationService/RemoveUser',
      request,
      metadata || {},
      methodDescriptor_OrganizationService_RemoveUser);
};


module.exports = proto.organization.v1;

