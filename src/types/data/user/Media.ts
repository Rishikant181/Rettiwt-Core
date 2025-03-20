/* eslint-disable */

/**
 * The raw data received when fetching the uploaded media of the given user.
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
	timeline_v2: TimelineV2;
}

export interface TimelineV2 {
	timeline: Timeline;
}

export interface Timeline {
	instructions: Instruction[];
	metadata: Metadata;
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
	items?: Item[];
	displayType?: string;
	clientEventInfo?: ClientEventInfo;
	value?: string;
	cursorType?: string;
}

export interface Item {
	entryId: string;
	item: Item2;
}

export interface Item2 {
	itemContent: ItemContent;
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
	rest_id?: string;
	core?: Core;
	unmention_data?: UnmentionData;
	edit_control?: EditControl;
	is_translatable?: boolean;
	views?: Views;
	source?: string;
	legacy?: Legacy2;
	birdwatch_pivot?: BirdwatchPivot;
	tweet?: Tweet;
	limitedActionResults?: LimitedActionResults;
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
	in_reply_to_screen_name?: string;
	in_reply_to_status_id_str?: string;
	in_reply_to_user_id_str?: string;
}

export interface Entities2 {
	hashtags: any[];
	media: Medum[];
	symbols: any[];
	timestamps: any[];
	urls: any[];
	user_mentions: UserMention[];
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
	source_status_id_str?: string;
	source_user_id_str?: string;
	additional_media_info?: AdditionalMediaInfo;
	allow_download_status?: AllowDownloadStatus;
	video_info?: VideoInfo;
}

export interface ExtMediaAvailability {
	status: string;
}

export interface Features {
	large: Large;
	medium: Medium;
	small: Small;
	orig: Orig;
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
	result: Result4;
}

export interface Result4 {
	media_key: string;
}

export interface AdditionalMediaInfo {
	monetizable: boolean;
	source_user: SourceUser;
	title?: string;
	description?: string;
	embeddable?: boolean;
}

export interface SourceUser {
	user_results: UserResults2;
}

export interface UserResults2 {
	result: Result5;
}

export interface Result5 {
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
	super_follow_eligible?: boolean;
}

export interface AffiliatesHighlightedLabel2 {
	label: Label2;
}

export interface Label2 {
	url: Url2;
	badge: Badge2;
	description: string;
	userLabelType: string;
	userLabelDisplayType: string;
}

export interface Url2 {
	url: string;
	urlType: string;
}

export interface Badge2 {
	url: string;
}

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
	verified_type?: string;
}

export interface Entities3 {
	description: Description2;
	url: Url4;
}

export interface Description2 {
	urls: Url3[];
}

export interface Url3 {
	display_url: string;
	expanded_url: string;
	url: string;
	indices: number[];
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
	category: Category[];
}

export interface Category {
	id: number;
	name: string;
	icon_name: string;
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
	source_status_id_str?: string;
	source_user_id_str?: string;
	additional_media_info?: AdditionalMediaInfo2;
	allow_download_status?: AllowDownloadStatus2;
	video_info?: VideoInfo2;
}

export interface ExtMediaAvailability2 {
	status: string;
}

export interface Features2 {
	large: Large3;
	medium: Medium3;
	small: Small3;
	orig: Orig2;
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
	result: Result6;
}

export interface Result6 {
	media_key: string;
}

export interface AdditionalMediaInfo2 {
	monetizable: boolean;
	source_user: SourceUser2;
	title?: string;
	description?: string;
	embeddable?: boolean;
}

export interface SourceUser2 {
	user_results: UserResults3;
}

export interface UserResults3 {
	result: Result7;
}

export interface Result7 {
	__typename: string;
	id: string;
	rest_id: string;
	affiliates_highlighted_label: AffiliatesHighlightedLabel3;
	has_graduated_access: boolean;
	is_blue_verified: boolean;
	profile_image_shape: string;
	legacy: Legacy4;
	professional?: Professional3;
	verified_phone_status: boolean;
	super_follow_eligible?: boolean;
}

export interface AffiliatesHighlightedLabel3 {
	label: Label3;
}

export interface Label3 {
	url: Url6;
	badge: Badge3;
	description: string;
	userLabelType: string;
	userLabelDisplayType: string;
}

export interface Url6 {
	url: string;
	urlType: string;
}

export interface Badge3 {
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
	url: Url8;
}

export interface Description3 {
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

export interface BirdwatchPivot {
	callToAction: CallToAction;
	destinationUrl: string;
	footer: Footer;
	note: Note;
	subtitle: Subtitle;
	title: string;
	shorttitle: string;
	visualStyle: string;
	iconType: string;
}

export interface CallToAction {
	prompt: string;
	title: string;
	destinationUrl: string;
}

export interface Footer {
	text: string;
	entities: Entity[];
}

export interface Entity {
	fromIndex: number;
	toIndex: number;
	ref: Ref;
}

export interface Ref {
	type: string;
	url: string;
	urlType: string;
}

export interface Note {
	rest_id: string;
}

export interface Subtitle {
	text: string;
	entities: Entity2[];
}

export interface Entity2 {
	fromIndex: number;
	toIndex: number;
	ref: Ref2;
}

export interface Ref2 {
	type: string;
	url: string;
	urlType: string;
}

export interface Tweet {
	rest_id: string;
	core: Core2;
	unmention_data: UnmentionData2;
	edit_control: EditControl2;
	is_translatable: boolean;
	views: Views2;
	source: string;
	author_community_relationship: AuthorCommunityRelationship;
	legacy: Legacy10;
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
	professional: Professional4;
	super_follow_eligible: boolean;
	verified_phone_status: boolean;
}

export interface AffiliatesHighlightedLabel4 {
	label: Label4;
}

export interface Label4 {
	url: Url10;
	badge: Badge4;
	description: string;
	userLabelType: string;
	userLabelDisplayType: string;
}

export interface Url10 {
	url: string;
	urlType: string;
}

export interface Badge4 {
	url: string;
}

export interface Legacy5 {
	following: boolean;
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
	verified: boolean;
	want_retweets: boolean;
	withheld_in_countries: any[];
}

export interface Entities5 {
	description: Description4;
}

export interface Description4 {
	urls: any[];
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

export interface AuthorCommunityRelationship {
	community_results: CommunityResults;
	role: string;
	user_results: UserResults5;
}

export interface CommunityResults {
	result: Result9;
}

export interface Result9 {
	__typename: string;
	id_str: string;
	name: string;
	description: string;
	created_at: number;
	question: string;
	search_tags: string[];
	is_nsfw: boolean;
	actions: Actions;
	admin_results: AdminResults;
	creator_results: CreatorResults;
	invites_result: InvitesResult;
	join_policy: string;
	invites_policy: string;
	is_pinned: boolean;
	members_facepile_results: MembersFacepileResult[];
	moderator_count: number;
	member_count: number;
	role: string;
	rules: Rule[];
	custom_banner_media: CustomBannerMedia;
	default_banner_media: DefaultBannerMedia;
	viewer_relationship: ViewerRelationship;
	join_requests_result: JoinRequestsResult;
}

export interface Actions {
	delete_action_result: DeleteActionResult;
	join_action_result: JoinActionResult;
	leave_action_result: LeaveActionResult;
	pin_action_result: PinActionResult;
}

export interface DeleteActionResult {
	__typename: string;
	reason: string;
}

export interface JoinActionResult {
	__typename: string;
}

export interface LeaveActionResult {
	__typename: string;
	reason: string;
	message: string;
}

export interface PinActionResult {
	__typename: string;
}

export interface AdminResults {
	result: Result10;
}

export interface Result10 {
	__typename: string;
	id: string;
	rest_id: string;
	affiliates_highlighted_label: AffiliatesHighlightedLabel5;
	has_graduated_access: boolean;
	is_blue_verified: boolean;
	profile_image_shape: string;
	legacy: Legacy6;
	verified_phone_status: boolean;
}

export interface AffiliatesHighlightedLabel5 {
	label: Label5;
}

export interface Label5 {
	url: Url11;
	badge: Badge5;
	description: string;
	userLabelType: string;
	userLabelDisplayType: string;
}

export interface Url11 {
	url: string;
	urlType: string;
}

export interface Badge5 {
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
	url: string;
	verified: boolean;
	want_retweets: boolean;
	withheld_in_countries: any[];
}

export interface Entities6 {
	description: Description5;
	url: Url12;
}

export interface Description5 {
	urls: any[];
}

export interface Url12 {
	urls: Url13[];
}

export interface Url13 {
	display_url: string;
	expanded_url: string;
	url: string;
	indices: number[];
}

export interface CreatorResults {
	result: Result11;
}

export interface Result11 {
	__typename: string;
	id: string;
	rest_id: string;
	affiliates_highlighted_label: AffiliatesHighlightedLabel6;
	has_graduated_access: boolean;
	is_blue_verified: boolean;
	profile_image_shape: string;
	legacy: Legacy7;
	verified_phone_status: boolean;
}

export interface AffiliatesHighlightedLabel6 {
	label: Label6;
}

export interface Label6 {
	url: Url14;
	badge: Badge6;
	description: string;
	userLabelType: string;
	userLabelDisplayType: string;
}

export interface Url14 {
	url: string;
	urlType: string;
}

export interface Badge6 {
	url: string;
}

export interface Legacy7 {
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
}

export interface Entities7 {
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

export interface InvitesResult {
	__typename: string;
	reason: string;
	message: string;
}

export interface MembersFacepileResult {
	result: Result12;
}

export interface Result12 {
	__typename: string;
	id: string;
	rest_id: string;
	affiliates_highlighted_label: AffiliatesHighlightedLabel7;
	has_graduated_access: boolean;
	is_blue_verified: boolean;
	profile_image_shape: string;
	legacy: Legacy8;
	verified_phone_status: boolean;
	professional?: Professional5;
}

export interface AffiliatesHighlightedLabel7 {
	label?: Label7;
}

export interface Label7 {
	url: Url17;
	badge: Badge7;
	description: string;
	userLabelType: string;
	userLabelDisplayType: string;
}

export interface Url17 {
	url: string;
	urlType: string;
}

export interface Badge7 {
	url: string;
}

export interface Legacy8 {
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
	profile_banner_url?: string;
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

export interface Entities8 {
	description: Description7;
	url?: Url18;
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

export interface Rule {
	rest_id: string;
	name: string;
	description?: string;
}

export interface CustomBannerMedia {
	media_info: MediaInfo;
}

export interface MediaInfo {
	color_info: ColorInfo;
	original_img_url: string;
	original_img_width: number;
	original_img_height: number;
	salient_rect: SalientRect;
}

export interface ColorInfo {
	palette: Palette[];
}

export interface Palette {
	rgb: Rgb;
	percentage: number;
}

export interface Rgb {
	red: number;
	green: number;
	blue: number;
}

export interface SalientRect {
	left: number;
	top: number;
	width: number;
	height: number;
}

export interface DefaultBannerMedia {
	media_info: MediaInfo2;
}

export interface MediaInfo2 {
	color_info: ColorInfo2;
	original_img_url: string;
	original_img_width: number;
	original_img_height: number;
}

export interface ColorInfo2 {
	palette: Palette2[];
}

export interface Palette2 {
	rgb: Rgb2;
	percentage: number;
}

export interface Rgb2 {
	red: number;
	green: number;
	blue: number;
}

export interface ViewerRelationship {
	moderation_state: ModerationState;
}

export interface ModerationState {
	__typename: string;
}

export interface JoinRequestsResult {
	__typename: string;
}

export interface UserResults5 {
	result: Result13;
}

export interface Result13 {
	__typename: string;
	id: string;
	rest_id: string;
	affiliates_highlighted_label: AffiliatesHighlightedLabel8;
	has_graduated_access: boolean;
	is_blue_verified: boolean;
	profile_image_shape: string;
	legacy: Legacy9;
	professional: Professional6;
	super_follow_eligible: boolean;
	verified_phone_status: boolean;
}

export interface AffiliatesHighlightedLabel8 {
	label: Label8;
}

export interface Label8 {
	url: Url20;
	badge: Badge8;
	description: string;
	userLabelType: string;
	userLabelDisplayType: string;
}

export interface Url20 {
	url: string;
	urlType: string;
}

export interface Badge8 {
	url: string;
}

export interface Legacy9 {
	following: boolean;
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
	verified: boolean;
	want_retweets: boolean;
	withheld_in_countries: any[];
}

export interface Entities9 {
	description: Description8;
}

export interface Description8 {
	urls: any[];
}

export interface Professional6 {
	rest_id: string;
	professional_type: string;
	category: any[];
}

export interface Legacy10 {
	bookmark_count: number;
	bookmarked: boolean;
	created_at: string;
	conversation_id_str: string;
	display_text_range: number[];
	entities: Entities10;
	extended_entities: ExtendedEntities2;
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
	user_id_str: string;
	id_str: string;
}

export interface Entities10 {
	hashtags: any[];
	media: Medum3[];
	symbols: any[];
	timestamps: any[];
	urls: any[];
	user_mentions: any[];
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
}

export interface ExtMediaAvailability3 {
	status: string;
}

export interface Features3 {
	large: Large5;
	medium: Medium5;
	small: Small5;
	orig: Orig3;
}

export interface Large5 {
	faces: any[];
}

export interface Medium5 {
	faces: any[];
}

export interface Small5 {
	faces: any[];
}

export interface Orig3 {
	faces: any[];
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
}

export interface ExtMediaAvailability4 {
	status: string;
}

export interface Features4 {
	large: Large7;
	medium: Medium7;
	small: Small7;
	orig: Orig4;
}

export interface Large7 {
	faces: any[];
}

export interface Medium7 {
	faces: any[];
}

export interface Small7 {
	faces: any[];
}

export interface Orig4 {
	faces: any[];
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

export interface LimitedActionResults {
	limited_actions: LimitedAction[];
}

export interface LimitedAction {
	action: string;
	prompt?: Prompt;
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

export interface ClientEventInfo {
	component: string;
}

export interface Metadata {
	scribeConfig: ScribeConfig;
}

export interface ScribeConfig {
	page: string;
}
