/* eslint-disable */

/**
 * The raw data received when fetching the bookmarks of the given user.
 *
 * @public
 */
export interface Root {
	data: Data;
}

export interface Data {
	bookmark_timeline_v2: BookmarkTimelineV2;
}

export interface BookmarkTimelineV2 {
	timeline: Timeline;
}

export interface Timeline {
	instructions: Instruction[];
	responseObjects: ResponseObjects;
}

export interface Instruction {
	type: string;
	entries: Entry[];
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
	value?: string;
	cursorType?: string;
	stopOnEmptyResponse?: boolean;
}

export interface ItemContent {
	itemType: string;
	__typename: string;
	tweet_results: TweetResults;
	tweetDisplayType: string;
}

export interface TweetResults {
	result: Result;
}

export interface Result {
	__typename: string;
	rest_id: string;
	core: Core;
	unmention_data: UnmentionData;
	edit_control: EditControl;
	is_translatable: boolean;
	views: Views;
	source: string;
	legacy: Legacy2;
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
	tipjar_settings: TipjarSettings;
	super_follow_eligible?: boolean;
	verified_phone_status: boolean;
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
	following: boolean;
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
	url?: string;
	verified: boolean;
	want_retweets: boolean;
	withheld_in_countries: any[];
}

export interface Entities {
	description: Description;
	url?: Url2;
}

