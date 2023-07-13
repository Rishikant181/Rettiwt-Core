// ENUMS
import { EResourceType } from '../../enums/Resources';

// TYPES
import { IArgs } from '../../types/request/payloads/Args';

// MODELS
import { TweetFilter } from './TweetFilter';

/**
 * User set query paramters that are used to specify the data that is requested.
 *
 * @public
 */
export class Args implements IArgs {
	/**
	 * The filter for filtering the data.
	 *
	 * @remarks Works only while fetching tweets using the 'TWEETS' resource.
	 */
	filter?: TweetFilter;

	/**
	 * The 'id of the target resource.
	 */
	id?: string;

	/**
	 * The number of data items to fetch.
	 *
	 * @remarks Works only for cursored lists and must meet the following criteria:
	 * 		- Must be >= 20 (when no cursor is supplied) and <= 100 for data related to tweets (expcept for 'TWEETS' resource, for which it must be <= 20).
	 * 		- Must be >= 40 (when no cursor is supplied) and <= 100 for data related to users.
	 */
	count?: number;

	/**
	 * The cursor string to the batch of data to fetch.
	 */
	cursor?: string;

	/**
	 * Initializes a new argument object based on the type of input.
	 * 
	 * @param resourceType The type of resource that is requested.
	 * @param args The additional user-defined arguments for fetching the resource.
	 */
	constructor(resourceType: EResourceType, args: Args) {
		this.id = args.id;
		this.count = args.count;
		this.cursor = args.cursor;

		/**
		 * Initializing filter only if resource type is TWEET_SEARCH
		 */
		if (resourceType == EResourceType.TWEET_SEARCH && args.filter) {
			this.filter = new TweetFilter(args.filter);
		}
	}
}
