// PAYLOADS
import { Args } from './Args';

// TYPES
import { IVariables } from '../../types/request/payloads/Variables';

// ENUMS
import { EResourceType } from '../../enums/Resources';

/**
 * Mandatory variables that must be sent as a URL-encoded, stringified-JSON.
 *
 * @public
 */
export class Variables implements IVariables {
	/* eslint-disable */
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
	includePromotedContent: boolean = false;
	withVoice: boolean = false;
	withCommunity: boolean = false;
	/* eslint-enable */

	/**
	 * Initializes the appropriate Variables object based on the requred resource type and parameters.
	 *
	 * @param resourceType - The type of resource that is requested.
	 * @param args - The additional user-defined arguments for fetching the resource.
	 */
	constructor(resourceType: EResourceType, args: Args) {
		// Converting JSON args to Args object
		args = new Args(resourceType, args);

		// Conditionally initializing variables
		if (resourceType == EResourceType.CREATE_TWEET) {
			this.tweet_text = args.tweetText;
		} else if (resourceType == EResourceType.CREATE_RETWEET || resourceType == EResourceType.FAVORITE_TWEET) {
			this.tweet_id = args.id;
		} else if (resourceType == EResourceType.LIST_DETAILS) {
			this.listId = args.id;
		} else if (resourceType == EResourceType.LIST_TWEETS) {
			this.listId = args.id;
			this.count = args.count;
			this.cursor = args.cursor;
		} else if (resourceType == EResourceType.TWEET_SEARCH && args.filter) {
			this.rawQuery = args.filter.toString();
			this.count = args.count;
			this.cursor = args.cursor;
			this.product = 'Latest';
		} else if (resourceType == EResourceType.TWEET_DETAILS) {
			this.tweetId = args.id;
		} else if (resourceType == EResourceType.TWEET_FAVORITERS || resourceType == EResourceType.TWEET_RETWEETERS) {
			this.tweetId = args.id;
			this.count = args.count;
			this.cursor = args.cursor;
		} else if (resourceType == EResourceType.USER_DETAILS) {
			this.screen_name = args.id;
		} else if (resourceType == EResourceType.USER_DETAILS_BY_ID) {
			this.userId = args.id;
		} else if (
			resourceType == EResourceType.USER_FOLLOWERS ||
			resourceType == EResourceType.USER_FOLLOWING ||
			resourceType == EResourceType.USER_LIKES
		) {
			this.userId = args.id;
			this.count = args.count;
			this.cursor = args.cursor;
		}
	}

	/**
	 * Converts this object to it's string representation.
	 *
	 * @returns 'this' object's string representation.
	 */
	toString(): string {
		return `${encodeURIComponent(JSON.stringify(this))}`;
	}
}
