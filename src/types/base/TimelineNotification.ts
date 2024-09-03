/* eslint-disable */

/**
 * Represents the raw data of a single Notification from notification timeline.
 *
 * @public
 */
export interface ITimelineNotification {
	entryId: string;
	sortIndex: string;
	content: INotificationContent;
}

export interface INotificationContent {
	item: INotificationContentItem;
}

export interface INotificationContentItem {
	content: INotificationContentItemContent;
	clientEventInfo: INotificationClientEvent;
	feedbackInfo: INotificationFeedback;
}

export interface INotificationContentItemContent {
	notification: INotification;
}

export interface INotification {
	id: string;
	url: IUrl;
	fromUsers: string[];
	targetTweets: string[];
}

export interface IUrl {
	urlType: string;
	url: string;
}

export interface INotificationClientEvent {
	component: string;
	element: string;
	details: INotificationClientEventDetails;
}

export interface INotificationClientEventDetails {
	notificationDetails: INotificationDetails;
}

export interface INotificationDetails {
	impressionId: string;
	metadata: string;
}

export interface INotificationFeedback {
	feedbackKeys: string[];
	feedbackMetadata: string;
	clientEventInfo: INotificationFeedbackClientEvent;
}

export interface INotificationFeedbackClientEvent {
	element: string;
}
