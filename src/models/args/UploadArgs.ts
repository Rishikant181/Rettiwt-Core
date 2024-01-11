// PACKAGES
import { IsNotEmpty, IsNumberString, validateSync } from 'class-validator';

// ENUMS
import { EUploadSteps } from '../../enums/Request';

// MODELS
import { DataValidationError } from '../errors/DataValidationError';

/**
 * User set query parameters that are used while uploading a media file.
 *
 * @public
 */
export class UploadArgs {
	/** The name of the step of the upload process to be executed. */
	@IsNotEmpty()
	public step: EUploadSteps;

	/** The size (in bytes) of the media file to be uploaded. */
	@IsNotEmpty({ groups: [EUploadSteps.INITIALIZE] })
	public size?: number;

	/** The medial file to be uploaded. */
	@IsNotEmpty({ groups: [EUploadSteps.APPEND] })
	public media?: string;

	/** The id allocated to the media file to be uploaded. */
	@IsNotEmpty({ groups: [EUploadSteps.APPEND, EUploadSteps.FINALIZE] })
	@IsNumberString(undefined, { groups: [EUploadSteps.APPEND, EUploadSteps.FINALIZE] })
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

		// Validating this object
		const validationResult = validateSync(this, { groups: [args.step] });

		// If validation error occured
		if (validationResult.length) {
			throw new DataValidationError(validationResult);
		}
	}
}
