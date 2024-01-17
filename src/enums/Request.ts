/**
 * The different types of HTTP requests that can be made to Twitter API.
 *
 * @public
 */
export enum ERequestType {
	GET = 'GET',
	POST = 'POST',
}

/**
 * The different steps involved in uploading a media file to Twitter.
 *
 * @public
 */
export enum EUploadSteps {
	INITIALIZE = 'INIT',
	APPEND = 'APPEND',
	FINALIZE = 'FINALIZE',
}
