/* eslint-disable */

// TYPES
import { IDataResult } from './DataResult';
import { IUser } from './User';

/**
 * Represents the raw data of a single timeline user.
 *
 * @public
 */
export interface ITimelineUser {
	user_results: IDataResult<IUser>;
}
