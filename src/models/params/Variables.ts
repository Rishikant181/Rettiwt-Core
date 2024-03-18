// MODELS
import { MediaArgs } from '../args/PostArgs';

/**
 * Media to be sent as payload.
 *
 * @public
 */
export class MediaVariable {
	/* eslint-disable @typescript-eslint/naming-convention */
	public media_entities: MediaEntityVariable[];
	public possibly_sensitive: boolean;
	/* eslint-enable @typescript-eslint/naming-convention */

	/**
	 * @param media - The list of MediaArgs objects specifying the media items to be sent in the Tweet.
	 */
	public constructor(media: MediaArgs[]) {
		this.media_entities = media.map((item) => new MediaEntityVariable(item));
		this.possibly_sensitive = false;
	}
}

/**
 * Each media item in the media payload.
 *
 * @public
 */
export class MediaEntityVariable {
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

/**
 * Reply specific details to be sent in payload.
 *
 * @public
 */
export class ReplyVariable {
	/* eslint-disable @typescript-eslint/naming-convention */
	public in_reply_to_tweet_id: string;
	public exclude_reply_user_ids: string[];
	/* eslint-enable @typescript-eslint/naming-convention */

	/**
	 * @param replyTo - The id of the Tweet to which this Tweet is a reply.
	 */
	public constructor(replyTo: string) {
		this.in_reply_to_tweet_id = replyTo;
		this.exclude_reply_user_ids = [];
	}
}
