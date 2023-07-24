/* eslint-disable */

/**
 * The error received from Twitter.
 *
 * @public
 */
export interface Root {
	message: string;
	locations: Location[];
	path: string[];
	extensions: Extensions;
	code: number;
	kind: string;
	name: string;
	source: string;
	tracing: Tracing;
}

export interface Location {
	line: number;
	column: number;
}

export interface Extensions {
	name: string;
	source: string;
	code: number;
	kind: string;
	tracing: Tracing;
}

export interface Tracing {
	trace_id: string;
}
