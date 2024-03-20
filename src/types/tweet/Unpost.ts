/* eslint-disable */

/**
 * The raw data received when unposting.
 *
 * @public
 */
export interface Root {
	data: Data;
}

export interface Data {
	delete_tweet: DeleteTweet;
}

export interface DeleteTweet {
	tweet_results: TweetResults;
}

export interface TweetResults {}
