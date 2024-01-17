/* eslint-disable */

/**
 * The raw data received when fetching the list of tweets matching a given filter.
 *
 * @public
 */
export interface Root {
	data: Data;
}

export interface Data {
	search_by_raw_query: SearchByRawQuery;
}

export interface SearchByRawQuery {
	search_timeline: SearchTimeline;
}

export interface SearchTimeline {
	timeline: Timeline;
}

export interface Timeline {
	instructions: Instruction[];
}

export interface Instruction {
	type: string;
	entries?: Entry[];
	entry_id_to_replace?: string;
	entry?: Entry2;
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
	result: Result;
}

export interface Result {
	__typename: string;
	tweet?: Tweet;
	limitedActionResults?: LimitedActionResults;
	rest_id?: string;
	core?: Core2;
	edit_control?: EditControl2;
	edit_perspective?: EditPerspective2;
	is_translatable?: boolean;
	views?: Views2;
	source?: string;
	legacy?: Legacy5;
	superFollowsReplyUserResult?: SuperFollowsReplyUserResult;
	quoted_status_result?: QuotedStatusResult;
}

export interface Tweet {
	rest_id: string;
	core: Core;
	edit_control: EditControl;
	edit_perspective: EditPerspective;
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
	pinned_tweet_ids_str: any[];
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
	count: string;
	state: string;
}

export interface Legacy2 {
	bookmark_count: number;
	bookmarked: boolean;
	created_at: string;
	conversation_control: ConversationControl;
	conversation_id_str: string;
	display_text_range: number[];
	entities: Entities2;
	favorite_count: number;
	favorited: boolean;
	full_text: string;
	in_reply_to_screen_name: string;
	in_reply_to_status_id_str: string;
	in_reply_to_user_id_str: string;
	is_quote_status: boolean;
	lang: string;
	limited_actions: string;
	quote_count: number;
	reply_count: number;
	retweet_count: number;
	retweeted: boolean;
	user_id_str: string;
	id_str: string;
}

export interface ConversationControl {
	policy: string;
	conversation_owner_results: ConversationOwnerResults;
}

export interface ConversationOwnerResults {
	result: Result3;
}

export interface Result3 {
	__typename: string;
	legacy: Legacy3;
}

export interface Legacy3 {
	screen_name: string;
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

export interface Core2 {
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
	legacy: Legacy4;
	super_follow_eligible: boolean;
	verified_phone_status: boolean;
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

export interface Legacy4 {
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
	verified: boolean;
	want_retweets: boolean;
	withheld_in_countries: any[];
}

export interface Entities3 {
	description: Description2;
}

export interface Description2 {
	urls: any[];
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
	entities: Entities4;
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
}

export interface Entities4 {
	user_mentions: UserMention2[];
	urls: any[];
	hashtags: any[];
	symbols: any[];
}

export interface UserMention2 {
	id_str: string;
	name: string;
	screen_name: string;
	indices: number[];
}

export interface QuotedStatusPermalink {
	url: string;
	expanded: string;
	display: string;
}

export interface SuperFollowsReplyUserResult {
	result: Result5;
}

export interface Result5 {
	__typename: string;
	legacy: Legacy6;
}

export interface Legacy6 {
	screen_name: string;
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
	legacy: Legacy8;
}

export interface Core3 {
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
	legacy: Legacy7;
	super_follow_eligible: boolean;
	verified_phone_status: boolean;
}

export interface AffiliatesHighlightedLabel3 {
	label: Label3;
}

export interface Label3 {
	url: Url3;
	badge: Badge3;
	description: string;
	userLabelType: string;
	userLabelDisplayType: string;
}

export interface Url3 {
	url: string;
	urlType: string;
}

export interface Badge3 {
	url: string;
}

export interface Legacy7 {
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
	pinned_tweet_ids_str: any[];
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
	description: Description3;
}

export interface Description3 {
	urls: any[];
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

export interface Legacy8 {
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
	user_mentions: any[];
	urls: any[];
	hashtags: any[];
	symbols: any[];
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
	controllerData: string;
}

export interface Entry2 {
	entryId: string;
	sortIndex: string;
	content: Content2;
}

export interface Content2 {
	entryType: string;
	__typename: string;
	value: string;
	cursorType: string;
}
