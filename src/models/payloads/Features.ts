// TYPES
import { IFeatures } from '../../types/request/payloads/Features';

/**
 * Parameters for customizing the raw response, that must be sent as a URL-encoded, stringified-JSON.
 *
 * @public
 */
export class Features implements IFeatures {
	/* eslint-disable */
	rweb_lists_timeline_redesign_enabled = true;
	responsive_web_graphql_exclude_directive_enabled = true;
	verified_phone_label_enabled = true;
	creator_subscriptions_tweet_preview_api_enabled = true;
	responsive_web_graphql_timeline_navigation_enabled = true;
	responsive_web_graphql_skip_user_profile_image_extensions_enabled = false;
	tweetypie_unmention_optimization_enabled = true;
	responsive_web_edit_tweet_api_enabled = true;
	graphql_is_translatable_rweb_tweet_is_translatable_enabled = true;
	view_counts_everywhere_api_enabled = true;
	longform_notetweets_consumption_enabled = true;
	responsive_web_twitter_article_tweet_consumption_enabled = false;
	tweet_awards_web_tipping_enabled = false;
	freedom_of_speech_not_reach_fetch_enabled = true;
	standardized_nudges_misinfo = true;
	tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled = true;
	longform_notetweets_rich_text_read_enabled = true;
	longform_notetweets_inline_media_enabled = true;
	responsive_web_media_download_video_enabled = false;
	responsive_web_enhance_cards_enabled = false;
	hidden_profile_likes_enabled = false;
	subscriptions_verification_info_verified_since_enabled = true;
	highlights_tweets_tab_ui_enabled = true;
	/* eslint-enable */

	/**
	 * Converts this object to it's string representation.
	 *
	 * @returns 'this' object's string representation.
	 */
	toString(): string {
		return `${encodeURIComponent(JSON.stringify(this))}`;
	}
}
