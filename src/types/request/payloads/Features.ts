/* eslint-disable */

/**
 * Parameters for customizing the raw response, that must be sent as a URL-encoded, stringified-JSON.
 *
 * @public
 */
export interface IFeatures {
	rweb_lists_timeline_redesign_enabled: boolean;
	responsive_web_graphql_exclude_directive_enabled: boolean;
	verified_phone_label_enabled: boolean;
	creator_subscriptions_tweet_preview_api_enabled: boolean;
	responsive_web_graphql_timeline_navigation_enabled: boolean;
	responsive_web_graphql_skip_user_profile_image_extensions_enabled: boolean;
	tweetypie_unmention_optimization_enabled: boolean;
	responsive_web_edit_tweet_api_enabled: boolean;
	graphql_is_translatable_rweb_tweet_is_translatable_enabled: boolean;
	view_counts_everywhere_api_enabled: boolean;
	longform_notetweets_consumption_enabled: boolean;
	responsive_web_twitter_article_tweet_consumption_enabled: boolean;
	tweet_awards_web_tipping_enabled: boolean;
	freedom_of_speech_not_reach_fetch_enabled: boolean;
	standardized_nudges_misinfo: boolean;
	tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled: boolean;
	longform_notetweets_rich_text_read_enabled: boolean;
	longform_notetweets_inline_media_enabled: boolean;
	responsive_web_media_download_video_enabled: boolean;
	responsive_web_enhance_cards_enabled: boolean;
	hidden_profile_likes_enabled: boolean;
	subscriptions_verification_info_verified_since_enabled: boolean;
	highlights_tweets_tab_ui_enabled: boolean;
}
