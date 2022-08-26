/**
 * @fileoverview gRPC-Web generated client stub for ondewo.survey
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../google/api/annotations_pb.js')

var ondewo_survey_survey_pb = require('../../ondewo/survey/survey_pb.js')

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js')
const proto = {};
proto.ondewo = {};
proto.ondewo.survey = require('./fhir_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ondewo.survey.FHIRClient =
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
proto.ondewo.survey.FHIRPromiseClient =
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
 *   !proto.ondewo.survey.CreateFHIRSurveyRequest,
 *   !proto.ondewo.survey.Survey>}
 */
const methodDescriptor_FHIR_CreateFHIRSurvey = new grpc.web.MethodDescriptor(
  '/ondewo.survey.FHIR/CreateFHIRSurvey',
  grpc.web.MethodType.UNARY,
  proto.ondewo.survey.CreateFHIRSurveyRequest,
  ondewo_survey_survey_pb.Survey,
  /**
   * @param {!proto.ondewo.survey.CreateFHIRSurveyRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  ondewo_survey_survey_pb.Survey.deserializeBinary
);


/**
 * @param {!proto.ondewo.survey.CreateFHIRSurveyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.survey.Survey)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.survey.Survey>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.survey.FHIRClient.prototype.createFHIRSurvey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.survey.FHIR/CreateFHIRSurvey',
      request,
      metadata || {},
      methodDescriptor_FHIR_CreateFHIRSurvey,
      callback);
};


/**
 * @param {!proto.ondewo.survey.CreateFHIRSurveyRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.survey.Survey>}
 *     Promise that resolves to the response
 */
proto.ondewo.survey.FHIRPromiseClient.prototype.createFHIRSurvey =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.survey.FHIR/CreateFHIRSurvey',
      request,
      metadata || {},
      methodDescriptor_FHIR_CreateFHIRSurvey);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.survey.GetSurveyAnswersRequest,
 *   !proto.ondewo.survey.SurveyFHIRAnswersResponse>}
 */
const methodDescriptor_FHIR_GetFHIRSurveyAnswers = new grpc.web.MethodDescriptor(
  '/ondewo.survey.FHIR/GetFHIRSurveyAnswers',
  grpc.web.MethodType.UNARY,
  ondewo_survey_survey_pb.GetSurveyAnswersRequest,
  proto.ondewo.survey.SurveyFHIRAnswersResponse,
  /**
   * @param {!proto.ondewo.survey.GetSurveyAnswersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.survey.SurveyFHIRAnswersResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.survey.GetSurveyAnswersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.survey.SurveyFHIRAnswersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.survey.SurveyFHIRAnswersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.survey.FHIRClient.prototype.getFHIRSurveyAnswers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.survey.FHIR/GetFHIRSurveyAnswers',
      request,
      metadata || {},
      methodDescriptor_FHIR_GetFHIRSurveyAnswers,
      callback);
};


/**
 * @param {!proto.ondewo.survey.GetSurveyAnswersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.survey.SurveyFHIRAnswersResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.survey.FHIRPromiseClient.prototype.getFHIRSurveyAnswers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.survey.FHIR/GetFHIRSurveyAnswers',
      request,
      metadata || {},
      methodDescriptor_FHIR_GetFHIRSurveyAnswers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.survey.GetAllSurveyAnswersRequest,
 *   !proto.ondewo.survey.SurveyFHIRAnswersResponse>}
 */
const methodDescriptor_FHIR_GetAllFHIRSurveyAnswers = new grpc.web.MethodDescriptor(
  '/ondewo.survey.FHIR/GetAllFHIRSurveyAnswers',
  grpc.web.MethodType.UNARY,
  ondewo_survey_survey_pb.GetAllSurveyAnswersRequest,
  proto.ondewo.survey.SurveyFHIRAnswersResponse,
  /**
   * @param {!proto.ondewo.survey.GetAllSurveyAnswersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ondewo.survey.SurveyFHIRAnswersResponse.deserializeBinary
);


/**
 * @param {!proto.ondewo.survey.GetAllSurveyAnswersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.survey.SurveyFHIRAnswersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.survey.SurveyFHIRAnswersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.survey.FHIRClient.prototype.getAllFHIRSurveyAnswers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ondewo.survey.FHIR/GetAllFHIRSurveyAnswers',
      request,
      metadata || {},
      methodDescriptor_FHIR_GetAllFHIRSurveyAnswers,
      callback);
};


/**
 * @param {!proto.ondewo.survey.GetAllSurveyAnswersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.survey.SurveyFHIRAnswersResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.survey.FHIRPromiseClient.prototype.getAllFHIRSurveyAnswers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ondewo.survey.FHIR/GetAllFHIRSurveyAnswers',
      request,
      metadata || {},
      methodDescriptor_FHIR_GetAllFHIRSurveyAnswers);
};


module.exports = proto.ondewo.survey;

