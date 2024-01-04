/* eslint-disable */

/**
 * The raw data received after finalizing upload of a media file.
 *
 * @public
 */
export interface Root {
	media_id: number;
	media_id_string: string;
	size: number;
	expires_after_secs: number;
	image: Image;
}

export interface Image {
	image_type: string;
	w: number;
	h: number;
}
