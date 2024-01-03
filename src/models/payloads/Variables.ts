// MODELS
import { DataArgs } from '../args/DataArgs';

// TYPES
import { IMediaVariable, IMediaVariableEntity, IVariables } from '../../types/request/payloads/Variables';

// ENUMS
import { EResourceType } from '../../enums/Resources';

/**
 * Mandatory variables that must be sent as a URL-encoded, stringified-JSON.
 *
 * @public
 */
export class Variables implements IVariables {
	/* eslint-disable @typescript-eslint/naming-convention */
	public tweetId?: string;
	public tweet_id?: string;
	public userId?: string;
	public listId?: string;
	public screen_name?: string;
	public count?: number;
	public cursor?: string;
	public rawQuery?: string;
	public tweet_text?: string;
	public media?: IMediaVariable;
	public product?: string;
	public includePromotedContent: boolean = false;
	public withVoice: boolean = false;
	public withCommunity: boolean = false;
	/* eslint-enable @typescript-eslint/naming-convention */

	/**
	 * Initializes the appropriate Variables object based on the requred resource type and parameters.
	 *
	 * @param resourceType - The type of resource that is requested.
	 * @param args - The additional user-defined arguments for fetching the resource.
	 */
	public constructor(resourceType: EResourceType, args: DataArgs) {
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
			resourceType == EResourceType.USER_LIKES ||
			resourceType == EResourceType.USER_TWEETS ||
			resourceType == EResourceType.USER_TWEETS_AND_REPLIES
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
	public toString(): string {
		return JSON.stringify(this);
	}
}

/**
 * Media to be sent as payload.
 *
 * @public
 */
export class MediaVariable implements IMediaVariable {
	/* eslint-disable @typescript-eslint/naming-convention */
	public media_entities: MediaVariableEntity[];
	public possibly_sensitive: boolean;
	/* eslint-enable @typescript-eslint/naming-convention */

	/**
	 * Initializes a new MediaVariable payload containing all the different media to be sent.
	 *
	 * @param media - The media items payload to be sent.
	 */
	public constructor(media: MediaVariable) {
		this.media_entities = media.media_entities;
		this.possibly_sensitive = media.possibly_sensitive;
	}
}

/**
 * Each media item in the media payload.
 *
 * @public
 */
export class MediaVariableEntity implements IMediaVariableEntity {
	/* eslint-disable @typescript-eslint/naming-convention */
	public media_id: string;
	public tagged_users: string[];
	/* eslint-enable @typescript-eslint/naming-convention */

	/**
	 * Initializes a single MedieVariableEntity (media item).
	 *
	 * @param mediaEntity - The media item to be included in the payload.
	 */
	public constructor(mediaEntity: MediaVariableEntity) {
		this.media_id = mediaEntity.media_id;
		this.tagged_users = mediaEntity.tagged_users;
	}
}
