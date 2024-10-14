import { AxiosRequestConfig } from 'axios';

import { ESearchResultType } from '../enums/Search';
import { NewTweet } from '../models/args/NewTweet';
import { TweetFilter } from '../models/args/TweetFilter';
import { MediaVariable, ReplyVariable } from '../models/params/Variables';

/**
 * @param id - The id of the tweet whose details are to be fetched.
 *
 * @public
 */
export function details(id: string): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://x.com/i/api/graphql/0hWvDhmW8YQ-S_ib3azIrw/TweetResultByRestId',
		params: {
			/* eslint-disable @typescript-eslint/naming-convention */
			variables: JSON.stringify({
				tweetId: id,
				referrer: 'home',
				with_rux_injections: false,
				includePromotedContent: false,
				withCommunity: false,
				withQuickPromoteEligibilityTweetFields: false,
				withBirdwatchNotes: false,
				withVoice: false,
				withV2Timeline: false,
			}),
			features: JSON.stringify({
				rweb_lists_timeline_redesign_enabled: true,
				responsive_web_graphql_exclude_directive_enabled: true,
				verified_phone_label_enabled: true,
				creator_subscriptions_tweet_preview_api_enabled: true,
				responsive_web_graphql_timeline_navigation_enabled: true,
				responsive_web_graphql_skip_user_profile_image_extensions_enabled: false,
				tweetypie_unmention_optimization_enabled: true,
				responsive_web_edit_tweet_api_enabled: true,
				graphql_is_translatable_rweb_tweet_is_translatable_enabled: true,
				view_counts_everywhere_api_enabled: true,
				longform_notetweets_consumption_enabled: true,
				responsive_web_twitter_article_tweet_consumption_enabled: false,
				tweet_awards_web_tipping_enabled: false,
				freedom_of_speech_not_reach_fetch_enabled: true,
				standardized_nudges_misinfo: true,
				tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled: true,
				longform_notetweets_rich_text_read_enabled: true,
				longform_notetweets_inline_media_enabled: true,
				responsive_web_media_download_video_enabled: false,
				responsive_web_enhance_cards_enabled: false,
			}),
			/* eslint-enable @typescript-eslint/naming-convention */
		},
		paramsSerializer: { encode: encodeURIComponent },
	};
}

/**
 * @param id - The id of the tweet to be liked.
 *
 * @public
 */
export function like(id: string): AxiosRequestConfig {
	return {
		method: 'post',
		url: 'https://x.com/i/api/graphql/lI07N6Otwv1PhnEgXILM7A/FavoriteTweet',
		data: {
			/* eslint-disable @typescript-eslint/naming-convention */
			variables: {
				tweet_id: id,
			},
			/* eslint-enable @typescript-eslint/naming-convention */
		},
	};
}

/**
 * @param id - The id of the tweet whose likers are to be fetched.
 * @param count - The number of likers to fetch. Only works as a lower limit when used with a cursor.
 * @param cursor - The cursor to the batch of likers to fetch.
 *
 * @public
 */
export function likers(id: string, count?: number, cursor?: string): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://x.com/i/api/graphql/9XKD3EWWC2BKpIFyDj4KKQ/Favoriters',
		params: {
			/* eslint-disable @typescript-eslint/naming-convention */
			variables: JSON.stringify({
				tweetId: id,
				count: count,
				cursor: cursor,
				includePromotedContent: false,
			}),
			features: JSON.stringify({
				rweb_lists_timeline_redesign_enabled: true,
				responsive_web_graphql_exclude_directive_enabled: true,
				verified_phone_label_enabled: true,
				creator_subscriptions_tweet_preview_api_enabled: true,
				responsive_web_graphql_timeline_navigation_enabled: true,
				responsive_web_graphql_skip_user_profile_image_extensions_enabled: false,
				tweetypie_unmention_optimization_enabled: true,
				responsive_web_edit_tweet_api_enabled: true,
				graphql_is_translatable_rweb_tweet_is_translatable_enabled: true,
				view_counts_everywhere_api_enabled: true,
				longform_notetweets_consumption_enabled: true,
				responsive_web_twitter_article_tweet_consumption_enabled: false,
				tweet_awards_web_tipping_enabled: false,
				freedom_of_speech_not_reach_fetch_enabled: true,
				standardized_nudges_misinfo: true,
				tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled: true,
				longform_notetweets_rich_text_read_enabled: true,
				longform_notetweets_inline_media_enabled: true,
				responsive_web_media_download_video_enabled: false,
				responsive_web_enhance_cards_enabled: false,
			}),
			/* eslint-enable @typescript-eslint/naming-convention */
		},
		paramsSerializer: { encode: encodeURIComponent },
	};
}

