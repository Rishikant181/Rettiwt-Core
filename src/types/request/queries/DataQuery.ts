// TYPES
import { IBaseQuery } from './BaseQuery';
import { IFeatures } from '../payloads/Features';
import { IVariables } from '../payloads/Variables';

/**
 * User set URL query parameters that can be used to customize the format in which data is received.
 *
 * @public
 */
export interface IDataQuery extends IBaseQuery {
	/** Additional data features that must be fetched. */
	features: IFeatures;

	/** Variables for fetching data. */
	variables: IVariables;
}
