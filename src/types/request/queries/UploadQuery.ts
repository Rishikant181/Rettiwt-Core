// TYPES
import { EUploadSteps } from '../../../enums/Request';

// ENUMS
import { IBaseQuery } from './BaseQuery';

/**
 * URL query parameters required while uploading a media file to Twitter.
 *
 * @public
 */
export interface IUploadQuery extends IBaseQuery {
	/* eslint-disable @typescript-eslint/naming-convention */

	/** The name of the upload step. */
	command: EUploadSteps;

	/** The total number of bytes in the media file to be uploaded. */
	total_bytes?: number;

	/** The id alloted to the file to be uploaded. */
	media_id?: string;

	/** The index of the segment of the media file to be uploaded. */
	segment_index?: number;

	/* eslint-enable @typescript-eslint/naming-convention */
}
