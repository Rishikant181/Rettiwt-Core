/* eslint-disable */

/**
 * The filter to be used for fetching tweets from Twitter.
 *
 * @public
 */
export interface ITweetFilter {
	/** The list of words to search. */
	includeWords?: string[];

	/** The exact phrase to search. */
	includePhrase: string;

	/** The optional words to search. */
	optionalWords: string[];

	/** The list of words to exclude from search. */
	excludeWords: string[];

	/** The list of hashtags to search. */
	hashtags?: string[];

	/** The list of usernames whose tweets are to be searched. */
	fromUsers?: string[];

	/** The list of username to whom the tweets to be searched, are adressed. */
	toUsers?: string[];

	/** The list of username mentioned in the tweets to search. */
	mentions?: string[];

	/** The minimum number of replies to search by. */
	minReplies: number;

	/** The minimun number of likes to search by. */
	minLikes: number;

	/** The minimum number of retweets to search by. */
	minRetweets: number;

	/** The language of the tweets to search. */
	language: string;

	/** The date starting from which tweets are to be searched. */
	startDate?: Date;

	/** The date upto which tweets are to be searched. */
	endDate?: Date;

	/** The id of the tweet, after which the tweets are to be searched. */
	sinceId?: string;

	/** The id of the tweet, before which the tweets are to be searched. */
	maxId?: string;

	/** The id of the tweet which is quoted in the tweets to search. */
	quoted?: string;

	/** Whether to fetch tweets that are links or not. */
	links?: boolean;

	/** Whether to fetch tweets that are replies or not. */
	replies?: boolean;

	/** @returns The string representation of 'this' data. */
	toString(): string;
}
