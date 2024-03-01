/* eslint-disable */

/**
 * The raw data received when fetching the highlights of the given user.
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
	metadata: Metadata;
}

export interface Instruction {
	type: string;
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
	tweet_results: TweetResults;
	tweetDisplayType: string;
}

export interface TweetResults {
	result: Result2;
}

export interface Result2 {
	__typename: string;
	rest_id: string;
	core: Core;
	unmention_data: UnmentionData;
	edit_control: EditControl;
	is_translatable: boolean;
	views: Views;
	source: string;
	legacy: Legacy2;
	superFollowsReplyUserResult?: SuperFollowsReplyUserResult;
	quoted_status_result?: QuotedStatusResult;
}

export interface Core {
	user_results: UserResults;
}

export interface UserResults {
	result: Result3;
}

export interface Result3 {
	__typename: string;
	id: string;
	rest_id: string;
	affiliates_highlighted_label: AffiliatesHighlightedLabel;
	has_graduated_access: boolean;
	is_blue_verified: boolean;
	profile_image_shape: string;
	legacy: Legacy;
	professional: Professional;
	super_follow_eligible: boolean;
	verified_phone_status: boolean;
}

export interface AffiliatesHighlightedLabel {
	label: Label;
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

export interface Professional {
	rest_id: string;
	professional_type: string;
	category: any[];
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
	favorite_count: number;
	favorited: boolean;
	full_text: string;
	in_reply_to_screen_name?: string;
	in_reply_to_status_id_str?: string;
	in_reply_to_user_id_str?: string;
	is_quote_status: boolean;
	lang: string;
	quote_count: number;
	reply_count: number;
	retweet_count: number;
	retweeted: boolean;
	user_id_str: string;
	id_str: string;
	quoted_status_id_str?: string;
	quoted_status_permalink?: QuotedStatusPermalink;
	extended_entities?: ExtendedEntities;
	possibly_sensitive?: boolean;
	possibly_sensitive_editable?: boolean;
}

export interface Entities2 {
	hashtags: any[];
	symbols: any[];
	timestamps: any[];
	urls: any[];
	user_mentions: UserMention[];
	media?: Medum[];
}

export interface UserMention {
	id_str: string;
	name: string;
	screen_name: string;
	indices: number[];
}

export interface Medum {
	display_url: string;
	expanded_url: string;
	id_str: string;
	indices: number[];
	media_key: string;
	media_url_https: string;
	source_status_id_str: string;
	source_user_id_str: string;
	type: string;
	url: string;
	additional_media_info: AdditionalMediaInfo;
	ext_media_availability: ExtMediaAvailability;
	sizes: Sizes;
	original_info: OriginalInfo;
	allow_download_status: AllowDownloadStatus;
	video_info: VideoInfo;
	media_results: MediaResults;
}

export interface AdditionalMediaInfo {
	monetizable: boolean;
	source_user: SourceUser;
}

export interface SourceUser {
	user_results: UserResults2;
}

export interface UserResults2 {
	result: Result4;
}

export interface Result4 {
	__typename: string;
	id: string;
	rest_id: string;
	affiliates_highlighted_label: AffiliatesHighlightedLabel2;
	has_graduated_access: boolean;
	is_blue_verified: boolean;
	profile_image_shape: string;
	legacy: Legacy3;
	professional: Professional2;
	super_follow_eligible: boolean;
	verified_phone_status: boolean;
}

export interface AffiliatesHighlightedLabel2 {}

export interface Legacy3 {
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
	pinned_tweet_ids_str: string[];
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
	url: Url3;
}

export interface Description2 {
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

export interface Professional2 {
	rest_id: string;
	professional_type: string;
	category: any[];
}

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
	focus_rects: any[];
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
	bitrate?: number;
	content_type: string;
	url: string;
}

export interface MediaResults {
	result: Result5;
}

export interface Result5 {
	media_key: string;
}

export interface QuotedStatusPermalink {
	url: string;
	expanded: string;
	display: string;
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
	source_status_id_str: string;
	source_user_id_str: string;
	type: string;
	url: string;
	additional_media_info: AdditionalMediaInfo2;
	ext_media_availability: ExtMediaAvailability2;
	sizes: Sizes2;
	original_info: OriginalInfo2;
	allow_download_status: AllowDownloadStatus2;
	video_info: VideoInfo2;
	media_results: MediaResults2;
}

export interface AdditionalMediaInfo2 {
	monetizable: boolean;
	source_user: SourceUser2;
}

export interface SourceUser2 {
	user_results: UserResults3;
}

export interface UserResults3 {
	result: Result6;
}

export interface Result6 {
	__typename: string;
	id: string;
	rest_id: string;
	affiliates_highlighted_label: AffiliatesHighlightedLabel3;
	has_graduated_access: boolean;
	is_blue_verified: boolean;
	profile_image_shape: string;
	legacy: Legacy4;
	professional: Professional3;
	super_follow_eligible: boolean;
	verified_phone_status: boolean;
}

export interface AffiliatesHighlightedLabel3 {}

export interface Legacy4 {
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
	pinned_tweet_ids_str: string[];
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
	urls: Url5[];
}

export interface Url5 {
	display_url: string;
	expanded_url: string;
	url: string;
	indices: number[];
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

export interface Professional3 {
	rest_id: string;
	professional_type: string;
	category: any[];
}

export interface ExtMediaAvailability2 {
	status: string;
}

export interface Sizes2 {
	large: Large2;
	medium: Medium2;
	small: Small2;
	thumb: Thumb2;
}

export interface Large2 {
	h: number;
	w: number;
	resize: string;
}

export interface Medium2 {
	h: number;
	w: number;
	resize: string;
}

export interface Small2 {
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
	focus_rects: any[];
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
	bitrate?: number;
	content_type: string;
	url: string;
}

export interface MediaResults2 {
	result: Result7;
}

export interface Result7 {
	media_key: string;
}

export interface SuperFollowsReplyUserResult {
	result: Result8;
}

export interface Result8 {
	__typename: string;
	legacy: Legacy5;
}

export interface Legacy5 {
	screen_name: string;
}

export interface QuotedStatusResult {
	result: Result9;
}

export interface Result9 {
	__typename: string;
	rest_id: string;
	core: Core2;
	unmention_data: UnmentionData2;
	edit_control: EditControl2;
	is_translatable: boolean;
	views: Views2;
	source: string;
	legacy: Legacy7;
	card?: Card;
	note_tweet?: NoteTweet;
	quotedRefResult?: QuotedRefResult;
}

export interface Core2 {
	user_results: UserResults4;
}

export interface UserResults4 {
	result: Result10;
}

export interface Result10 {
	__typename: string;
	id: string;
	rest_id: string;
	affiliates_highlighted_label: AffiliatesHighlightedLabel4;
	has_graduated_access: boolean;
	is_blue_verified: boolean;
	profile_image_shape: string;
	legacy: Legacy6;
	verified_phone_status: boolean;
	professional?: Professional4;
	super_follow_eligible?: boolean;
}

export interface AffiliatesHighlightedLabel4 {
	label?: Label2;
}

export interface Label2 {
	url: Url8;
	badge: Badge2;
	description: string;
	userLabelType: string;
	userLabelDisplayType: string;
}

export interface Url8 {
	url: string;
	urlType: string;
}

export interface Badge2 {
	url: string;
}

export interface Legacy6 {
	can_dm: boolean;
	can_media_tag: boolean;
	created_at: string;
	default_profile: boolean;
	default_profile_image: boolean;
	description: string;
	entities: Entities5;
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
	following?: boolean;
	verified_type?: string;
}

export interface Entities5 {
	description: Description4;
	url?: Url10;
}

export interface Description4 {
	urls: Url9[];
}

export interface Url9 {
	display_url: string;
	expanded_url: string;
	url: string;
	indices: number[];
}

export interface Url10 {
	urls: Url11[];
}

export interface Url11 {
	display_url: string;
	expanded_url: string;
	url: string;
	indices: number[];
}

export interface Professional4 {
	rest_id: string;
	professional_type: string;
	category: any[];
}

export interface UnmentionData2 {}

export interface EditControl2 {
	edit_tweet_ids: string[];
	editable_until_msecs: string;
	is_edit_eligible: boolean;
	edits_remaining: string;
}

export interface Views2 {
	count: string;
	state: string;
}

export interface Legacy7 {
	bookmark_count: number;
	bookmarked: boolean;
	created_at: string;
	conversation_id_str: string;
	display_text_range: number[];
	entities: Entities6;
	extended_entities?: ExtendedEntities2;
	favorite_count: number;
	favorited: boolean;
	full_text: string;
	is_quote_status: boolean;
	lang: string;
	possibly_sensitive?: boolean;
	possibly_sensitive_editable?: boolean;
	quote_count: number;
	reply_count: number;
	retweet_count: number;
	retweeted: boolean;
	user_id_str: string;
	id_str: string;
	quoted_status_id_str?: string;
	quoted_status_permalink?: QuotedStatusPermalink2;
	in_reply_to_screen_name?: string;
	in_reply_to_status_id_str?: string;
	in_reply_to_user_id_str?: string;
}

export interface Entities6 {
	hashtags: any[];
	media?: Medum3[];
	symbols: any[];
	timestamps: any[];
	urls: Url12[];
	user_mentions: UserMention2[];
}

export interface Medum3 {
	display_url: string;
	expanded_url: string;
	id_str: string;
	indices: number[];
	media_key: string;
	media_url_https: string;
	type: string;
	url: string;
	additional_media_info?: AdditionalMediaInfo3;
	ext_media_availability: ExtMediaAvailability3;
	sizes: Sizes3;
	original_info: OriginalInfo3;
	allow_download_status?: AllowDownloadStatus3;
	video_info?: VideoInfo3;
	media_results: MediaResults3;
	features?: Features;
}

export interface AdditionalMediaInfo3 {
	title?: string;
	description?: string;
	embeddable?: boolean;
	monetizable: boolean;
}

export interface ExtMediaAvailability3 {
	status: string;
}

export interface Sizes3 {
	large: Large3;
	medium: Medium3;
	small: Small3;
	thumb: Thumb3;
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

export interface Thumb3 {
	h: number;
	w: number;
	resize: string;
}

export interface OriginalInfo3 {
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

export interface AllowDownloadStatus3 {
	allow_download: boolean;
}

export interface VideoInfo3 {
	aspect_ratio: number[];
	duration_millis: number;
	variants: Variant3[];
}

export interface Variant3 {
	content_type: string;
	url: string;
	bitrate?: number;
}

export interface MediaResults3 {
	result: Result11;
}

export interface Result11 {
	media_key: string;
}

export interface Features {
	large: Large4;
	medium: Medium4;
	small: Small4;
	orig: Orig;
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

export interface Orig {
	faces: any[];
}

export interface Url12 {
	display_url: string;
	expanded_url: string;
	url: string;
	indices: number[];
}

export interface UserMention2 {
	id_str: string;
	name: string;
	screen_name: string;
	indices: number[];
}

export interface ExtendedEntities2 {
	media: Medum4[];
}

export interface Medum4 {
	display_url: string;
	expanded_url: string;
	id_str: string;
	indices: number[];
	media_key: string;
	media_url_https: string;
	type: string;
	url: string;
	additional_media_info?: AdditionalMediaInfo4;
	ext_media_availability: ExtMediaAvailability4;
	sizes: Sizes4;
	original_info: OriginalInfo4;
	allow_download_status?: AllowDownloadStatus4;
	video_info?: VideoInfo4;
	media_results: MediaResults4;
	features?: Features2;
}

export interface AdditionalMediaInfo4 {
	title?: string;
	description?: string;
	embeddable?: boolean;
	monetizable: boolean;
}

export interface ExtMediaAvailability4 {
	status: string;
}

export interface Sizes4 {
	large: Large5;
	medium: Medium5;
	small: Small5;
	thumb: Thumb4;
}

export interface Large5 {
	h: number;
	w: number;
	resize: string;
}

export interface Medium5 {
	h: number;
	w: number;
	resize: string;
}

export interface Small5 {
	h: number;
	w: number;
	resize: string;
}

export interface Thumb4 {
	h: number;
	w: number;
	resize: string;
}

export interface OriginalInfo4 {
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

export interface AllowDownloadStatus4 {
	allow_download: boolean;
}

export interface VideoInfo4 {
	aspect_ratio: number[];
	duration_millis: number;
	variants: Variant4[];
}

export interface Variant4 {
	content_type: string;
	url: string;
	bitrate?: number;
}

export interface MediaResults4 {
	result: Result12;
}

export interface Result12 {
	media_key: string;
}

export interface Features2 {
	large: Large6;
	medium: Medium6;
	small: Small6;
	orig: Orig2;
}

export interface Large6 {
	faces: any[];
}

export interface Medium6 {
	faces: any[];
}

export interface Small6 {
	faces: any[];
}

export interface Orig2 {
	faces: any[];
}

export interface QuotedStatusPermalink2 {
	url: string;
	expanded: string;
	display: string;
}

export interface Card {
	rest_id: string;
	legacy: Legacy8;
}

export interface Legacy8 {
	binding_values: BindingValue[];
	card_platform: CardPlatform;
	name: string;
	url: string;
	user_refs_results: UserRefsResult[];
}

export interface BindingValue {
	key: string;
	value: Value;
}

export interface Value {
	image_value?: ImageValue;
	type: string;
	string_value?: string;
	scribe_key?: string;
	user_value?: UserValue;
	image_color_value?: ImageColorValue;
}

export interface ImageValue {
	alt: string;
	height: number;
	width: number;
	url: string;
}

export interface UserValue {
	id_str: string;
	path: any[];
}

export interface ImageColorValue {
	palette: Palette[];
}

export interface Palette {
	rgb: Rgb;
	percentage: number;
}

export interface Rgb {
	blue: number;
	green: number;
	red: number;
}

export interface CardPlatform {
	platform: Platform;
}

export interface Platform {
	audience: Audience;
	device: Device;
}

export interface Audience {
	name: string;
}

export interface Device {
	name: string;
	version: string;
}

export interface UserRefsResult {
	result: Result13;
}

export interface Result13 {
	__typename: string;
	id: string;
	rest_id: string;
	affiliates_highlighted_label: AffiliatesHighlightedLabel5;
	has_graduated_access: boolean;
	is_blue_verified: boolean;
	profile_image_shape: string;
	legacy: Legacy9;
	professional: Professional5;
	verified_phone_status: boolean;
}

export interface AffiliatesHighlightedLabel5 {}

export interface Legacy9 {
	can_dm: boolean;
	can_media_tag: boolean;
	created_at: string;
	default_profile: boolean;
	default_profile_image: boolean;
	description: string;
	entities: Entities7;
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
	verified_type: string;
	want_retweets: boolean;
	withheld_in_countries: any[];
}

export interface Entities7 {
	description: Description5;
	url: Url14;
}

export interface Description5 {
	urls: Url13[];
}

export interface Url13 {
	display_url: string;
	expanded_url: string;
	url: string;
	indices: number[];
}

export interface Url14 {
	urls: Url15[];
}

export interface Url15 {
	display_url: string;
	expanded_url: string;
	url: string;
	indices: number[];
}

export interface Professional5 {
	rest_id: string;
	professional_type: string;
	category: Category[];
}

export interface Category {
	id: number;
	name: string;
	icon_name: string;
}

export interface NoteTweet {
	is_expandable: boolean;
	note_tweet_results: NoteTweetResults;
}

export interface NoteTweetResults {
	result: Result14;
}

export interface Result14 {
	id: string;
	text: string;
	entity_set: EntitySet;
	richtext: Richtext;
	media: Media;
}

export interface EntitySet {
	hashtags: any[];
	symbols: any[];
	timestamps: any[];
	urls: any[];
	user_mentions: UserMention3[];
}

export interface UserMention3 {
	id_str: string;
	name: string;
	screen_name: string;
	indices: number[];
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

export interface QuotedRefResult {
	result: Result15;
}

export interface Result15 {
	__typename: string;
	rest_id: string;
}

export interface ClientEventInfo {
	component: string;
	element: string;
}

export interface Metadata {
	scribeConfig: ScribeConfig;
}

export interface ScribeConfig {
	page: string;
}
