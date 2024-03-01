/* eslint-disable */

/**
 * The raw data received when fetching the details of a given tweet.
 *
 * @public
 */
export interface Root {
	data: Data;
}

export interface Data {
	tweetResult: TweetResult;
}

export interface TweetResult {
	result: Result;
}

export interface Result {
	__typename: string;
	rest_id: string;
	has_birdwatch_notes: boolean;
	core: Core;
	unmention_data: UnmentionData;
	edit_control: EditControl;
	is_translatable: boolean;
	views: Views;
	source: string;
	note_tweet: NoteTweet;
	legacy: Legacy2;
	quick_promote_eligibility: QuickPromoteEligibility;
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
	professional: Professional;
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
	normal_followers_count: number;
	pinned_tweet_ids_str: string[];
	possibly_sensitive: boolean;
	profile_image_url_https: string;
	profile_interstitial_type: string;
	screen_name: string;
	statuses_count: number;
	translator_type: string;
	url: string;
	verified: boolean;
	want_retweets: boolean;
	withheld_in_countries: any[];
}

export interface Entities {
	description: Description;
	url: Url2;
}

export interface Description {
	urls: Url[];
}

export interface Url {
	display_url: string;
	expanded_url: string;
	url: string;
	indices: number[];
}

export interface Url2 {
	urls: Url3[];
}

export interface Url3 {
	display_url: string;
	expanded_url: string;
	url: string;
	indices: number[];
}

export interface Professional {
	rest_id: string;
	professional_type: string;
	category: Category[];
}

export interface Category {
	id: number;
	name: string;
	icon_name: string;
}

export interface UnmentionData {}

export interface EditControl {
	edit_tweet_ids: string[];
	editable_until_msecs: string;
	is_edit_eligible: boolean;
	edits_remaining: string;
}

export interface Views {
	count: string;
	state: string;
}

export interface NoteTweet {
	is_expandable: boolean;
	note_tweet_results: NoteTweetResults;
}

export interface NoteTweetResults {
	result: Result3;
}

export interface Result3 {
	id: string;
	text: string;
	entity_set: EntitySet;
	richtext: Richtext;
	media: Media;
}

export interface EntitySet {
	user_mentions: any[];
	urls: any[];
	hashtags: any[];
	symbols: any[];
}

export interface Richtext {
	richtext_tags: RichtextTag[];
}

export interface RichtextTag {
	from_index: number;
	to_index: number;
	richtext_types: string[];
}

export interface Media {
	inline_media: any[];
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
	user_mentions: any[];
	urls: any[];
	hashtags: any[];
	symbols: any[];
}

export interface QuickPromoteEligibility {
	eligibility: string;
}
