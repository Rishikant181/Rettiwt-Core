// TYPES
import { IUploadArgs } from '../../types/request/params/UploadArgs';

// ENUMS
import { EUploadSteps } from '../../enums/Request';

/**
 * User set query parameters that are used while uploading a media file.
 *
 * @public
 */
export class UploadArgs implements IUploadArgs {
	public step: EUploadSteps;
	public size: number;
	public media: string;
	public id?: string;

	/**
	 * Initializes a new UploadArgs object using the given arguments.
	 *
	 * @param args - The upload arguments for uploading the media file.
	 */
	public constructor(args: UploadArgs) {
		this.step = args.step;
		this.size = args.size;
		this.media = args.media;
		this.id = args.id;
	}
}
