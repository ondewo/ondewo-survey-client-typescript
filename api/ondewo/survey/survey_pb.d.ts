import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../google/api/annotations_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';


export class Survey extends jspb.Message {
  getSurveyId(): string;
  setSurveyId(value: string): Survey;

  getDisplayName(): string;
  setDisplayName(value: string): Survey;

  getLanguageCode(): string;
  setLanguageCode(value: string): Survey;

  getQuestionsList(): Array<Question>;
  setQuestionsList(value: Array<Question>): Survey;
  clearQuestionsList(): Survey;
  addQuestions(value?: Question, index?: number): Question;

  getSurveyInfo(): SurveyInfo | undefined;
  setSurveyInfo(value?: SurveyInfo): Survey;
  hasSurveyInfo(): boolean;
  clearSurveyInfo(): Survey;

  getExcludeSubflowsList(): Array<SubFlow>;
  setExcludeSubflowsList(value: Array<SubFlow>): Survey;
  clearExcludeSubflowsList(): Survey;
  addExcludeSubflows(value: SubFlow, index?: number): Survey;

  getStatus(): Survey.AgentStatus;
  setStatus(value: Survey.AgentStatus): Survey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Survey.AsObject;
  static toObject(includeInstance: boolean, msg: Survey): Survey.AsObject;
  static serializeBinaryToWriter(message: Survey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Survey;
  static deserializeBinaryFromReader(message: Survey, reader: jspb.BinaryReader): Survey;
}

export namespace Survey {
  export type AsObject = {
    surveyId: string,
    displayName: string,
    languageCode: string,
    questionsList: Array<Question.AsObject>,
    surveyInfo?: SurveyInfo.AsObject,
    excludeSubflowsList: Array<SubFlow>,
    status: Survey.AgentStatus,
  }

  export enum AgentStatus { 
    TO_BE_INITIALIZED = 0,
    UPDATED = 1,
    UPDATING = 2,
    OUTDATED = 3,
  }
}

export class SurveyInfo extends jspb.Message {
  getLegalEntity(): string;
  setLegalEntity(value: string): SurveyInfo;

  getPostalAddress(): string;
  setPostalAddress(value: string): SurveyInfo;

  getEmailAddress(): string;
  setEmailAddress(value: string): SurveyInfo;

  getPhoneNumber(): string;
  setPhoneNumber(value: string): SurveyInfo;

  getPhoneHours(): string;
  setPhoneHours(value: string): SurveyInfo;

  getExpectedDuration(): string;
  setExpectedDuration(value: string): SurveyInfo;

  getPurpose(): string;
  setPurpose(value: string): SurveyInfo;

  getTopic(): string;
  setTopic(value: string): SurveyInfo;

  getLegalDisclaimer(): string;
  setLegalDisclaimer(value: string): SurveyInfo;

  getAnonymous(): boolean;
  setAnonymous(value: boolean): SurveyInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyInfo): SurveyInfo.AsObject;
  static serializeBinaryToWriter(message: SurveyInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyInfo;
  static deserializeBinaryFromReader(message: SurveyInfo, reader: jspb.BinaryReader): SurveyInfo;
}

export namespace SurveyInfo {
  export type AsObject = {
    legalEntity: string,
    postalAddress: string,
    emailAddress: string,
    phoneNumber: string,
    phoneHours: string,
    expectedDuration: string,
    purpose: string,
    topic: string,
    legalDisclaimer: string,
    anonymous: boolean,
  }
}

export class Question extends jspb.Message {
  getOpenQuestion(): OpenQuestion | undefined;
  setOpenQuestion(value?: OpenQuestion): Question;
  hasOpenQuestion(): boolean;
  clearOpenQuestion(): Question;

  getSingleChoiceQuestion(): SingleChoiceQuestion | undefined;
  setSingleChoiceQuestion(value?: SingleChoiceQuestion): Question;
  hasSingleChoiceQuestion(): boolean;
  clearSingleChoiceQuestion(): Question;

