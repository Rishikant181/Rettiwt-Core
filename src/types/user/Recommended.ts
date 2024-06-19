/* eslint-disable */

/**
 * The raw data received when fetching the recommended timeline of the given user.
 *
 * @public
 */
export interface Root {
	data: Data;
}

export interface Data {
	home: Home;
}

export interface Home {
	home_timeline_urt: HomeTimelineUrt;
}

export interface HomeTimelineUrt {
	instructions: Instruction[];
	responseObjects: ResponseObjects;
	metadata: Metadata;
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
	feedbackInfo?: FeedbackInfo;
	clientEventInfo?: ClientEventInfo;
	value?: string;
	cursorType?: string;
}

export interface ItemContent {
	itemType: string;
	__typename: string;
	tweet_results: TweetResults;
	tweetDisplayType: string;
	promotedMetadata?: PromotedMetadata;
}

export interface TweetResults {
	result: Result;
}

export interface Result {
	__typename: string;
	rest_id?: string;
	core?: Core;
	unmention_data?: UnmentionData;
	edit_control?: EditControl;
	is_translatable?: boolean;
	views?: Views;
	source?: string;
	legacy?: Legacy2;
	card?: Card;
	tweet?: Tweet;
	limitedActionResults?: LimitedActionResults;
	quoted_status_result?: QuotedStatusResult;
	note_tweet?: NoteTweet;
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
	tipjar_settings: TipjarSettings;
	verified_phone_status: boolean;
	professional?: Professional;
	super_follow_eligible?: boolean;
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
	following?: boolean;
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
	verified_type?: string;
	want_retweets: boolean;
	withheld_in_countries: any[];
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

export interface TipjarSettings {}

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

export interface Legacy2 {
	bookmark_count: number;
	bookmarked: boolean;
	created_at: string;
	conversation_id_str: string;
	display_text_range: number[];
	entities: Entities2;
	extended_entities?: ExtendedEntities;
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
	retweeted_status_result?: RetweetedStatusResult;
	quoted_status_id_str?: string;
	quoted_status_permalink?: QuotedStatusPermalink;
	scopes?: Scopes;
}

export interface Entities2 {
	hashtags: Hashtag[];
	media?: Medum[];
	symbols: any[];
	timestamps: any[];
	urls: Url7[];
	user_mentions: UserMention[];
}

export interface Hashtag {
	indices: number[];
	text: string;
}

export interface Medum {
	display_url: string;
	expanded_url: string;
	ext_alt_text?: string;
	id_str: string;
	indices: number[];
	media_key: string;
	media_url_https: string;
	type: string;
	url: string;
	ext_media_availability: ExtMediaAvailability;
	features?: Features;
	sizes: Sizes;
	original_info: OriginalInfo;
	media_results: MediaResults;
	additional_media_info?: AdditionalMediaInfo;
	video_info?: VideoInfo;
	source_status_id_str?: string;
	source_user_id_str?: string;
	allow_download_status?: AllowDownloadStatus;
}

export interface ExtMediaAvailability {
	status: string;
}

export interface Features {
	large: Large;
	medium: Medium;
	small: Small;
	orig: Orig;
	all?: All;
}

export interface Large {
	faces: Face[];
}

export interface Face {
	x: number;
	y: number;
	h: number;
	w: number;
}

export interface Medium {
	faces: Face2[];
}

export interface Face2 {
	x: number;
	y: number;
	h: number;
	w: number;
}

export interface Small {
	faces: Face3[];
}

export interface Face3 {
	x: number;
	y: number;
	h: number;
	w: number;
}

export interface Orig {
	faces: Face4[];
}

export interface Face4 {
	x: number;
	y: number;
	h: number;
	w: number;
}

export interface All {
	tags: Tag[];
}

export interface Tag {
	user_id: string;
	name: string;
	screen_name: string;
	type: string;
}

export interface Sizes {
	large: Large2;
	medium: Medium2;
	small: Small2;
	thumb: Thumb;
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

export interface MediaResults {
	result: Result3;
}

export interface Result3 {
	media_key: string;
}

export interface AdditionalMediaInfo {
	monetizable: boolean;
	source_user?: SourceUser;
	title?: string;
	description?: string;
	embeddable?: boolean;
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
	tipjar_settings: TipjarSettings2;
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
	url: Url5;
}

export interface Description2 {
	urls: any[];
}

export interface Url5 {
	urls: Url6[];
}

export interface Url6 {
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

export interface TipjarSettings2 {}

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

export interface AllowDownloadStatus {
	allow_download: boolean;
}

export interface Url7 {
	display_url: string;
	expanded_url: string;
	url: string;
	indices: number[];
}

export interface UserMention {
	id_str: string;
	name: string;
	screen_name: string;
	indices: number[];
}

export interface ExtendedEntities {
	media: Medum2[];
}

export interface Medum2 {
	display_url: string;
	expanded_url: string;
	ext_alt_text?: string;
	id_str: string;
	indices: number[];
	media_key: string;
	media_url_https: string;
	type: string;
	url: string;
	ext_media_availability: ExtMediaAvailability2;
	features?: Features2;
	sizes: Sizes2;
	original_info: OriginalInfo2;
	media_results: MediaResults2;
	additional_media_info?: AdditionalMediaInfo2;
	video_info?: VideoInfo2;
	source_status_id_str?: string;
	source_user_id_str?: string;
	allow_download_status?: AllowDownloadStatus2;
}

export interface ExtMediaAvailability2 {
	status: string;
}

export interface Features2 {
	large: Large3;
	medium: Medium3;
	small: Small3;
	orig: Orig2;
	all?: All2;
}

export interface Large3 {
	faces: Face5[];
}

export interface Face5 {
	x: number;
	y: number;
	h: number;
	w: number;
}

export interface Medium3 {
	faces: Face6[];
}

export interface Face6 {
	x: number;
	y: number;
	h: number;
	w: number;
}

export interface Small3 {
	faces: Face7[];
}

export interface Face7 {
	x: number;
	y: number;
	h: number;
	w: number;
}

export interface Orig2 {
	faces: Face8[];
}

export interface Face8 {
	x: number;
	y: number;
	h: number;
	w: number;
}

export interface All2 {
	tags: Tag2[];
}

export interface Tag2 {
	user_id: string;
	name: string;
	screen_name: string;
	type: string;
}

export interface Sizes2 {
	large: Large4;
	medium: Medium4;
	small: Small4;
	thumb: Thumb2;
}

export interface Large4 {
	h: number;
	w: number;
	resize: string;
}

export interface Medium4 {
	h: number;
	w: number;
	resize: string;
}

export interface Small4 {
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

export interface MediaResults2 {
	result: Result5;
}

export interface Result5 {
	media_key: string;
}

export interface AdditionalMediaInfo2 {
	monetizable: boolean;
	source_user?: SourceUser2;
	title?: string;
	description?: string;
	embeddable?: boolean;
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
	tipjar_settings: TipjarSettings3;
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
	url: Url8;
}

export interface Description3 {
	urls: any[];
}

export interface Url8 {
	urls: Url9[];
}

export interface Url9 {
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

export interface TipjarSettings3 {}

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

export interface AllowDownloadStatus2 {
	allow_download: boolean;
}

export interface RetweetedStatusResult {
	result: Result7;
}

export interface Result7 {
	__typename: string;
	rest_id: string;
	core: Core2;
	unmention_data: UnmentionData2;
	edit_control: EditControl2;
	is_translatable: boolean;
	views: Views2;
	source: string;
	legacy: Legacy6;
}

export interface Core2 {
	user_results: UserResults4;
}

export interface UserResults4 {
	result: Result8;
}

export interface Result8 {
	__typename: string;
	id: string;
	rest_id: string;
	affiliates_highlighted_label: AffiliatesHighlightedLabel4;
	has_graduated_access: boolean;
	is_blue_verified: boolean;
	profile_image_shape: string;
	legacy: Legacy5;
	professional?: Professional4;
	tipjar_settings: TipjarSettings4;
	verified_phone_status: boolean;
}

export interface AffiliatesHighlightedLabel4 {
	label?: Label2;
}

export interface Label2 {
	url: Url10;
	badge: Badge2;
	description: string;
	userLabelType: string;
	userLabelDisplayType: string;
}

export interface Url10 {
	url: string;
	urlType: string;
}

export interface Badge2 {
	url: string;
}

export interface Legacy5 {
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
	verified_type?: string;
}

export interface Entities5 {
	description: Description4;
	url: Url11;
}

export interface Description4 {
	urls: any[];
}

export interface Url11 {
	urls: Url12[];
}

export interface Url12 {
	display_url: string;
	expanded_url: string;
	url: string;
	indices: number[];
}

export interface Professional4 {
	rest_id: string;
	professional_type: string;
	category: Category2[];
}

export interface Category2 {
	id: number;
	name: string;
	icon_name: string;
}

export interface TipjarSettings4 {}

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

export interface Legacy6 {
	bookmark_count: number;
	bookmarked: boolean;
	created_at: string;
	conversation_id_str: string;
	display_text_range: number[];
	entities: Entities6;
	extended_entities: ExtendedEntities2;
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

export interface Entities6 {
	hashtags: Hashtag2[];
	media: Medum3[];
	symbols: any[];
	timestamps: any[];
	urls: Url13[];
	user_mentions: any[];
}

export interface Hashtag2 {
	indices: number[];
	text: string;
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
	features?: Features3;
}

export interface AdditionalMediaInfo3 {
	monetizable: boolean;
}

export interface ExtMediaAvailability3 {
	status: string;
}

export interface Sizes3 {
	large: Large5;
	medium: Medium5;
	small: Small5;
	thumb: Thumb3;
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

export interface Thumb3 {
	h: number;
	w: number;
	resize: string;
}

export interface OriginalInfo3 {
	height: number;
	width: number;
	focus_rects: FocusRect3[];
}

export interface FocusRect3 {
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
	result: Result9;
}

export interface Result9 {
	media_key: string;
}

export interface Features3 {
	large: Large6;
	medium: Medium6;
	small: Small6;
	orig: Orig3;
}

export interface Large6 {
	faces: Face9[];
}

export interface Face9 {
	x: number;
	y: number;
	h: number;
	w: number;
}

export interface Medium6 {
	faces: Face10[];
}

export interface Face10 {
	x: number;
	y: number;
	h: number;
	w: number;
}

export interface Small6 {
	faces: Face11[];
}

export interface Face11 {
	x: number;
	y: number;
	h: number;
	w: number;
}

export interface Orig3 {
	faces: Face12[];
}

export interface Face12 {
	x: number;
	y: number;
	h: number;
	w: number;
}

export interface Url13 {
	display_url: string;
	expanded_url: string;
	url: string;
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
	features?: Features4;
}

export interface AdditionalMediaInfo4 {
	monetizable: boolean;
}

export interface ExtMediaAvailability4 {
	status: string;
}

export interface Sizes4 {
	large: Large7;
	medium: Medium7;
	small: Small7;
	thumb: Thumb4;
}

export interface Large7 {
	h: number;
	w: number;
	resize: string;
}

export interface Medium7 {
	h: number;
	w: number;
	resize: string;
}

export interface Small7 {
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
	focus_rects: FocusRect4[];
}

export interface FocusRect4 {
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
	result: Result10;
}

export interface Result10 {
	media_key: string;
}

export interface Features4 {
	large: Large8;
	medium: Medium8;
	small: Small8;
	orig: Orig4;
}

export interface Large8 {
	faces: Face13[];
}

export interface Face13 {
	x: number;
	y: number;
	h: number;
	w: number;
}

export interface Medium8 {
	faces: Face14[];
}

export interface Face14 {
	x: number;
	y: number;
	h: number;
	w: number;
}

export interface Small8 {
	faces: Face15[];
}

export interface Face15 {
	x: number;
	y: number;
	h: number;
	w: number;
}

export interface Orig4 {
	faces: Face16[];
}

export interface Face16 {
	x: number;
	y: number;
	h: number;
	w: number;
}

export interface QuotedStatusPermalink {
	url: string;
	expanded: string;
	display: string;
}

export interface Scopes {
	followers: boolean;
}

export interface Card {
	rest_id: string;
	legacy: Legacy7;
}

export interface Legacy7 {
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
	image_color_value?: ImageColorValue;
	user_value?: UserValue;
}

export interface ImageValue {
	height: number;
	width: number;
	url: string;
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

export interface UserValue {
	id_str: string;
	path: any[];
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
	result: Result11;
}

export interface Result11 {
	__typename: string;
	id: string;
	rest_id: string;
	affiliates_highlighted_label: AffiliatesHighlightedLabel5;
	has_graduated_access: boolean;
	is_blue_verified: boolean;
	profile_image_shape: string;
	legacy: Legacy8;
	professional?: Professional5;
	tipjar_settings: TipjarSettings5;
	verified_phone_status: boolean;
}

export interface AffiliatesHighlightedLabel5 {}

export interface Legacy8 {
	following: boolean;
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
	verified_type?: string;
	want_retweets: boolean;
	withheld_in_countries: any[];
}

export interface Entities7 {
	description: Description5;
	url: Url14;
}

export interface Description5 {
	urls: any[];
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
	category: Category3[];
}

export interface Category3 {
	id: number;
	name: string;
	icon_name: string;
}

export interface TipjarSettings5 {}

export interface Tweet {
	rest_id: string;
	core: Core3;
	card: Card2;
	unmention_data: UnmentionData3;
	edit_control: EditControl3;
	is_translatable: boolean;
	views: Views3;
	source: string;
	legacy: Legacy11;
}

export interface Core3 {
	user_results: UserResults5;
}

export interface UserResults5 {
	result: Result12;
}

export interface Result12 {
	__typename: string;
	id: string;
	rest_id: string;
	affiliates_highlighted_label: AffiliatesHighlightedLabel6;
	has_graduated_access: boolean;
	is_blue_verified: boolean;
	profile_image_shape: string;
	legacy: Legacy9;
	professional: Professional6;
	tipjar_settings: TipjarSettings6;
	verified_phone_status: boolean;
}

export interface AffiliatesHighlightedLabel6 {}

export interface Legacy9 {
	can_dm: boolean;
	can_media_tag: boolean;
	created_at: string;
	default_profile: boolean;
	default_profile_image: boolean;
	description: string;
	entities: Entities8;
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

export interface Entities8 {
	description: Description6;
	url: Url17;
}

export interface Description6 {
	urls: Url16[];
}

export interface Url16 {
	display_url: string;
	expanded_url: string;
	url: string;
	indices: number[];
}

export interface Url17 {
	urls: Url18[];
}

export interface Url18 {
	display_url: string;
	expanded_url: string;
	url: string;
	indices: number[];
}

export interface Professional6 {
	rest_id: string;
	professional_type: string;
	category: any[];
}

export interface TipjarSettings6 {}

export interface Card2 {
	rest_id: string;
	legacy: Legacy10;
}

export interface Legacy10 {
	binding_values: BindingValue2[];
	card_platform: CardPlatform2;
	name: string;
	url: string;
	user_refs_results: any[];
}

export interface BindingValue2 {
	key: string;
	value: Value2;
}

export interface Value2 {
	string_value: string;
	type: string;
	scribe_key?: string;
}

export interface CardPlatform2 {
	platform: Platform2;
}

export interface Platform2 {
	audience: Audience2;
	device: Device2;
}

export interface Audience2 {
	name: string;
}

export interface Device2 {
	name: string;
	version: string;
}

export interface UnmentionData3 {}

export interface EditControl3 {
	edit_tweet_ids: string[];
	editable_until_msecs: string;
	is_edit_eligible: boolean;
	edits_remaining: string;
}

export interface Views3 {
	count: string;
	state: string;
}

export interface Legacy11 {
	bookmark_count: number;
	bookmarked: boolean;
	created_at: string;
	conversation_control: ConversationControl;
	conversation_id_str: string;
	display_text_range: number[];
	entities: Entities9;
	favorite_count: number;
	favorited: boolean;
	full_text: string;
	is_quote_status: boolean;
	lang: string;
	limited_actions: string;
	possibly_sensitive: boolean;
	possibly_sensitive_editable: boolean;
	quote_count: number;
	reply_count: number;
	retweet_count: number;
	retweeted: boolean;
	scopes: Scopes2;
	user_id_str: string;
	id_str: string;
}

export interface ConversationControl {
	policy: string;
	conversation_owner_results: ConversationOwnerResults;
}

export interface ConversationOwnerResults {
	result: Result13;
}

export interface Result13 {
	__typename: string;
	legacy: Legacy12;
}

export interface Legacy12 {
	screen_name: string;
}

export interface Entities9 {
	hashtags: any[];
	symbols: any[];
	timestamps: any[];
	urls: Url19[];
	user_mentions: any[];
}

export interface Url19 {
	display_url: string;
	expanded_url: string;
	url: string;
	indices: number[];
}

export interface Scopes2 {
	followers: boolean;
}

export interface LimitedActionResults {
	limited_actions: LimitedAction[];
}

export interface LimitedAction {
	action: string;
	prompt: Prompt;
}

export interface Prompt {
	__typename: string;
	cta_type: string;
	headline: Headline;
	subtext: Subtext;
}

export interface Headline {
	text: string;
	entities: any[];
}

export interface Subtext {
	text: string;
	entities: any[];
}

export interface QuotedStatusResult {
	result: Result14;
}

export interface Result14 {
	__typename: string;
	rest_id: string;
	core: Core4;
	unmention_data: UnmentionData4;
	edit_control: EditControl4;
	is_translatable: boolean;
	views: Views4;
	source: string;
	legacy: Legacy14;
}

export interface Core4 {
	user_results: UserResults6;
}

export interface UserResults6 {
	result: Result15;
}

export interface Result15 {
	__typename: string;
	id: string;
	rest_id: string;
	affiliates_highlighted_label: AffiliatesHighlightedLabel7;
	has_graduated_access: boolean;
	is_blue_verified: boolean;
	profile_image_shape: string;
	legacy: Legacy13;
	professional?: Professional7;
	tipjar_settings: TipjarSettings7;
	verified_phone_status: boolean;
}

export interface AffiliatesHighlightedLabel7 {
	label?: Label3;
}

export interface Label3 {
	url: Url20;
	badge: Badge3;
	description: string;
	userLabelType: string;
	userLabelDisplayType: string;
}

export interface Url20 {
	url: string;
	urlType: string;
}

export interface Badge3 {
	url: string;
}

export interface Legacy13 {
	can_dm: boolean;
	can_media_tag: boolean;
	created_at: string;
	default_profile: boolean;
	default_profile_image: boolean;
	description: string;
	entities: Entities10;
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
	verified_type?: string;
}

export interface Entities10 {
	description: Description7;
	url: Url22;
}

export interface Description7 {
	urls: Url21[];
}

export interface Url21 {
	display_url: string;
	expanded_url: string;
	url: string;
	indices: number[];
}

export interface Url22 {
	urls: Url23[];
}

export interface Url23 {
	display_url: string;
	expanded_url: string;
	url: string;
	indices: number[];
}

export interface Professional7 {
	rest_id: string;
	professional_type: string;
	category: Category4[];
}

export interface Category4 {
	id: number;
	name: string;
	icon_name: string;
}

export interface TipjarSettings7 {
	is_enabled?: boolean;
}

export interface UnmentionData4 {}

export interface EditControl4 {
	edit_tweet_ids: string[];
	editable_until_msecs: string;
	is_edit_eligible: boolean;
	edits_remaining: string;
}

export interface Views4 {
	count: string;
	state: string;
}

export interface Legacy14 {
	bookmark_count: number;
	bookmarked: boolean;
	created_at: string;
	conversation_id_str: string;
	display_text_range: number[];
	entities: Entities11;
	extended_entities: ExtendedEntities3;
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

export interface Entities11 {
	hashtags: Hashtag3[];
	media: Medum5[];
	symbols: any[];
	timestamps: any[];
	urls: Url24[];
	user_mentions: UserMention2[];
}

export interface Hashtag3 {
	indices: number[];
	text: string;
}

export interface Medum5 {
	display_url: string;
	expanded_url: string;
	id_str: string;
	indices: number[];
	media_key: string;
	media_url_https: string;
	type: string;
	url: string;
	ext_media_availability: ExtMediaAvailability5;
	features: Features5;
	sizes: Sizes5;
	original_info: OriginalInfo5;
	allow_download_status?: AllowDownloadStatus5;
	media_results: MediaResults5;
	ext_alt_text?: string;
}

export interface ExtMediaAvailability5 {
	status: string;
}

export interface Features5 {
	large: Large9;
	medium: Medium9;
	small: Small9;
	orig: Orig5;
}

export interface Large9 {
	faces: Face17[];
}

export interface Face17 {
	x: number;
	y: number;
	h: number;
	w: number;
}

export interface Medium9 {
	faces: Face18[];
}

export interface Face18 {
	x: number;
	y: number;
	h: number;
	w: number;
}

export interface Small9 {
	faces: Face19[];
}

export interface Face19 {
	x: number;
	y: number;
	h: number;
	w: number;
}

export interface Orig5 {
	faces: Face20[];
}

export interface Face20 {
	x: number;
	y: number;
	h: number;
	w: number;
}

export interface Sizes5 {
	large: Large10;
	medium: Medium10;
	small: Small10;
	thumb: Thumb5;
}

export interface Large10 {
	h: number;
	w: number;
	resize: string;
}

export interface Medium10 {
	h: number;
	w: number;
	resize: string;
}

export interface Small10 {
	h: number;
	w: number;
	resize: string;
}

export interface Thumb5 {
	h: number;
	w: number;
	resize: string;
}

export interface OriginalInfo5 {
	height: number;
	width: number;
	focus_rects: FocusRect5[];
}

export interface FocusRect5 {
	x: number;
	y: number;
	w: number;
	h: number;
}

export interface AllowDownloadStatus5 {
	allow_download: boolean;
}

export interface MediaResults5 {
	result: Result16;
}

export interface Result16 {
	media_key: string;
}

export interface Url24 {
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

export interface ExtendedEntities3 {
	media: Medum6[];
}

export interface Medum6 {
	display_url: string;
	expanded_url: string;
	id_str: string;
	indices: number[];
	media_key: string;
	media_url_https: string;
	type: string;
	url: string;
	ext_media_availability: ExtMediaAvailability6;
	features: Features6;
	sizes: Sizes6;
	original_info: OriginalInfo6;
	allow_download_status?: AllowDownloadStatus6;
	media_results: MediaResults6;
	ext_alt_text?: string;
}

export interface ExtMediaAvailability6 {
	status: string;
}

export interface Features6 {
	large: Large11;
	medium: Medium11;
	small: Small11;
	orig: Orig6;
}

export interface Large11 {
	faces: Face21[];
}

export interface Face21 {
	x: number;
	y: number;
	h: number;
	w: number;
}

export interface Medium11 {
	faces: Face22[];
}

export interface Face22 {
	x: number;
	y: number;
	h: number;
	w: number;
}

export interface Small11 {
	faces: Face23[];
}

export interface Face23 {
	x: number;
	y: number;
	h: number;
	w: number;
}

export interface Orig6 {
	faces: Face24[];
}

export interface Face24 {
	x: number;
	y: number;
	h: number;
	w: number;
}

export interface Sizes6 {
	large: Large12;
	medium: Medium12;
	small: Small12;
	thumb: Thumb6;
}

export interface Large12 {
	h: number;
	w: number;
	resize: string;
}

export interface Medium12 {
	h: number;
	w: number;
	resize: string;
}

export interface Small12 {
	h: number;
	w: number;
	resize: string;
}

export interface Thumb6 {
	h: number;
	w: number;
	resize: string;
}

export interface OriginalInfo6 {
	height: number;
	width: number;
	focus_rects: FocusRect6[];
}

export interface FocusRect6 {
	x: number;
	y: number;
	w: number;
	h: number;
}

export interface AllowDownloadStatus6 {
	allow_download: boolean;
}

export interface MediaResults6 {
	result: Result17;
}

export interface Result17 {
	media_key: string;
}

export interface NoteTweet {
	is_expandable: boolean;
	note_tweet_results: NoteTweetResults;
}

export interface NoteTweetResults {
	result: Result18;
}

export interface Result18 {
	id: string;
	text: string;
	entity_set: EntitySet;
}

export interface EntitySet {
	hashtags: any[];
	symbols: any[];
	urls: any[];
	user_mentions: any[];
}

export interface PromotedMetadata {
	advertiser_results: AdvertiserResults;
	adMetadataContainer: AdMetadataContainer;
	disclosureType: string;
	experimentValues: ExperimentValue[];
	impressionId: string;
	impressionString: string;
	clickTrackingInfo: ClickTrackingInfo;
}

export interface AdvertiserResults {
	result: Result19;
}

export interface Result19 {
	__typename: string;
	id: string;
	rest_id: string;
	affiliates_highlighted_label: AffiliatesHighlightedLabel8;
	has_graduated_access: boolean;
	is_blue_verified: boolean;
	profile_image_shape: string;
	legacy: Legacy15;
	professional?: Professional8;
	tipjar_settings: TipjarSettings8;
	verified_phone_status: boolean;
}

export interface AffiliatesHighlightedLabel8 {}

export interface Legacy15 {
	can_dm: boolean;
	can_media_tag: boolean;
	created_at: string;
	default_profile: boolean;
	default_profile_image: boolean;
	description: string;
	entities: Entities12;
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

export interface Entities12 {
	description: Description8;
	url: Url26;
}

export interface Description8 {
	urls: Url25[];
}

export interface Url25 {
	display_url: string;
	expanded_url: string;
	url: string;
	indices: number[];
}

export interface Url26 {
	urls: Url27[];
}

export interface Url27 {
	display_url: string;
	expanded_url: string;
	url: string;
	indices: number[];
}

export interface Professional8 {
	rest_id: string;
	professional_type: string;
	category: any[];
}

export interface TipjarSettings8 {}

export interface AdMetadataContainer {
	renderLegacyWebsiteCard: boolean;
}

export interface ExperimentValue {
	key: string;
	value: string;
}

export interface ClickTrackingInfo {
	urlParams: UrlParam[];
}

export interface UrlParam {
	key: string;
	value: string;
}

export interface FeedbackInfo {
	feedbackKeys: string[];
}

export interface ClientEventInfo {
	component: string;
	element: string;
	details: Details;
}

export interface Details {
	timelinesDetails: TimelinesDetails;
}

export interface TimelinesDetails {
	injectionType: string;
	controllerData: string;
}

export interface ResponseObjects {
	feedbackActions: FeedbackAction[];
}

export interface FeedbackAction {
	key: string;
	value: Value3;
}

export interface Value3 {
	feedbackType: string;
	prompt: string;
	confirmation: string;
	childKeys?: string[];
	feedbackUrl: string;
	hasUndoAction: boolean;
	icon?: string;
	clientEventInfo?: ClientEventInfo2;
}

export interface ClientEventInfo2 {
	action: string;
	element: string;
}

export interface Metadata {
	scribeConfig: ScribeConfig;
}

export interface ScribeConfig {
	page: string;
}
