/**
 * The base URL query, with query parameters as key-value pairs.
 *
 * @public
 */
export class BaseQuery {
	[key: string]: unknown;

	/**
	 * @returns The string representation of 'this' object.
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
