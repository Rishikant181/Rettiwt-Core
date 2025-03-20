/**
 * The filter to be used for searching tweets.
 *
 * @public
 */
export interface ITweetFilter {
	/** The date upto which tweets are to be searched. */
	endDate?: Date;

	/** The list of words to exclude from search. */
	excludeWords?: string[];

	/**
	 * The list of usernames whose tweets are to be searched.
	 *
	 * @remarks
	 * '\@' must be excluded from the username!
	 */
	fromUsers?: string[];

	/**
	 * The list of hashtags to search.
	 *
	 * @remarks
	 * '#' must be excluded from the hashtag!
	 */
	hashtags?: string[];

	/** The exact phrase to search. */
	includePhrase?: string;

	/** The list of words to search. */
	includeWords?: string[];

	/** The language of the tweets to search. */
	language?: string;

	/** Whether to fetch tweets that are links or not. */
	links?: boolean;

	/** The list from which tweets are to be searched. */
	list?: string;

	/** The id of the tweet, before which the tweets are to be searched. */
	maxId?: string;

	/**
	 * The list of username mentioned in the tweets to search.
	 *
	 * @remarks
	 * '\@' must be excluded from the username!
	 */
	mentions?: string[];

	/** The minimun number of likes to search by. */
	minLikes?: number;

	/** The minimum number of replies to search by. */
	minReplies?: number;

	/** The minimum number of retweets to search by. */
	minRetweets?: number;

	/** The optional words to search. */
	optionalWords?: string[];

	/** The id of the tweet which is quoted in the tweets to search. */
	quoted?: string;

	/** Whether to fetch tweets that are replies or not. */
	replies?: boolean;

	/** The id of the tweet, after which the tweets are to be searched. */
	sinceId?: string;

	/** The date starting from which tweets are to be searched. */
	startDate?: Date;

	/**
	 * The list of username to whom the tweets to be searched, are adressed.
	 *
	 * @remarks
	 * '\@' must be excluded from the username!
	 */
	toUsers?: string[];

	/** Whether to fetch top tweets or not. */
	top?: boolean;
}
