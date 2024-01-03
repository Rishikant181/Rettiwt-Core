/* eslint-disable */

// ENUMS
import { EMediaType } from '../../../enums/Media';

/**
 * Represents the raw data of a single Media.
 *
 * @public
 */
export interface IMedia {
	display_url: string;
	expanded_url: string;
	id_str: string;
	media_url_https: string;
	type: EMediaType;
	url: string;
}

export interface IExtendedMedia extends IMedia {
	media_key: string;
	ext_media_availability: IMediaAvailability;
	additional_media_info?: IAdditionalMediaInfo;
	mediaStats?: IMediaStats;
	video_info?: IVideoInfo;
}

export interface IMediaAvailability {
	status: string;
}

export interface IAdditionalMediaInfo {
	monetizable: boolean;
}

export interface IMediaStats {
	viewCount: number;
}

export interface IMediaAvailability {
	status: string;
}

export interface IVideoInfo {
	aspect_ratio: number[];
	duration_millis: number;
	variants: IVideoVariant[];
}

export interface IVideoVariant {
	bitrate: number;
	content_type: string;
	url: string;
}
