/**
 * Media to be sent as payload.
 *
 * @internal
 */
export interface IMediaVariable {
	/* eslint-disable @typescript-eslint/naming-convention */

	media_entities: IMediaEntityVariable[];
	possibly_sensitive: boolean;

	/* eslint-enable @typescript-eslint/naming-convention */
}

/**
 * Each media item in the media payload.
 *
 * @internal
 */
export interface IMediaEntityVariable {
	/* eslint-disable @typescript-eslint/naming-convention */

	media_id: string;
	tagged_users: string[];

	/* eslint-enable @typescript-eslint/naming-convention */
}

/**
 * Reply specific details to be sent in payload.
 *
 * @internal
 */
export interface IReplyVariable {
	/* eslint-disable @typescript-eslint/naming-convention */

	exclude_reply_user_ids: string[];
	in_reply_to_tweet_id: string;

	/* eslint-enable @typescript-eslint/naming-convention */
}
