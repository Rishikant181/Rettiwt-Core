import { AxiosRequestConfig } from 'axios';

/**
 * @param id - The id of the list whose details are to be fetched.
 *
 * @public
 */
export function details(id: string): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://x.com/i/api/graphql/gO1_eYPohKYHwCG2m-1ZnQ/ListByRestId',
		params: {
			/* eslint-disable @typescript-eslint/naming-convention */
			variables: JSON.stringify({ listId: id }),
			features: JSON.stringify({
				rweb_lists_timeline_redesign_enabled: true,
				responsive_web_graphql_exclude_directive_enabled: true,
				verified_phone_label_enabled: true,
				responsive_web_graphql_skip_user_profile_image_extensions_enabled: false,
				responsive_web_graphql_timeline_navigation_enabled: true,
			}),
			/* eslint-enable @typescript-eslint/naming-convention */
		},
		paramsSerializer: { encode: encodeURIComponent },
	};
}

/**
 * @param id - The id of the list whose members are to be fetched.
 * @param count - The number of members to fetch. Must be \<= 100.
 * @param cursor - The cursor to the batch of members to fetch.
 */
export function members(id: string, count?: number, cursor?: string): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://x.com/i/api/graphql/dsJhIe3M0vCopjSfU6SlQw/ListMembers',
		params: {
			/* eslint-disable @typescript-eslint/naming-convention */
			variables: JSON.stringify({
				listId: id,
				count: count,
				cursor: cursor,
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
				articles_preview_enabled: true,
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
				rweb_video_timestamps_enabled: true,
				longform_notetweets_rich_text_read_enabled: true,
				longform_notetweets_inline_media_enabled: true,
				responsive_web_enhance_cards_enabled: false,
			}),
			/* eslint-enable @typescript-eslint/naming-convention */
		},
	};
}

/**
 * @param id - The id of the list whose tweets are to be fetched.
 * @param count - The number of tweets to fetch. Must be \<= 100.
 * @param cursor - The cursor to the batch of tweets to fetch.
 *
 * @public
 */
export function tweets(id: string, count?: number, cursor?: string): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://x.com/i/api/graphql/naCjgapXCSCsbZ7qnnItQA/ListLatestTweetsTimeline',
		params: {
			/* eslint-disable @typescript-eslint/naming-convention */
			variables: JSON.stringify({
				listId: id,
				count: count,
				cursor: cursor,
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
