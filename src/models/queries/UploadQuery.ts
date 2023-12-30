// QUERIES
import { BaseQuery } from './BaseQuery';

// TYPES
import { IUploadQuery } from '../../types/request/queries/UploadQuery';

// TYPES
import { EUploadSteps } from '../../enums/Request';

/**
 * URL query parameters required while uploading to Twitter.
 *
 * @public
 */
export class UploadQuery extends BaseQuery implements IUploadQuery {
	/* eslint-disable @typescript-eslint/naming-convention */
	public command: EUploadSteps;
	public total_bytes: number = 0;
	public media_id: string = '';
	public segment_index: number = 0;
	/* eslint-enable @typescript-eslint/naming-convention */

	/**
	 * Initializes a new query object for uploading a file.
	 *
	 * @param step - The step of the upload process to be executed.
	 */
	public constructor(step: EUploadSteps) {
		super();
		this.command = step;
	}
}
