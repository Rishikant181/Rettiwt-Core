/**
 * User set query parameters that are used to specify the details of the media to be uploaded.
 *
 * @public
 */
export interface IMediaArgs {
	/** The id of the media to upload. */
	id: string;

	/** The list of id of the users tagged in the media. */
	tags?: string[];
}
