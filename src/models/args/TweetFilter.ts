/**
 * The filter to be used for searching tweets.
 *
 * @public
 */
export class TweetFilter {
	/** The date upto which tweets are to be searched. */
	public endDate?: Date;

	/** The list of words to exclude from search. */
	public excludeWords?: string[];

	/**
	 * The list of usernames whose tweets are to be searched.
	 *
	 * @remarks
	 * '\@' must be excluded from the username!
	 */
	public fromUsers?: string[];

	/**
	 * The list of hashtags to search.
	 *
	 * @remarks
	 * '#' must be excluded from the hashtag!
	 */
	public hashtags?: string[];

	/** The exact phrase to search. */
	public includePhrase?: string;

	/** The list of words to search. */
	public includeWords?: string[];

	/** The language of the tweets to search. */
	public language?: string;

	/**
	 * Whether to fetch tweets that are links or not.
	 *
	 * @defaultValue true
	 */
	public links?: boolean = true;

	/** The id of the tweet, before which the tweets are to be searched. */
	public maxId?: string;

	/**
	 * The list of username mentioned in the tweets to search.
	 *
	 * @remarks
	 * '\@' must be excluded from the username!
	 */
	public mentions?: string[];

	/** The minimun number of likes to search by. */
	public minLikes?: number;

	/** The minimum number of replies to search by. */
	public minReplies?: number;

	/** The minimum number of retweets to search by. */
	public minRetweets?: number;

	/** The optional words to search. */
	public optionalWords?: string[];

	/** The id of the tweet which is quoted in the tweets to search. */
	public quoted?: string;

	/**
	 * Whether to fetch tweets that are replies or not.
	 *
	 * @defaultValue true
	 */
	public replies?: boolean = true;

	/** The id of the tweet, after which the tweets are to be searched. */
	public sinceId?: string;

	/** The date starting from which tweets are to be searched. */
	public startDate?: Date;

	/**
	 * The list of username to whom the tweets to be searched, are adressed.
	 *
	 * @remarks
	 * '\@' must be excluded from the username!
	 */
	public toUsers?: string[];

	/**
	 * @param filter - The filter configuration.
	 */
	public constructor(filter: TweetFilter) {
		this.endDate = filter.endDate;
		this.excludeWords = filter.excludeWords;
		this.fromUsers = filter.fromUsers;
		this.hashtags = filter.hashtags;
		this.includePhrase = filter.includePhrase;
		this.language = filter.language;
		this.links = filter.links;
		this.replies = filter.replies;
		this.mentions = filter.mentions;
		this.quoted = filter.quoted;
		this.sinceId = filter.sinceId;
		this.maxId = filter.maxId;
		this.minLikes = filter.minLikes;
		this.minReplies = filter.minReplies;
		this.minRetweets = filter.minRetweets;
		this.optionalWords = filter.optionalWords;
		this.startDate = filter.startDate;
		this.toUsers = filter.toUsers;
		this.includeWords = filter.includeWords;
	}

	/**
	 * Convert Date object to Twitter string representation.
	 * eg - 2023-06-23_11:21:06_UTC
	 *
	 * @param date - The date object to convert.
	 * @returns The Twitter string representation of the date.
	 *
	 * @internal
	 */
	private static dateToTwitterString(date: Date): string {
		// Converting localized date to UTC date
		const utc = new Date(
			Date.UTC(
				date.getUTCFullYear(),
				date.getUTCMonth(),
				date.getUTCDate(),
				date.getUTCHours(),
				date.getUTCMinutes(),
				date.getUTCSeconds(),
			),
		);

		/**
		 * To convert ISO 8601 date string to Twitter date string:
		 *
		 * - 'T' between date and time substring is replace with '_'.
		 * - Milliseconds substring is omitted.
		 * - '_UTC' is appended as suffix.
		 */
		return utc.toISOString().replace(/T/, '_').replace(/\..+/, '') + '_UTC';
	}

	/**
	 * @returns The string representation of 'this' filter.
	 *
	 * @internal
	 */
	public toString(): string {
		return (
			[
				this.includeWords ? this.includeWords.join(' ') : '',
				this.includePhrase ? `"${this.includePhrase}"` : '',
				this.optionalWords ? `(${this.optionalWords.join(' OR ')})` : '',
				this.excludeWords ? `${this.excludeWords.map((word) => '-' + word).join(' ')}` : '',
				this.hashtags ? `(${this.hashtags.map((hashtag) => '#' + hashtag).join(' OR ')})` : '',
				this.fromUsers ? `(${this.fromUsers.map((user) => `from:${user}`).join(' OR ')})` : '',
				this.toUsers ? `(${this.toUsers.map((user) => `to:${user}`).join(' OR ')})` : '',
				this.mentions ? `(${this.mentions.map((mention) => '@' + mention).join(' OR ')})` : '',
				this.minReplies ? `min_replies:${this.minReplies}` : '',
				this.minLikes ? `min_faves:${this.minLikes}` : '',
				this.minRetweets ? `min_retweets:${this.minRetweets}` : '',
				this.language ? `lang:${this.language}` : '',
				this.startDate ? `since:${TweetFilter.dateToTwitterString(this.startDate)}` : '',
				this.endDate ? `until:${TweetFilter.dateToTwitterString(this.endDate)}` : '',
				this.sinceId ? `since_id:${this.sinceId}` : '',
				this.maxId ? `max_id:${this.maxId}` : '',
				this.quoted ? `quoted_tweet_id:${this.quoted}` : '',
			]
				.filter((item) => item !== '()' && item !== '')
				.join(' ') +
			(this.links == false ? ' -filter:links' : '') +
			(this.replies == false ? ' -filter:replies' : '')
		);
	}
}
