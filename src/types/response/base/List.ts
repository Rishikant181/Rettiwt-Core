/* eslint-disable */

// TYPES
import { IDataResult } from './DataResult';
import { IUser } from './User';

export interface Root {
	created_at: number;
	default_banner_media: DefaultBannerMedia;
	default_banner_media_results: DefaultBannerMediaResults;
	description: string;
	following: boolean;
	id: string;
	id_str: string;
	is_member: boolean;
	member_count: number;
	mode: string;
	muting: boolean;
	name: string;
	subscriber_count: number;
	user_results: IDataResult<IUser>;
	facepile_urls: string[];
	followers_context: string;
	members_context: string;
}

export interface DefaultBannerMedia {
	media_info: MediaInfo;
}

export interface MediaInfo {
	original_img_url: string;
	original_img_width: number;
	original_img_height: number;
	salient_rect: SalientRect;
}

export interface SalientRect {
	left: number;
	top: number;
	width: number;
	height: number;
}

export interface DefaultBannerMediaResults {
	result: Result;
}

export interface Result {
	id: string;
	media_key: string;
	media_id: string;
	media_info: MediaInfo2;
	__typename: string;
}

export interface MediaInfo2 {
	__typename: string;
	original_img_height: number;
	original_img_width: number;
	original_img_url: string;
	salient_rect: SalientRect2;
}

export interface SalientRect2 {
	height: number;
	left: number;
	top: number;
	width: number;
}
