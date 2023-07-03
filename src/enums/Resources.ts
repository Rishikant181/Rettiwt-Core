/**
 * The different types of resources that can be fetched.
 */
export enum EResourceType {
	TWEET_SEARCH = '/2/search/adaptive.json',
	TWEET_DETAILS = '/graphql/lXI2kaM2hgmbf7h42kpxuA/TweetDetail',
	TWEET_FAVORITERS = '/graphql/56ZwFC3Vui31fF8IYX8EGA/Favoriters',
	TWEET_RETWEETERS = '/graphql/Wd7DVeLqMj_JQiTL0tjJwQ/Retweeters',
	USER_DETAILS = '/graphql/hVhfo_TquFTmgL7gYwf91Q/UserByScreenName',
	USER_FOLLOWING = '/graphql/mSnjZc5CTm2Z5Lu_i4XsPQ/Following',
	USER_FOLLOWERS = '/graphql/nwlAnaw7oKXcVLi91ehy7Q/Followers',
	USER_LIKES = '/graphql/gP4ZKghLd4tpILgS6VudAQ/Likes',
}
