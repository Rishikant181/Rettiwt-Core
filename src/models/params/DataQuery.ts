// PARAMS
import { BaseQuery } from './BaseQuery';

// PAYLOADS
import { Features } from '../payloads/Features';
import { Variables } from '../payloads/Variables';
import { Args } from '../payloads/Args';

// TYPES
import { IDataQuery } from '../../types/request/params/DataQuery';

// ENUMS
import { EResourceType } from '../../enums/Resources';

/**
 * User set URL query paramters that can be used to customize the format in which data is received.
 *
 * @public
 */
export class DataQuery extends BaseQuery implements IDataQuery {
	public features: Features;
	public variables: Variables;

	/**
	 * Initializes the URL query parameters.
	 *
	 * @param resourceType - The type of resource requested.
	 * @param args - Additional user-defined arguments to be sent in the request.
	 */
	public constructor(resourceType: EResourceType, args: Args) {
		super();
		this.variables = new Variables(resourceType, args);
		this.features = new Features();
	}
}
