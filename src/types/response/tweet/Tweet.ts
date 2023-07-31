/* eslint-disable */

/**
 * The raw data received when fetching the details of a given tweet.
 *
 * @public
 */
export interface Root {
	data: Data
}

export interface Data {
	tweetResult: TweetResult
}

export interface TweetResult {
	result: Result
}

export interface Result {
	__typename: string
	rest_id: string
	has_birdwatch_notes: boolean
	core: Core
	edit_control: EditControl
	is_translatable: boolean
	views: Views
	source: string
	legacy: Legacy2
	quick_promote_eligibility: QuickPromoteEligibility
}

export interface Core {
	user_results: UserResults
}

export interface UserResults {
	result: Result2
}

export interface Result2 {
	__typename: string
	id: string
	rest_id: string
	affiliates_highlighted_label: AffiliatesHighlightedLabel
	has_graduated_access: boolean
	is_blue_verified: boolean
	profile_image_shape: string
	legacy: Legacy
	verified_phone_status: boolean
}

export interface AffiliatesHighlightedLabel { }

export interface Legacy {
	can_dm: boolean
	can_media_tag: boolean
	created_at: string
	default_profile: boolean
	default_profile_image: boolean
	description: string
	entities: Entities
	fast_followers_count: number
	favourites_count: number
	followers_count: number
	friends_count: number
	has_custom_timelines: boolean
	is_translator: boolean
	listed_count: number
	location: string
	media_count: number
	name: string
	normal_followers_count: number
	pinned_tweet_ids_str: any[]
	possibly_sensitive: boolean
	profile_banner_url: string
	profile_image_url_https: string
	profile_interstitial_type: string
	screen_name: string
	statuses_count: number
	translator_type: string
	url: string
	verified: boolean
	want_retweets: boolean
	withheld_in_countries: any[]
}

export interface Entities {
	description: Description
	url: Url
}

export interface Description {
	urls: any[]
}

export interface Url {
	urls: Url2[]
}

export interface Url2 {
	display_url: string
	expanded_url: string
	url: string
	indices: number[]
}

export interface EditControl {
	edit_tweet_ids: string[]
	editable_until_msecs: string
	is_edit_eligible: boolean
	edits_remaining: string
}

export interface Views {
	count: string
	state: string
}

export interface Legacy2 {
	bookmark_count: number
	bookmarked: boolean
	created_at: string
	conversation_id_str: string
	display_text_range: number[]
	entities: Entities2
	extended_entities: ExtendedEntities
	favorite_count: number
	favorited: boolean
	full_text: string
	is_quote_status: boolean
	lang: string
	possibly_sensitive: boolean
	possibly_sensitive_editable: boolean
	quote_count: number
	reply_count: number
	retweet_count: number
	retweeted: boolean
	user_id_str: string
	id_str: string
}

export interface Entities2 {
	media: Medum[]
	user_mentions: UserMention[]
	urls: any[]
	hashtags: Hashtag[]
	symbols: any[]
}

export interface Medum {
	display_url: string
	expanded_url: string
	id_str: string
	indices: number[]
	media_url_https: string
	type: string
	url: string
	features: Features
	sizes: Sizes
	original_info: OriginalInfo
}

export interface Features { }

export interface Sizes {
	large: Large
	medium: Medium
	small: Small
	thumb: Thumb
}

export interface Large {
	h: number
	w: number
	resize: string
}

export interface Medium {
	h: number
	w: number
	resize: string
}

export interface Small {
	h: number
	w: number
	resize: string
}

export interface Thumb {
	h: number
	w: number
	resize: string
}

export interface OriginalInfo {
	height: number
	width: number
}

export interface UserMention {
	id_str: string
	name: string
	screen_name: string
	indices: number[]
}

export interface Hashtag {
	indices: number[]
	text: string
}

export interface ExtendedEntities {
	media: Medum2[]
}

export interface Medum2 {
	display_url: string
	expanded_url: string
	id_str: string
	indices: number[]
	media_key: string
	media_url_https: string
	type: string
	url: string
	additional_media_info: AdditionalMediaInfo
	mediaStats: MediaStats
	ext_media_availability: ExtMediaAvailability
	features: Features2
	sizes: Sizes2
	original_info: OriginalInfo2
	video_info: VideoInfo
}

export interface AdditionalMediaInfo {
	title: string
	description: string
	monetizable: boolean
}

export interface MediaStats {
	viewCount: number
}

export interface ExtMediaAvailability {
	status: string
}

export interface Features2 { }

export interface Sizes2 {
	large: Large2
	medium: Medium2
	small: Small2
	thumb: Thumb2
}

export interface Large2 {
	h: number
	w: number
	resize: string
}

export interface Medium2 {
	h: number
	w: number
	resize: string
}

export interface Small2 {
	h: number
	w: number
	resize: string
}

export interface Thumb2 {
	h: number
	w: number
	resize: string
}

export interface OriginalInfo2 {
	height: number
	width: number
}

export interface VideoInfo {
	aspect_ratio: number[]
	duration_millis: number
	variants: Variant[]
}

export interface Variant {
	content_type: string
	url: string
	bitrate?: number
}

export interface QuickPromoteEligibility {
	eligibility: string
}
