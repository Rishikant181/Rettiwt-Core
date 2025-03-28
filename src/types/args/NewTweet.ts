/**
 * Configuration for the new tweet to be posted.
 *
 * @public
 */
export interface INewTweet {
	/**
	 * The list of media to be uploaded.
	 *
	 * @remarks
	 * - The media first needs to be uploaded.
	 * - After uploading, the returned id(s) can be used to reference the media here.
	 * - Maximum number of media items that can be posted is 4.
	 */
	media?: INewTweetMedia[];

	/** The id of the tweet to quote. */
	quote?: string;

	/** The id of the Tweet to which the given Tweet must be a reply. */
	replyTo?: string;

	/** The date/time at which the tweet is to be scheduled for posting. */
	scheduleFor?: Date;

	/**
	 * The text for the tweet to be created.
	 *
	 * @remarks
	 * Length of the tweet must be \<= 280 characters.
	 */
	text?: string;
}

/**
 * Configuration for the media to be uploaded.
 *
 * @public
 */
export interface INewTweetMedia {
	/** The id of the media to upload. */
	id: string;

	/**
	 * The list of id of the users to tag in the media.
	 *
	 * @remarks
	 * Maximum number of users that can be tagged is 10.
	 */
	tags?: string[];
}
