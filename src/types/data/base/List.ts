/* eslint-disable */

import { IDataResult } from '../composite/DataResult';
import { IUser } from './User';

/**
 * Represents the raw data of a single List.
 *
 * @public
 */
export interface IList {
	created_at: number;
	default_banner_media: IDefaultBannerMedia;
	default_banner_media_results: IDefaultBannerMediaResults;
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

export interface IDefaultBannerMedia {
	media_info: IBannerMediaInfo;
}

export interface IDefaultBannerMediaResults {
	result: IBannerMediaResult;
}

export interface IBannerMediaResult {
	id: string;
	media_key: string;
	media_id: string;
	media_info: IBannerMediaInfo;
}

export interface IBannerMediaInfo {
	original_img_url: string;
	original_img_width: number;
	original_img_height: number;
}
