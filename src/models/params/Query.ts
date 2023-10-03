// PAYLOADS
import { Features } from '../payloads/Features';
import { Variables } from '../payloads/Variables';
import { Args } from '../payloads/Args';

// TYPES
import { IQuery } from '../../types/request/params/Query';

// ENUMS
import { EResourceType } from '../../enums/Resources';

/**
 * User set URL query paramters that can be used to customize the format in which data is received.
 *
 * @public
 */
export class Query implements IQuery {
	/** Additional data features that must be fetched. */
	public features: Features;

	/** Variables for fetching data. */
	public variables: Variables;

	/**
	 * Initializes the URL parameters.
	 *
	 * @param resourceType - The type of resource requested.
	 * @param args - Additional user-defined arguments to be sent in the request.
	 */
	public constructor(resourceType: EResourceType, args: Args) {
		this.variables = new Variables(resourceType, args);
		this.features = new Features();
	}

	/**
	 * Converts this object to it's string representation.
	 *
	 * @returns 'this' object's string representation;
	 */
	public toString(): string {
		return `variables=${this.variables.toString()}&features=${this.features.toString()}`;
	}
}