/**
 * @param args - The configuration object for the tweet to be posted.
 *
 * @public
 */
export function post(args: NewTweet): AxiosRequestConfig {
	return {
		method: 'post',
		url: 'https://x.com/i/api/graphql/bDE2rBtZb3uyrczSZ_pI9g/CreateTweet',
		data: {
			/* eslint-disable @typescript-eslint/naming-convention */
			variables: {
				tweet_text: args.text,
				dark_request: false,
				attachment_url: args.quote ? `https://x.com/i/status/${args.quote}` : undefined,
				media: args.media ? new MediaVariable(args.media) : undefined,
				reply: args.replyTo ? new ReplyVariable(args.replyTo) : undefined,
				semantic_annotation_ids: [],
			},
			features: {
				tweetypie_unmention_optimization_enabled: true,
				responsive_web_edit_tweet_api_enabled: true,
				graphql_is_translatable_rweb_tweet_is_translatable_enabled: true,
				view_counts_everywhere_api_enabled: true,
				longform_notetweets_consumption_enabled: true,
				responsive_web_twitter_article_tweet_consumption_enabled: false,
				tweet_awards_web_tipping_enabled: false,
				longform_notetweets_rich_text_read_enabled: true,
				longform_notetweets_inline_media_enabled: true,
				responsive_web_graphql_exclude_directive_enabled: true,
				verified_phone_label_enabled: true,
				freedom_of_speech_not_reach_fetch_enabled: true,
				standardized_nudges_misinfo: true,
				tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled: true,
				responsive_web_media_download_video_enabled: false,
				responsive_web_graphql_skip_user_profile_image_extensions_enabled: false,
				responsive_web_graphql_timeline_navigation_enabled: true,
				responsive_web_enhance_cards_enabled: false,
				rweb_video_timestamps_enabled: true,
				c9s_tweet_anatomy_moderator_badge_enabled: true,
			},
			/* eslint-enable @typescript-eslint/naming-convention */
		},
	};
}

/**
 * @param id - The id of the tweet whose replies are to be fetched.
 * @param count - The number of replies to fetch. Only works as a lower limit when used with a cursor.
 * @param cursor - The cursor to the batch of replies to fetch.
 *
 * @public
 */
export function replies(id: string, count?: number, cursor?: string): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://x.com/i/api/graphql/B9_KmbkLhXt6jRwGjJrweg/TweetDetail',
		params: {
			/* eslint-disable @typescript-eslint/naming-convention */
			variables: JSON.stringify({
				focalTweetId: id,
				cursor: count,
				referrer: 'tweet',
				controller_data: cursor,
				with_rux_injections: false,
				includePromotedContent: false,
				withCommunity: true,
				withQuickPromoteEligibilityTweetFields: true,
				withBirdwatchNotes: true,
				withVoice: true,
				withV2Timeline: true,
			}),
			features: JSON.stringify({
				responsive_web_graphql_exclude_directive_enabled: true,
				verified_phone_label_enabled: true,
				creator_subscriptions_tweet_preview_api_enabled: true,
				responsive_web_graphql_timeline_navigation_enabled: true,
				responsive_web_graphql_skip_user_profile_image_extensions_enabled: false,
				c9s_tweet_anatomy_moderator_badge_enabled: true,
				tweetypie_unmention_optimization_enabled: true,
				responsive_web_edit_tweet_api_enabled: true,
				graphql_is_translatable_rweb_tweet_is_translatable_enabled: true,
				view_counts_everywhere_api_enabled: true,
				longform_notetweets_consumption_enabled: true,
				responsive_web_twitter_article_tweet_consumption_enabled: true,
				tweet_awards_web_tipping_enabled: false,
				freedom_of_speech_not_reach_fetch_enabled: true,
				standardized_nudges_misinfo: true,
				tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled: true,
				rweb_video_timestamps_enabled: true,
				longform_notetweets_rich_text_read_enabled: true,
				longform_notetweets_inline_media_enabled: true,
				responsive_web_media_download_video_enabled: false,
				responsive_web_enhance_cards_enabled: false,
			}),
			/* eslint-enable @typescript-eslint/naming-convention */
		},
		paramsSerializer: { encode: encodeURIComponent },
	};
}

