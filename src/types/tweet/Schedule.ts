/* eslint-disable */

/**
 * The raw data received after scheduling a tweet.
 *
 * @public
 */
export interface Root {
	data: Data;
}

export interface Data {
	tweet: Tweet;
}

export interface Tweet {
	rest_id: string;
}
