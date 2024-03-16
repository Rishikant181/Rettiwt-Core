/* eslint-disable @typescript-eslint/naming-convention */

// PACKAGES
import { AxiosRequestConfig } from 'axios';

// MODELS
import { FetchArgs } from '../models/args/FetchArgs';

export function userDetails(args: FetchArgs): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://twitter.com/i/api/graphql/oUZZZ8Oddwxs8Cd3iW3UEA/UserByScreenName',
		params: {
			variables: { screen_name: args.id, withSafetyModeUserFields: true },
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
		},
	};
}

export function userDetailsById(args: FetchArgs): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://twitter.com/i/api/graphql/i_0UQ54YrCyqLUvgGzXygA/UserByRestId',
		params: {
			variables: { userId: args.id, withSafetyModeUserFields: true },
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
		},
	};
}

export function userFollowers(args: FetchArgs): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://twitter.com/i/api/graphql/V8zHw0SZijWORSsb-FNrng/Following',
		params: {
			variables: {
				userId: args.id,
				count: args.count,
				cursor: args.cursor,
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
		},
	};
}

export function userFollowing(args: FetchArgs): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://twitter.com/i/api/graphql/6y5TB_HrwQM0FBGDiNfoEA/Followers',
		params: {
			variables: {
				userId: args.id,
				count: args.count,
				cursor: args.cursor,
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
		},
	};
}

export function userHighlights(args: FetchArgs): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://twitter.com/i/api/graphql/Tqc024xHjye_svtpHJ236Q/UserHighlightsTweets',
		params: {
			variables: {
				userId: args.id,
				count: args.count,
				cursor: args.cursor,
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
		},
	};
}

export function userLikes(args: FetchArgs): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://twitter.com/i/api/graphql/kgZtsNyE46T3JaEf2nF9vw/Likes',
		params: {
			variables: {
				userId: args.id,
				count: args.count,
				cursor: args.cursor,
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
		},
	};
}

export function userTweets(args: FetchArgs): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://twitter.com/i/api/graphql/9bXBrlmUXOHFZEq0DuvYWA/UserTweets',
		params: {
			variables: {
				userId: args.id,
				count: args.count,
				cursor: args.cursor,
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
		},
	};
}

export function userTweetsAndReplies(args: FetchArgs): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://twitter.com/i/api/graphql/JFsmXeZ0h-hs934UFSfayw/UserTweetsAndReplies',
		params: {
			variables: {
				userId: args.id,
				count: args.count,
				cursor: args.cursor,
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
		},
	};
}

export function userMedia(args: FetchArgs): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://twitter.com/i/api/graphql/EnIWTNQ8Tum-7t1NnZHOEQ/UserMedia',
		params: {
			variables: {
				userId: args.id,
				count: args.count,
				cursor: args.cursor,
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
		},
	};
}

export function userSubscriptions(args: FetchArgs): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://twitter.com/i/api/graphql/UWlxAhUnBNK0BYmeqNPqAw/UserCreatorSubscriptions',
		params: {
			variables: {
				userId: args.id,
				count: args.count,
				cursor: args.cursor,
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
		},
	};
}
