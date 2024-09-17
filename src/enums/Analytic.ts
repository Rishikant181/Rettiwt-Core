/**
 * Granularity types for analytics.
 *
 * @public
 */
export enum EGranularity {
	DAILY = 'Daily',
	WEEKLY = 'Weekly',
	MONTHLY = 'Monthly',
}

/**
 * The different types of metric someone can request.
 *
 * @public
 */
export enum EMetric {
	ENGAGEMENTS = 'Engagements',
	IMPRESSIONS = 'Impressions',
	PROFILE_VISITS = 'ProfileVisits',
	FOLLOWS = 'Follows',
	VIDEO_VIEWS = 'VideoViews',
	REPLIES = 'Replies',
	LIKES = 'Likes',
	RETWEETS = 'Retweets',
	MEDIA_VIEWS = 'MediaViews',
	BOOKMARK = 'Bookmark',
	SHARE = 'Share',
}
