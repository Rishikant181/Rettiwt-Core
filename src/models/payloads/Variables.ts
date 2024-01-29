// MODELS
import { FetchArgs } from '../args/FetchArgs';
import { PostArgs, MediaArgs } from '../args/PostArgs';

// ENUMS
import { EResourceType } from '../../enums/Resources';

/**
 * Mandatory variables that must be sent as a URL-encoded, stringified-JSON.
 *
 * @public
 */
export class Variables {
	/* eslint-disable @typescript-eslint/naming-convention */
	public id?: string;
	public tweetId?: string;
	public tweet_id?: string;
	public userId?: string;
	public listId?: string;
	public screen_name?: string;
	public count?: number;
	public cursor?: string;
	public rawQuery?: string;
	public tweet_text?: string;
	public media?: MediaVariable;
	public product?: string;
	public includePromotedContent?: boolean;
	public isMetatagsQuery?: boolean;
	public withVoice?: boolean;
	public withCommunity?: boolean;
	public withReplays?: boolean;
	public withListeners?: boolean;
	/* eslint-enable @typescript-eslint/naming-convention */

	/**
	 * @param resourceType - The type of resource that is requested.
	 * @param args - The additional user-defined arguments for fetching the resource.
	 */
	public constructor(resourceType: EResourceType, args: FetchArgs & PostArgs) {
		// Conditionally initializing variables
		if (resourceType == EResourceType.CREATE_TWEET) {
			this.tweet_text = args.tweet?.text;
			this.media = args.tweet?.media ? new MediaVariable(args.tweet.media) : undefined;
		} else if (resourceType == EResourceType.CREATE_RETWEET || resourceType == EResourceType.FAVORITE_TWEET) {
			this.tweet_id = args.id;
		} else if (resourceType == EResourceType.LIST_DETAILS) {
			this.listId = args.id;
		} else if (resourceType == EResourceType.LIST_TWEETS) {
			this.listId = args.id;
			this.count = args.count;
			this.cursor = args.cursor;
		} else if (resourceType == EResourceType.SPACE_DETAILS_BY_ID) {
			this.id = args.id;
			this.isMetatagsQuery = false;
			this.withReplays = true;
			this.withListeners = true;
		} else if (resourceType == EResourceType.TWEET_SEARCH && args.filter) {
			this.rawQuery = args.filter.toString();
			this.count = args.count;
			this.cursor = args.cursor;
			this.product = 'Latest';
		} else if (resourceType == EResourceType.TWEET_DETAILS) {
			this.tweetId = args.id;
			this.includePromotedContent = false;
			this.withCommunity = false;
			this.withVoice = false;
		} else if (resourceType == EResourceType.TWEET_FAVORITERS || resourceType == EResourceType.TWEET_RETWEETERS) {
			this.tweetId = args.id;
			this.count = args.count;
			this.cursor = args.cursor;
			this.includePromotedContent = false;
		} else if (resourceType == EResourceType.USER_DETAILS) {
			this.screen_name = args.id;
		} else if (resourceType == EResourceType.USER_DETAILS_BY_ID) {
			this.userId = args.id;
		} else if (resourceType == EResourceType.USER_FOLLOWERS || resourceType == EResourceType.USER_FOLLOWING) {
			this.userId = args.id;
			this.count = args.count;
			this.cursor = args.cursor;
			this.includePromotedContent = false;
		} else if (
			resourceType == EResourceType.USER_LIKES ||
			resourceType == EResourceType.USER_TWEETS ||
			resourceType == EResourceType.USER_TWEETS_AND_REPLIES
		) {
			this.userId = args.id;
			this.count = args.count;
			this.cursor = args.cursor;
			this.includePromotedContent = false;
			this.withVoice = false;
		}
	}

	/**
	 * @returns The string representation of 'this' object.
	 */
	public toString(): string {
		return JSON.stringify(this);
	}
}

/**
 * Media to be sent as payload.
 *
 * @public
 */
export class MediaVariable {
	/* eslint-disable @typescript-eslint/naming-convention */
	public media_entities: MediaVariableEntity[];
	public possibly_sensitive: boolean;
	/* eslint-enable @typescript-eslint/naming-convention */

	/**
	 * @param media - The list of MediaArgs objects specifying the media items to be sent in the Tweet.
	 */
	public constructor(media: MediaArgs[]) {
		this.media_entities = media.map((item) => new MediaVariableEntity(item));
		this.possibly_sensitive = false;
	}
}

/**
 * Each media item in the media payload.
 *
 * @public
 */
export class MediaVariableEntity {
	/* eslint-disable @typescript-eslint/naming-convention */
	public media_id: string;
	public tagged_users: string[];
	/* eslint-enable @typescript-eslint/naming-convention */

	/**
	 * @param media - The MediaArgs object specifying the details of the media item to be included in the payload.
	 */
	public constructor(media: MediaArgs) {
		this.media_id = media.id;
		this.tagged_users = media.tags ?? [];
	}
}
