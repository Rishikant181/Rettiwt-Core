// PACKAGES
import { AxiosRequestConfig } from 'axios';
import qs from 'querystring';

/**
 * @param id - The id of the user whose details are to be fetched.
 *
 * @public
 */
export function detailsById(id: string): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://twitter.com/i/api/graphql/i_0UQ54YrCyqLUvgGzXygA/UserByRestId',
		params: {
			/* eslint-disable @typescript-eslint/naming-convention */
			variables: { userId: id, withSafetyModeUserFields: true },
			features: {
				hidden_profile_likes_enabled: false,
				hidden_profile_subscriptions_enabled: false,
				responsive_web_graphql_exclude_directive_enabled: true,
				verified_phone_label_enabled: true,
				subscriptions_verification_info_verified_since_enabled: true,
				highlights_tweets_tab_ui_enabled: true,
				creator_subscriptions_tweet_preview_api_enabled: true,
				responsive_web_graphql_skip_user_profile_image_extensions_enabled: false,
				responsive_web_graphql_timeline_navigation_enabled: true,
			},
			/* eslint-enable @typescript-eslint/naming-convention */
		},
		paramsSerializer: { encode: encodeURIComponent },
	};
}

/**
 * @param userName - The username of the user whose details are to be fetched.
 *
 * @public
 */
export function detailsByUsername(userName: string): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://twitter.com/i/api/graphql/oUZZZ8Oddwxs8Cd3iW3UEA/UserByScreenName',
		params: {
			/* eslint-disable @typescript-eslint/naming-convention */
			variables: { screen_name: userName, withSafetyModeUserFields: true },
			features: {
				hidden_profile_likes_enabled: false,
				responsive_web_graphql_exclude_directive_enabled: true,
				verified_phone_label_enabled: true,
				subscriptions_verification_info_verified_since_enabled: true,
				highlights_tweets_tab_ui_enabled: true,
				creator_subscriptions_tweet_preview_api_enabled: true,
				responsive_web_graphql_skip_user_profile_image_extensions_enabled: false,
				responsive_web_graphql_timeline_navigation_enabled: true,
			},
			/* eslint-enable @typescript-eslint/naming-convention */
		},
		paramsSerializer: { encode: encodeURIComponent },
	};
}

/**
 * @param id - The id of the user to follow.
 */
export function follow(id: string): AxiosRequestConfig {
	const data = qs.stringify({
		/* eslint-disable @typescript-eslint/naming-convention */
		user_id: id,
		/* eslint-enable @typescript-eslint/naming-convention */
	});
	return {
		method: 'post',
		url: 'https://twitter.com/i/api/1.1/friendships/create.json',
		data: data,
	};
}

/**
 * @param id - The id of the user whose followers are to be fetched.
 * @param count - The number of followers to fetch. Must be \<= 100.
 * @param cursor - The cursor to the batch of followers to fetch.
 *
 * @public
 */
export function followers(id: string, count?: number, cursor?: string): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://twitter.com/i/api/graphql/6y5TB_HrwQM0FBGDiNfoEA/Followers',
		params: {
			/* eslint-disable @typescript-eslint/naming-convention */
			variables: {
				userId: id,
				count: count,
				cursor: cursor,
				includePromotedContent: false,
			},
			features: {
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
			},
			/* eslint-enable @typescript-eslint/naming-convention */
		},
		paramsSerializer: { encode: encodeURIComponent },
	};
}

/**
 * @param id - The id of the user whose followings are to be fetched.
 * @param count - The number of followings to fetch. Must be \<= 100.
 * @param cursor - The cursor to the batch of followings to fetch.
 *
 * @public
 */
export function following(id: string, count?: number, cursor?: string): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://twitter.com/i/api/graphql/V8zHw0SZijWORSsb-FNrng/Following',
		params: {
			/* eslint-disable @typescript-eslint/naming-convention */
			variables: {
				userId: id,
				count: count,
				cursor: cursor,
				includePromotedContent: false,
			},
			features: {
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
			},
			/* eslint-enable @typescript-eslint/naming-convention */
		},
		paramsSerializer: { encode: encodeURIComponent },
	};
}

/**
 * @param id - The id of the user whose highlights are to be fetched.
 * @param count - The number of highlights to fetch. Must be \<= 100.
 * @param cursor - The cursor to the batch of highlights to fetch.
 *
 * @public
 */
export function highlights(id: string, count?: number, cursor?: string): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://twitter.com/i/api/graphql/Tqc024xHjye_svtpHJ236Q/UserHighlightsTweets',
		params: {
			/* eslint-disable @typescript-eslint/naming-convention */
			variables: {
				userId: id,
				count: count,
				cursor: cursor,
				includePromotedContent: false,
				withVoice: false,
			},
			features: {
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
				responsive_web_enhance_cards_enabled: false,
			},
			/* eslint-enable @typescript-eslint/naming-convention */
		},
		paramsSerializer: { encode: encodeURIComponent },
	};
}

