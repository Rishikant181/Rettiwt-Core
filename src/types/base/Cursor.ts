/* eslint-disable */

/**
 * Represents a cursor object used for pagination.
 *
 * @public
 */
export interface ICursor {
	entryType: string;
	__typename: string;
	value: string;
	cursorType: string;
}
