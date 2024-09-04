import qs from 'querystring';

import { AxiosRequestConfig } from 'axios';

/**
 * @param id - The id of the user whose details are to be fetched.
 *
 * @public
 */
export function detailsById(id: string): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://x.com/i/api/graphql/i_0UQ54YrCyqLUvgGzXygA/UserByRestId',
		params: {
			/* eslint-disable @typescript-eslint/naming-convention */
			variables: JSON.stringify({ userId: id, withSafetyModeUserFields: true }),
			features: JSON.stringify({
				hidden_profile_likes_enabled: false,
				hidden_profile_subscriptions_enabled: false,
				responsive_web_graphql_exclude_directive_enabled: true,
				verified_phone_label_enabled: true,
				subscriptions_verification_info_verified_since_enabled: true,
				highlights_tweets_tab_ui_enabled: true,
				creator_subscriptions_tweet_preview_api_enabled: true,
				responsive_web_graphql_skip_user_profile_image_extensions_enabled: false,
				responsive_web_graphql_timeline_navigation_enabled: true,
			}),
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
		url: 'https://x.com/i/api/graphql/oUZZZ8Oddwxs8Cd3iW3UEA/UserByScreenName',
		params: {
			/* eslint-disable @typescript-eslint/naming-convention */
			variables: JSON.stringify({ screen_name: userName, withSafetyModeUserFields: true }),
			features: JSON.stringify({
				hidden_profile_likes_enabled: false,
				responsive_web_graphql_exclude_directive_enabled: true,
				verified_phone_label_enabled: true,
				subscriptions_verification_info_verified_since_enabled: true,
				highlights_tweets_tab_ui_enabled: true,
				creator_subscriptions_tweet_preview_api_enabled: true,
				responsive_web_graphql_skip_user_profile_image_extensions_enabled: false,
				responsive_web_graphql_timeline_navigation_enabled: true,
			}),
			/* eslint-enable @typescript-eslint/naming-convention */
		},
		paramsSerializer: { encode: encodeURIComponent },
	};
}

/**
 * @param id - The id of the user to follow.
 *
 * @public
 */
export function follow(id: string): AxiosRequestConfig {
	return {
		method: 'post',
		url: 'https://x.com/i/api/1.1/friendships/create.json',
		data: qs.stringify({
			/* eslint-disable @typescript-eslint/naming-convention */
			user_id: id,
			/* eslint-enable @typescript-eslint/naming-convention */
		}),
	};
}

/**
 * @param count - The number of timeline items to fetch. Only works as a lower limit when used with a cursor.
 * @param cursor - The cursor to the batch of followed timeline items to fetch.
 *
 * @public
 */
export function followed(count?: number, cursor?: string): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://x.com/i/api/graphql/9EwYy8pLBOSFlEoSP2STiQ/HomeLatestTimeline',
		params: {
			/* eslint-disable @typescript-eslint/naming-convention */
			variables: JSON.stringify({
				count: count,
				cursor: cursor,
				includePromotedContent: false,
				latestControlAvailable: true,
				withCommunity: false,
			}),
			features: JSON.stringify({
				rweb_tipjar_consumption_enabled: true,
				responsive_web_graphql_exclude_directive_enabled: true,
				verified_phone_label_enabled: true,
				creator_subscriptions_tweet_preview_api_enabled: true,
				responsive_web_graphql_timeline_navigation_enabled: true,
				responsive_web_graphql_skip_user_profile_image_extensions_enabled: false,
				communities_web_enable_tweet_community_results_fetch: true,
				c9s_tweet_anatomy_moderator_badge_enabled: true,
				articles_preview_enabled: false,
				tweetypie_unmention_optimization_enabled: true,
				responsive_web_edit_tweet_api_enabled: true,
				graphql_is_translatable_rweb_tweet_is_translatable_enabled: true,
				view_counts_everywhere_api_enabled: true,
				longform_notetweets_consumption_enabled: true,
				responsive_web_twitter_article_tweet_consumption_enabled: true,
				tweet_awards_web_tipping_enabled: false,
				creator_subscriptions_quote_tweet_preview_enabled: false,
				freedom_of_speech_not_reach_fetch_enabled: true,
				standardized_nudges_misinfo: true,
				tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled: true,
				tweet_with_visibility_results_prefer_gql_media_interstitial_enabled: false,
				rweb_video_timestamps_enabled: true,
				longform_notetweets_rich_text_read_enabled: true,
				longform_notetweets_inline_media_enabled: true,
				responsive_web_enhance_cards_enabled: false,
			}),
			/* eslint-enable @typescript-eslint/naming-convention */
		},
		paramsSerializer: { encode: encodeURIComponent },
	};
}

