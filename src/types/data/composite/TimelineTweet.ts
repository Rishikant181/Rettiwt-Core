/* eslint-disable */

import { IDataResult } from './DataResult';
import { ITweet } from '../base/Tweet';
import { ILimitedVisibilityTweet } from '../base/LimitedVisibilityTweet';
import { ETweetDisplayType } from '../../../enums/Tweet';

/**
 * Represents the raw data of a single timeline tweet.
 *
 * @public
 */
export interface ITimelineTweet {
	tweet_results: IDataResult<ITweet | ILimitedVisibilityTweet>;
	tweetDisplayType: ETweetDisplayType;
}
