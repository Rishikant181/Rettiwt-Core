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
	@IsArray()
	@IsString({ each: true })
	@IsOptional()
	public includeWords?: string[];

	@IsString()
	@IsOptional()
	public includePhrase: string;

	@IsArray()
	@IsString({ each: true })
	@IsOptional()
	public optionalWords: string[];

	@IsArray()
	@IsString({ each: true })
	@IsOptional()
	public excludeWords: string[];

	/**
	 * @remarks
	 * '#' must be excluded from the hashtag!
	 */
	@IsArray()
	@IsString({ each: true })
	@IsOptional()
	public hashtags?: string[];

	/**
	 * @remarks
	 * '\@' must be excluded from the username!
	 */
	@IsArray()
	@IsString({ each: true })
	@IsOptional()
	public fromUsers?: string[];

	/**
	 * @remarks
	 * '\@' must be excluded from the username!
	 */
	@IsArray()
	@IsString({ each: true })
	@IsOptional()
	public toUsers?: string[];

	/**
	 * @remarks
	 * '\@' must be excluded from the username!
	 */
	@IsArray()
	@IsString({ each: true })
	@IsOptional()
	public mentions?: string[];

	@IsNumber()
	@IsOptional()
	public minReplies: number;

	@IsNumber()
	@IsOptional()
	public minLikes: number;

	@IsNumber()
	@IsOptional()
	public minRetweets: number;

	@IsString()
	@IsOptional()
	public language: string;

	@IsOptional()
	@IsDate()
	public startDate?: Date;

	@IsOptional()
	@IsDate()
	public endDate?: Date;

	/**
	 * @remarks
	 * Must be a numeric string.
	 */
	@IsNumberString()
	@IsOptional()
	public sinceId?: string;

	/**
	 * @remarks
	 * Must be a numeric string.
	 */
	@IsNumberString()
	@IsOptional()
	public maxId?: string;

	/**
	 * @remarks
	 * Must be a numeric string.
	 */
	@IsNumberString()
	@IsOptional()
	public quoted?: string;

	/**
	 * @defaultValue true
	 */
	@IsBoolean()
	@IsOptional()
	public links?: boolean = true;

	/**
	 * @defaultValue true
	 */
	@IsBoolean()
	@IsOptional()
	public replies?: boolean = true;

	/**
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
	 * @returns 'this' object's string representation.
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