/**
 * @param id - The id of the user whose likes are to be fetched.
 * @param count - The number of likes to fetch. Must be \<= 100.
 * @param cursor - The cursor to the batch of likes to fetch.
 *
 * @public
 */
export function likes(id: string, count?: number, cursor?: string): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://twitter.com/i/api/graphql/kgZtsNyE46T3JaEf2nF9vw/Likes',
		params: {
			/* eslint-disable @typescript-eslint/naming-convention */
			variables: {
				userId: id,
				count: count,
				cursor: cursor,
				includePromotedContent: false,
				withClientEventToken: false,
				withBirdwatchNotes: false,
				withVoice: false,
				withV2Timeline: false,
			},
			features: {
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
			},
			/* eslint-enable @typescript-eslint/naming-convention */
		},
		paramsSerializer: { encode: encodeURIComponent },
	};
}

/**
 * @param id - The id of the user whose media is to be fetched.
 * @param count - The number of media to fetch. Must be \<= 100.
 * @param cursor - The cursor to the batch of media to fetch.
 *
 * @public
 */
export function media(id: string, count?: number, cursor?: string): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://twitter.com/i/api/graphql/EnIWTNQ8Tum-7t1NnZHOEQ/UserMedia',
		params: {
			/* eslint-disable @typescript-eslint/naming-convention */
			variables: {
				userId: id,
				count: count,
				cursor: cursor,
				includePromotedContent: false,
				withClientEventToken: false,
				withBirdwatchNotes: false,
				withVoice: false,
				withV2Timeline: false,
			},
			features: {
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
				responsive_web_enhance_cards_enabled: false,
			},
			/* eslint-enable @typescript-eslint/naming-convention */
		},
		paramsSerializer: { encode: encodeURIComponent },
	};
}

/**
 * @param id - The id of the user whose subscriptions are to be fetched.
 * @param count - The number of subscriptions to fetch. Must be \<= 100.
 * @param cursor - The cursor to the batch of subscriptions to fetch.
 *
 * @public
 */
export function subscriptions(id: string, count?: number, cursor?: string): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://twitter.com/i/api/graphql/UWlxAhUnBNK0BYmeqNPqAw/UserCreatorSubscriptions',
		params: {
			/* eslint-disable @typescript-eslint/naming-convention */
			variables: {
				userId: id,
				count: count,
				cursor: cursor,
				includePromotedContent: false,
			},
			features: {
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
				responsive_web_enhance_cards_enabled: false,
			},
			/* eslint-enable @typescript-eslint/naming-convention */
		},
		paramsSerializer: { encode: encodeURIComponent },
	};
}

/**
 * @param id - The id of the user whose timeline tweets are to be fetched.
 * @param count - The number of timeline tweets to fetch. Must be \<= 20.
 * @param cursor - The cursor to the batch of timeline tweets to fetch.
 *
 * @public
 */
export function tweets(id: string, count?: number, cursor?: string): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://twitter.com/i/api/graphql/9bXBrlmUXOHFZEq0DuvYWA/UserTweets',
		params: {
			/* eslint-disable @typescript-eslint/naming-convention */
			variables: {
				userId: id,
				count: count,
				cursor: cursor,
				includePromotedContent: false,
				withQuickPromoteEligibilityTweetFields: false,
				withVoice: false,
				withV2Timeline: false,
			},
			features: {
				responsive_web_graphql_exclude_directive_enabled: true,
				verified_phone_label_enabled: true,
				responsive_web_home_pinned_timelines_enabled: false,
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
			},
			/* eslint-enable @typescript-eslint/naming-convention */
		},
		paramsSerializer: { encode: encodeURIComponent },
	};
}

/**
 * @param id - The id of the user whose timeline tweets and replies are to be fetched.
 * @param count - The number of timeline tweets and replies to fetch. Must be \<= 20.
 * @param cursor - The cursor to the batch of timeline tweets and replies to fetch.
 *
 * @public
 */
export function tweetsAndReplies(id: string, count?: number, cursor?: string): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://twitter.com/i/api/graphql/JFsmXeZ0h-hs934UFSfayw/UserTweetsAndReplies',
		params: {
			/* eslint-disable @typescript-eslint/naming-convention */
			variables: {
				userId: id,
				count: count,
				cursor: cursor,
				includePromotedContent: false,
				withCommunity: false,
				withVoice: false,
				withV2Timeline: false,
			},
			features: {
				responsive_web_graphql_exclude_directive_enabled: true,
				verified_phone_label_enabled: true,
				responsive_web_home_pinned_timelines_enabled: true,
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
			},
			/* eslint-enable @typescript-eslint/naming-convention */
		},
		paramsSerializer: { encode: encodeURIComponent },
	};
}
