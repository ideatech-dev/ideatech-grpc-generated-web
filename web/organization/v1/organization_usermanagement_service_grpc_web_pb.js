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


var web_account_v1_types_pb = require('../../../web/account/v1/types_pb.js')
const proto = {};
proto.web = {};
proto.web.organization = {};
proto.web.organization.v1 = require('./organization_usermanagement_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.web.organization.v1.OrganizationUserManagementServiceClient =
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
proto.web.organization.v1.OrganizationUserManagementServicePromiseClient =
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
 *   !proto.web.organization.v1.GetUsersRequest,
 *   !proto.web.organization.v1.GetUsersResponse>}
 */
const methodDescriptor_OrganizationUserManagementService_GetUsers = new grpc.web.MethodDescriptor(
  '/web.organization.v1.OrganizationUserManagementService/GetUsers',
  grpc.web.MethodType.UNARY,
  proto.web.organization.v1.GetUsersRequest,
  proto.web.organization.v1.GetUsersResponse,
  /**
   * @param {!proto.web.organization.v1.GetUsersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.organization.v1.GetUsersResponse.deserializeBinary
);


/**
 * @param {!proto.web.organization.v1.GetUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.web.organization.v1.GetUsersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.organization.v1.GetUsersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.organization.v1.OrganizationUserManagementServiceClient.prototype.getUsers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.organization.v1.OrganizationUserManagementService/GetUsers',
      request,
      metadata || {},
      methodDescriptor_OrganizationUserManagementService_GetUsers,
      callback);
};


/**
 * @param {!proto.web.organization.v1.GetUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.organization.v1.GetUsersResponse>}
 *     Promise that resolves to the response
 */
proto.web.organization.v1.OrganizationUserManagementServicePromiseClient.prototype.getUsers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.organization.v1.OrganizationUserManagementService/GetUsers',
      request,
      metadata || {},
      methodDescriptor_OrganizationUserManagementService_GetUsers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.organization.v1.InviteUserRequest,
 *   !proto.web.organization.v1.InviteUserResponse>}
 */
const methodDescriptor_OrganizationUserManagementService_InviteUser = new grpc.web.MethodDescriptor(
  '/web.organization.v1.OrganizationUserManagementService/InviteUser',
  grpc.web.MethodType.UNARY,
  proto.web.organization.v1.InviteUserRequest,
  proto.web.organization.v1.InviteUserResponse,
  /**
   * @param {!proto.web.organization.v1.InviteUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.organization.v1.InviteUserResponse.deserializeBinary
);


/**
 * @param {!proto.web.organization.v1.InviteUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.web.organization.v1.InviteUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.organization.v1.InviteUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.organization.v1.OrganizationUserManagementServiceClient.prototype.inviteUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.organization.v1.OrganizationUserManagementService/InviteUser',
      request,
      metadata || {},
      methodDescriptor_OrganizationUserManagementService_InviteUser,
      callback);
};


/**
 * @param {!proto.web.organization.v1.InviteUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.organization.v1.InviteUserResponse>}
 *     Promise that resolves to the response
 */
proto.web.organization.v1.OrganizationUserManagementServicePromiseClient.prototype.inviteUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.organization.v1.OrganizationUserManagementService/InviteUser',
      request,
      metadata || {},
      methodDescriptor_OrganizationUserManagementService_InviteUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.web.organization.v1.RemoveUserRequest,
 *   !proto.web.organization.v1.RemoveUserResponse>}
 */
const methodDescriptor_OrganizationUserManagementService_RemoveUser = new grpc.web.MethodDescriptor(
  '/web.organization.v1.OrganizationUserManagementService/RemoveUser',
  grpc.web.MethodType.UNARY,
  proto.web.organization.v1.RemoveUserRequest,
  proto.web.organization.v1.RemoveUserResponse,
  /**
   * @param {!proto.web.organization.v1.RemoveUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.web.organization.v1.RemoveUserResponse.deserializeBinary
);


/**
 * @param {!proto.web.organization.v1.RemoveUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.web.organization.v1.RemoveUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.web.organization.v1.RemoveUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.web.organization.v1.OrganizationUserManagementServiceClient.prototype.removeUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/web.organization.v1.OrganizationUserManagementService/RemoveUser',
      request,
      metadata || {},
      methodDescriptor_OrganizationUserManagementService_RemoveUser,
      callback);
};


/**
 * @param {!proto.web.organization.v1.RemoveUserRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.web.organization.v1.RemoveUserResponse>}
 *     Promise that resolves to the response
 */
proto.web.organization.v1.OrganizationUserManagementServicePromiseClient.prototype.removeUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/web.organization.v1.OrganizationUserManagementService/RemoveUser',
      request,
      metadata || {},
      methodDescriptor_OrganizationUserManagementService_RemoveUser);
};


module.exports = proto.web.organization.v1;

