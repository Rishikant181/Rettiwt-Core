/**
 * The base URL query, with query parameters as key-value pairs.
 *
 * @public
 */
export class BaseQuery {
	[key: string]: unknown;

	/**
	 * Converts this object to it's string representation.
	 *
	 * @returns 'this' object's string representation;
	 *
	 * @internal
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
