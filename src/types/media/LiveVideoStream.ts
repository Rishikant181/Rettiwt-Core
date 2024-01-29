/* eslint-disable */

/**
 * The raw data received when fetching the URL to a live video stream.
 *
 * @public
 */
export interface Root {
	source: Source;
	sessionId: string;
	chatToken: string;
	lifecycleToken: string;
	shareUrl: string;
}

export interface Source {
	location: string;
	noRedirectPlaybackUrl: string;
	status: string;
	streamType: string;
}
