// MODELS
import { BaseQuery } from './BaseQuery';
import { Features } from '../payloads/Features';
import { Variables } from '../payloads/Variables';
import { DataArgs } from '../args/DataArgs';

// ENUMS
import { EResourceType } from '../../enums/Resources';

/**
 * User set URL query parameters that can be used to customize the format in which data is received.
 *
 * @public
 */
export class DataQuery extends BaseQuery {
	/** Additional data features that must be fetched. */
	public features: Features;

	/** Variables for fetching data. */
	public variables: Variables;

	/**
	 * Initializes the URL query parameters.
	 *
	 * @param resourceType - The type of resource requested.
	 * @param args - Additional user-defined arguments to be sent in the request.
	 */
	public constructor(resourceType: EResourceType, args: DataArgs) {
		super();
		this.variables = new Variables(resourceType, args);
		this.features = new Features();
	}
}