  getMultipleChoiceQuestion(): MultipleChoiceQuestion | undefined;
  setMultipleChoiceQuestion(value?: MultipleChoiceQuestion): Question;
  hasMultipleChoiceQuestion(): boolean;
  clearMultipleChoiceQuestion(): Question;

  getScaleQuestion(): ScaleQuestion | undefined;
  setScaleQuestion(value?: ScaleQuestion): Question;
  hasScaleQuestion(): boolean;
  clearScaleQuestion(): Question;

  getSingleParameterQuestion(): SingleParameterQuestion | undefined;
  setSingleParameterQuestion(value?: SingleParameterQuestion): Question;
  hasSingleParameterQuestion(): boolean;
  clearSingleParameterQuestion(): Question;

  getMultipleParameterQuestion(): MultipleParameterQuestion | undefined;
  setMultipleParameterQuestion(value?: MultipleParameterQuestion): Question;
  hasMultipleParameterQuestion(): boolean;
  clearMultipleParameterQuestion(): Question;

  getQuestionCase(): Question.QuestionCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Question.AsObject;
  static toObject(includeInstance: boolean, msg: Question): Question.AsObject;
  static serializeBinaryToWriter(message: Question, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Question;
  static deserializeBinaryFromReader(message: Question, reader: jspb.BinaryReader): Question;
}

export namespace Question {
  export type AsObject = {
    openQuestion?: OpenQuestion.AsObject,
    singleChoiceQuestion?: SingleChoiceQuestion.AsObject,
    multipleChoiceQuestion?: MultipleChoiceQuestion.AsObject,
    scaleQuestion?: ScaleQuestion.AsObject,
    singleParameterQuestion?: SingleParameterQuestion.AsObject,
    multipleParameterQuestion?: MultipleParameterQuestion.AsObject,
  }

  export enum QuestionCase { 
    QUESTION_NOT_SET = 0,
    OPEN_QUESTION = 1,
    SINGLE_CHOICE_QUESTION = 2,
    MULTIPLE_CHOICE_QUESTION = 3,
    SCALE_QUESTION = 4,
    SINGLE_PARAMETER_QUESTION = 5,
    MULTIPLE_PARAMETER_QUESTION = 6,
  }
}

export class OpenQuestion extends jspb.Message {
  getQuestionText(): string;
  setQuestionText(value: string): OpenQuestion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OpenQuestion.AsObject;
  static toObject(includeInstance: boolean, msg: OpenQuestion): OpenQuestion.AsObject;
  static serializeBinaryToWriter(message: OpenQuestion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OpenQuestion;
  static deserializeBinaryFromReader(message: OpenQuestion, reader: jspb.BinaryReader): OpenQuestion;
}

export namespace OpenQuestion {
  export type AsObject = {
    questionText: string,
  }
}

export class SingleChoiceQuestion extends jspb.Message {
  getQuestionText(): string;
  setQuestionText(value: string): SingleChoiceQuestion;

  getChoicesList(): Array<Choice>;
  setChoicesList(value: Array<Choice>): SingleChoiceQuestion;
  clearChoicesList(): SingleChoiceQuestion;
  addChoices(value?: Choice, index?: number): Choice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleChoiceQuestion.AsObject;
  static toObject(includeInstance: boolean, msg: SingleChoiceQuestion): SingleChoiceQuestion.AsObject;
  static serializeBinaryToWriter(message: SingleChoiceQuestion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleChoiceQuestion;
  static deserializeBinaryFromReader(message: SingleChoiceQuestion, reader: jspb.BinaryReader): SingleChoiceQuestion;
}

export namespace SingleChoiceQuestion {
  export type AsObject = {
    questionText: string,
    choicesList: Array<Choice.AsObject>,
  }
}

export class MultipleChoiceQuestion extends jspb.Message {
  getQuestionText(): string;
  setQuestionText(value: string): MultipleChoiceQuestion;

