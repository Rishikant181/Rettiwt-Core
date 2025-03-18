/* eslint-disable */

/**
 * The raw data received after unscheduling a tweet.
 *
 * @public
 */
export interface Root {
	data: Data;
}

export interface Data {
	scheduledtweet_delete: string;
}
