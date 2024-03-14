/* eslint-disable @typescript-eslint/naming-convention */

// PACKAGES
import { AxiosRequestConfig } from 'axios';

// MODELS
import { FetchArgs } from '../models/args/FetchArgs';
import { PostArgs } from '../models/args/PostArgs';
import { ETweetResources } from '../enums/Resources';
import { MediaVariable } from '../models/params/Variables';

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
		data: JSON.stringify({
			variables: {
				tweet_id: args.id,
				dark_request: false,
			},
		}),
	}),
	CREATE_TWEET: (args: PostArgs): AxiosRequestConfig => ({
		method: 'post',
		url: 'https://twitter.com/i/api/graphql/bDE2rBtZb3uyrczSZ_pI9g/CreateTweet',
		data: JSON.stringify({
			variables: {
				tweet_text: args.tweet?.text,
				dark_request: false,
				media: args.tweet?.media ? new MediaVariable(args.tweet.media) : undefined,
				semantic_annotation_ids: [],
			},
			features: {
				c9s_tweet_anatomy_moderator_badge_enabled: true,
				tweetypie_unmention_optimization_enabled: true,
				responsive_web_edit_tweet_api_enabled: true,
				graphql_is_translatable_rweb_tweet_is_translatable_enabled: true,
				view_counts_everywhere_api_enabled: true,
				longform_notetweets_consumption_enabled: true,
				responsive_web_twitter_article_tweet_consumption_enabled: false,
				tweet_awards_web_tipping_enabled: false,
				longform_notetweets_rich_text_read_enabled: true,
				longform_notetweets_inline_media_enabled: true,
				rweb_video_timestamps_enabled: true,
				responsive_web_graphql_exclude_directive_enabled: true,
				verified_phone_label_enabled: true,
				freedom_of_speech_not_reach_fetch_enabled: true,
				standardized_nudges_misinfo: true,
				tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled: true,
				responsive_web_media_download_video_enabled: false,
				responsive_web_graphql_skip_user_profile_image_extensions_enabled: false,
				responsive_web_graphql_timeline_navigation_enabled: true,
				responsive_web_enhance_cards_enabled: false,
			},
		}),
	}),
	FAVORITE_TWEET: (args: PostArgs): AxiosRequestConfig => ({
		method: 'post',
		url: 'https://twitter.com/i/api/graphql/lI07N6Otwv1PhnEgXILM7A/FavoriteTweet',
		data: JSON.stringify({
			variables: {
				tweet_id: args.id,
			},
		}),
	}),
	TWEET_SEARCH: (args: FetchArgs): AxiosRequestConfig => ({
		method: 'get',
		url: 'https://twitter.com/i/api/graphql/nK1dw4oV3k4w5TdtcAdSww/SearchTimeline',
		params: {
			variables: {
				rawQuery: args.filter?.toString(),
				count: args.count,
				cursor: args.cursor,
				querySource: 'typed_query',
				product: 'Latest',
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
	}),
	TWEET_DETAILS: (args: FetchArgs): AxiosRequestConfig => ({
		method: 'get',
		url: 'https://twitter.com/i/api/graphql/0hWvDhmW8YQ-S_ib3azIrw/TweetResultByRestId',
		params: {
			variables: {
				tweetId: args.id,
				referrer: 'home',
				with_rux_injections: false,
				includePromotedContent: false,
				withCommunity: false,
				withQuickPromoteEligibilityTweetFields: false,
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
	}),
	TWEET_FAVORITERS: (args: FetchArgs): AxiosRequestConfig => ({
		method: 'get',
		url: 'https://twitter.com/i/api/graphql/9XKD3EWWC2BKpIFyDj4KKQ/Favoriters',
		params: {
			variables: {
				tweetId: args.id,
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
	}),
	TWEET_RETWEETERS: (args: FetchArgs): AxiosRequestConfig => ({
		method: 'get',
		url: 'https://twitter.com/i/api/graphql/v5h-KLmyl-wqZ8i-a_q73w/Retweeters',
		params: {
			variables: {
				tweetId: args.id,
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
	}),
};
