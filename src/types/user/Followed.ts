/* eslint-disable */

/**
 * The raw data received when fetching the followed timeline of the given user.
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
	metadata: Metadata2;
}

export interface Instruction {
	type: string;
	entries?: Entry[];
	alertType?: string;
	triggerDelayMs?: number;
	displayDurationMs?: number;
	usersResults?: UsersResult[];
	richText?: RichText;
	iconDisplayInfo?: IconDisplayInfo;
	colorConfig?: ColorConfig;
	displayLocation?: string;
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
	items?: Item[];
	metadata?: Metadata;
	displayType?: string;
	value?: string;
	cursorType?: string;
}

export interface ItemContent {
	itemType: string;
	__typename: string;
	tweet_results: TweetResults;
	tweetDisplayType: string;
	promotedMetadata?: PromotedMetadata;
	socialContext?: SocialContext;
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
	note_tweet?: NoteTweet;
	tweet?: Tweet;
	limitedActionResults?: LimitedActionResults;
	card?: Card2;
	previous_counts?: PreviousCounts;
	quoted_status_result?: QuotedStatusResult;
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
	tipjar_settings: TipjarSettings;
	verified_phone_status: boolean;
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
	following?: boolean;
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

export interface TipjarSettings {}

export interface UnmentionData {}

export interface EditControl {
	edit_tweet_ids?: string[];
	editable_until_msecs?: string;
	is_edit_eligible?: boolean;
	edits_remaining?: string;
	initial_tweet_id?: string;
	edit_control_initial?: EditControlInitial;
}

export interface EditControlInitial {
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
	scopes?: Scopes;
	quoted_status_id_str?: string;
	quoted_status_permalink?: QuotedStatusPermalink;
}

export interface Entities2 {
	hashtags: Hashtag[];
	media?: Medum[];
	symbols: any[];
	timestamps: any[];
	urls: Url5[];
	user_mentions: UserMention[];
}

export interface Hashtag {
	indices: number[];
	text: string;
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
	ext_media_availability: ExtMediaAvailability;
	features?: Features;
	sizes: Sizes;
	original_info: OriginalInfo;
	media_results: MediaResults;
	additional_media_info?: AdditionalMediaInfo;
	video_info?: VideoInfo;
	allow_download_status?: AllowDownloadStatus;
	ext_alt_text?: string;
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

export interface AllowDownloadStatus {
	allow_download: boolean;
}

export interface Url5 {
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
	allow_download_status?: AllowDownloadStatus2;
	ext_alt_text?: string;
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
	result: Result4;
}

export interface Result4 {
	media_key: string;
}

export interface AdditionalMediaInfo2 {
	monetizable: boolean;
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

export interface AllowDownloadStatus2 {
	allow_download: boolean;
}

export interface Scopes {
	followers: boolean;
}

export interface QuotedStatusPermalink {
	url: string;
	expanded: string;
	display: string;
}

export interface NoteTweet {
	is_expandable: boolean;
	note_tweet_results: NoteTweetResults;
}

export interface NoteTweetResults {
	result: Result5;
}

export interface Result5 {
	id: string;
	text: string;
	entity_set: EntitySet;
	richtext?: Richtext;
	media?: Media;
}

export interface EntitySet {
	hashtags: Hashtag2[];
	symbols: any[];
	urls: Url6[];
	user_mentions: UserMention2[];
	timestamps?: any[];
}

export interface Hashtag2 {
	indices: number[];
	text: string;
}

export interface Url6 {
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

export interface Richtext {
	richtext_tags: RichtextTag[];
}

export interface RichtextTag {
	from_index: number;
	to_index: number;
	richtext_types: string[];
}

export interface Media {
	inline_media: InlineMedum[];
}

export interface InlineMedum {
	media_id: string;
	index: number;
}

export interface Tweet {
	rest_id: string;
	core: Core2;
	card: Card;
	unmention_data: UnmentionData2;
	edit_control: EditControl2;
	is_translatable: boolean;
	views: Views2;
	source: string;
	legacy: Legacy5;
}

export interface Core2 {
	user_results: UserResults2;
}

export interface UserResults2 {
	result: Result6;
}

export interface Result6 {
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
	url: Url8;
}

export interface Description2 {
	urls: Url7[];
}

export interface Url7 {
	display_url: string;
	expanded_url: string;
	url: string;
	indices: number[];
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

export interface Professional2 {
	rest_id: string;
	professional_type: string;
	category: any[];
}

export interface TipjarSettings2 {}

export interface Card {
	rest_id: string;
	legacy: Legacy4;
}

export interface Legacy4 {
	binding_values: BindingValue[];
	card_platform: CardPlatform;
	name: string;
	url: string;
	user_refs_results: any[];
}

export interface BindingValue {
	key: string;
	value: Value;
}

export interface Value {
	string_value: string;
	type: string;
	scribe_key?: string;
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

export interface Legacy5 {
	bookmark_count: number;
	bookmarked: boolean;
	created_at: string;
	conversation_control: ConversationControl;
	conversation_id_str: string;
	display_text_range: number[];
	entities: Entities4;
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
	result: Result7;
}

export interface Result7 {
	__typename: string;
	legacy: Legacy6;
}

export interface Legacy6 {
	screen_name: string;
}

export interface Entities4 {
	hashtags: any[];
	symbols: any[];
	timestamps: any[];
	urls: Url10[];
	user_mentions: any[];
}

export interface Url10 {
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

export interface Card2 {
	rest_id: string;
	legacy: Legacy7;
}

export interface Legacy7 {
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

export interface PreviousCounts {
	bookmark_count: number;
	favorite_count: number;
	quote_count: number;
	reply_count: number;
	retweet_count: number;
}

export interface QuotedStatusResult {
	result: Result8;
}

export interface Result8 {
	__typename: string;
	rest_id: string;
	core: Core3;
	unmention_data: UnmentionData3;
	edit_control: EditControl3;
	is_translatable: boolean;
	views: Views3;
	source: string;
	note_tweet: NoteTweet2;
	legacy: Legacy9;
}

export interface Core3 {
	user_results: UserResults3;
}

export interface UserResults3 {
	result: Result9;
}

export interface Result9 {
	__typename: string;
	id: string;
	rest_id: string;
	affiliates_highlighted_label: AffiliatesHighlightedLabel3;
	has_graduated_access: boolean;
	is_blue_verified: boolean;
	profile_image_shape: string;
	legacy: Legacy8;
	tipjar_settings: TipjarSettings3;
	verified_phone_status: boolean;
}

export interface AffiliatesHighlightedLabel3 {
	label: Label2;
}

export interface Label2 {
	url: Url11;
	badge: Badge2;
	description: string;
	userLabelType: string;
	userLabelDisplayType: string;
}

export interface Url11 {
	url: string;
	urlType: string;
}

export interface Badge2 {
	url: string;
}

export interface Legacy8 {
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
	verified: boolean;
	verified_type: string;
	want_retweets: boolean;
	withheld_in_countries: any[];
}

export interface Entities5 {
	description: Description3;
}

export interface Description3 {
	urls: any[];
}

export interface TipjarSettings3 {}

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

export interface NoteTweet2 {
	is_expandable: boolean;
	note_tweet_results: NoteTweetResults2;
}

export interface NoteTweetResults2 {
	result: Result10;
}

export interface Result10 {
	id: string;
	text: string;
	entity_set: EntitySet2;
}

export interface EntitySet2 {
	hashtags: any[];
	symbols: any[];
	urls: any[];
	user_mentions: any[];
}

export interface Legacy9 {
	bookmark_count: number;
	bookmarked: boolean;
	created_at: string;
	conversation_id_str: string;
	display_text_range: number[];
	entities: Entities6;
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

export interface Entities6 {
	hashtags: any[];
	symbols: any[];
	timestamps: any[];
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
	result: Result11;
}

export interface Result11 {
	__typename: string;
	id: string;
	rest_id: string;
	affiliates_highlighted_label: AffiliatesHighlightedLabel4;
	has_graduated_access: boolean;
	is_blue_verified: boolean;
	profile_image_shape: string;
	legacy: Legacy10;
	tipjar_settings: TipjarSettings4;
	verified_phone_status: boolean;
	professional?: Professional3;
}

export interface AffiliatesHighlightedLabel4 {}

export interface Legacy10 {
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
	want_retweets: boolean;
	withheld_in_countries: any[];
	verified_type?: string;
}

export interface Entities7 {
	description: Description4;
	url: Url13;
}

export interface Description4 {
	urls: Url12[];
}

export interface Url12 {
	display_url: string;
	expanded_url: string;
	url: string;
	indices: number[];
}

export interface Url13 {
	urls: Url14[];
}

export interface Url14 {
	display_url: string;
	expanded_url: string;
	url: string;
	indices: number[];
}

export interface TipjarSettings4 {}

export interface Professional3 {
	rest_id: string;
	professional_type: string;
	category: Category2[];
}

export interface Category2 {
	id: number;
	name: string;
	icon_name: string;
}

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

export interface SocialContext {
	type: string;
	contextType: string;
	text: string;
	landingUrl: LandingUrl;
}

export interface LandingUrl {
	url: string;
	urlType: string;
}

export interface FeedbackInfo {
	feedbackKeys: string[];
}

export interface ClientEventInfo {
	component: string;
	element?: string;
	details: Details;
}

export interface Details {
	timelinesDetails: TimelinesDetails;
}

export interface TimelinesDetails {
	injectionType: string;
	controllerData: string;
}

export interface Item {
	entryId: string;
	item: Item2;
}

export interface Item2 {
	itemContent: ItemContent2;
	feedbackInfo: FeedbackInfo2;
	clientEventInfo: ClientEventInfo2;
}

export interface ItemContent2 {
	itemType: string;
	__typename: string;
	tweet_results: TweetResults2;
	tweetDisplayType: string;
}

export interface TweetResults2 {
	result: Result12;
}

export interface Result12 {
	__typename: string;
	rest_id: string;
	core: Core4;
	unmention_data: UnmentionData4;
	edit_control: EditControl4;
	is_translatable: boolean;
	views: Views4;
	source: string;
	legacy: Legacy12;
}

export interface Core4 {
	user_results: UserResults4;
}

export interface UserResults4 {
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
	legacy: Legacy11;
	professional?: Professional4;
	tipjar_settings: TipjarSettings5;
	super_follow_eligible?: boolean;
	verified_phone_status: boolean;
}

export interface AffiliatesHighlightedLabel5 {}

export interface Legacy11 {
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
	url?: string;
	verified: boolean;
	verified_type?: string;
	want_retweets: boolean;
	withheld_in_countries: any[];
	following?: boolean;
}

export interface Entities8 {
	description: Description5;
	url?: Url15;
}

export interface Description5 {
	urls: any[];
}

export interface Url15 {
	urls: Url16[];
}

export interface Url16 {
	display_url: string;
	expanded_url: string;
	url: string;
	indices: number[];
}

export interface Professional4 {
	rest_id: string;
	professional_type: string;
	category: Category3[];
}

export interface Category3 {
	id: number;
	name: string;
	icon_name: string;
}

export interface TipjarSettings5 {
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

export interface Legacy12 {
	bookmark_count: number;
	bookmarked: boolean;
	created_at: string;
	conversation_id_str: string;
	display_text_range: number[];
	entities: Entities9;
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
	in_reply_to_screen_name?: string;
	in_reply_to_status_id_str?: string;
	in_reply_to_user_id_str?: string;
}

export interface Entities9 {
	hashtags: any[];
	media?: Medum3[];
	symbols: any[];
	timestamps: any[];
	urls: any[];
	user_mentions: UserMention3[];
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
	ext_media_availability: ExtMediaAvailability3;
	features: Features3;
	sizes: Sizes3;
	original_info: OriginalInfo3;
	allow_download_status: AllowDownloadStatus3;
	media_results: MediaResults3;
	ext_alt_text?: string;
}

export interface ExtMediaAvailability3 {
	status: string;
}

export interface Features3 {
	all: All3;
	large: Large5;
	medium: Medium5;
	small: Small5;
	orig: Orig3;
}

export interface All3 {
	tags: Tag3[];
}

export interface Tag3 {
	user_id: string;
	name: string;
	screen_name: string;
	type: string;
}

export interface Large5 {
	faces: Face9[];
}

export interface Face9 {
	x: number;
	y: number;
	h: number;
	w: number;
}

export interface Medium5 {
	faces: Face10[];
}

export interface Face10 {
	x: number;
	y: number;
	h: number;
	w: number;
}

export interface Small5 {
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

export interface Sizes3 {
	large: Large6;
	medium: Medium6;
	small: Small6;
	thumb: Thumb3;
}

export interface Large6 {
	h: number;
	w: number;
	resize: string;
}

export interface Medium6 {
	h: number;
	w: number;
	resize: string;
}

export interface Small6 {
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

export interface MediaResults3 {
	result: Result14;
}

export interface Result14 {
	media_key: string;
}

export interface UserMention3 {
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
	ext_media_availability: ExtMediaAvailability4;
	features: Features4;
	sizes: Sizes4;
	original_info: OriginalInfo4;
	allow_download_status: AllowDownloadStatus4;
	media_results: MediaResults4;
	ext_alt_text?: string;
}

export interface ExtMediaAvailability4 {
	status: string;
}

export interface Features4 {
	all: All4;
	large: Large7;
	medium: Medium7;
	small: Small7;
	orig: Orig4;
}

export interface All4 {
	tags: Tag4[];
}

export interface Tag4 {
	user_id: string;
	name: string;
	screen_name: string;
	type: string;
}

export interface Large7 {
	faces: Face13[];
}

export interface Face13 {
	x: number;
	y: number;
	h: number;
	w: number;
}

export interface Medium7 {
	faces: Face14[];
}

export interface Face14 {
	x: number;
	y: number;
	h: number;
	w: number;
}

export interface Small7 {
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

export interface Sizes4 {
	large: Large8;
	medium: Medium8;
	small: Small8;
	thumb: Thumb4;
}

export interface Large8 {
	h: number;
	w: number;
	resize: string;
}

export interface Medium8 {
	h: number;
	w: number;
	resize: string;
}

export interface Small8 {
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

export interface MediaResults4 {
	result: Result15;
}

export interface Result15 {
	media_key: string;
}

export interface FeedbackInfo2 {
	feedbackKeys: string[];
}

export interface ClientEventInfo2 {
	component: string;
	element: string;
	details: Details2;
}

export interface Details2 {
	timelinesDetails: TimelinesDetails2;
}

export interface TimelinesDetails2 {
	injectionType: string;
	controllerData: string;
}

export interface Metadata {
	conversationMetadata: ConversationMetadata;
}

export interface ConversationMetadata {
	allTweetIds: string[];
	enableDeduplication: boolean;
}

export interface UsersResult {
	result: Result16;
}

export interface Result16 {
	__typename: string;
	id: string;
	rest_id: string;
	affiliates_highlighted_label: AffiliatesHighlightedLabel6;
	has_graduated_access: boolean;
	is_blue_verified: boolean;
	profile_image_shape: string;
	legacy: Legacy13;
	professional?: Professional5;
	tipjar_settings: TipjarSettings6;
	verified_phone_status: boolean;
}

export interface AffiliatesHighlightedLabel6 {}

export interface Legacy13 {
	following?: boolean;
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
	verified_type?: string;
	want_retweets: boolean;
	withheld_in_countries: any[];
}

export interface Entities10 {
	description: Description6;
	url: Url18;
}

export interface Description6 {
	urls: Url17[];
}

export interface Url17 {
	display_url: string;
	expanded_url: string;
	url: string;
	indices: number[];
}

export interface Url18 {
	urls: Url19[];
}

export interface Url19 {
	display_url: string;
	expanded_url: string;
	url: string;
	indices: number[];
}

export interface Professional5 {
	rest_id: string;
	professional_type: string;
	category: Category4[];
}

export interface Category4 {
	id: number;
	name: string;
	icon_name: string;
}

export interface TipjarSettings6 {}

export interface RichText {
	text: string;
	entities: any[];
}

export interface IconDisplayInfo {
	icon: string;
	tint: string;
}

export interface ColorConfig {
	background: string;
	border: string;
	text: string;
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
	feedbackUrl: string;
	hasUndoAction: boolean;
	childKeys?: string[];
	icon?: string;
	clientEventInfo?: ClientEventInfo3;
}

export interface ClientEventInfo3 {
	action: string;
	element: string;
}

export interface Metadata2 {
	scribeConfig: ScribeConfig;
}

export interface ScribeConfig {
	page: string;
}
