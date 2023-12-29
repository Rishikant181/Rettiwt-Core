// TYPES
import { IBaseQuery } from '../../types/request/params/BaseQuery';

/**
 * The base URL query.
 *
 * @public
 */
export class BaseQuery implements IBaseQuery {
	/**
	 * Converts this object to it's string representation.
	 *
	 * @returns 'this' object's string representation;
	 */
	public toString(): string {
		return Object.entries(this)
			.map(([k, v]) => `${k}=${(v as object).toString()}`)
			.join('&');
	}
}