/**
 * @param id - The id of the tweet which is to be retweeted.
 *
 * @public
 */
export function retweet(id: string): AxiosRequestConfig {
	return {
		method: 'post',
		url: 'https://x.com/i/api/graphql/ojPdsZsimiJrUGLR1sjUtA/CreateRetweet',
		data: {
			variables: {
				/* eslint-disable @typescript-eslint/naming-convention */
				tweet_id: id,
				dark_request: false,
				/* eslint-enable @typescript-eslint/naming-convention */
			},
		},
	};
}

/**
 * @param id - The id of the tweet whose retweeters are to be fetched.
 * @param count - The number of retweeters to fetch. Only works as a lower limit when used with a cursor.
 * @param cursor - The cursor to the batch of retweeters to fetch.
 *
 * @public
 */
export function retweeters(id: string, count?: number, cursor?: string): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://x.com/i/api/graphql/v5h-KLmyl-wqZ8i-a_q73w/Retweeters',
		params: {
			/* eslint-disable @typescript-eslint/naming-convention */
			variables: JSON.stringify({
				tweetId: id,
				count: count,
				cursor: cursor,
				includePromotedContent: false,
			}),
			features: JSON.stringify({
				rweb_lists_timeline_redesign_enabled: true,
				responsive_web_graphql_exclude_directive_enabled: true,
				verified_phone_label_enabled: true,
				creator_subscriptions_tweet_preview_api_enabled: true,
				responsive_web_graphql_timeline_navigation_enabled: true,
				responsive_web_graphql_skip_user_profile_image_extensions_enabled: false,
				tweetypie_unmention_optimization_enabled: true,
				responsive_web_edit_tweet_api_enabled: true,
				graphql_is_translatable_rweb_tweet_is_translatable_enabled: true,
				view_counts_everywhere_api_enabled: true,
				longform_notetweets_consumption_enabled: true,
				responsive_web_twitter_article_tweet_consumption_enabled: false,
				tweet_awards_web_tipping_enabled: false,
				freedom_of_speech_not_reach_fetch_enabled: true,
				standardized_nudges_misinfo: true,
				tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled: true,
				longform_notetweets_rich_text_read_enabled: true,
				longform_notetweets_inline_media_enabled: true,
				responsive_web_media_download_video_enabled: false,
				responsive_web_enhance_cards_enabled: false,
			}),
			/* eslint-enable @typescript-eslint/naming-convention */
		},
		paramsSerializer: { encode: encodeURIComponent },
	};
}

/**
 * @param tweet - The configuration object for the tweet to be posted.
 * @param time - A `Date` object representing the date and time at which the tweet is to be posted.
 *
 * @remarks - Only `text` and `media.id` parameters are supported.
 *
 * @public
 */
export function schedule(tweet: NewTweet, time: Date): AxiosRequestConfig {
	return {
		method: 'post',
		maxBodyLength: Infinity,
		url: 'https://x.com/i/api/graphql/LCVzRQGxOaGnOnYH01NQXg/CreateScheduledTweet',
		data: {
			/* eslint-disable @typescript-eslint/naming-convention */
			variables: {
				post_tweet_request: {
					auto_populate_reply_metadata: false,
					status: tweet.text,
					exclude_reply_user_ids: [],
					media_ids: tweet.media?.map((item) => item.id) ?? [],
				},
				execute_at: Math.floor(time.getTime() / 1000),
			},
			/* eslint-enable @typescript-eslint/naming-convention */
		},
	};
}