  getChoicesList(): Array<Choice>;
  setChoicesList(value: Array<Choice>): MultipleChoiceQuestion;
  clearChoicesList(): MultipleChoiceQuestion;
  addChoices(value?: Choice, index?: number): Choice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultipleChoiceQuestion.AsObject;
  static toObject(includeInstance: boolean, msg: MultipleChoiceQuestion): MultipleChoiceQuestion.AsObject;
  static serializeBinaryToWriter(message: MultipleChoiceQuestion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultipleChoiceQuestion;
  static deserializeBinaryFromReader(message: MultipleChoiceQuestion, reader: jspb.BinaryReader): MultipleChoiceQuestion;
}

export namespace MultipleChoiceQuestion {
  export type AsObject = {
    questionText: string,
    choicesList: Array<Choice.AsObject>,
  }
}

export class ScaleQuestion extends jspb.Message {
  getQuestionText(): string;
  setQuestionText(value: string): ScaleQuestion;

  getMinValue(): ScaleQuestion.ScaleValue | undefined;
  setMinValue(value?: ScaleQuestion.ScaleValue): ScaleQuestion;
  hasMinValue(): boolean;
  clearMinValue(): ScaleQuestion;

  getMaxValue(): ScaleQuestion.ScaleValue | undefined;
  setMaxValue(value?: ScaleQuestion.ScaleValue): ScaleQuestion;
  hasMaxValue(): boolean;
  clearMaxValue(): ScaleQuestion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScaleQuestion.AsObject;
  static toObject(includeInstance: boolean, msg: ScaleQuestion): ScaleQuestion.AsObject;
  static serializeBinaryToWriter(message: ScaleQuestion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScaleQuestion;
  static deserializeBinaryFromReader(message: ScaleQuestion, reader: jspb.BinaryReader): ScaleQuestion;
}

export namespace ScaleQuestion {
  export type AsObject = {
    questionText: string,
    minValue?: ScaleQuestion.ScaleValue.AsObject,
    maxValue?: ScaleQuestion.ScaleValue.AsObject,
  }

  export class ScaleValue extends jspb.Message {
    getValue(): number;
    setValue(value: number): ScaleValue;

    getLabel(): string;
    setLabel(value: string): ScaleValue;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ScaleValue.AsObject;
    static toObject(includeInstance: boolean, msg: ScaleValue): ScaleValue.AsObject;
    static serializeBinaryToWriter(message: ScaleValue, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ScaleValue;
    static deserializeBinaryFromReader(message: ScaleValue, reader: jspb.BinaryReader): ScaleValue;
  }

  export namespace ScaleValue {
    export type AsObject = {
      value: number,
      label: string,
    }
  }

}

export class SingleParameterQuestion extends jspb.Message {
  getQuestionText(): string;
  setQuestionText(value: string): SingleParameterQuestion;

  getParameterType(): string;
  setParameterType(value: string): SingleParameterQuestion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SingleParameterQuestion.AsObject;
  static toObject(includeInstance: boolean, msg: SingleParameterQuestion): SingleParameterQuestion.AsObject;
  static serializeBinaryToWriter(message: SingleParameterQuestion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SingleParameterQuestion;
  static deserializeBinaryFromReader(message: SingleParameterQuestion, reader: jspb.BinaryReader): SingleParameterQuestion;
}

export namespace SingleParameterQuestion {
  export type AsObject = {
    questionText: string,
    parameterType: string,
  }
}

export class MultipleParameterQuestion extends jspb.Message {
  getQuestionText(): string;
  setQuestionText(value: string): MultipleParameterQuestion;

