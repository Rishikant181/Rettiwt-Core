// ENUMS
import { EResourceType } from './enums/Resources';

// PAYLOADS
import { Args } from './models/payloads/Args';
import { Query } from './models/params/Query';

/**
 * A class that represents the URL to a single resource on Twitter.
 *
 * @public
 */
export class Url {
	/** The base Twitter API url. */
	private baseUrl: string = 'https://twitter.com';

	/** The fully initialized target resource URL. */
	private fullUrl: string;

	/**
	 * Initializes a URL for fetching the specified resource, using the given parameters.
	 *
	 * @param resourceType The type of resource to fetch.
	 * @param args Any additional user-set parameters.
	 */
	constructor(resourceType: EResourceType, args: Args) {
		/**
		 * Initializing full URL along with additional URL parameters.
		 */
		this.fullUrl = `${this.baseUrl}${resourceType}?${new Query(resourceType, args).toString()}`;
	}

	/**
	 * @returns The string representation of thi Url.
	 */
	public toString(): string {
		return this.fullUrl;
	}
}
