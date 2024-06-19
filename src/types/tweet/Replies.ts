/* eslint-disable */

/**
 * The raw data received when fetching the replies of a given tweet.
 *
 * @public
 */
export interface Root {
	data: Data;
}

export interface Data {
	threaded_conversation_with_injections_v2: ThreadedConversationWithInjectionsV2;
}

export interface ThreadedConversationWithInjectionsV2 {
	instructions: Instruction[];
}

export interface Instruction {
	type: string;
	entries?: Entry[];
	direction?: string;
}

export interface Entry {
	entryId: string;
	sortIndex: string;
	content: Content;
}

export interface Content {
	entryType: string;
	__typename: string;
	items?: Item[];
	displayType?: string;
	clientEventInfo?: ClientEventInfo2;
	itemContent?: ItemContent2;
}

export interface Item {
	entryId: string;
	item: Item2;
}

export interface Item2 {
	itemContent: ItemContent;
	clientEventInfo: ClientEventInfo;
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
	rest_id: string;
	has_birdwatch_notes: boolean;
	core: Core;
	unmention_data: UnmentionData;
	edit_control: EditControl;
	is_translatable: boolean;
	views: Views;
	source: string;
	legacy: Legacy2;
	quick_promote_eligibility: QuickPromoteEligibility;
	unified_card?: UnifiedCard;
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
	professional?: Professional;
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
	extended_entities?: ExtendedEntities;
	possibly_sensitive?: boolean;
	possibly_sensitive_editable?: boolean;
}

export interface Entities2 {
	hashtags: any[];
	symbols: any[];
	timestamps: any[];
	urls: Url4[];
	user_mentions: UserMention[];
	media?: Medum[];
}

export interface Url4 {
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

export interface Medum {
	display_url: string;
	expanded_url: string;
	id_str: string;
	indices: number[];
	media_key: string;
	media_url_https: string;
	type: string;
	url: string;
	additional_media_info?: AdditionalMediaInfo;
	ext_media_availability: ExtMediaAvailability;
	sizes: Sizes;
	original_info: OriginalInfo;
	video_info: VideoInfo;
	ext_alt_text?: string;
}

export interface AdditionalMediaInfo {
	monetizable: boolean;
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

export interface VideoInfo {
	aspect_ratio: number[];
	duration_millis?: number;
	variants: Variant[];
}

export interface Variant {
	bitrate?: number;
	content_type: string;
	url: string;
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
	type: string;
	url: string;
	additional_media_info?: AdditionalMediaInfo2;
	ext_media_availability: ExtMediaAvailability2;
	sizes: Sizes2;
	original_info: OriginalInfo2;
	video_info: VideoInfo2;
	ext_alt_text?: string;
}

export interface AdditionalMediaInfo2 {
	monetizable: boolean;
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

export interface VideoInfo2 {
	aspect_ratio: number[];
	duration_millis?: number;
	variants: Variant2[];
}

export interface Variant2 {
	bitrate?: number;
	content_type: string;
	url: string;
}

export interface QuickPromoteEligibility {
	eligibility: string;
}

export interface UnifiedCard {
	card_fetch_state: string;
}

export interface PromotedMetadata {
	advertiser_results: AdvertiserResults;
	disclosureType: string;
	experimentValues: any[];
	impressionId: string;
	impressionString: string;
	clickTrackingInfo: ClickTrackingInfo;
}

export interface AdvertiserResults {
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
	professional: Professional2;
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
	url: Url6;
}

export interface Description2 {
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

export interface Professional2 {
	rest_id: string;
	professional_type: string;
	category: Category2[];
}

export interface Category2 {
	id: number;
	name: string;
	icon_name: string;
}

export interface ClickTrackingInfo {
	urlParams: UrlParam[];
}

export interface UrlParam {
	key: string;
	value: string;
}

export interface ClientEventInfo {
	details: Details;
}

export interface Details {
	conversationDetails: ConversationDetails;
	timelinesDetails?: TimelinesDetails;
}

export interface ConversationDetails {
	conversationSection: string;
}

export interface TimelinesDetails {
	controllerData: string;
}

export interface ClientEventInfo2 {
	details: Details2;
}

export interface Details2 {
	conversationDetails: ConversationDetails2;
}

export interface ConversationDetails2 {
	conversationSection: string;
}

export interface ItemContent2 {
	itemType: string;
	__typename: string;
	value: string;
	cursorType: string;
}