  getParameterType(): string;
  setParameterType(value: string): MultipleParameterQuestion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MultipleParameterQuestion.AsObject;
  static toObject(includeInstance: boolean, msg: MultipleParameterQuestion): MultipleParameterQuestion.AsObject;
  static serializeBinaryToWriter(message: MultipleParameterQuestion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MultipleParameterQuestion;
  static deserializeBinaryFromReader(message: MultipleParameterQuestion, reader: jspb.BinaryReader): MultipleParameterQuestion;
}

export namespace MultipleParameterQuestion {
  export type AsObject = {
    questionText: string,
    parameterType: string,
  }
}

export class Choice extends jspb.Message {
  getSynonymsList(): Array<string>;
  setSynonymsList(value: Array<string>): Choice;
  clearSynonymsList(): Choice;
  addSynonyms(value: string, index?: number): Choice;

  getFollowUpQuestion(): Question | undefined;
  setFollowUpQuestion(value?: Question): Choice;
  hasFollowUpQuestion(): boolean;
  clearFollowUpQuestion(): Choice;

  getValue(): string;
  setValue(value: string): Choice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Choice.AsObject;
  static toObject(includeInstance: boolean, msg: Choice): Choice.AsObject;
  static serializeBinaryToWriter(message: Choice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Choice;
  static deserializeBinaryFromReader(message: Choice, reader: jspb.BinaryReader): Choice;
}

export namespace Choice {
  export type AsObject = {
    synonymsList: Array<string>,
    followUpQuestion?: Question.AsObject,
    value: string,
  }
}

export class Answer extends jspb.Message {
  getQuestionNr(): number;
  setQuestionNr(value: number): Answer;

  getSessionId(): string;
  setSessionId(value: string): Answer;

  getAnswerText(): string;
  setAnswerText(value: string): Answer;

  getAnswerParameter(): string;
  setAnswerParameter(value: string): Answer;

  getAnswerParameterOriginal(): string;
  setAnswerParameterOriginal(value: string): Answer;

  getAnonymous(): boolean;
  setAnonymous(value: boolean): Answer;

  getUserInformation(): Answer.UserInfo | undefined;
  setUserInformation(value?: Answer.UserInfo): Answer;
  hasUserInformation(): boolean;
  clearUserInformation(): Answer;

  getIsAnonymousCase(): Answer.IsAnonymousCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Answer.AsObject;
  static toObject(includeInstance: boolean, msg: Answer): Answer.AsObject;
  static serializeBinaryToWriter(message: Answer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Answer;
  static deserializeBinaryFromReader(message: Answer, reader: jspb.BinaryReader): Answer;
}

export namespace Answer {
  export type AsObject = {
    questionNr: number,
    sessionId: string,
    answerText: string,
    answerParameter: string,
    answerParameterOriginal: string,
    anonymous: boolean,
    userInformation?: Answer.UserInfo.AsObject,
  }

  export class UserInfo extends jspb.Message {
    getFirstName(): string;
    setFirstName(value: string): UserInfo;

    getLastName(): string;
    setLastName(value: string): UserInfo;

    getPhoneNumber(): string;
    setPhoneNumber(value: string): UserInfo;

    getSessionId(): string;
    setSessionId(value: string): UserInfo;

    getUserId(): string;
    setUserId(value: string): UserInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserInfo.AsObject;
    static toObject(includeInstance: boolean, msg: UserInfo): UserInfo.AsObject;
    static serializeBinaryToWriter(message: UserInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserInfo;
    static deserializeBinaryFromReader(message: UserInfo, reader: jspb.BinaryReader): UserInfo;
  }

  export namespace UserInfo {
    export type AsObject = {
      firstName: string,
      lastName: string,
      phoneNumber: string,
      sessionId: string,
      userId: string,
    }
  }


