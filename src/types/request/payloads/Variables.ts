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
	media?: IMediaVariable;
	product?: string;
	includePromotedContent: boolean;
	isMetatagsQuery?: boolean;
	withVoice: boolean;
	withCommunity: boolean;
	withReplays?: boolean;
	withListeners?: boolean;
	/* eslint-enable @typescript-eslint/naming-convention */

	/** @returns The string representation of 'this' data. */
	toString(): string;
}

/**
 * Media to be sent as payload.
 *
 * @public
 */
export interface IMediaVariable {
	/* eslint-disable @typescript-eslint/naming-convention */
	media_entities: IMediaVariableEntity[];
	possibly_sensitive: boolean;
	/* eslint-enable @typescript-eslint/naming-convention */
}

/**
 * Each media item in the media payload.
 *
 * @public
 */
export interface IMediaVariableEntity {
	/* eslint-disable @typescript-eslint/naming-convention */
	media_id: string;
	tagged_users: string[];
	/* eslint-enable @typescript-eslint/naming-convention */
}
