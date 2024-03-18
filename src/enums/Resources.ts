/**
 * The different subdomain available.
 *
 * @public
 */
export enum ESubdomains {
	MAIN = '',
	UPLOAD = 'upload',
}

/**
 * The different types of resources related to lists.
 *
 * @public
 */
export enum EListResources {
	LIST_DETAILS = 'LIST_DETAILS',
	LIST_TWEETS = 'LIST_TWEETS',
}

/**
 * The different types of resources related to media.
 *
 * @public
 */
export enum EMediaResources {
	MEDIA_UPLOAD_APPEND = 'MEDIA_UPLOAD_APPEND',
	MEDIA_UPLOAD_FINALIZE = 'MEDIA_UPLOAD_FINALIZE',
	MEDIA_UPLOAD_INIT = 'MEDIA_UPLOAD_INIT',
	MEDIA_VIDEO_STREAM = 'VIDEO_STREAM',
}

/**
 * The different types of resources related to spaces.
 *
 * @public
 */
export enum ESpaceResources {
	SPACE_DETAILS_BY_ID = 'SPACE_DETAILS_BY_ID',
}

/**
 * The different types of resources related to tweets.
 *
 * @public
 */
export enum ETweetResources {
	TWEET_RETWEET = 'TWEET_RETWEET',
	TWEET_CREATE = 'TWEET_CREATE',
	TWEET_FAVORITE = 'TWEET_FAVORITE',
	TWEET_SEARCH = 'TWEET_SEARCH',
	TWEET_DETAILS = 'TWEET_DETAILS',
	TWEET_FAVORITERS = 'TWEET_FAVORITERS',
	TWEET_RETWEETERS = 'TWEET_RETWEETERS',
}

/**
 * The different types of resources related to users.
 *
 * @public
 */
export enum EUserResources {
	USER_DETAILS = 'USER_DETAILS',
	USER_DETAILS_BY_ID = 'USER_DETAILS_BY_ID',
	USER_FOLLOWERS = 'USER_FOLLOWERS',
	USER_FOLLOWING = 'USER_FOLLOWING',
	USER_HIGHLIGHTS = 'USER_HIGHLIGHTS',
	USER_LIKES = 'USER_LIKES',
	USER_MEDIA = 'USER_MEDIA',
	USER_SUBSCRIPTIONS = 'USER_SUBSCRIPTIONS',
	USER_TWEETS = 'USER_TWEETS',
	USER_TWEETS_AND_REPLIES = 'USER_TWEETS_AND_REPLIES',
}
