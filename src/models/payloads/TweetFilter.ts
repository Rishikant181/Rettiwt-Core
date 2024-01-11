// PACKAGE
import {
	IsArray,
	IsBoolean,
	IsNumberString,
	IsString,
	IsOptional,
	IsDate,
	validateSync,
	IsNumber,
} from 'class-validator';

// MODELS
import { DataValidationError } from '../errors/DataValidationError';

/**
 * The filter to be used for fetching tweets from Twitter.
 *
 * @public
 */
export class TweetFilter {
	/** The list of words to search. */
	@IsArray()
	@IsString({ each: true })
	@IsOptional()
	public includeWords?: string[];

	/** The exact phrase to search. */
	@IsString()
	@IsOptional()
	public includePhrase: string;

	/** The optional words to search. */
	@IsArray()
	@IsString({ each: true })
	@IsOptional()
	public optionalWords: string[];

	/** The list of words to exclude from search. */
	@IsArray()
	@IsString({ each: true })
	@IsOptional()
	public excludeWords: string[];

	/**
	 * The list of hashtags to search.
	 *
	 * @remarks
	 * '#' must be excluded from the hashtag!
	 */
	@IsArray()
	@IsString({ each: true })
	@IsOptional()
	public hashtags?: string[];

	/**
	 * The list of usernames whose tweets are to be searched.
	 *
	 * @remarks
	 * '\@' must be excluded from the username!
	 */
	@IsArray()
	@IsString({ each: true })
	@IsOptional()
	public fromUsers?: string[];

	/**
	 * The list of username to whom the tweets to be searched, are adressed.
	 *
	 * @remarks
	 * '\@' must be excluded from the username!
	 */
	@IsArray()
	@IsString({ each: true })
	@IsOptional()
	public toUsers?: string[];

	/**
	 * The list of username mentioned in the tweets to search.
	 *
	 * @remarks
	 * '\@' must be excluded from the username!
	 */
	@IsArray()
	@IsString({ each: true })
	@IsOptional()
	public mentions?: string[];

	/** The minimum number of replies to search by. */
	@IsNumber()
	@IsOptional()
	public minReplies: number;

	/** The minimun number of likes to search by. */
	@IsNumber()
	@IsOptional()
	public minLikes: number;

	/** The minimum number of retweets to search by. */
	@IsNumber()
	@IsOptional()
	public minRetweets: number;

	/** The language of the tweets to search. */
	@IsString()
	@IsOptional()
	public language: string;

	/** The date starting from which tweets are to be searched. */
	@IsOptional()
	@IsDate()
	public startDate?: Date;

	/** The date upto which tweets are to be searched. */
	@IsOptional()
	@IsDate()
	public endDate?: Date;

	/** The id of the tweet, after which the tweets are to be searched. */
	@IsNumberString()
	@IsOptional()
	public sinceId?: string;

	/** The id of the tweet, before which the tweets are to be searched. */
	@IsNumberString()
	@IsOptional()
	public maxId?: string;

	/** The id of the tweet which is quoted in the tweets to search. */
	@IsNumberString()
	@IsOptional()
	public quoted?: string;

	/**
	 * Whether to fetch tweets that are links or not.
	 *
	 * @defaultValue true
	 */
	@IsBoolean()
	@IsOptional()
	public links?: boolean = true;

	/**
	 * Whether to fetch tweets that are replies or not.
	 *
	 * @defaultValue true
	 */
	@IsBoolean()
	@IsOptional()
	public replies?: boolean = true;

	/**
	 * Initializes a new TweetFilter based on the given filter parameters.
	 *
	 * @param filter - The filter to use for searching tweets.
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

		// Validating this object
		const validationResult = validateSync(this);

		// If valiation error occured
		if (validationResult.length) {
			throw new DataValidationError(validationResult);
		}
	}

	/**
	 * Converts this object to it's string representation.
	 *
	 * @returns The string representation of 'this' data.
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

	/**
	 * Convert Date object to Twitter string representation.
	 * eg - 2023-06-23_11:21:06_UTC
	 *
	 * @param date - The date object to convert.
	 * @returns The Twitter string representation of the date.
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
}
