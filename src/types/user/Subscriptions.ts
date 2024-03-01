/* eslint-disable */

/**
 * The raw data received when fetching the subscriptions of the given user.
 *
 * @public
 */
export interface Root {
	data: Data;
}

export interface Data {
	user: User;
}

export interface User {
	result: Result;
}

export interface Result {
	__typename: string;
	timeline: Timeline;
}

export interface Timeline {
	timeline: Timeline2;
}

export interface Timeline2 {
	instructions: Instruction[];
}

export interface Instruction {
	type: string;
	direction?: string;
	entries?: Entry[];
}

export interface Entry {
	entryId: string;
	sortIndex: string;
	content: Content;
}

export interface Content {
	entryType: string;
	__typename: string;
	itemContent?: ItemContent;
	clientEventInfo?: ClientEventInfo;
	value?: string;
	cursorType?: string;
}

export interface ItemContent {
	itemType: string;
	__typename: string;
	user_results: UserResults;
	userDisplayType: string;
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
	super_follow_eligible: boolean;
	verified_phone_status: boolean;
	professional?: Professional;
}

export interface AffiliatesHighlightedLabel {
	label?: Label;
}

export interface Label {
	url: Url;
	badge: Badge;
	description: string;
	userLabelType: string;
	userLabelDisplayType: string;
}

export interface Url {
	url: string;
	urlType: string;
}

export interface Badge {
	url: string;
}

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
	profile_banner_url: string;
	profile_image_url_https: string;
	profile_interstitial_type: string;
	screen_name: string;
	statuses_count: number;
	translator_type: string;
	verified: boolean;
	want_retweets: boolean;
	withheld_in_countries: any[];
	url?: string;
	verified_type?: string;
}

export interface Entities {
	description: Description;
	url?: Url3;
}

export interface Description {
	urls: Url2[];
}

export interface Url2 {
	display_url: string;
	expanded_url: string;
	url: string;
	indices: number[];
}

export interface Url3 {
	urls: Url4[];
}

export interface Url4 {
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

export interface ClientEventInfo {
	component: string;
	element: string;
}
