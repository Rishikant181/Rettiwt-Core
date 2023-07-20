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

	/** The URL endpoint. */
	endpoint: EResourceType;

	/** The url query parameters. */
	query?: Query;

	/**
	 * Initializes a URL for fetching the specified resource, using the given parameters.
	 *
	 * @param resourceType - The type of resource to fetch.
	 * @param args - Any additional user-set parameters.
	 */
	constructor(resourceType: EResourceType, args: Args) {
		this.endpoint = resourceType;
		this.query = new Query(resourceType, args);
	}

	/**
	 * @returns The string representation of 'this' Url.
	 */
	toString(): string {
		if (this.query) {
			return `${this.baseUrl}${this.endpoint}?${this.query.toString()}`;
		}
		else {
			return `${this.baseUrl}${this.endpoint}`;
		}
	}
}
