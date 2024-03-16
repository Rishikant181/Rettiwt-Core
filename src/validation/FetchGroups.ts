// ENUMS
import { EListResources, EMediaResources, ESpaceResources, ETweetResources, EUserResources } from '../enums/Resources';

/**
 * Collection of resources that require an id.
 *
 * @internal
 */
export const requireId = [
	EListResources.LIST_DETAILS,
	EListResources.LIST_TWEETS,
	EMediaResources.VIDEO_STREAM,
	ESpaceResources.SPACE_DETAILS_BY_ID,
	ETweetResources.TWEET_DETAILS,
	ETweetResources.TWEET_FAVORITERS,
	ETweetResources.TWEET_RETWEETERS,
	EUserResources.USER_DETAILS,
	EUserResources.USER_DETAILS_BY_ID,
	EUserResources.USER_FOLLOWERS,
	EUserResources.USER_FOLLOWING,
	EUserResources.USER_HIGHLIGHTS,
	EUserResources.USER_LIKES,
	EUserResources.USER_MEDIA,
	EUserResources.USER_SUBSCRIPTIONS,
	EUserResources.USER_TWEETS,
	EUserResources.USER_TWEETS_AND_REPLIES,
];

/**
 * Collection of resources that require a numeric id.
 *
 * @internal
 */
export const requireNumericId = [
	EListResources.LIST_DETAILS,
	EListResources.LIST_TWEETS,
	ETweetResources.TWEET_DETAILS,
	ETweetResources.TWEET_FAVORITERS,
	ETweetResources.TWEET_RETWEETERS,
	EUserResources.USER_DETAILS_BY_ID,
	EUserResources.USER_FOLLOWERS,
	EUserResources.USER_FOLLOWING,
	EUserResources.USER_HIGHLIGHTS,
	EUserResources.USER_LIKES,
	EUserResources.USER_MEDIA,
	EUserResources.USER_SUBSCRIPTIONS,
	EUserResources.USER_TWEETS,
	EUserResources.USER_TWEETS_AND_REPLIES,
];

/**
 * Collection of resources that require an alpha numeric id.
 *
 * @internal
 */
export const requireAlphaNumericId = [EMediaResources.VIDEO_STREAM, ESpaceResources.SPACE_DETAILS_BY_ID];

/**
 * Collection of cursored resources whose max batch size can be 100.
 *
 * @internal
 */
export const max100BatchSize = [
	EListResources.LIST_TWEETS,
	ETweetResources.TWEET_FAVORITERS,
	ETweetResources.TWEET_RETWEETERS,
	EUserResources.USER_FOLLOWERS,
	EUserResources.USER_FOLLOWING,
	EUserResources.USER_HIGHLIGHTS,
	EUserResources.USER_LIKES,
	EUserResources.USER_MEDIA,
	EUserResources.USER_SUBSCRIPTIONS,
];

/**
 * Collection of cursored resources whose max batch size can be 20.
 *
 * @internal
 */
export const max20BatchSize = [
	ETweetResources.TWEET_SEARCH,
	EUserResources.USER_TWEETS,
	EUserResources.USER_TWEETS_AND_REPLIES,
];
