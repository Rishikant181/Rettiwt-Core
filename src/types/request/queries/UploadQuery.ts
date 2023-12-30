// TYPES
import { IBaseQuery } from './BaseQuery';

/**
 * URL query parameters required while uploading to Twitter.
 *
 * @public
 */
export interface IUploadQuery extends IBaseQuery {
	/* eslint-disable @typescript-eslint/naming-convention */

	/** The name of the upload step. */
	command: string;

	/** The total number of bytes in the file to be uploaded. */
	total_bytes: number;

	/** The id alloted to the file to be uploaded. */
	media_id: string;

	/** The index of the segment of the file to be uploaded. */
	segment_index: number;

	/* eslint-enable @typescript-eslint/naming-convention */
}
