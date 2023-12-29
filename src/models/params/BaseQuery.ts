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
		return (
			Object.entries(this)
				// Converting each key-value pair into 'key=value' format
				.map(([key, value]) => `${key}=${(value as object).toString()}`)
				// Joining all the key-value pairs using '&'
				.join('&')
		);
	}
}