/**
 * @param id - The id of the user whose followers are to be fetched.
 * @param count - The number of followers to fetch. Only works as a lower limit when used with a cursor.
 * @param cursor - The cursor to the batch of followers to fetch.
 *
 * @public
 */
export function followers(id: string, count?: number, cursor?: string): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://x.com/i/api/graphql/6y5TB_HrwQM0FBGDiNfoEA/Followers',
		params: {
			/* eslint-disable @typescript-eslint/naming-convention */
			variables: JSON.stringify({
				userId: id,
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
 * @param id - The id of the user whose followings are to be fetched.
 * @param count - The number of followings to fetch. Only works as a lower limit when used with a cursor.
 * @param cursor - The cursor to the batch of followings to fetch.
 *
 * @public
 */
export function following(id: string, count?: number, cursor?: string): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://x.com/i/api/graphql/V8zHw0SZijWORSsb-FNrng/Following',
		params: {
			/* eslint-disable @typescript-eslint/naming-convention */
			variables: JSON.stringify({
				userId: id,
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
 * @param id - The id of the user whose highlights are to be fetched.
 * @param count - The number of highlights to fetch. Only works as a lower limit when used with a cursor.
 * @param cursor - The cursor to the batch of highlights to fetch.
 *
 * @public
 */
export function highlights(id: string, count?: number, cursor?: string): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://x.com/i/api/graphql/Tqc024xHjye_svtpHJ236Q/UserHighlightsTweets',
		params: {
			/* eslint-disable @typescript-eslint/naming-convention */
			variables: JSON.stringify({
				userId: id,
				count: count,
				cursor: cursor,
				includePromotedContent: false,
				withVoice: false,
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
				responsive_web_enhance_cards_enabled: false,
			}),
			/* eslint-enable @typescript-eslint/naming-convention */
		},
		paramsSerializer: { encode: encodeURIComponent },
	};
}

/**
 * @param id - The id of the user whose likes are to be fetched.
 * @param count - The number of likes to fetch. Only works as a lower limit when used with a cursor.
 * @param cursor - The cursor to the batch of likes to fetch.
 *
 * @public
 */
export function likes(id: string, count?: number, cursor?: string): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://x.com/i/api/graphql/kgZtsNyE46T3JaEf2nF9vw/Likes',
		params: {
			/* eslint-disable @typescript-eslint/naming-convention */
			variables: JSON.stringify({
				userId: id,
				count: count,
				cursor: cursor,
				includePromotedContent: false,
				withClientEventToken: false,
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
 * @param id - The id of the user whose media is to be fetched.
 * @param count - The number of media to fetch. Only works as a lower limit when used with a cursor.
 * @param cursor - The cursor to the batch of media to fetch.
 *
 * @public
 */
export function media(id: string, count?: number, cursor?: string): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://x.com/i/api/graphql/EnIWTNQ8Tum-7t1NnZHOEQ/UserMedia',
		params: {
			/* eslint-disable @typescript-eslint/naming-convention */
			variables: JSON.stringify({
				userId: id,
				count: count,
				cursor: cursor,
				includePromotedContent: false,
				withClientEventToken: false,
				withBirdwatchNotes: false,
				withVoice: false,
				withV2Timeline: false,
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
				responsive_web_enhance_cards_enabled: false,
			}),
			/* eslint-enable @typescript-eslint/naming-convention */
		},
		paramsSerializer: { encode: encodeURIComponent },
	};
}

/**
 * @param count - The number of notifications to fetch.
 * @param cursor - The cursor to the batch of notifications to fetch.
 *
 * @public
 */
export function notifications(count?: number, cursor?: string): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://x.com/i/api/2/notifications/all.json',
		params: {
			/* eslint-disable @typescript-eslint/naming-convention */
			include_profile_interstitial_type: 1,
			include_blocking: 1,
			include_blocked_by: 1,
			include_followed_by: 1,
			include_want_retweets: 1,
			include_mute_edge: 1,
			include_can_dm: 1,
			include_can_media_tag: 1,
			include_ext_is_blue_verified: 1,
			include_ext_verified_type: 1,
			include_ext_profile_image_shape: 1,
			skip_status: 1,
			cards_platform: 'Web-12',
			include_cards: 1,
			include_ext_alt_text: true,
			include_ext_limited_action_results: true,
			include_quote_count: true,
			include_reply_count: 1,
			tweet_mode: 'extended',
			include_ext_views: true,
			include_entities: true,
			include_user_entities: true,
			include_ext_media_color: true,
			include_ext_media_availability: true,
			include_ext_sensitive_media_warning: true,
			include_ext_trusted_friends_metadata: true,
			send_error_codes: true,
			simple_quoted_tweet: true,
			count: count,
			cursor: cursor,
			ext: 'mediaStats%2ChighlightedLabel%2CvoiceInfo%2CbirdwatchPivot%2CsuperFollowMetadata%2CunmentionInfo%2CeditControl%2Carticle',
			/* eslint-enable @typescript-eslint/naming-convention */
		},
	};
}

/**
 * @param count - The number of timeline items to fetch. Only works as a lower limit when used with a cursor.
 * @param cursor - The cursor to the batch of recommended timeline items to fetch.
 *
 * @public
 */
export function recommended(count?: number, cursor?: string): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://x.com/i/api/graphql/q1x0puFIVMzsbx2Yoh-usA/HomeTimeline',
		params: {
			/* eslint-disable @typescript-eslint/naming-convention */
			variables: JSON.stringify({
				count: count,
				cursor: cursor,
				includePromotedContent: false,
				latestControlAvailable: true,
				withCommunity: false,
				seenTweetIds: [],
			}),
			features: JSON.stringify({
				rweb_tipjar_consumption_enabled: true,
				responsive_web_graphql_exclude_directive_enabled: true,
				verified_phone_label_enabled: true,
				creator_subscriptions_tweet_preview_api_enabled: true,
				responsive_web_graphql_timeline_navigation_enabled: true,
				responsive_web_graphql_skip_user_profile_image_extensions_enabled: false,
				communities_web_enable_tweet_community_results_fetch: true,
				c9s_tweet_anatomy_moderator_badge_enabled: true,
				articles_preview_enabled: false,
				tweetypie_unmention_optimization_enabled: true,
				responsive_web_edit_tweet_api_enabled: true,
				graphql_is_translatable_rweb_tweet_is_translatable_enabled: true,
				view_counts_everywhere_api_enabled: true,
				longform_notetweets_consumption_enabled: true,
				responsive_web_twitter_article_tweet_consumption_enabled: true,
				tweet_awards_web_tipping_enabled: false,
				creator_subscriptions_quote_tweet_preview_enabled: false,
				freedom_of_speech_not_reach_fetch_enabled: true,
				standardized_nudges_misinfo: true,
				tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled: true,
				tweet_with_visibility_results_prefer_gql_media_interstitial_enabled: false,
				rweb_video_timestamps_enabled: true,
				longform_notetweets_rich_text_read_enabled: true,
				longform_notetweets_inline_media_enabled: true,
				responsive_web_enhance_cards_enabled: false,
			}),
			/* eslint-enable @typescript-eslint/naming-convention */
		},
		paramsSerializer: { encode: encodeURIComponent },
	};
}

/**
 * @public
 */
export function scheduled(): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://x.com/i/api/graphql/ITtjAzvlZni2wWXwf295Qg/FetchScheduledTweets?variables=%7B%22ascending%22%3Atrue%7D',
		params: {
			/* eslint-disable @typescript-eslint/naming-convention */
			variables: JSON.stringify({ ascending: true }),
			/* eslint-enable @typescript-eslint/naming-convention */
		},
		paramsSerializer: { encode: encodeURIComponent },
	};
}

