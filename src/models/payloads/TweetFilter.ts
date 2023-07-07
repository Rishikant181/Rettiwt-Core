// PACKAGE
import { IsArray, IsBoolean, IsNumberString, IsString, IsOptional, IsDate, validateSync } from 'class-validator';

// TYPES
import { ITweetFilter } from '../../types/request/payloads/TweetFilter';

// MODELS
import { DataValidationError } from '../errors/DataValidationError';

/**
 * The filter to be used for fetching tweets from Twitter.
 *
 * @public
 */
export class TweetFilter implements ITweetFilter {
	/** The list of words to search. */
	@IsArray()
	@IsString({ each: true })
	@IsOptional()
	words?: string[];

	/** The list of hashtags to search.
	 *
	 * @remarks
	 * '#' must be excluded from the hashtag!
	 */
	@IsArray()
	@IsString({ each: true })
	@IsOptional()
	hashtags?: string[];

	/** The list of usernames whose tweets are to be searched.
	 *
	 * @remarks
	 * '@' must be excluded from the username!
	 */
	@IsArray()
	@IsString({ each: true })
	@IsOptional()
	fromUsers?: string[];

	/** The list of username to whom the tweets to be searched, are adressed.
	 *
	 * @remarks
	 * '@' must be excluded from the username!
	 */
	@IsArray()
	@IsString({ each: true })
	@IsOptional()
	toUsers?: string[];

	/** The list of username mentioned in the tweets to search.
	 *
	 * @remarks
	 * '@' must be excluded from the username!
	 */
	@IsArray()
	@IsString({ each: true })
	@IsOptional()
	mentions?: string[];

	/** The date starting from which tweets are to be searched. */
	@IsOptional()
	@IsDate()
	startDate?: Date;

	/** The date upto which tweets are to be searched. */
	@IsOptional()
	@IsDate()
	endDate?: Date;

	/** The id of the tweet, after which the tweets are to be searched. */
	@IsNumberString()
	@IsOptional()
	sinceId?: string;

	/** The id of the tweet which is quoted in the tweets to search. */
	@IsNumberString()
	@IsOptional()
	quoted?: string;

	/** Whether to fetch tweets that are links or not.
	 *
	 * @defaultValue false
	 */
	@IsBoolean()
	@IsOptional()
	links?: boolean;

	/**
	 * @param filter The filter in JSON format.
	 */
	constructor(filter: TweetFilter) {
		this.endDate = filter.endDate;
		this.fromUsers = filter.fromUsers;
		this.hashtags = filter.hashtags;
		this.links = filter.links;
		this.mentions = filter.mentions;
		this.quoted = filter.quoted;
		this.sinceId = filter.sinceId;
		this.startDate = filter.startDate;
		this.toUsers = filter.toUsers;
		this.words = filter.words;

		// Validating the this
		const validationResult = validateSync(this);

		// If valiation error occured
		if (validationResult.length) {
			throw new DataValidationError(validationResult);
		}
	}

	/**
	 * Converts this object to it's string representation.
	 *
	 * @returns 'this' object's string representation.
	 */
	toString(): string {
		return (
			[
				this.words ? this.words.join(' ') : '',
				this.hashtags ? `(${this.hashtags.map((hashtag) => '#' + hashtag).join(' OR ')})` : '',
				this.fromUsers ? `(${this.fromUsers.map((user) => `from:${user}`).join(' OR ')})` : '',
				this.toUsers ? `(${this.toUsers.map((user) => `to:${user}`).join(' OR ')})` : '',
				this.mentions ? `(${this.mentions.map((mention) => '@' + mention).join(' OR ')})` : '',
				this.startDate ? `since:${TweetFilter.dateToTwitterString(this.startDate)}` : '',
				this.endDate ? `until:${TweetFilter.dateToTwitterString(this.endDate)}` : '',
				this.sinceId ? `since_id:${this.sinceId}` : '',
				this.quoted ? `quoted_tweet_id:${this.quoted}` : '',
			]
				.filter((item) => item !== '()' && item !== '')
				.join(' ') + (!this.links ? ' -this:links' : '')
		);
	}

	/**
	 * Convert Date object to Twitter string representation.
	 * eg - 2023-06-23_11:21:06_UTC
	 *
	 * @param date The date object to convert.
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
