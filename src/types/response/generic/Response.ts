/* eslint-disable */

// TYPES
import { Root as IError } from './Error';

/**
 * The generic raw data received.
 *
 * @typeParam DataType - The type of data contained in the response, incase of successful request.
 *
 * @public
 */
export interface Root<DataType> {
	data: DataType;
	errors: IError[];
}
