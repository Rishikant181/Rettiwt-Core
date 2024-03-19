/**
 * User set query parameters that are used to specify the tweet that is to be posted.
 *
 * @public
 */
export class NewTweet {
	/**
	 * The list of media to be uploaded.
	 *
	 * @remarks
	 * - The media first needs to be uploaded using the {@link EResourceType.MEDIA_UPLOAD} resource.
	 * - After uploading, the returned id(s) can be used to reference the media here.
	 * - Maximum number of media items that can be posted is 4.
	 */
	public media?: NewTweetMedia[];

	/** The id of the tweet to quote. */
	public quote?: string;

	/** The id of the Tweet to which the given Tweet must be a reply. */
	public replyTo?: string;

	/**
	 * The text for the tweet to be created.
	 *
	 * @remarks
	 * Length of the tweet must be \<= 280 characters.
	 */
	public text: string;

	/**
	 * @param args - The additional user-defined arguments for posting the resource.
	 */
	public constructor(args: NewTweet) {
		this.text = args.text;
		this.quote = args.quote;
		this.media = args.media ? args.media.map((item) => new NewTweetMedia(item)) : undefined;
		this.replyTo = args.replyTo;
	}
}

/**
 * User set query parameters that are used to specify the details of the media to be uploaded.
 *
 * @public
 */
export class NewTweetMedia {
	/** The id of the media to upload. */
	public id: string;

	/**
	 * The list of id of the users tagged in the media.
	 *
	 * @remarks
	 * Maximum number of users that can be tagged is 10.
	 */
	public tags?: string[];

	/**
	 * @param args - The media arguments specifying the media.
	 */
	public constructor(args: NewTweetMedia) {
		this.id = args.id;
		this.tags = args.tags ?? [];
	}
}
