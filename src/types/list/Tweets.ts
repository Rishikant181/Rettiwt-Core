/* eslint-disable */

/**
 * The raw data received when fetching the tweets in a tweet list.
 *
 * @public
 */
export interface Root {
	data: Data;
}

export interface Data {
	list: List;
}

export interface List {
	tweets_timeline: TweetsTimeline;
}

export interface TweetsTimeline {
	timeline: Timeline;
}

export interface Timeline {
	instructions: Instruction[];
	metadata: Metadata2;
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
}

export interface TweetResults {
	result: Result;
}

export interface Result {
	__typename: string;
	rest_id: string;
	core: Core;
	edit_control: EditControl;
	edit_perspective: EditPerspective;
	is_translatable: boolean;
	views: Views;
	source: string;
	legacy: Legacy2;
	quoted_status_result?: QuotedStatusResult;
	previous_counts?: PreviousCounts;
	card?: Card;
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
	url: string;
	verified: boolean;
	want_retweets: boolean;
	withheld_in_countries: any[];
	following?: boolean;
	verified_type?: string;
}

export interface Entities {
	description: Description;
	url: Url;
}

export interface Description {
	urls: any[];
}

export interface Url {
	urls: Url2[];
}

export interface Url2 {
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

export interface EditPerspective {
	favorited: boolean;
	retweeted: boolean;
}

export interface Views {
	state: string;
	count?: string;
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
	place?: Place;
	quoted_status_id_str?: string;
	quoted_status_permalink?: QuotedStatusPermalink;
}

export interface Entities2 {
	media?: Medum[];
	user_mentions: UserMention[];
	urls: Url3[];
	hashtags: Hashtag[];
	symbols: any[];
}

export interface Medum {
	display_url: string;
	expanded_url: string;
	id_str: string;
	indices: number[];
	media_url_https: string;
	source_status_id_str?: string;
	source_user_id_str?: string;
	type: string;
	url: string;
	features: Features;
	sizes: Sizes;
	original_info: OriginalInfo;
}

export interface Features {
	large?: Large;
	medium?: Medium;
	small?: Small;
	orig?: Orig;
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
	focus_rects?: FocusRect[];
}

export interface FocusRect {
	x: number;
	y: number;
	w: number;
	h: number;
}

export interface UserMention {
	id_str: string;
	name: string;
	screen_name: string;
	indices: number[];
}

export interface Url3 {
	display_url: string;
	expanded_url: string;
	url: string;
	indices: number[];
}

export interface Hashtag {
	indices: number[];
	text: string;
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
	ext_media_availability: ExtMediaAvailability;
	features: Features2;
	sizes: Sizes2;
	original_info: OriginalInfo2;
	ext_alt_text?: string;
	additional_media_info?: AdditionalMediaInfo;
	mediaStats?: MediaStats;
	video_info?: VideoInfo;
}

export interface ExtMediaAvailability {
	status: string;
}

export interface Features2 {
	large?: Large3;
	medium?: Medium3;
	small?: Small3;
	orig?: Orig2;
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
	focus_rects?: FocusRect2[];
}

export interface FocusRect2 {
	x: number;
	y: number;
	w: number;
	h: number;
}

export interface AdditionalMediaInfo {
	monetizable: boolean;
	source_user?: SourceUser;
	title?: string;
	description?: string;
	embeddable?: boolean;
	call_to_actions?: CallToActions;
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
	professional?: Professional2;
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
	following?: boolean;
	verified_type?: string;
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

export interface CallToActions {
	visit_site: VisitSite;
}

export interface VisitSite {
	url: string;
}

export interface MediaStats {
	viewCount: number;
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

export interface RetweetedStatusResult {
	result: Result4;
}

export interface Result4 {
	__typename: string;
	rest_id: string;
	core: Core2;
	edit_control: EditControl2;
	edit_perspective: EditPerspective2;
	is_translatable: boolean;
	views: Views2;
	source: string;
	legacy: Legacy5;
}

export interface Core2 {
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
	verified_phone_status: boolean;
	professional?: Professional3;
}

export interface AffiliatesHighlightedLabel3 {
	label?: Label;
}

export interface Label {
	url: Url6;
	badge: Badge;
	description: string;
	userLabelType: string;
	userLabelDisplayType: string;
}

export interface Url6 {
	url: string;
	urlType: string;
}

export interface Badge {
	url: string;
}

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
	verified_type?: string;
}

export interface Entities4 {
	description: Description3;
	url: Url7;
}

export interface Description3 {
	urls: any[];
}

export interface Url7 {
	urls: Url8[];
}

export interface Url8 {
	display_url: string;
	expanded_url: string;
	url: string;
	indices: number[];
}

export interface Professional3 {
	rest_id: string;
	professional_type: string;
	category: Category3[];
}

export interface Category3 {
	id: number;
	name: string;
	icon_name: string;
}

export interface EditControl2 {
	edit_tweet_ids: string[];
	editable_until_msecs: string;
	is_edit_eligible: boolean;
	edits_remaining: string;
}

export interface EditPerspective2 {
	favorited: boolean;
	retweeted: boolean;
}

export interface Views2 {
	count: string;
	state: string;
}

export interface Legacy5 {
	bookmark_count: number;
	bookmarked: boolean;
	created_at: string;
	conversation_id_str: string;
	display_text_range: number[];
	entities: Entities5;
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

export interface Entities5 {
	media: Medum3[];
	user_mentions: UserMention2[];
	urls: Url9[];
	hashtags: Hashtag2[];
	symbols: any[];
}

export interface Medum3 {
	display_url: string;
	expanded_url: string;
	id_str: string;
	indices: number[];
	media_url_https: string;
	type: string;
	url: string;
	features: Features3;
	sizes: Sizes3;
	original_info: OriginalInfo3;
}

export interface Features3 {
	large?: Large5;
	medium?: Medium5;
	small?: Small5;
	orig?: Orig3;
	all?: All3;
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

export interface All3 {
	tags: Tag3[];
}

export interface Tag3 {
	user_id: string;
	name: string;
	screen_name: string;
	type: string;
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
	focus_rects?: FocusRect3[];
}

export interface FocusRect3 {
	x: number;
	y: number;
	w: number;
	h: number;
}

export interface UserMention2 {
	id_str: string;
	name: string;
	screen_name: string;
	indices: number[];
}

export interface Url9 {
	display_url: string;
	expanded_url: string;
	url: string;
	indices: number[];
}

export interface Hashtag2 {
	indices: number[];
	text: string;
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
	ext_media_availability: ExtMediaAvailability2;
	features: Features4;
	sizes: Sizes4;
	original_info: OriginalInfo4;
	additional_media_info?: AdditionalMediaInfo2;
	mediaStats?: MediaStats2;
	video_info?: VideoInfo2;
}

export interface ExtMediaAvailability2 {
	status: string;
}

export interface Features4 {
	large?: Large7;
	medium?: Medium7;
	small?: Small7;
	orig?: Orig4;
	all?: All4;
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

export interface All4 {
	tags: Tag4[];
}

export interface Tag4 {
	user_id: string;
	name: string;
	screen_name: string;
	type: string;
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
	focus_rects?: FocusRect4[];
}

export interface FocusRect4 {
	x: number;
	y: number;
	w: number;
	h: number;
}

export interface AdditionalMediaInfo2 {
	monetizable: boolean;
}

export interface MediaStats2 {
	viewCount: number;
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

export interface Place {
	attributes: Attributes;
	bounding_box: BoundingBox;
	contained_within: any[];
	country: string;
	country_code: string;
	full_name: string;
	name: string;
	id: string;
	place_type: string;
	url: string;
}

export interface Attributes {}

export interface BoundingBox {
	coordinates: number[][][];
	type: string;
}

export interface QuotedStatusPermalink {
	url: string;
	expanded: string;
	display: string;
}

export interface QuotedStatusResult {
	result: Result6;
}

export interface Result6 {
	__typename: string;
	rest_id: string;
	core: Core3;
	edit_control: EditControl3;
	edit_perspective: EditPerspective3;
	is_translatable: boolean;
	views: Views3;
	source: string;
	legacy: Legacy7;
}

export interface Core3 {
	user_results: UserResults4;
}

export interface UserResults4 {
	result: Result7;
}

export interface Result7 {
	__typename: string;
	id: string;
	rest_id: string;
	affiliates_highlighted_label: AffiliatesHighlightedLabel4;
	has_graduated_access: boolean;
	is_blue_verified: boolean;
	profile_image_shape: string;
	legacy: Legacy6;
	professional?: Professional4;
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

export interface Legacy6 {
	can_dm: boolean;
	can_media_tag: boolean;
	created_at: string;
	default_profile: boolean;
	default_profile_image: boolean;
	description: string;
	entities: Entities6;
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

export interface Entities6 {
	description: Description4;
	url?: Url11;
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
	category: Category4[];
}

export interface Category4 {
	id: number;
	name: string;
	icon_name: string;
}

export interface EditControl3 {
	edit_tweet_ids: string[];
	editable_until_msecs: string;
	is_edit_eligible: boolean;
	edits_remaining: string;
}

export interface EditPerspective3 {
	favorited: boolean;
	retweeted: boolean;
}

export interface Views3 {
	count: string;
	state: string;
}

export interface Legacy7 {
	bookmark_count: number;
	bookmarked: boolean;
	created_at: string;
	conversation_id_str: string;
	display_text_range: number[];
	entities: Entities7;
	extended_entities?: ExtendedEntities3;
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

export interface Entities7 {
	media?: Medum5[];
	user_mentions: UserMention3[];
	urls: any[];
	hashtags: any[];
	symbols: any[];
}

export interface Medum5 {
	display_url: string;
	expanded_url: string;
	id_str: string;
	indices: number[];
	media_url_https: string;
	type: string;
	url: string;
	features: Features5;
	sizes: Sizes5;
	original_info: OriginalInfo5;
}

export interface Features5 {
	all?: All5;
	large: Large9;
	medium: Medium9;
	small: Small9;
	orig: Orig5;
}

export interface All5 {
	tags: Tag5[];
}

export interface Tag5 {
	user_id: string;
	name: string;
	screen_name: string;
	type: string;
}

export interface Large9 {
	faces: any[];
}

export interface Medium9 {
	faces: any[];
}

export interface Small9 {
	faces: any[];
}

export interface Orig5 {
	faces: any[];
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

export interface UserMention3 {
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
	ext_media_availability: ExtMediaAvailability3;
	features: Features6;
	sizes: Sizes6;
	original_info: OriginalInfo6;
}

export interface ExtMediaAvailability3 {
	status: string;
}

export interface Features6 {
	all?: All6;
	large: Large11;
	medium: Medium11;
	small: Small11;
	orig: Orig6;
}

export interface All6 {
	tags: Tag6[];
}

export interface Tag6 {
	user_id: string;
	name: string;
	screen_name: string;
	type: string;
}

export interface Large11 {
	faces: any[];
}

export interface Medium11 {
	faces: any[];
}

export interface Small11 {
	faces: any[];
}

export interface Orig6 {
	faces: any[];
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

export interface PreviousCounts {
	bookmark_count: number;
	favorite_count: number;
	quote_count: number;
	reply_count: number;
	retweet_count: number;
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
	result: Result8;
}

export interface Result8 {
	__typename: string;
	id: string;
	rest_id: string;
	affiliates_highlighted_label: AffiliatesHighlightedLabel5;
	has_graduated_access: boolean;
	is_blue_verified: boolean;
	profile_image_shape: string;
	legacy: Legacy9;
	professional?: Professional5;
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
	following?: boolean;
	verified_type?: string;
}

export interface Entities8 {
	description: Description5;
	url: Url13;
}

export interface Description5 {
	urls: any[];
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

export interface Professional5 {
	rest_id: string;
	professional_type: string;
	category: Category5[];
}

export interface Category5 {
	id: number;
	name: string;
	icon_name: string;
}

export interface UnifiedCard {
	card_fetch_state: string;
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
}

export interface Item {
	entryId: string;
	item: Item2;
}

export interface Item2 {
	itemContent: ItemContent2;
	clientEventInfo: ClientEventInfo2;
}

export interface ItemContent2 {
	itemType: string;
	__typename: string;
	tweet_results: TweetResults2;
	tweetDisplayType: string;
}

export interface TweetResults2 {
	result: Result9;
}

export interface Result9 {
	__typename: string;
	rest_id: string;
	core: Core4;
	edit_control: EditControl4;
	edit_perspective: EditPerspective4;
	is_translatable: boolean;
	views: Views4;
	source: string;
	legacy: Legacy11;
	card?: Card2;
	unified_card?: UnifiedCard2;
}

export interface Core4 {
	user_results: UserResults5;
}

export interface UserResults5 {
	result: Result10;
}

export interface Result10 {
	__typename: string;
	id: string;
	rest_id: string;
	affiliates_highlighted_label: AffiliatesHighlightedLabel6;
	has_graduated_access: boolean;
	is_blue_verified: boolean;
	profile_image_shape: string;
	legacy: Legacy10;
	professional?: Professional6;
	verified_phone_status: boolean;
}

export interface AffiliatesHighlightedLabel6 {}

export interface Legacy10 {
	following?: boolean;
	can_dm: boolean;
	can_media_tag: boolean;
	created_at: string;
	default_profile: boolean;
	default_profile_image: boolean;
	description: string;
	entities: Entities9;
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

export interface Entities9 {
	description: Description6;
	url: Url15;
}

export interface Description6 {
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

export interface Professional6 {
	rest_id: string;
	professional_type: string;
	category: Category6[];
}

export interface Category6 {
	id: number;
	name: string;
	icon_name: string;
}

export interface EditControl4 {
	edit_tweet_ids: string[];
	editable_until_msecs: string;
	is_edit_eligible: boolean;
	edits_remaining: string;
}

export interface EditPerspective4 {
	favorited: boolean;
	retweeted: boolean;
}

export interface Views4 {
	count: string;
	state: string;
}

export interface Legacy11 {
	bookmark_count: number;
	bookmarked: boolean;
	created_at: string;
	conversation_id_str: string;
	display_text_range: number[];
	entities: Entities10;
	extended_entities?: ExtendedEntities4;
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

export interface Entities10 {
	media?: Medum7[];
	user_mentions: UserMention4[];
	urls: Url17[];
	hashtags: any[];
	symbols: any[];
}

export interface Medum7 {
	display_url: string;
	expanded_url: string;
	id_str: string;
	indices: number[];
	media_url_https: string;
	type: string;
	url: string;
	features: Features7;
	sizes: Sizes7;
	original_info: OriginalInfo7;
}

export interface Features7 {
	all: All7;
	large: Large13;
	medium: Medium13;
	small: Small13;
	orig: Orig7;
}

export interface All7 {
	tags: Tag7[];
}

export interface Tag7 {
	user_id: string;
	name: string;
	screen_name: string;
	type: string;
}

export interface Large13 {
	faces: Face17[];
}

export interface Face17 {
	x: number;
	y: number;
	h: number;
	w: number;
}

export interface Medium13 {
	faces: Face18[];
}

export interface Face18 {
	x: number;
	y: number;
	h: number;
	w: number;
}

export interface Small13 {
	faces: Face19[];
}

export interface Face19 {
	x: number;
	y: number;
	h: number;
	w: number;
}

export interface Orig7 {
	faces: Face20[];
}

export interface Face20 {
	x: number;
	y: number;
	h: number;
	w: number;
}

export interface Sizes7 {
	large: Large14;
	medium: Medium14;
	small: Small14;
	thumb: Thumb7;
}

export interface Large14 {
	h: number;
	w: number;
	resize: string;
}

export interface Medium14 {
	h: number;
	w: number;
	resize: string;
}

export interface Small14 {
	h: number;
	w: number;
	resize: string;
}

export interface Thumb7 {
	h: number;
	w: number;
	resize: string;
}

export interface OriginalInfo7 {
	height: number;
	width: number;
	focus_rects: FocusRect7[];
}

export interface FocusRect7 {
	x: number;
	y: number;
	w: number;
	h: number;
}

export interface UserMention4 {
	id_str: string;
	name: string;
	screen_name: string;
	indices: number[];
}

export interface Url17 {
	display_url: string;
	expanded_url: string;
	url: string;
	indices: number[];
}

export interface ExtendedEntities4 {
	media: Medum8[];
}

export interface Medum8 {
	display_url: string;
	expanded_url: string;
	id_str: string;
	indices: number[];
	media_key: string;
	media_url_https: string;
	type: string;
	url: string;
	ext_media_availability: ExtMediaAvailability4;
	features: Features8;
	sizes: Sizes8;
	original_info: OriginalInfo8;
}

export interface ExtMediaAvailability4 {
	status: string;
}

export interface Features8 {
	all: All8;
	large: Large15;
	medium: Medium15;
	small: Small15;
	orig: Orig8;
}

export interface All8 {
	tags: Tag8[];
}

export interface Tag8 {
	user_id: string;
	name: string;
	screen_name: string;
	type: string;
}

export interface Large15 {
	faces: Face21[];
}

export interface Face21 {
	x: number;
	y: number;
	h: number;
	w: number;
}

export interface Medium15 {
	faces: Face22[];
}

export interface Face22 {
	x: number;
	y: number;
	h: number;
	w: number;
}

export interface Small15 {
	faces: Face23[];
}

export interface Face23 {
	x: number;
	y: number;
	h: number;
	w: number;
}

export interface Orig8 {
	faces: Face24[];
}

export interface Face24 {
	x: number;
	y: number;
	h: number;
	w: number;
}

export interface Sizes8 {
	large: Large16;
	medium: Medium16;
	small: Small16;
	thumb: Thumb8;
}

export interface Large16 {
	h: number;
	w: number;
	resize: string;
}

export interface Medium16 {
	h: number;
	w: number;
	resize: string;
}

export interface Small16 {
	h: number;
	w: number;
	resize: string;
}

export interface Thumb8 {
	h: number;
	w: number;
	resize: string;
}

export interface OriginalInfo8 {
	height: number;
	width: number;
	focus_rects: FocusRect8[];
}

export interface FocusRect8 {
	x: number;
	y: number;
	w: number;
	h: number;
}

export interface Card2 {
	rest_id: string;
	legacy: Legacy12;
}

export interface Legacy12 {
	binding_values: BindingValue2[];
	card_platform: CardPlatform2;
	name: string;
	url: string;
	user_refs_results: UserRefsResult2[];
}

export interface BindingValue2 {
	key: string;
	value: Value2;
}

export interface Value2 {
	string_value?: string;
	type: string;
	image_value?: ImageValue2;
	scribe_key?: string;
	user_value?: UserValue2;
	image_color_value?: ImageColorValue2;
}

export interface ImageValue2 {
	height: number;
	width: number;
	url: string;
}

export interface UserValue2 {
	id_str: string;
	path: any[];
}

export interface ImageColorValue2 {
	palette: Palette2[];
}

export interface Palette2 {
	rgb: Rgb2;
	percentage: number;
}

export interface Rgb2 {
	blue: number;
	green: number;
	red: number;
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

export interface UserRefsResult2 {
	result: Result11;
}

export interface Result11 {
	__typename: string;
	id: string;
	rest_id: string;
	affiliates_highlighted_label: AffiliatesHighlightedLabel7;
	has_graduated_access: boolean;
	is_blue_verified: boolean;
	profile_image_shape: string;
	legacy: Legacy13;
	verified_phone_status: boolean;
}

export interface AffiliatesHighlightedLabel7 {}

export interface Legacy13 {
	following: boolean;
	can_dm: boolean;
	can_media_tag: boolean;
	created_at: string;
	default_profile: boolean;
	default_profile_image: boolean;
	description: string;
	entities: Entities11;
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

export interface Entities11 {
	description: Description7;
	url: Url18;
}

export interface Description7 {
	urls: any[];
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

export interface UnifiedCard2 {
	card_fetch_state: string;
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
}

export interface Metadata {
	conversationMetadata: ConversationMetadata;
}

export interface ConversationMetadata {
	allTweetIds: string[];
	enableDeduplication: boolean;
}

export interface Metadata2 {
	scribeConfig: ScribeConfig;
}

export interface ScribeConfig {
	page: string;
}
