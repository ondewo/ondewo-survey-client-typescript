import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as ondewo_survey_survey_pb from '../../ondewo/survey/survey_pb';

export class SurveysClient {
	constructor(
		hostname: string,
		credentials?: null | { [index: string]: string },
		options?: null | { [index: string]: any }
	);

	createSurvey(
		request: ondewo_survey_survey_pb.CreateSurveyRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_survey_survey_pb.Survey) => void
	): grpcWeb.ClientReadableStream<ondewo_survey_survey_pb.Survey>;

	getSurvey(
		request: ondewo_survey_survey_pb.GetSurveyRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_survey_survey_pb.Survey) => void
	): grpcWeb.ClientReadableStream<ondewo_survey_survey_pb.Survey>;

	updateSurvey(
		request: ondewo_survey_survey_pb.UpdateSurveyRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_survey_survey_pb.Survey) => void
	): grpcWeb.ClientReadableStream<ondewo_survey_survey_pb.Survey>;

	deleteSurvey(
		request: ondewo_survey_survey_pb.DeleteSurveyRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: google_protobuf_empty_pb.Empty) => void
	): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

	listSurveys(
		request: ondewo_survey_survey_pb.ListSurveysRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_survey_survey_pb.ListSurveysResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_survey_survey_pb.ListSurveysResponse>;

	getSurveyAnswers(
		request: ondewo_survey_survey_pb.GetSurveyAnswersRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_survey_survey_pb.SurveyAnswersResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_survey_survey_pb.SurveyAnswersResponse>;

	getAllSurveyAnswers(
		request: ondewo_survey_survey_pb.GetAllSurveyAnswersRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_survey_survey_pb.SurveyAnswersResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_survey_survey_pb.SurveyAnswersResponse>;

	createAgentSurvey(
		request: ondewo_survey_survey_pb.AgentSurveyRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_survey_survey_pb.AgentSurveyResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_survey_survey_pb.AgentSurveyResponse>;

	updateAgentSurvey(
		request: ondewo_survey_survey_pb.AgentSurveyRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_survey_survey_pb.AgentSurveyResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_survey_survey_pb.AgentSurveyResponse>;

	deleteAgentSurvey(
		request: ondewo_survey_survey_pb.AgentSurveyRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: google_protobuf_empty_pb.Empty) => void
	): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;
}

export class SurveysPromiseClient {
	constructor(
		hostname: string,
		credentials?: null | { [index: string]: string },
		options?: null | { [index: string]: any }
	);

	createSurvey(
		request: ondewo_survey_survey_pb.CreateSurveyRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_survey_survey_pb.Survey>;

	getSurvey(
		request: ondewo_survey_survey_pb.GetSurveyRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_survey_survey_pb.Survey>;

	updateSurvey(
		request: ondewo_survey_survey_pb.UpdateSurveyRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_survey_survey_pb.Survey>;

	deleteSurvey(
		request: ondewo_survey_survey_pb.DeleteSurveyRequest,
		metadata?: grpcWeb.Metadata
	): Promise<google_protobuf_empty_pb.Empty>;

	listSurveys(
		request: ondewo_survey_survey_pb.ListSurveysRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_survey_survey_pb.ListSurveysResponse>;

	getSurveyAnswers(
		request: ondewo_survey_survey_pb.GetSurveyAnswersRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_survey_survey_pb.SurveyAnswersResponse>;

	getAllSurveyAnswers(
		request: ondewo_survey_survey_pb.GetAllSurveyAnswersRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_survey_survey_pb.SurveyAnswersResponse>;

	createAgentSurvey(
		request: ondewo_survey_survey_pb.AgentSurveyRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_survey_survey_pb.AgentSurveyResponse>;

	updateAgentSurvey(
		request: ondewo_survey_survey_pb.AgentSurveyRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_survey_survey_pb.AgentSurveyResponse>;

	deleteAgentSurvey(
		request: ondewo_survey_survey_pb.AgentSurveyRequest,
		metadata?: grpcWeb.Metadata
	): Promise<google_protobuf_empty_pb.Empty>;
}
