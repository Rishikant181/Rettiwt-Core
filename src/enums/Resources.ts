/**
 * The different types of resources that can be fetched.
 *
 * @remarks
 * Each resource requires some form of authentication, which can be on of the two types:
 * - Guest Authentication
 * - User Authentication
 *
 * Guest authentication uses a guest token to authenticate requests, and as such, can be used to fetch data that does not require logging in.
 *
 * User authentication uses the cookies of a logged in account, and as such, can be used to fetch data that require logging in.
 */
export enum EResourceType {
	/**
	 * @remarks Requires user authentication.
	 */
	TWEETS = '/2/search/adaptive.json',

	/**
	 * @remarks Requires guest authentication.
	 */
	TWEET_DETAILS = '/graphql/lXI2kaM2hgmbf7h42kpxuA/TweetDetail',

	/**
	 * @remarks Requires user authentication.
	 */
	TWEET_LIKES = '/graphql/56ZwFC3Vui31fF8IYX8EGA/Favoriters',

	/**
	 * @remarks Requires user authentication.
	 */
	TWEET_RETWEETS = '/graphql/Wd7DVeLqMj_JQiTL0tjJwQ/Retweeters',

	/**
	 * @remarks Requires guest authentication.
	 */
	USER_DETAILS = '/graphql/hVhfo_TquFTmgL7gYwf91Q/UserByScreenName',

	/**
	 * @remarks Requires guest authentication.
	 */
	USER_DETAILS_BY_ID = '/graphql/mi_IjXgFyr41N9zkszPz9w/UserByRestId',

	/**
	 * @remarks Requires guest authentication.
	 */
	USER_TWEETS = '/graphql/xxLjoOBBPpYBHbBTI-hevQ/UserTweetsAndReplies',

	/**
	 * @remarks Requires user authentication.
	 */
	USER_FOLLOWING = '/graphql/mSnjZc5CTm2Z5Lu_i4XsPQ/Following',

	/**
	 * @remarks Requires user authentication.
	 */
	USER_FOLLOWERS = '/graphql/nwlAnaw7oKXcVLi91ehy7Q/Followers',

	/**
	 * @remarks Requires user authentication.
	 */
	USER_LIKES = '/graphql/gP4ZKghLd4tpILgS6VudAQ/Likes',
}
