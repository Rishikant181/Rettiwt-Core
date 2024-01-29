/* eslint-disable */

/**
 * The raw data received after creating a tweet.
 *
 * @public
 */
export interface Root {
	data: Data;
}

export interface Data {
	create_tweet: CreateTweet;
}

export interface CreateTweet {
	tweet_results: TweetResults;
}

export interface TweetResults {
	result: Result;
}

export interface Result {
	rest_id: string;
	core: Core;
	edit_control: EditControl;
	edit_perspective: EditPerspective;
	is_translatable: boolean;
	views: Views;
	source: string;
	legacy: Legacy2;
	unmention_info: UnmentionInfo;
}

export interface Core {
	user_results: UserResults;
}

export interface UserResults {
	result: Result2;
}

export interface Result2 {
	__typename: string;
	id: string;
	rest_id: string;
	affiliates_highlighted_label: AffiliatesHighlightedLabel;
	has_graduated_access: boolean;
	is_blue_verified: boolean;
	profile_image_shape: string;
	legacy: Legacy;
	verified_phone_status: boolean;
}

export interface AffiliatesHighlightedLabel {}

export interface Legacy {
	can_dm: boolean;
	can_media_tag: boolean;
	created_at: string;
	default_profile: boolean;
	default_profile_image: boolean;
	description: string;
	entities: Entities;
	fast_followers_count: number;
	favourites_count: number;
	followers_count: number;
	friends_count: number;
	has_custom_timelines: boolean;
	is_translator: boolean;
	listed_count: number;
	location: string;
	media_count: number;
	name: string;
	needs_phone_verification: boolean;
	normal_followers_count: number;
	pinned_tweet_ids_str: any[];
	possibly_sensitive: boolean;
	profile_image_url_https: string;
	profile_interstitial_type: string;
	screen_name: string;
	statuses_count: number;
	translator_type: string;
	verified: boolean;
	want_retweets: boolean;
	withheld_in_countries: any[];
}

export interface Entities {
	description: Description;
}

export interface Description {
	urls: any[];
}

export interface EditControl {
	edit_tweet_ids: string[];
	editable_until_msecs: string;
	is_edit_eligible: boolean;
	edits_remaining: string;
}

export interface EditPerspective {
	favorited: boolean;
	retweeted: boolean;
}

export interface Views {
	state: string;
}

export interface Legacy2 {
	bookmark_count: number;
	bookmarked: boolean;
	created_at: string;
	conversation_id_str: string;
	display_text_range: number[];
	entities: Entities2;
	favorite_count: number;
	favorited: boolean;
	full_text: string;
	in_reply_to_screen_name: string;
	in_reply_to_user_id_str: string;
	is_quote_status: boolean;
	lang: string;
	quote_count: number;
	reply_count: number;
	retweet_count: number;
	retweeted: boolean;
	user_id_str: string;
	id_str: string;
}

export interface Entities2 {
	user_mentions: UserMention[];
	urls: any[];
	hashtags: any[];
	symbols: any[];
}

export interface UserMention {
	id_str: string;
	name: string;
	screen_name: string;
	indices: number[];
}

export interface UnmentionInfo {}
