/* eslint-disable */

/**
 * The raw data received when after retweeting a tweet.
 *
 * @public
 */
export interface Root {
	data: Data;
}

export interface Data {
	create_retweet: CreateRetweet;
}

export interface CreateRetweet {
	retweet_results: RetweetResults;
}

export interface RetweetResults {
	result: Result;
}

export interface Result {
	rest_id: string;
	legacy: Legacy;
}

export interface Legacy {
	full_text: string;
}
