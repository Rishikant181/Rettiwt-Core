// ENUMS
import { ERequestType } from '../enums/Request';
import { EResourceType } from '../enums/Resources';

// TYPES
import { IRequest } from '../types/request/Request';

// MODELS
import { Query } from './params/Query';
import { Args } from './payloads/Args';

/**
 * The request containing all the required url, params, query, payload, etc for a requested resource on Twitter.
 *
 * @public
 */
export class Request implements IRequest {
	/** The base URL of the request. */
	public base: string = 'https://twitter.com';

	/** The endpoint to which the request is to be sent. */
	public endpoint: EResourceType;

	/** The full url of the request. */
	public url: string;

	/** The type of 'this' request. */
	public type: ERequestType;

	/** The payload to be sent in the request. */
	public payload: Query;

	/**
	 * Generates an HTTP request configuration for the requested resource on Twitter.
	 *
	 * @param resourceType - The type of resource requested.
	 * @param args - Additional URL arguments.
	 */
	public constructor(resourceType: EResourceType, args: Args) {
		this.url = `${this.base}${resourceType}`;
		this.endpoint = resourceType;
		this.payload = new Query(resourceType, args);

		// For 'POST' requests
		if (
			resourceType == EResourceType.CREATE_TWEET ||
			resourceType == EResourceType.CREATE_RETWEET ||
			resourceType == EResourceType.FAVORITE_TWEET
		) {
			this.type = ERequestType.POST;
		}
		// For 'GET' requests
		else {
			this.type = ERequestType.GET;
			this.url = `${this.url}?${this.payload.toString()}`;
		}
	}
}
