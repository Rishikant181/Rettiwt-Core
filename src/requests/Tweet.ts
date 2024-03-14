/* eslint-disable @typescript-eslint/naming-convention */

// PACKAGES
import { AxiosRequestConfig } from 'axios';

// MODELS
import { FetchArgs } from '../models/args/FetchArgs';
import { PostArgs } from '../models/args/PostArgs';
import { ETweetResources } from '../enums/Resources';

/**
 * The type for the {@link tweetRequests} collection.
 *
 * @public
 */
export type TweetRequestGenerator = {
	[key in keyof typeof ETweetResources]: (args: FetchArgs | PostArgs) => AxiosRequestConfig;
};

/**
 * Collection of request configs related to tweets
 *
 * @public
 */
export const tweetRequests: TweetRequestGenerator = {
	CREATE_RETWEET: (args: PostArgs): AxiosRequestConfig => ({
		method: 'post',
		url: 'https://twitter.com/i/api/graphql/ojPdsZsimiJrUGLR1sjUtA/CreateRetweet',
		data: {
			variables: {
				tweet_id: args.id,
				dark_request: false,
			},
		},
	}),
};
