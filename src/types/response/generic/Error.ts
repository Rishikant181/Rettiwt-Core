/**
 * The error received from Twitter.
 *
 * @public
 */
export interface IError {
	message: string;
	locations: IErrorLocation[];
	path: string[];
	extensions: IErrorExtensions;
	code: number;
	kind: string;
	name: string;
	source: string;
	tracing: IErrorTrace;
}

export interface IErrorLocation {
	line: number;
	column: number;
}

export interface IErrorExtensions {
	name: string;
	source: string;
	code: number;
	kind: string;
	tracing: IErrorTrace;
}

export interface IErrorTrace {
	/* eslint-disable */
	trace_id: string;
	/* eslint-enable */
}
