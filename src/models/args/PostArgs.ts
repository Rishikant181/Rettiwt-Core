// PACKAGES
import {
	ArrayMaxSize,
	IsArray,
	IsNotEmpty,
	IsNumberString,
	IsObject,
	IsOptional,
	IsString,
	MaxLength,
	validateSync,
} from 'class-validator';

// ENUMS
import { EResourceType } from '../../enums/Resources';
import { EUploadSteps } from '../../enums/Request';

// MODELS
import { DataValidationError } from '../errors/DataValidationError';

/**
 * User set query parameters that are used to specify the data that is to be posted.
 *
 * @public
 */
export class PostArgs {
	/** The id of the target resource. */
	@IsOptional()
	@IsNotEmpty({ groups: [EResourceType.FAVORITE_TWEET, EResourceType.CREATE_RETWEET] })
	@IsNumberString(undefined, { groups: [EResourceType.FAVORITE_TWEET, EResourceType.CREATE_RETWEET] })
	public id?: string;

	/** The tweet that is to be posted. */
	@IsOptional()
	@IsNotEmpty({ groups: [EResourceType.CREATE_TWEET] })
	@IsObject({ groups: [EResourceType.CREATE_TWEET] })
	public tweet?: TweetArgs;

	/** The media file to be uploaded. */
	@IsOptional()
	@IsNotEmpty({ groups: [EResourceType.MEDIA_UPLOAD] })
	@IsObject({ groups: [EResourceType.MEDIA_UPLOAD] })
	public upload?: UploadArgs;

	public constructor(resourceType: EResourceType, args: PostArgs) {
		this.id = args.id;
		this.tweet = args.tweet ? new TweetArgs(args.tweet) : undefined;
		this.upload = args.upload ? new UploadArgs(args.upload) : undefined;

		// Validating this object
		const validationResult = validateSync(this, { groups: [resourceType] });

		// If valiation error occured
		if (validationResult.length) {
			throw new DataValidationError(validationResult);
		}
	}
}

/**
 * User set query parameters that are used to specify the tweet that is to be posted.
 *
 * @public
 */
export class TweetArgs {
	/**
	 * The text for the tweet to be created.
	 *
	 * @remarks
	 * Length of the tweet must be \<= 280 characters.
	 */
	@IsNotEmpty()
	@IsString()
	@MaxLength(280)
	public text: string;

	/**
	 * The list of media to be uploaded.
	 *
	 * @remarks
	 * - The media first needs to be uploaded using the {@link EResourceType.MEDIA_UPLOAD} resource.
	 * - After uploading, the returned id(s) can be used to reference the media here.
	 */
	@IsOptional()
	@IsArray()
	@IsObject({ each: true })
	public media?: MediaArgs[];

	/**
	 * Initializes a new TweetArgs object using the given arguments.
	 *
	 * @param args - The additional user-defined arguments for posting the resource.
	 */
	public constructor(args: TweetArgs) {
		this.text = args.text;
		this.media = args.media ? args.media.map((item) => new MediaArgs(item)) : undefined;

		// Validating this object
		const validationResult = validateSync(this);

		// If valiation error occured
		if (validationResult.length) {
			throw new DataValidationError(validationResult);
		}
	}
}

/**
 * User set query parameters that are used to specify the details of the media to be uploaded.
 *
 * @public
 */
export class MediaArgs {
	/** The id of the media to upload. */
	@IsNotEmpty()
	@IsNumberString()
	public id: string;

	/**
	 * The list of id of the users tagged in the media.
	 *
	 * @remarks
	 * Maximum number of users that can be tagged is 10.
	 */
	@IsOptional()
	@IsArray()
	@ArrayMaxSize(10)
	@IsNumberString(undefined, { each: true })
	public tags?: string[];

	/**
	 * Initializes a new MediaArgs object using the given arguments.
	 *
	 * @param args - The media arguments specifying the media.
	 */
	public constructor(args: MediaArgs) {
		this.id = args.id;
		this.tags = args.tags ?? [];

		// Validating this object
		const validationResult = validateSync(this);

		// If validation error occured
		if (validationResult.length) {
			throw new DataValidationError(validationResult);
		}
	}
}

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
	@IsOptional()
	@IsNotEmpty({ groups: [EUploadSteps.INITIALIZE] })
	public size?: number;

	/** The media file to be uploaded. */
	@IsOptional()
	@IsNotEmpty({ groups: [EUploadSteps.APPEND] })
	public media?: string;

	/** The id allocated to the media file to be uploaded. */
	@IsOptional()
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