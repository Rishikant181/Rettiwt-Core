/* eslint-disable @typescript-eslint/naming-convention */

// PACKAGES
import { AxiosRequestConfig } from 'axios';

// ENUMS
import { EListResources } from '../enums/Resources';

// MODELS
import { FetchArgs } from '../models/args/FetchArgs';

export function listDetails(args: FetchArgs): AxiosRequestConfig {
	args = new FetchArgs(EListResources.LIST_DETAILS, args);
	return {
		method: 'get',
		url: 'https://twitter.com/i/api/graphql/gO1_eYPohKYHwCG2m-1ZnQ/ListByRestId',
		params: {
			variables: { listId: args.id },
			features: {
				rweb_lists_timeline_redesign_enabled: true,
				responsive_web_graphql_exclude_directive_enabled: true,
				verified_phone_label_enabled: true,
				responsive_web_graphql_skip_user_profile_image_extensions_enabled: false,
				responsive_web_graphql_timeline_navigation_enabled: true,
			},
		},
		paramsSerializer: { encode: encodeURIComponent },
	};
}

export function listTweets(args: FetchArgs): AxiosRequestConfig {
	args = new FetchArgs(EListResources.LIST_TWEETS, args);
	return {
		method: 'get',
		url: 'https://twitter.com/i/api/graphql/naCjgapXCSCsbZ7qnnItQA/ListLatestTweetsTimeline',
		params: {
			variables: {
				listId: args.id,
				count: args.count,
				cursor: args.cursor,
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
		paramsSerializer: { encode: encodeURIComponent },
	};
}
