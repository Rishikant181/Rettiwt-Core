/* eslint-disable */

/**
 * The raw data received when unliking a tweet.
 *
 * @public
 */
export interface Root {
	data: Data;
}

export interface Data {
	unfavorite_tweet: string;
}