  export enum IsAnonymousCase { 
    IS_ANONYMOUS_NOT_SET = 0,
    ANONYMOUS = 7,
    USER_INFORMATION = 6,
  }
}

export class CreateSurveyRequest extends jspb.Message {
  getSurvey(): Survey | undefined;
  setSurvey(value?: Survey): CreateSurveyRequest;
  hasSurvey(): boolean;
  clearSurvey(): CreateSurveyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateSurveyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateSurveyRequest): CreateSurveyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateSurveyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateSurveyRequest;
  static deserializeBinaryFromReader(message: CreateSurveyRequest, reader: jspb.BinaryReader): CreateSurveyRequest;
}

export namespace CreateSurveyRequest {
  export type AsObject = {
    survey?: Survey.AsObject,
  }
}

export class GetSurveyRequest extends jspb.Message {
  getSurveyId(): string;
  setSurveyId(value: string): GetSurveyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSurveyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSurveyRequest): GetSurveyRequest.AsObject;
  static serializeBinaryToWriter(message: GetSurveyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSurveyRequest;
  static deserializeBinaryFromReader(message: GetSurveyRequest, reader: jspb.BinaryReader): GetSurveyRequest;
}

export namespace GetSurveyRequest {
  export type AsObject = {
    surveyId: string,
  }
}

export class UpdateSurveyRequest extends jspb.Message {
  getSurvey(): Survey | undefined;
  setSurvey(value?: Survey): UpdateSurveyRequest;
  hasSurvey(): boolean;
  clearSurvey(): UpdateSurveyRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateSurveyRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateSurveyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSurveyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSurveyRequest): UpdateSurveyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateSurveyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSurveyRequest;
  static deserializeBinaryFromReader(message: UpdateSurveyRequest, reader: jspb.BinaryReader): UpdateSurveyRequest;
}

export namespace UpdateSurveyRequest {
  export type AsObject = {
    survey?: Survey.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteSurveyRequest extends jspb.Message {
  getSurveyId(): string;
  setSurveyId(value: string): DeleteSurveyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteSurveyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteSurveyRequest): DeleteSurveyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteSurveyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteSurveyRequest;
  static deserializeBinaryFromReader(message: DeleteSurveyRequest, reader: jspb.BinaryReader): DeleteSurveyRequest;
}

export namespace DeleteSurveyRequest {
  export type AsObject = {
    surveyId: string,
  }
}

export class GetSurveyAnswersRequest extends jspb.Message {
  getSurveyId(): string;
  setSurveyId(value: string): GetSurveyAnswersRequest;

  getSessionId(): string;
  setSessionId(value: string): GetSurveyAnswersRequest;

  getUserId(): string;
  setUserId(value: string): GetSurveyAnswersRequest;

  getUserPhoneNumber(): string;
  setUserPhoneNumber(value: string): GetSurveyAnswersRequest;

  getIdentifierCase(): GetSurveyAnswersRequest.IdentifierCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSurveyAnswersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetSurveyAnswersRequest): GetSurveyAnswersRequest.AsObject;
  static serializeBinaryToWriter(message: GetSurveyAnswersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSurveyAnswersRequest;
  static deserializeBinaryFromReader(message: GetSurveyAnswersRequest, reader: jspb.BinaryReader): GetSurveyAnswersRequest;
}

export namespace GetSurveyAnswersRequest {
  export type AsObject = {
    surveyId: string,
    sessionId: string,
    userId: string,
    userPhoneNumber: string,
  }

  export enum IdentifierCase { 
    IDENTIFIER_NOT_SET = 0,
    SESSION_ID = 2,
    USER_ID = 3,
    USER_PHONE_NUMBER = 4,
  }
}

export class GetAllSurveyAnswersRequest extends jspb.Message {
  getSurveyId(): string;
  setSurveyId(value: string): GetAllSurveyAnswersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllSurveyAnswersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllSurveyAnswersRequest): GetAllSurveyAnswersRequest.AsObject;
  static serializeBinaryToWriter(message: GetAllSurveyAnswersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllSurveyAnswersRequest;
  static deserializeBinaryFromReader(message: GetAllSurveyAnswersRequest, reader: jspb.BinaryReader): GetAllSurveyAnswersRequest;
}

export namespace GetAllSurveyAnswersRequest {
  export type AsObject = {
    surveyId: string,
  }
}

export class SurveyAnswersResponse extends jspb.Message {
  getSurveyId(): string;
  setSurveyId(value: string): SurveyAnswersResponse;

