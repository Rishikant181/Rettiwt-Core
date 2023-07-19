// PACKAGES
import { IsNotEmpty, IsNumberString, Max, validateSync } from 'class-validator';

// ENUMS
import { EResourceType } from '../../enums/Resources';

// TYPES
import { IArgs } from '../../types/request/payloads/Args';

// MODELS
import { TweetFilter } from './TweetFilter';
import { DataValidationError } from '../errors/DataValidationError';

/**
 * User set query paramters that are used to specify the data that is requested.
 *
 * @public
 */
export class Args implements IArgs {
	/**
	 * The filter for filtering the data.
	 *
	 * @remarks
	 * Required when resource type is {@link EResourceType.TWEET_SEARCH}
	 */
	@IsNotEmpty({ groups: [EResourceType.TWEET_SEARCH] })
	filter?: TweetFilter;

	/**
	 * The 'id of the target resource.
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
			EResourceType.USER_FOLLOWERS,
			EResourceType.USER_FOLLOWING,
			EResourceType.USER_LIKES,
		],
	})
	@IsNumberString(undefined, {
		groups: [
			EResourceType.LIST_DETAILS,
			EResourceType.LIST_TWEETS,
			EResourceType.TWEET_DETAILS,
			EResourceType.TWEET_FAVORITERS,
			EResourceType.TWEET_RETWEETERS,
			EResourceType.USER_FOLLOWERS,
			EResourceType.USER_FOLLOWING,
			EResourceType.USER_LIKES,
		],
	})
	id?: string;

	/**
	 * The number of data items to fetch.
	 *
	 * @remarks
	 * - Works only for cursored resources.
	 * - Must be \<= 20 for {@link EResourceType.TWEET_SEARCH}.
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
	@Max(20, { groups: [EResourceType.TWEET_SEARCH] })
	count?: number;

	/**
	 * The cursor string to the batch of data to fetch.
	 *
	 * @remarks
	 * - May be used for cursored resources.
	 * - Has no effect for all other resources.
	 */
	cursor?: string;

	/**
	 * Initializes a new argument object based on the type of input.
	 *
	 * @param resourceType - The type of resource that is requested.
	 * @param args - The additional user-defined arguments for fetching the resource.
	 */
	constructor(resourceType: EResourceType, args: Args) {
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
