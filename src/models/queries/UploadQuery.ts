// MODELS
import { BaseQuery } from './BaseQuery';
import { UploadArgs } from '../args/PostArgs';

// TYPES
import { EUploadSteps } from '../../enums/Request';

/**
 * URL query parameters required while uploading a media file to Twitter.
 *
 * @public
 */
export class UploadQuery extends BaseQuery {
	/* eslint-disable @typescript-eslint/naming-convention */

	/** The name of the upload step. */
	public command: EUploadSteps;

	/** The total number of bytes in the media file to be uploaded. */
	public total_bytes?: number;

	/** The id alloted to the file to be uploaded. */
	public media_id?: string;

	/** The index of the segment of the media file to be uploaded. */
	public segment_index?: number;

	/* eslint-enable @typescript-eslint/naming-convention */

	/**
	 * @param step - The step of the upload process to be executed.
	 */
	public constructor(args: UploadArgs) {
		super();
		this.command = args.step;

		// Initializing based on the upload sted
		if (args.step == EUploadSteps.INITIALIZE) {
			this.total_bytes = args.size;
		} else if (args.step == EUploadSteps.APPEND) {
			this.media_id = args.id;
			this.segment_index = 0;
		} else {
			this.media_id = args.id;
		}
	}
}
