// ENUMS
import { ERequestType } from '../enums/Request';
import { ESubdomains, EResourceType } from '../enums/Resources';

// TYPES
import { IRequest } from '../types/request/Request';

// MODELS
import { BaseQuery } from './params/BaseQuery';
import { DataQuery } from './params/DataQuery';
import { Args } from './payloads/Args';

/**
 * The request containing all the required url, params, query, payload, etc for a requested resource on Twitter.
 *
 * @public
 */
export class Request implements IRequest {
	public base: string = 'https://twitter.com';
	public subdomain: ESubdomains;
	public endpoint: EResourceType;
	public url: string;
	public type: ERequestType;
	public payload: BaseQuery;

	/**
	 * Generates an HTTP request configuration for the requested resource on Twitter.
	 *
	 * @param resourceType - The type of resource requested.
	 * @param args - Additional URL arguments.
	 */
	public constructor(resourceType: EResourceType, args: Args) {
		// Determining the subdomain from the resource
		if (resourceType == EResourceType.MEDIA_UPLOAD) {
			this.subdomain = ESubdomains.UPLOAD;
		} else {
			this.subdomain = ESubdomains.MAIN;
		}

		// Setting url, parameters and payloads
		this.url = `${this.subdomain ? this.subdomain + '.' : ''}${this.base}${resourceType}`;
		this.endpoint = resourceType;
		this.payload = new DataQuery(resourceType, args);

		// Determining the request type from the resource
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