/**
 * @param filter - The filter to use for searching tweets.
 * @param count - The number of tweets to fetch. Only works as a lower limit when used with a cursor.
 * @param cursor - The cursor to the batch of tweets to fetch.
 * @param results - The type of results to fetch. Default is {@link ESearchResultType.LATEST}.
 *
 * @public
 */
export function search(
	filter: TweetFilter,
	count?: number,
	cursor?: string,
	results: ESearchResultType = ESearchResultType.LATEST,
): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://x.com/i/api/graphql/nK1dw4oV3k4w5TdtcAdSww/SearchTimeline',
		params: {
			/* eslint-disable @typescript-eslint/naming-convention */
			variables: JSON.stringify({
				rawQuery: new TweetFilter(filter).toString(),
				count: count,
				cursor: cursor,
				querySource: 'typed_query',
				product: results,
			}),
			features: JSON.stringify({
				rweb_lists_timeline_redesign_enabled: true,
				responsive_web_graphql_exclude_directive_enabled: true,
				verified_phone_label_enabled: true,
				creator_subscriptions_tweet_preview_api_enabled: true,
				responsive_web_graphql_timeline_navigation_enabled: true,
				responsive_web_graphql_skip_user_profile_image_extensions_enabled: false,
				tweetypie_unmention_optimization_enabled: true,
				responsive_web_edit_tweet_api_enabled: true,
				graphql_is_translatable_rweb_tweet_is_translatable_enabled: true,
				view_counts_everywhere_api_enabled: true,
				longform_notetweets_consumption_enabled: true,
				responsive_web_twitter_article_tweet_consumption_enabled: false,
				tweet_awards_web_tipping_enabled: false,
				freedom_of_speech_not_reach_fetch_enabled: true,
				standardized_nudges_misinfo: true,
				tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled: true,
				longform_notetweets_rich_text_read_enabled: true,
				longform_notetweets_inline_media_enabled: true,
				responsive_web_media_download_video_enabled: false,
				responsive_web_enhance_cards_enabled: false,
			}),
			/* eslint-enable @typescript-eslint/naming-convention */
		},
		paramsSerializer: { encode: encodeURIComponent },
	};
}

/**
 * @param id - The id of the tweet to be unliked.
 *
 * @public
 */
export function unlike(id: string): AxiosRequestConfig {
	return {
		method: 'post',
		url: 'https://x.com/i/api/graphql/ZYKSe-w7KEslx3JhSIk5LA/UnfavoriteTweet',
		data: {
			/* eslint-disable @typescript-eslint/naming-convention */
			variables: {
				tweet_id: id,
			},
			/* eslint-enable @typescript-eslint/naming-convention */
		},
	};
}

/**
 * @param id - The id of the tweet to be unposted.
 *
 * @public
 */
export function unpost(id: string): AxiosRequestConfig {
	return {
		method: 'post',
		url: 'https://x.com/i/api/graphql/VaenaVgh5q5ih7kvyVjgtg/DeleteTweet',
		data: {
			/* eslint-disable @typescript-eslint/naming-convention */
			variables: {
				tweet_id: id,
			},
			/* eslint-enable @typescript-eslint/naming-convention */
		},
	};
}

/**
 * @param id - The id of the source tweet (which was retweeted), to be unretweeted.
 *
 * @public
 */
export function unretweet(id: string): AxiosRequestConfig {
	return {
		method: 'post',
		url: 'https://x.com/i/api/graphql/iQtK4dl5hBmXewYZuEOKVw/DeleteRetweet',
		data: {
			/* eslint-disable @typescript-eslint/naming-convention */
			variables: {
				source_tweet_id: id,
			},
			/* eslint-enable @typescript-eslint/naming-convention */
		},
	};
}

/**
 * @param id - The id of the scheduled tweet to be unscheduled.
 *
 * @public
 */
export function unschedule(id: string): AxiosRequestConfig {
	return {
		method: 'post',
		url: 'https://x.com/i/api/graphql/CTOVqej0JBXAZSwkp1US0g/DeleteScheduledTweet',
		data: {
			/* eslint-disable @typescript-eslint/naming-convention */
			variables: {
				scheduled_tweet_id: id,
			},
			queryId: 'CTOVqej0JBXAZSwkp1US0g',
			/* eslint-enable @typescript-eslint/naming-convention */
		},
	};
}
