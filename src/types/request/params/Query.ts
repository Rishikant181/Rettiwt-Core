/* eslint-disable */

/**
 * User set URL query paramters that can be used to customize the format in which data is received.
 *
 * @public
 */
export interface IQuery {
	/**
	 * Variables for fetching data.
	 */
	variables?: string;

	/**
	 * Additional data features that must be fetched.
	 */
	features?: string;
}
