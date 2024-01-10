// TYPES
import { IError } from './Error';

/**
 * The generic raw data received.
 *
 * @typeParam DataType - The type of data contained in the response, incase of successful request.
 *
 * @public
 */
export interface IResponse<DataType> {
	data: DataType;
	errors?: IError[];
}
