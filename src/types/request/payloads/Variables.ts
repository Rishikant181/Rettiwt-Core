/* eslint-disable */

/**
 * Mandatory variables that must be sent as a URL-encoded, stringified-JSON.
 *
 * @public
 */
export interface IVariables {
	tweetId?: string;
	focalTweetId?: string;
	userId?: string;
	listId?: string;
	screen_name?: string;
	count?: number;
	cursor?: string;
	rawQuery?: string;
	tweet_text?: string;
	product?: string;
	includePromotedContent: boolean;

	/** @returns The string representation of 'this' data. */
	toString(): string;
}
