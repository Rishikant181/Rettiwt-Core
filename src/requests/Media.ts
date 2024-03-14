/* eslint-disable @typescript-eslint/naming-convention */

// PACKAGES
import { AxiosRequestConfig } from 'axios';
import FormData from 'form-data';
import fs from 'fs';

// MODELS
import { FetchArgs } from '../models/args/FetchArgs';
import { EMediaResources } from '../enums/Resources';
import { PostArgs } from '../models/args/PostArgs';

/**
 * The type for the {@link mediaRequests} collection.
 *
 * @public
 */
export type MediaRequestGenerator = {
	[key in keyof typeof EMediaResources]: (args: FetchArgs | PostArgs) => AxiosRequestConfig;
};

/**
 * Collection of request configs related to media.
 *
 * @public
 */
export const mediaRequests: MediaRequestGenerator = {
	MEDIA_UPLOAD_APPEND: (args: PostArgs): AxiosRequestConfig => {
		const data = new FormData();
		data.append(
			'media',
			typeof args.upload?.media == 'string'
				? fs.createReadStream(args.upload.media)
				: Buffer.from(args.upload?.media as ArrayBuffer),
		);
		return {
			method: 'post',
			url: 'https://upload.twitter.com/i/media/upload.json',
			params: { command: 'APPEND', media_id: args.upload?.id, segment_index: 0 },
			data: data,
		};
	},
	MEDIA_UPLOAD_FINALIZE: (args: PostArgs): AxiosRequestConfig => ({
		method: 'post',
		url: 'https://upload.twitter.com/i/media/upload.json',
		params: { command: 'FINALIZE', media_id: args.upload?.id },
	}),
	MEDIA_UPLOAD_INIT: (args: PostArgs): AxiosRequestConfig => ({
		method: 'post',
		url: 'https://upload.twitter.com/i/media/upload.json',
		params: { command: 'INIT', total_bytes: args.upload?.size },
	}),
	VIDEO_STREAM: (args: FetchArgs): AxiosRequestConfig => ({
		method: 'get',
		url: `https://twitter.com/i/api/1.1/live_video_stream/status/${args.id as string}`,
	}),
};
