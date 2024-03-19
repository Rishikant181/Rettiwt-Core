// PACKAGES
import { AxiosRequestConfig } from 'axios';
import FormData from 'form-data';
import fs from 'fs';

export function appendUpload(id: string, media: string | ArrayBuffer): AxiosRequestConfig {
	const data = new FormData();
	data.append('media', typeof media == 'string' ? fs.createReadStream(media) : Buffer.from(media));
	return {
		method: 'post',
		url: 'https://upload.twitter.com/i/media/upload.json',
		params: {
			/* eslint-disable @typescript-eslint/naming-convention */
			command: 'APPEND',
			media_id: id,
			segment_index: 0,
			/* eslint-enable @typescript-eslint/naming-convention */
		},
		paramsSerializer: { encode: encodeURIComponent },
		data: data,
	};
}

export function finalizeUpload(id: string): AxiosRequestConfig {
	return {
		method: 'post',
		url: 'https://upload.twitter.com/i/media/upload.json',
		params: {
			/* eslint-disable @typescript-eslint/naming-convention */
			command: 'FINALIZE',
			media_id: id,
			/* eslint-enable @typescript-eslint/naming-convention */
		},
		paramsSerializer: { encode: encodeURIComponent },
	};
}

export function initializeUpload(size: number): AxiosRequestConfig {
	return {
		method: 'post',
		url: 'https://upload.twitter.com/i/media/upload.json',
		params: {
			/* eslint-disable @typescript-eslint/naming-convention */
			command: 'INIT',
			total_bytes: size,
			/* eslint-enable @typescript-eslint/naming-convention */
		},
		paramsSerializer: { encode: encodeURIComponent },
	};
}

export function videoStream(id: string): AxiosRequestConfig {
	return {
		method: 'get',
		url: `https://twitter.com/i/api/1.1/live_video_stream/status/${id}`,
	};
}
