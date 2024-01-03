// ENUMS
import { EUploadSteps } from '../../../enums/Request';

/**
 * User set query parameters that are used while uploading a media file.
 *
 * @public
 */
export interface IUploadArgs {
	/** The name of the step of the upload process to be executed. */
	step: EUploadSteps;

	/** The size (in bytes) of the media file to be uploaded. */
	size: number;

	/** The medial file to be uploaded. */
	media: string;

	/** The id allocated to the media file to be uploaded. */
	id?: string;
}
