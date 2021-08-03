/**
 * @fileoverview gRPC-Web generated client stub for account.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var account_v1_auth_pb = require('../../account/v1/auth_pb.js')
const proto = {};
proto.account = {};
proto.account.v1 = require('./account_service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.account.v1.AccountServiceClient =
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
proto.account.v1.AccountServicePromiseClient =
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
 *   !proto.account.v1.LoginRequest,
 *   !proto.account.v1.LoginResponse>}
 */
const methodDescriptor_AccountService_Login = new grpc.web.MethodDescriptor(
  '/account.v1.AccountService/Login',
  grpc.web.MethodType.UNARY,
  account_v1_auth_pb.LoginRequest,
  account_v1_auth_pb.LoginResponse,
  /**
   * @param {!proto.account.v1.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  account_v1_auth_pb.LoginResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.account.v1.LoginRequest,
 *   !proto.account.v1.LoginResponse>}
 */
const methodInfo_AccountService_Login = new grpc.web.AbstractClientBase.MethodInfo(
  account_v1_auth_pb.LoginResponse,
  /**
   * @param {!proto.account.v1.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  account_v1_auth_pb.LoginResponse.deserializeBinary
);


/**
 * @param {!proto.account.v1.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.account.v1.LoginResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.account.v1.LoginResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.account.v1.AccountServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/account.v1.AccountService/Login',
      request,
      metadata || {},
      methodDescriptor_AccountService_Login,
      callback);
};


/**
 * @param {!proto.account.v1.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.account.v1.LoginResponse>}
 *     Promise that resolves to the response
 */
proto.account.v1.AccountServicePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/account.v1.AccountService/Login',
      request,
      metadata || {},
      methodDescriptor_AccountService_Login);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.account.v1.RegisterRequest,
 *   !proto.account.v1.RegisterResponse>}
 */
const methodDescriptor_AccountService_Register = new grpc.web.MethodDescriptor(
  '/account.v1.AccountService/Register',
  grpc.web.MethodType.UNARY,
  account_v1_auth_pb.RegisterRequest,
  account_v1_auth_pb.RegisterResponse,
  /**
   * @param {!proto.account.v1.RegisterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  account_v1_auth_pb.RegisterResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.account.v1.RegisterRequest,
 *   !proto.account.v1.RegisterResponse>}
 */
const methodInfo_AccountService_Register = new grpc.web.AbstractClientBase.MethodInfo(
  account_v1_auth_pb.RegisterResponse,
  /**
   * @param {!proto.account.v1.RegisterRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  account_v1_auth_pb.RegisterResponse.deserializeBinary
);


/**
 * @param {!proto.account.v1.RegisterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.account.v1.RegisterResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.account.v1.RegisterResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.account.v1.AccountServiceClient.prototype.register =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/account.v1.AccountService/Register',
      request,
      metadata || {},
      methodDescriptor_AccountService_Register,
      callback);
};


/**
 * @param {!proto.account.v1.RegisterRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.account.v1.RegisterResponse>}
 *     Promise that resolves to the response
 */
proto.account.v1.AccountServicePromiseClient.prototype.register =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/account.v1.AccountService/Register',
      request,
      metadata || {},
      methodDescriptor_AccountService_Register);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.account.v1.AccountInformationRequest,
 *   !proto.account.v1.AccountInformationResponse>}
 */
const methodDescriptor_AccountService_AccountInformation = new grpc.web.MethodDescriptor(
  '/account.v1.AccountService/AccountInformation',
  grpc.web.MethodType.UNARY,
  account_v1_auth_pb.AccountInformationRequest,
  account_v1_auth_pb.AccountInformationResponse,
  /**
   * @param {!proto.account.v1.AccountInformationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  account_v1_auth_pb.AccountInformationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.account.v1.AccountInformationRequest,
 *   !proto.account.v1.AccountInformationResponse>}
 */
const methodInfo_AccountService_AccountInformation = new grpc.web.AbstractClientBase.MethodInfo(
  account_v1_auth_pb.AccountInformationResponse,
  /**
   * @param {!proto.account.v1.AccountInformationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  account_v1_auth_pb.AccountInformationResponse.deserializeBinary
);


/**
 * @param {!proto.account.v1.AccountInformationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.account.v1.AccountInformationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.account.v1.AccountInformationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.account.v1.AccountServiceClient.prototype.accountInformation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/account.v1.AccountService/AccountInformation',
      request,
      metadata || {},
      methodDescriptor_AccountService_AccountInformation,
      callback);
};


/**
 * @param {!proto.account.v1.AccountInformationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.account.v1.AccountInformationResponse>}
 *     Promise that resolves to the response
 */
proto.account.v1.AccountServicePromiseClient.prototype.accountInformation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/account.v1.AccountService/AccountInformation',
      request,
      metadata || {},
      methodDescriptor_AccountService_AccountInformation);
};


module.exports = proto.account.v1;

