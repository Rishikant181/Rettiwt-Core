// TYPES
import { IFeatures } from '../../types/request/payloads/Features';
import { EResourceType } from '../../enums/Resources';

/**
 * Parameters for customizing the raw response, that must be sent as a URL-encoded, stringified-JSON.
 *
 * @public
 */
export class Features implements IFeatures {
	/* eslint-disable @typescript-eslint/naming-convention */
	public rweb_lists_timeline_redesign_enabled = true;
	public responsive_web_graphql_exclude_directive_enabled = true;
	public verified_phone_label_enabled = true;
	public creator_subscriptions_tweet_preview_api_enabled = true;
	public responsive_web_graphql_timeline_navigation_enabled = true;
	public responsive_web_graphql_skip_user_profile_image_extensions_enabled = false;
	public responsive_web_home_pinned_timelines_enabled = false;
	public tweetypie_unmention_optimization_enabled = true;
	public responsive_web_edit_tweet_api_enabled = true;
	public graphql_is_translatable_rweb_tweet_is_translatable_enabled = true;
	public view_counts_everywhere_api_enabled = true;
	public longform_notetweets_consumption_enabled = true;
	public responsive_web_twitter_article_tweet_consumption_enabled = false;
	public tweet_awards_web_tipping_enabled = false;
	public freedom_of_speech_not_reach_fetch_enabled = true;
	public standardized_nudges_misinfo = true;
	public tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled = true;
	public longform_notetweets_rich_text_read_enabled = true;
	public longform_notetweets_inline_media_enabled = true;
	public responsive_web_media_download_video_enabled = false;
	public responsive_web_enhance_cards_enabled = false;
	public hidden_profile_likes_enabled = false;
	public hidden_profile_subscriptions_enabled = false;
	public subscriptions_verification_info_verified_since_enabled = true;
	public highlights_tweets_tab_ui_enabled = true;
	public spaces_2022_h2_spaces_communities = true;
	public spaces_2022_h2_clipping = true;
	public c9s_tweet_anatomy_moderator_badge_enabled = true;
	public rweb_video_timestamps_enabled = true;
	/* eslint-enable @typescript-eslint/naming-convention */

	/**
	 * Converts this object to it's string representation.
	 *
	 * @returns 'this' object's string representation.
	 */
	public toString(): string {
		return JSON.stringify(this);
	}
}
