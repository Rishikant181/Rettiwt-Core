import { INewTweet, INewTweetMedia } from '../../types/args/NewTweet';

/**
 * Configuration for the new tweet to be posted.
 *
 * @public
 */
export class NewTweet implements INewTweet {
	public media?: NewTweetMedia[];
	public quote?: string;
	public replyTo?: string;
	public text: string;

	/**
	 * @param newTweet - The args specifying the new tweet to be posted.
	 */
	public constructor(newTweet: INewTweet) {
		this.media = newTweet.media;
		this.quote = newTweet.quote;
		this.replyTo = newTweet.replyTo;
		this.text = newTweet.text ?? '';
	}
}

/**
 * Configuration for the media to be uploaded.
 *
 * @public
 */
export class NewTweetMedia implements INewTweetMedia {
	public id: string;
	public tags?: string[];

	/**
	 * @param newTweetMedia - The args specifying the new media to be posted along with the tweet.
	 */
	public constructor(newTweetMedia: INewTweetMedia) {
		this.id = newTweetMedia.id;
		this.tags = newTweetMedia.tags;
	}
}
