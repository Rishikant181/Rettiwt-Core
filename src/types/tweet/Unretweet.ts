/* eslint-disable */

/**
 * The raw data received when unretweeting.
 *
 * @public
 */
export interface Root {
	data: Data;
}

export interface Data {
	unretweet: Unretweet;
}

export interface Unretweet {
	source_tweet_results: SourceTweetResults;
}

export interface SourceTweetResults {
	result: Result;
}

export interface Result {
	rest_id: string;
	legacy: Legacy;
}

export interface Legacy {
	full_text: string;
}
