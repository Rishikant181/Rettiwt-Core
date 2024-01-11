// PACKAGES
import {
	IsArray,
	IsNotEmpty,
	IsNumberString,
	IsOptional,
	IsString,
	Max,
	MaxLength,
	validateSync,
} from 'class-validator';

// ENUMS
import { EResourceType } from '../../enums/Resources';

// MODELS
import { TweetFilter } from '../payloads/TweetFilter';
import { DataValidationError } from '../errors/DataValidationError';

/**
 * User set query parameters that are used to specify the data that is to be fetched.
 *
 * @public
 */
export class FetchArgs {
	/**
	 * The filter for searching.
	 *
	 * @remarks
	 * Required when resource type is {@link EResourceType.TWEET_SEARCH}
	 */
	@IsNotEmpty({ groups: [EResourceType.TWEET_SEARCH] })
	public filter?: TweetFilter;

	/**
	 * The id of the target resource.
	 *
	 * @remarks
	 * - Required for all resources except {@link EResourceType.TWEET_SEARCH}.
	 * - For {@link EResourceType.USER_DETAILS}, can be alphanumeric, while for others, is strictly numeric.
	 */
	@IsNotEmpty({
		groups: [
			EResourceType.LIST_DETAILS,
			EResourceType.LIST_TWEETS,
			EResourceType.TWEET_DETAILS,
			EResourceType.TWEET_FAVORITERS,
			EResourceType.TWEET_RETWEETERS,
			EResourceType.USER_DETAILS,
			EResourceType.USER_DETAILS_BY_ID,
			EResourceType.USER_FOLLOWERS,
			EResourceType.USER_FOLLOWING,
			EResourceType.USER_LIKES,
			EResourceType.USER_TWEETS,
			EResourceType.USER_TWEETS_AND_REPLIES,
			EResourceType.SPACE_DETAILS_BY_ID,
		],
	})
	@IsNumberString(undefined, {
		groups: [
			EResourceType.LIST_DETAILS,
			EResourceType.LIST_TWEETS,
			EResourceType.TWEET_DETAILS,
			EResourceType.TWEET_FAVORITERS,
			EResourceType.TWEET_RETWEETERS,
			EResourceType.USER_DETAILS_BY_ID,
			EResourceType.USER_FOLLOWERS,
			EResourceType.USER_FOLLOWING,
			EResourceType.USER_LIKES,
			EResourceType.USER_TWEETS,
			EResourceType.USER_TWEETS_AND_REPLIES,
		],
	})
	@IsString({
		groups: [EResourceType.SPACE_DETAILS_BY_ID, EResourceType.VIDEO_STREAM],
	})
	public id?: string;

	/**
	 * The number of data items to fetch.
	 *
	 * @remarks
	 * - Works only for cursored resources.
	 * - Must be \<= 20 for {@link EResourceType.TWEET_SEARCH} and {@link EResourceType.USER_TWEETS}.
	 * - Must be \<= 100 for all other cursored resources.
	 *
	 * @defaultValue 20
	 */
	@Max(100, {
		groups: [
			EResourceType.LIST_TWEETS,
			EResourceType.TWEET_FAVORITERS,
			EResourceType.TWEET_RETWEETERS,
			EResourceType.USER_FOLLOWERS,
			EResourceType.USER_FOLLOWING,
			EResourceType.USER_LIKES,
		],
	})
	@Max(20, {
		groups: [EResourceType.TWEET_SEARCH, EResourceType.USER_TWEETS, EResourceType.USER_TWEETS_AND_REPLIES],
	})
	public count?: number;

	/**
	 * The cursor string to the batch of data to fetch.
	 *
	 * @remarks
	 * - May be used for cursored resources.
	 * - Has no effect for all other resources.
	 */
	public cursor?: string;

	/**
	 * Initializes a new DataArgs object using the given arguments.
	 *
	 * @param resourceType - The type of resource that is requested.
	 * @param args - The additional user-defined arguments for fetching the resource.
	 */
	public constructor(resourceType: EResourceType, args: FetchArgs) {
		this.id = args.id;
		this.count = args.count ?? 20;
		this.cursor = args.cursor;

		/**
		 * Initializing filter only if resource type is TWEET_SEARCH
		 */
		if (resourceType == EResourceType.TWEET_SEARCH && args.filter) {
			this.filter = new TweetFilter(args.filter);
		}

		// Validating this object
		const validationResult = validateSync(this, { groups: [resourceType] });

		// If valiation error occured
		if (validationResult.length) {
			throw new DataValidationError(validationResult);
		}
	}
}
