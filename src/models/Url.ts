// ENUMS
import { EResourceType } from '../enums/Resources';

// TYPES
import { IUrl } from '../types/Url';

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

	/**
	 * Initializes a URL for fetching the specified resource.
	 *
	 * @param resourceType - The type of resource to fetch.
	 */
	constructor(resourceType: EResourceType) {
		this.endpoint = resourceType;
	}

	/**
	 * @returns The string representation of 'this' Url.
	 */
	toString(): string {
		return `${this.baseUrl}${this.endpoint}`;
	}
}