/**
 * @param id - The id of the user whose subscriptions are to be fetched.
 * @param count - The number of subscriptions to fetch. Only works as a lower limit when used with a cursor.
 * @param cursor - The cursor to the batch of subscriptions to fetch.
 *
 * @public
 */
export function subscriptions(id: string, count?: number, cursor?: string): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://x.com/i/api/graphql/UWlxAhUnBNK0BYmeqNPqAw/UserCreatorSubscriptions',
		params: {
			/* eslint-disable @typescript-eslint/naming-convention */
			variables: JSON.stringify({
				userId: id,
				count: count,
				cursor: cursor,
				includePromotedContent: false,
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
				responsive_web_enhance_cards_enabled: false,
			}),
			/* eslint-enable @typescript-eslint/naming-convention */
		},
		paramsSerializer: { encode: encodeURIComponent },
	};
}

/**
 * @param id - The id of the user whose timeline tweets are to be fetched.
 * @param count - The number of timeline tweets to fetch. Only works as a lower limit when used with a cursor.
 * @param cursor - The cursor to the batch of timeline tweets to fetch.
 *
 * @public
 */
export function tweets(id: string, count?: number, cursor?: string): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://x.com/i/api/graphql/9bXBrlmUXOHFZEq0DuvYWA/UserTweets',
		params: {
			/* eslint-disable @typescript-eslint/naming-convention */
			variables: JSON.stringify({
				userId: id,
				count: count,
				cursor: cursor,
				includePromotedContent: false,
				withQuickPromoteEligibilityTweetFields: false,
				withVoice: false,
				withV2Timeline: false,
			}),
			features: JSON.stringify({
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
			}),
			/* eslint-enable @typescript-eslint/naming-convention */
		},
		paramsSerializer: { encode: encodeURIComponent },
	};
}

