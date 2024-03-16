/* eslint-disable @typescript-eslint/naming-convention */

// PACKAGES
import { AxiosRequestConfig } from 'axios';
import FormData from 'form-data';
import fs from 'fs';

// MODELS
import { FetchArgs } from '../models/args/FetchArgs';
import { PostArgs } from '../models/args/PostArgs';

export function mediaUploadAppend(args: PostArgs): AxiosRequestConfig {
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
}

export function mediaUploadFinalize(args: PostArgs): AxiosRequestConfig {
	return {
		method: 'post',
		url: 'https://upload.twitter.com/i/media/upload.json',
		params: { command: 'FINALIZE', media_id: args.upload?.id },
	};
}

export function mediaUploadInit(args: PostArgs): AxiosRequestConfig {
	return {
		method: 'post',
		url: 'https://upload.twitter.com/i/media/upload.json',
		params: { command: 'INIT', total_bytes: args.upload?.size },
	};
}

export function videoStream(args: FetchArgs): AxiosRequestConfig {
	return {
		method: 'get',
		url: `https://twitter.com/i/api/1.1/live_video_stream/status/${args.id as string}`,
	};
}
