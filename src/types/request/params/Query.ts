/* eslint-disable */

// TYPES
import { IFeatures } from '../payloads/Features';
import { IVariables } from '../payloads/Variables';

/**
 * User set URL query paramters that can be used to customize the format in which data is received.
 *
 * @public
 */
export interface IQuery {
	/** Additional data features that must be fetched. */
	features: IFeatures;

	/** Variables for fetching data. */
	variables: IVariables;

	/** Returns the string representation of 'this' data. */
	toString(): string;
}
