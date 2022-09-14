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

var google_api_annotations_pb = require('../../google/api/annotations_pb.js');

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
const proto = {};
proto.ondewo = {};
proto.ondewo.survey = require('./survey_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.ondewo.survey.SurveysClient = function (hostname, credentials, options) {
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
proto.ondewo.survey.SurveysPromiseClient = function (hostname, credentials, options) {
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
 *   !proto.ondewo.survey.CreateSurveyRequest,
 *   !proto.ondewo.survey.Survey>}
 */
const methodDescriptor_Surveys_CreateSurvey = new grpc.web.MethodDescriptor(
	'/ondewo.survey.Surveys/CreateSurvey',
	grpc.web.MethodType.UNARY,
	proto.ondewo.survey.CreateSurveyRequest,
	proto.ondewo.survey.Survey,
	/**
	 * @param {!proto.ondewo.survey.CreateSurveyRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.survey.Survey.deserializeBinary
);

/**
 * @param {!proto.ondewo.survey.CreateSurveyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.survey.Survey)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.survey.Survey>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.survey.SurveysClient.prototype.createSurvey = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.survey.Surveys/CreateSurvey',
		request,
		metadata || {},
		methodDescriptor_Surveys_CreateSurvey,
		callback
	);
};

/**
 * @param {!proto.ondewo.survey.CreateSurveyRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.survey.Survey>}
 *     Promise that resolves to the response
 */
proto.ondewo.survey.SurveysPromiseClient.prototype.createSurvey = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.survey.Surveys/CreateSurvey',
		request,
		metadata || {},
		methodDescriptor_Surveys_CreateSurvey
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.survey.GetSurveyRequest,
 *   !proto.ondewo.survey.Survey>}
 */
const methodDescriptor_Surveys_GetSurvey = new grpc.web.MethodDescriptor(
	'/ondewo.survey.Surveys/GetSurvey',
	grpc.web.MethodType.UNARY,
	proto.ondewo.survey.GetSurveyRequest,
	proto.ondewo.survey.Survey,
	/**
	 * @param {!proto.ondewo.survey.GetSurveyRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.survey.Survey.deserializeBinary
);

/**
 * @param {!proto.ondewo.survey.GetSurveyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.survey.Survey)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.survey.Survey>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.survey.SurveysClient.prototype.getSurvey = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.survey.Surveys/GetSurvey',
		request,
		metadata || {},
		methodDescriptor_Surveys_GetSurvey,
		callback
	);
};

/**
 * @param {!proto.ondewo.survey.GetSurveyRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.survey.Survey>}
 *     Promise that resolves to the response
 */
proto.ondewo.survey.SurveysPromiseClient.prototype.getSurvey = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.survey.Surveys/GetSurvey',
		request,
		metadata || {},
		methodDescriptor_Surveys_GetSurvey
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.survey.UpdateSurveyRequest,
 *   !proto.ondewo.survey.Survey>}
 */
const methodDescriptor_Surveys_UpdateSurvey = new grpc.web.MethodDescriptor(
	'/ondewo.survey.Surveys/UpdateSurvey',
	grpc.web.MethodType.UNARY,
	proto.ondewo.survey.UpdateSurveyRequest,
	proto.ondewo.survey.Survey,
	/**
	 * @param {!proto.ondewo.survey.UpdateSurveyRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.survey.Survey.deserializeBinary
);

/**
 * @param {!proto.ondewo.survey.UpdateSurveyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.survey.Survey)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.survey.Survey>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.survey.SurveysClient.prototype.updateSurvey = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.survey.Surveys/UpdateSurvey',
		request,
		metadata || {},
		methodDescriptor_Surveys_UpdateSurvey,
		callback
	);
};

/**
 * @param {!proto.ondewo.survey.UpdateSurveyRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.survey.Survey>}
 *     Promise that resolves to the response
 */
proto.ondewo.survey.SurveysPromiseClient.prototype.updateSurvey = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.survey.Surveys/UpdateSurvey',
		request,
		metadata || {},
		methodDescriptor_Surveys_UpdateSurvey
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.survey.DeleteSurveyRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Surveys_DeleteSurvey = new grpc.web.MethodDescriptor(
	'/ondewo.survey.Surveys/DeleteSurvey',
	grpc.web.MethodType.UNARY,
	proto.ondewo.survey.DeleteSurveyRequest,
	google_protobuf_empty_pb.Empty,
	/**
	 * @param {!proto.ondewo.survey.DeleteSurveyRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	google_protobuf_empty_pb.Empty.deserializeBinary
);

/**
 * @param {!proto.ondewo.survey.DeleteSurveyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.survey.SurveysClient.prototype.deleteSurvey = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.survey.Surveys/DeleteSurvey',
		request,
		metadata || {},
		methodDescriptor_Surveys_DeleteSurvey,
		callback
	);
};

/**
 * @param {!proto.ondewo.survey.DeleteSurveyRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.survey.SurveysPromiseClient.prototype.deleteSurvey = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.survey.Surveys/DeleteSurvey',
		request,
		metadata || {},
		methodDescriptor_Surveys_DeleteSurvey
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.survey.ListSurveysRequest,
 *   !proto.ondewo.survey.ListSurveysResponse>}
 */
const methodDescriptor_Surveys_ListSurveys = new grpc.web.MethodDescriptor(
	'/ondewo.survey.Surveys/ListSurveys',
	grpc.web.MethodType.UNARY,
	proto.ondewo.survey.ListSurveysRequest,
	proto.ondewo.survey.ListSurveysResponse,
	/**
	 * @param {!proto.ondewo.survey.ListSurveysRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.survey.ListSurveysResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.survey.ListSurveysRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.survey.ListSurveysResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.survey.ListSurveysResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.survey.SurveysClient.prototype.listSurveys = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.survey.Surveys/ListSurveys',
		request,
		metadata || {},
		methodDescriptor_Surveys_ListSurveys,
		callback
	);
};

/**
 * @param {!proto.ondewo.survey.ListSurveysRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.survey.ListSurveysResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.survey.SurveysPromiseClient.prototype.listSurveys = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.survey.Surveys/ListSurveys',
		request,
		metadata || {},
		methodDescriptor_Surveys_ListSurveys
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.survey.GetSurveyAnswersRequest,
 *   !proto.ondewo.survey.SurveyAnswersResponse>}
 */
const methodDescriptor_Surveys_GetSurveyAnswers = new grpc.web.MethodDescriptor(
	'/ondewo.survey.Surveys/GetSurveyAnswers',
	grpc.web.MethodType.UNARY,
	proto.ondewo.survey.GetSurveyAnswersRequest,
	proto.ondewo.survey.SurveyAnswersResponse,
	/**
	 * @param {!proto.ondewo.survey.GetSurveyAnswersRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.survey.SurveyAnswersResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.survey.GetSurveyAnswersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.survey.SurveyAnswersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.survey.SurveyAnswersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.survey.SurveysClient.prototype.getSurveyAnswers = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.survey.Surveys/GetSurveyAnswers',
		request,
		metadata || {},
		methodDescriptor_Surveys_GetSurveyAnswers,
		callback
	);
};

/**
 * @param {!proto.ondewo.survey.GetSurveyAnswersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.survey.SurveyAnswersResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.survey.SurveysPromiseClient.prototype.getSurveyAnswers = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.survey.Surveys/GetSurveyAnswers',
		request,
		metadata || {},
		methodDescriptor_Surveys_GetSurveyAnswers
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.survey.GetAllSurveyAnswersRequest,
 *   !proto.ondewo.survey.SurveyAnswersResponse>}
 */
const methodDescriptor_Surveys_GetAllSurveyAnswers = new grpc.web.MethodDescriptor(
	'/ondewo.survey.Surveys/GetAllSurveyAnswers',
	grpc.web.MethodType.UNARY,
	proto.ondewo.survey.GetAllSurveyAnswersRequest,
	proto.ondewo.survey.SurveyAnswersResponse,
	/**
	 * @param {!proto.ondewo.survey.GetAllSurveyAnswersRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.survey.SurveyAnswersResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.survey.GetAllSurveyAnswersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.survey.SurveyAnswersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.survey.SurveyAnswersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.survey.SurveysClient.prototype.getAllSurveyAnswers = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.survey.Surveys/GetAllSurveyAnswers',
		request,
		metadata || {},
		methodDescriptor_Surveys_GetAllSurveyAnswers,
		callback
	);
};

/**
 * @param {!proto.ondewo.survey.GetAllSurveyAnswersRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.survey.SurveyAnswersResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.survey.SurveysPromiseClient.prototype.getAllSurveyAnswers = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.survey.Surveys/GetAllSurveyAnswers',
		request,
		metadata || {},
		methodDescriptor_Surveys_GetAllSurveyAnswers
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.survey.AgentSurveyRequest,
 *   !proto.ondewo.survey.AgentSurveyResponse>}
 */
const methodDescriptor_Surveys_CreateAgentSurvey = new grpc.web.MethodDescriptor(
	'/ondewo.survey.Surveys/CreateAgentSurvey',
	grpc.web.MethodType.UNARY,
	proto.ondewo.survey.AgentSurveyRequest,
	proto.ondewo.survey.AgentSurveyResponse,
	/**
	 * @param {!proto.ondewo.survey.AgentSurveyRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.survey.AgentSurveyResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.survey.AgentSurveyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.survey.AgentSurveyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.survey.AgentSurveyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.survey.SurveysClient.prototype.createAgentSurvey = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.survey.Surveys/CreateAgentSurvey',
		request,
		metadata || {},
		methodDescriptor_Surveys_CreateAgentSurvey,
		callback
	);
};

/**
 * @param {!proto.ondewo.survey.AgentSurveyRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.survey.AgentSurveyResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.survey.SurveysPromiseClient.prototype.createAgentSurvey = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.survey.Surveys/CreateAgentSurvey',
		request,
		metadata || {},
		methodDescriptor_Surveys_CreateAgentSurvey
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.survey.AgentSurveyRequest,
 *   !proto.ondewo.survey.AgentSurveyResponse>}
 */
const methodDescriptor_Surveys_UpdateAgentSurvey = new grpc.web.MethodDescriptor(
	'/ondewo.survey.Surveys/UpdateAgentSurvey',
	grpc.web.MethodType.UNARY,
	proto.ondewo.survey.AgentSurveyRequest,
	proto.ondewo.survey.AgentSurveyResponse,
	/**
	 * @param {!proto.ondewo.survey.AgentSurveyRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	proto.ondewo.survey.AgentSurveyResponse.deserializeBinary
);

/**
 * @param {!proto.ondewo.survey.AgentSurveyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.ondewo.survey.AgentSurveyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.survey.AgentSurveyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.survey.SurveysClient.prototype.updateAgentSurvey = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.survey.Surveys/UpdateAgentSurvey',
		request,
		metadata || {},
		methodDescriptor_Surveys_UpdateAgentSurvey,
		callback
	);
};

/**
 * @param {!proto.ondewo.survey.AgentSurveyRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ondewo.survey.AgentSurveyResponse>}
 *     Promise that resolves to the response
 */
proto.ondewo.survey.SurveysPromiseClient.prototype.updateAgentSurvey = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.survey.Surveys/UpdateAgentSurvey',
		request,
		metadata || {},
		methodDescriptor_Surveys_UpdateAgentSurvey
	);
};

/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ondewo.survey.AgentSurveyRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_Surveys_DeleteAgentSurvey = new grpc.web.MethodDescriptor(
	'/ondewo.survey.Surveys/DeleteAgentSurvey',
	grpc.web.MethodType.UNARY,
	proto.ondewo.survey.AgentSurveyRequest,
	google_protobuf_empty_pb.Empty,
	/**
	 * @param {!proto.ondewo.survey.AgentSurveyRequest} request
	 * @return {!Uint8Array}
	 */
	function (request) {
		return request.serializeBinary();
	},
	google_protobuf_empty_pb.Empty.deserializeBinary
);

/**
 * @param {!proto.ondewo.survey.AgentSurveyRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ondewo.survey.SurveysClient.prototype.deleteAgentSurvey = function (request, metadata, callback) {
	return this.client_.rpcCall(
		this.hostname_ + '/ondewo.survey.Surveys/DeleteAgentSurvey',
		request,
		metadata || {},
		methodDescriptor_Surveys_DeleteAgentSurvey,
		callback
	);
};

/**
 * @param {!proto.ondewo.survey.AgentSurveyRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.ondewo.survey.SurveysPromiseClient.prototype.deleteAgentSurvey = function (request, metadata) {
	return this.client_.unaryCall(
		this.hostname_ + '/ondewo.survey.Surveys/DeleteAgentSurvey',
		request,
		metadata || {},
		methodDescriptor_Surveys_DeleteAgentSurvey
	);
};

module.exports = proto.ondewo.survey;
