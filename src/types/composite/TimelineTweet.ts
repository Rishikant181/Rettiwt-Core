/* eslint-disable */

// TYPES
import { IDataResult } from './DataResult';
import { ITweet } from '../base/Tweet';

/**
 * Represents the raw data of a single timeline tweet.
 *
 * @public
 */
export interface ITimelineTweet {
	tweet_results: IDataResult<ITweet>;
}
