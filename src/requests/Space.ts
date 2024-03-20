// PACKAGES
import { AxiosRequestConfig } from 'axios';

/**
 * @param id - The id of the space whose details are to be fetched.
 *
 * @public
 */
export function details(id: string): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://twitter.com/i/api/graphql/s2tz6GAie-O1tdZx873PLA/AudioSpaceById',
		params: {
			/* eslint-disable @typescript-eslint/naming-convention */
			variables: { id: id, isMetatagsQuery: true, withReplays: true, withListeners: true },
			features: {
				spaces_2022_h2_spaces_communities: true,
				spaces_2022_h2_clipping: true,
				creator_subscriptions_tweet_preview_api_enabled: true,
				responsive_web_graphql_exclude_directive_enabled: true,
				verified_phone_label_enabled: true,
				c9s_tweet_anatomy_moderator_badge_enabled: true,
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
				rweb_video_timestamps_enabled: true,
				longform_notetweets_rich_text_read_enabled: true,
				longform_notetweets_inline_media_enabled: true,
				responsive_web_media_download_video_enabled: false,
				responsive_web_graphql_timeline_navigation_enabled: true,
				responsive_web_enhance_cards_enabled: false,
			},
			/* eslint-enable @typescript-eslint/naming-convention */
		},
		paramsSerializer: { encode: encodeURIComponent },
	};
}
