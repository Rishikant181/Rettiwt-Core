// PAYLOADS
import { Args } from './Args';

// TYPES
import { IVariables } from '../../types/request/payloads/Variables';

// MODELS
import { TweetFilter } from './TweetFilter';

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
	focalTweetId?: string;
	userId?: string;
	screen_name?: string;
	count?: number;
	cursor?: string;
	rawQuery?: string;
	product: string = 'Latest';
	includePromotedContent: boolean = false;
	referrer: string = '';
	withBirdwatchNotes: boolean = false;
	withCommunity: boolean = false;
	withDownvotePerspective: boolean = false;
	withQuickPromoteEligibilityTweetFields: boolean = false;
	withReactionsMetadata: boolean = false;
	withReactionsPerspective: boolean = false;
	withSuperFollowsTweetFields: boolean = false;
	withSuperFollowsUserFields: boolean = false;
	withV2Timeline: boolean = true;
	withVoice: boolean = false;
	with_rux_injections: boolean = false;
	withClientEventToken: boolean = false;
	/* eslint-enable */

	/**
	 * Initializes the appropriate Variables object based on the requred resource type and parameters.
	 *
	 * @param resourceType The type of resource that is requested.
	 * @param args The additional user-defined arguments for fetching the resource.
	 */
	constructor(resourceType: EResourceType, args: Args) {
		if (resourceType == EResourceType.TWEET_SEARCH && args.filter) {
			this.rawQuery = new TweetFilter(args.filter).toString();
			this.count = args.count;
			this.cursor = args.cursor;
		} else if (resourceType == EResourceType.TWEET_DETAILS) {
			this.focalTweetId = args.id;
			this.count = args.count;
			this.cursor = args.cursor;
		} else if (resourceType == EResourceType.TWEET_FAVORITERS || resourceType == EResourceType.TWEET_RETWEETERS) {
			this.tweetId = args.id;
			this.count = args.count;
			this.cursor = args.cursor;
		} else if (resourceType == EResourceType.USER_DETAILS) {
			this.screen_name = args.id;
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
