// TYPES
import { ITweetFilter } from '../payloads/TweetFilter';

/**
 * User set query paramters that are used to specify the data that is requested.
 *
 * @public
 */
export interface IDataArgs {
	/** The filter for filtering the data. */
	filter?: ITweetFilter;

	/** The 'rest_id' of the target resource. */
	id?: string;

	/** The number of data items to fetch. */
	count?: number;

	/** The cursor string to the batch of data to fetch. */
	cursor?: string;

	/** The text for the tweet to be created. */
	tweetText?: string;
}
