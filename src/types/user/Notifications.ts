/* eslint-disable */

/**
 * The raw data received when fetching the notifications of the given user.
 *
 * @public
 */
export interface Root {
	globalObjects: GlobalObjects;
	timeline: Timeline;
}

export interface GlobalObjects {
	notifications: Notifications;
}

export interface Notifications {
	[key: string]: Notification;
}

export interface Notification {
	id: string;
	timestampMs: string;
	icon: Icon;
	message: Message;
	template: Template;
}

export interface Icon {
	id: string;
}

export interface Message {
	text: string;
	entities: Entity[];
	rtl: boolean;
}

export interface Entity {
	fromIndex: number;
	toIndex: number;
	format: string;
}

export interface Template {
	aggregateUserActionsV1: AggregateUserActionsV1;
}

export interface AggregateUserActionsV1 {
	targetObjects: TargetObject[];
	fromUsers: FromUser[];
	additionalContext: AdditionalContext;
}

export interface TargetObject {
	tweet: Tweet;
}

export interface Tweet {
	id: string;
}

export interface FromUser {
	user: User;
}

export interface User {
	id: string;
}

export interface AdditionalContext {
	contextText: ContextText;
}

export interface ContextText {
	text: string;
	entities: any[];
}

export interface Timeline {
	id: string;
	instructions: Instruction[];
}

export interface Instruction {
	clearCache?: ClearCache;
	addEntries?: AddEntries;
	clearEntriesUnreadState?: ClearEntriesUnreadState;
	markEntriesUnreadGreaterThanSortIndex?: MarkEntriesUnreadGreaterThanSortIndex;
}

export interface ClearCache {}

export interface AddEntries {
	entries: Entry[];
}

export interface Entry {
	entryId: string;
	sortIndex: string;
	content: Content;
}

export interface Content {
	operation?: Operation;
	item?: Item;
}

export interface Operation {
	cursor: Cursor;
}

export interface Cursor {
	value: string;
	cursorType: string;
}

export interface Item {
	content: Content2;
	clientEventInfo: ClientEventInfo;
	feedbackInfo?: FeedbackInfo;
}

export interface Content2 {
	notification: Notification2;
}

export interface Notification2 {
	id: string;
	url: Url;
	fromUsers: string[];
	targetTweets: string[];
}

export interface Url {
	urlType: string;
	url: string;
	urtEndpointOptions?: UrtEndpointOptions;
}

export interface UrtEndpointOptions {
	title: string;
	cacheId: string;
}

export interface ClientEventInfo {
	component: string;
	element: string;
	details: Details;
}

export interface Details {
	notificationDetails: NotificationDetails;
}

export interface NotificationDetails {
	impressionId: string;
	metadata: string;
}

export interface FeedbackInfo {
	feedbackKeys: string[];
	feedbackMetadata: string;
	clientEventInfo: ClientEventInfo2;
}

export interface ClientEventInfo2 {
	element: string;
}

export interface ClearEntriesUnreadState {}

export interface MarkEntriesUnreadGreaterThanSortIndex {
	sortIndex: string;
}
