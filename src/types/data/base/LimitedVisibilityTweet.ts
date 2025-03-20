/* eslint-disable */

import { ITweet } from './Tweet';

/**
 * Represents the raw data of a single Tweet with limited visibility actions.
 *
 * @public
 */
export interface ILimitedVisibilityTweet {
	__typename: string;
	tweet: ITweet;
	limitedActionResults: ITweetLimitedActionResults;
}

export interface ITweetLimitedActionResults {
	limited_actions: ITweetLimitedAction[];
}

export interface ITweetLimitedAction {
	action: string;
	prompt: ILimitedActionPrompt;
}

export interface ILimitedActionPrompt {
	__typename: string;
	cta_type: string;
	headline: IPromptHeadline;
	subtext: IPromptSubtext;
}

export interface IPromptHeadline {
	text: string;
	entities: any[];
}

export interface IPromptSubtext {
	text: string;
	entities: any[];
}
