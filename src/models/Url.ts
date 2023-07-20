// ENUMS
import { EResourceType } from '../enums/Resources';

// TYPES
import { IUrl } from '../types/Url';

// PAYLOADS
import { Args } from './payloads/Args';
import { Query } from './params/Query';

/**
 * A class that represents the URL to a single resource on Twitter.
 *
 * @public
 */
export class Url implements IUrl {
	/** The base Twitter API url. */
	baseUrl: string = 'https://twitter.com';

	/** The fully initialized target resource URL. */
	fullUrl: string;

	/**
	 * Initializes a URL for fetching the specified resource, using the given parameters.
	 *
	 * @param resourceType - The type of resource to fetch.
	 * @param args - Any additional user-set parameters.
	 */
	constructor(resourceType: EResourceType, args: Args) {
		/**
		 * Initializing full URL along with additional URL parameters.
		 */
		this.fullUrl = `${this.baseUrl}${resourceType}?${new Query(
			resourceType,
			args,
		).toString()}`;
	}

	/**
	 * @returns The string representation of thi Url.
	 */
	toString(): string {
		return this.fullUrl;
	}
}
