// PAYLOADS
import { Variables } from '../payloads/Variables';
import { Features } from '../payloads/Features';
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
	/**
	 * Variables for fetching data.
	 */
	variables?: string;

	/**
	 * Additional data features that must be fetched.
	 */
	features?: string;

	/**
	 * Initializes the URL parameters.
	 *
	 * @param resourceType The type of resource requested.
	 * @param args Additional user-defined arguments to be sent in the request.
	 */
	constructor(resourceType: EResourceType, args: Args) {
		this.variables = new Variables(resourceType, args).toString();
		this.features = new Features().toString();
	}

	/**
	 * Converts this object to it's string representation.
	 *
	 * @returns 'this' object's string representation;
	 */
	toString(): string {
		/**
		 * This first filters out all the empty paramters.
		 * Then it formats each parameter key value pair as 'key=value'.
		 * Then it joins the list of all formatted parameters using '&' as a separator.
		 */
		return Object.entries(this)
			.filter(([, value]) => value)
			.map(([key, value]) => `${key}=${value as string}`)
			.join('&');
	}
}