/**
 * @param id - The id of the user whose timeline tweets and replies are to be fetched.
 * @param count - The number of timeline tweets and replies to fetch. Only works as a lower limit when used with a cursor.
 * @param cursor - The cursor to the batch of timeline tweets and replies to fetch.
 *
 * @public
 */
export function tweetsAndReplies(id: string, count?: number, cursor?: string): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://x.com/i/api/graphql/JFsmXeZ0h-hs934UFSfayw/UserTweetsAndReplies',
		params: {
			/* eslint-disable @typescript-eslint/naming-convention */
			variables: JSON.stringify({
				userId: id,
				count: count,
				cursor: cursor,
				includePromotedContent: false,
				withCommunity: false,
				withVoice: false,
				withV2Timeline: false,
			}),
			features: JSON.stringify({
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
			}),
			/* eslint-enable @typescript-eslint/naming-convention */
		},
		paramsSerializer: { encode: encodeURIComponent },
	};
}

/**
 * @param id - The id of the user to be unfollowed.
 *
 * @public
 */
export function unfollow(id: string): AxiosRequestConfig {
	return {
		method: 'post',
		url: 'https://x.com/i/api/1.1/friendships/destroy.json',
		data: qs.stringify({
			/* eslint-disable @typescript-eslint/naming-convention */
			user_id: id,
			/* eslint-enable @typescript-eslint/naming-convention */
		}),
	};
}
