import * as grpcWeb from 'grpc-web';

import * as ondewo_survey_fhir_pb from '../../ondewo/survey/fhir_pb';
import * as ondewo_survey_survey_pb from '../../ondewo/survey/survey_pb';

export class FHIRClient {
	constructor(
		hostname: string,
		credentials?: null | { [index: string]: string },
		options?: null | { [index: string]: any }
	);

	createFHIRSurvey(
		request: ondewo_survey_fhir_pb.CreateFHIRSurveyRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_survey_survey_pb.Survey) => void
	): grpcWeb.ClientReadableStream<ondewo_survey_survey_pb.Survey>;

	getFHIRSurveyAnswers(
		request: ondewo_survey_survey_pb.GetSurveyAnswersRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_survey_fhir_pb.SurveyFHIRAnswersResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_survey_fhir_pb.SurveyFHIRAnswersResponse>;

	getAllFHIRSurveyAnswers(
		request: ondewo_survey_survey_pb.GetAllSurveyAnswersRequest,
		metadata: grpcWeb.Metadata | undefined,
		callback: (err: grpcWeb.RpcError, response: ondewo_survey_fhir_pb.SurveyFHIRAnswersResponse) => void
	): grpcWeb.ClientReadableStream<ondewo_survey_fhir_pb.SurveyFHIRAnswersResponse>;
}

export class FHIRPromiseClient {
	constructor(
		hostname: string,
		credentials?: null | { [index: string]: string },
		options?: null | { [index: string]: any }
	);

	createFHIRSurvey(
		request: ondewo_survey_fhir_pb.CreateFHIRSurveyRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_survey_survey_pb.Survey>;

	getFHIRSurveyAnswers(
		request: ondewo_survey_survey_pb.GetSurveyAnswersRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_survey_fhir_pb.SurveyFHIRAnswersResponse>;

	getAllFHIRSurveyAnswers(
		request: ondewo_survey_survey_pb.GetAllSurveyAnswersRequest,
		metadata?: grpcWeb.Metadata
	): Promise<ondewo_survey_fhir_pb.SurveyFHIRAnswersResponse>;
}
