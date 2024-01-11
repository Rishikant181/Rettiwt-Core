// PACKAGES
import { ArrayMaxSize, IsArray, IsNotEmpty, IsNumberString, IsObject, MaxLength, validateSync } from 'class-validator';

// ENUMS
import { EResourceType } from '../../enums/Resources';

// MODELS
import { DataValidationError } from '../errors/DataValidationError';

/**
 * User set query parameters that are used to specify the data that is to be posted.
 *
 * @public
 */
export class PostArgs {
	/** The id the of target resource. */
	@IsNotEmpty({ groups: [EResourceType.FAVORITE_TWEET, EResourceType.CREATE_RETWEET] })
	@IsNumberString()
	public id?: string;

	/** The tweet that is to be posted. */
	@IsNotEmpty({ groups: [EResourceType.CREATE_TWEET] })
	@IsObject()
	public tweet?: TweetArgs;

	public constructor(resourceType: EResourceType, args: PostArgs) {
		this.id = args.id;
		this.tweet = args.tweet ? new TweetArgs(resourceType, args.tweet) : undefined;

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
	@IsNotEmpty({ groups: [EResourceType.CREATE_TWEET] })
	@MaxLength(280, { groups: [EResourceType.CREATE_TWEET] })
	public text: string;

	/**
	 * The list of media to be uploaded.
	 *
	 * @remarks
	 * - The media first needs to be uploaded using the {@link EResourceType.MEDIA_UPLOAD} resource.
	 * - After uploading, the returned id(s) can be used to reference the media here.
	 */
	@IsArray({ groups: [EResourceType.CREATE_TWEET] })
	public media?: MediaArgs[];

	/**
	 * Initializes a new TweetArgs object using the given arguments.
	 *
	 * @param resourceType - The type of resource that is to be posted.
	 * @param args - The additional user-defined arguments for posting the resource.
	 */
	public constructor(resourceType: EResourceType, args: TweetArgs) {
		this.text = args.text;
		this.media = args.media ? args.media.map((item) => new MediaArgs(item)) : undefined;

		// Validating this object
		const validationResult = validateSync(this, { groups: [resourceType] });

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
