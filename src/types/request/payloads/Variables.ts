/**
 * Mandatory variables that must be sent as a URL-encoded, stringified-JSON.
 *
 * @public
 */
export interface IVariables {
	/* eslint-disable @typescript-eslint/naming-convention */
	tweetId?: string;
	tweet_id?: string;
	userId?: string;
	listId?: string;
	screen_name?: string;
	count?: number;
	cursor?: string;
	rawQuery?: string;
	tweet_text?: string;
	product?: string;
	includePromotedContent: boolean;
	withVoice: boolean;
	withCommunity: boolean;
	/* eslint-enable @typescript-eslint/naming-convention */

	/** @returns The string representation of 'this' data. */
	toString(): string;
}