export interface Description {
	urls: any[];
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

export interface TipjarSettings {
	is_enabled?: boolean;
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

export interface Legacy2 {
	bookmark_count: number;
	bookmarked: boolean;
	created_at: string;
	conversation_id_str: string;
	display_text_range: number[];
	entities: Entities2;
	extended_entities: ExtendedEntities;
	favorite_count: number;
	favorited: boolean;
	full_text: string;
	is_quote_status: boolean;
	lang: string;
	possibly_sensitive: boolean;
	possibly_sensitive_editable: boolean;
	quote_count: number;
	reply_count: number;
	retweet_count: number;
	retweeted: boolean;
	user_id_str: string;
	id_str: string;
}

export interface Entities2 {
	hashtags: any[];
	media: Medum[];
	symbols: any[];
	timestamps: any[];
	urls: any[];
	user_mentions: any[];
}

export interface Medum {
	display_url: string;
	expanded_url: string;
	id_str: string;
	indices: number[];
	media_key: string;
	media_url_https: string;
	source_status_id_str?: string;
	source_user_id_str?: string;
	type: string;
	url: string;
	additional_media_info?: AdditionalMediaInfo;
	ext_media_availability: ExtMediaAvailability;
	sizes: Sizes;
	original_info: OriginalInfo;
	allow_download_status?: AllowDownloadStatus;
	video_info?: VideoInfo;
	media_results: MediaResults;
	features?: Features;
}

export interface AdditionalMediaInfo {
	monetizable: boolean;
	source_user: SourceUser;
}

export interface SourceUser {
	user_results: UserResults2;
}

export interface UserResults2 {
	result: Result3;
}

export interface Result3 {
	__typename: string;
	id: string;
	rest_id: string;
	affiliates_highlighted_label: AffiliatesHighlightedLabel2;
	has_graduated_access: boolean;
	is_blue_verified: boolean;
	profile_image_shape: string;
	legacy: Legacy3;
	tipjar_settings: TipjarSettings2;
	super_follow_eligible: boolean;
	verified_phone_status: boolean;
}

export interface AffiliatesHighlightedLabel2 {}

export interface Legacy3 {
	following: boolean;
	can_dm: boolean;
	can_media_tag: boolean;
	created_at: string;
	default_profile: boolean;
	default_profile_image: boolean;
	description: string;
	entities: Entities3;
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
	pinned_tweet_ids_str: any[];
	possibly_sensitive: boolean;
	profile_banner_url: string;
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

export interface Entities3 {
	description: Description2;
	url: Url4;
}

export interface Description2 {
	urls: any[];
}

export interface Url4 {
	urls: Url5[];
}

export interface Url5 {
	display_url: string;
	expanded_url: string;
	url: string;
	indices: number[];
}

export interface TipjarSettings2 {}

export interface ExtMediaAvailability {
	status: string;
}

export interface Sizes {
	large: Large;
	medium: Medium;
	small: Small;
	thumb: Thumb;
}

export interface Large {
	h: number;
	w: number;
	resize: string;
}

export interface Medium {
	h: number;
	w: number;
	resize: string;
}

export interface Small {
	h: number;
	w: number;
	resize: string;
}

export interface Thumb {
	h: number;
	w: number;
	resize: string;
}

export interface OriginalInfo {
	height: number;
	width: number;
	focus_rects: FocusRect[];
}

export interface FocusRect {
	x: number;
	y: number;
	w: number;
	h: number;
}

export interface AllowDownloadStatus {
	allow_download: boolean;
}

export interface VideoInfo {
	aspect_ratio: number[];
	duration_millis: number;
	variants: Variant[];
}

export interface Variant {
	content_type: string;
	url: string;
	bitrate?: number;
}

export interface MediaResults {
	result: Result4;
}

export interface Result4 {
	media_key: string;
}

export interface Features {
	large: Large2;
	medium: Medium2;
	small: Small2;
	orig: Orig;
}

export interface Large2 {
	faces: any[];
}

export interface Medium2 {
	faces: any[];
}

export interface Small2 {
	faces: any[];
}

export interface Orig {
	faces: any[];
}

export interface ExtendedEntities {
	media: Medum2[];
}

export interface Medum2 {
	display_url: string;
	expanded_url: string;
	id_str: string;
	indices: number[];
	media_key: string;
	media_url_https: string;
	source_status_id_str?: string;
	source_user_id_str?: string;
	type: string;
	url: string;
	additional_media_info?: AdditionalMediaInfo2;
	ext_media_availability: ExtMediaAvailability2;
	sizes: Sizes2;
	original_info: OriginalInfo2;
	allow_download_status?: AllowDownloadStatus2;
	video_info?: VideoInfo2;
	media_results: MediaResults2;
	features?: Features2;
}

export interface AdditionalMediaInfo2 {
	monetizable: boolean;
	source_user: SourceUser2;
}

export interface SourceUser2 {
	user_results: UserResults3;
}

export interface UserResults3 {
	result: Result5;
}

export interface Result5 {
	__typename: string;
	id: string;
	rest_id: string;
	affiliates_highlighted_label: AffiliatesHighlightedLabel3;
	has_graduated_access: boolean;
	is_blue_verified: boolean;
	profile_image_shape: string;
	legacy: Legacy4;
	tipjar_settings: TipjarSettings3;
	super_follow_eligible: boolean;
	verified_phone_status: boolean;
}

export interface AffiliatesHighlightedLabel3 {}

export interface Legacy4 {
	following: boolean;
	can_dm: boolean;
	can_media_tag: boolean;
	created_at: string;
	default_profile: boolean;
	default_profile_image: boolean;
	description: string;
	entities: Entities4;
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
	pinned_tweet_ids_str: any[];
	possibly_sensitive: boolean;
	profile_banner_url: string;
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

export interface Entities4 {
	description: Description3;
	url: Url6;
}

export interface Description3 {
	urls: any[];
}

export interface Url6 {
	urls: Url7[];
}

export interface Url7 {
	display_url: string;
	expanded_url: string;
	url: string;
	indices: number[];
}

export interface TipjarSettings3 {}

export interface ExtMediaAvailability2 {
	status: string;
}

export interface Sizes2 {
	large: Large3;
	medium: Medium3;
	small: Small3;
	thumb: Thumb2;
}

export interface Large3 {
	h: number;
	w: number;
	resize: string;
}

export interface Medium3 {
	h: number;
	w: number;
	resize: string;
}

export interface Small3 {
	h: number;
	w: number;
	resize: string;
}

export interface Thumb2 {
	h: number;
	w: number;
	resize: string;
}

export interface OriginalInfo2 {
	height: number;
	width: number;
	focus_rects: FocusRect2[];
}

export interface FocusRect2 {
	x: number;
	y: number;
	w: number;
	h: number;
}

export interface AllowDownloadStatus2 {
	allow_download: boolean;
}

export interface VideoInfo2 {
	aspect_ratio: number[];
	duration_millis: number;
	variants: Variant2[];
}

export interface Variant2 {
	content_type: string;
	url: string;
	bitrate?: number;
}

export interface MediaResults2 {
	result: Result6;
}

export interface Result6 {
	media_key: string;
}

export interface Features2 {
	large: Large4;
	medium: Medium4;
	small: Small4;
	orig: Orig2;
}

export interface Large4 {
	faces: any[];
}

export interface Medium4 {
	faces: any[];
}

export interface Small4 {
	faces: any[];
}

export interface Orig2 {
	faces: any[];
}

export interface ResponseObjects {
	feedbackActions: any[];
	immediateReactions: any[];
}
