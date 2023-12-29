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
	public type: ERequestType;
	public base: string = 'twitter.com';
	public endpoint: EResourceType;
	public params?: Query;
	public payload?: NonNullable<unknown>;

	/**
	 * Generates an HTTP request configuration for the requested resource on Twitter.
	 *
	 * @param resourceType - The type of resource requested.
	 * @param args - Additional URL arguments.
	 */
	public constructor(resourceType: EResourceType, args: Args) {
		// For 'POST' requests
		if (
			resourceType == EResourceType.CREATE_TWEET ||
			resourceType == EResourceType.CREATE_RETWEET ||
			resourceType == EResourceType.FAVORITE_TWEET
		) {
			this.type = ERequestType.POST;
			this.payload = new Query(resourceType, args);
		}
		// For 'GET' requests
		else {
			this.type = ERequestType.GET;
			this.params = new Query(resourceType, args);
		}

		this.endpoint = resourceType;
	}
}