  getAnswersList(): Array<Answer>;
  setAnswersList(value: Array<Answer>): SurveyAnswersResponse;
  clearAnswersList(): SurveyAnswersResponse;
  addAnswers(value?: Answer, index?: number): Answer;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SurveyAnswersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SurveyAnswersResponse): SurveyAnswersResponse.AsObject;
  static serializeBinaryToWriter(message: SurveyAnswersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SurveyAnswersResponse;
  static deserializeBinaryFromReader(message: SurveyAnswersResponse, reader: jspb.BinaryReader): SurveyAnswersResponse;
}

export namespace SurveyAnswersResponse {
  export type AsObject = {
    surveyId: string,
    answersList: Array<Answer.AsObject>,
  }
}

export class ListSurveysRequest extends jspb.Message {
  getPageToken(): string;
  setPageToken(value: string): ListSurveysRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSurveysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSurveysRequest): ListSurveysRequest.AsObject;
  static serializeBinaryToWriter(message: ListSurveysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSurveysRequest;
  static deserializeBinaryFromReader(message: ListSurveysRequest, reader: jspb.BinaryReader): ListSurveysRequest;
}

export namespace ListSurveysRequest {
  export type AsObject = {
    pageToken: string,
  }
}

export class ListSurveysResponse extends jspb.Message {
  getSurveysList(): Array<Survey>;
  setSurveysList(value: Array<Survey>): ListSurveysResponse;
  clearSurveysList(): ListSurveysResponse;
  addSurveys(value?: Survey, index?: number): Survey;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListSurveysResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSurveysResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSurveysResponse): ListSurveysResponse.AsObject;
  static serializeBinaryToWriter(message: ListSurveysResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSurveysResponse;
  static deserializeBinaryFromReader(message: ListSurveysResponse, reader: jspb.BinaryReader): ListSurveysResponse;
}

export namespace ListSurveysResponse {
  export type AsObject = {
    surveysList: Array<Survey.AsObject>,
    nextPageToken: string,
  }
}

export class AgentSurveyRequest extends jspb.Message {
  getSurveyId(): string;
  setSurveyId(value: string): AgentSurveyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentSurveyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AgentSurveyRequest): AgentSurveyRequest.AsObject;
  static serializeBinaryToWriter(message: AgentSurveyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentSurveyRequest;
  static deserializeBinaryFromReader(message: AgentSurveyRequest, reader: jspb.BinaryReader): AgentSurveyRequest;
}

export namespace AgentSurveyRequest {
  export type AsObject = {
    surveyId: string,
  }
}

export class AgentSurveyResponse extends jspb.Message {
  getParent(): string;
  setParent(value: string): AgentSurveyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AgentSurveyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AgentSurveyResponse): AgentSurveyResponse.AsObject;
  static serializeBinaryToWriter(message: AgentSurveyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AgentSurveyResponse;
  static deserializeBinaryFromReader(message: AgentSurveyResponse, reader: jspb.BinaryReader): AgentSurveyResponse;
}

export namespace AgentSurveyResponse {
  export type AsObject = {
    parent: string,
  }
}

export enum SubFlow { 
  SUBFLOW_UNSPECIFIED = 0,
  BOT = 1,
  LEGAL_ENTITY = 2,
  POSTAL_ADDRESS = 3,
  EMAIL_ADDRESS = 4,
  PHONE_NUMBER = 5,
  PHONE_HOURS = 6,
  EXPECTED_DURATION = 7,
  PURPOSE = 8,
}
