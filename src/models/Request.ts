// PACKAGES
import { AxiosRequestConfig } from 'axios';

// ENUMS
import { ERequestType } from '../enums/Request';
import { ESubdomains, EResourceType } from '../enums/Resources';

// TYPES
import { IRequest } from '../types/request/Request';

// MODELS
import { BaseQuery } from './queries/BaseQuery';
import { DataQuery } from './queries/DataQuery';
import { Args } from './params/Args';

/**
 * The request containing all the required url, params, query, payload, etc for a requested resource on Twitter.
 *
 * @public
 */
export class Request implements IRequest {
	public type: ERequestType;
	public subdomain: ESubdomains;
	public base: string = 'twitter.com';
	public endpoint: EResourceType;
	public params?: BaseQuery;
	public payload?: NonNullable<unknown>;

	/**
	 * Generates an HTTP request configuration for the requested resource on Twitter.
	 *
	 * @param resourceType - The type of resource requested.
	 * @param args - Additional URL arguments.
	 */
	public constructor(resourceType: EResourceType, args: Args) {
		// Setting the request type
		if (
			resourceType == EResourceType.CREATE_TWEET ||
			resourceType == EResourceType.CREATE_RETWEET ||
			resourceType == EResourceType.FAVORITE_TWEET
		) {
			this.type = ERequestType.POST;
			this.payload = new DataQuery(resourceType, args);
		} else {
			this.type = ERequestType.GET;
			this.params = new DataQuery(resourceType, args);
		}

		// Setting the sub-domain from the requested resource
		if (resourceType == EResourceType.MEDIA_UPLOAD) {
			this.subdomain = ESubdomains.UPLOAD;
		} else {
			this.subdomain = ESubdomains.MAIN;
		}

		this.endpoint = resourceType;
	}

	/**
	 * Converts 'this' Request object to it's equivalent AxiosRequstConfig object.
	 *
	 * @returns The AxiosRequestConfig reqpresentation of 'this' Request.
	 */
	public toAxiosRequestConfig(): AxiosRequestConfig {
		return {
			url: this.endpoint,
			method: this.type,
			baseURL: `https://${this.subdomain ? this.subdomain + '.' : ''}${this.base}`,
			params: this.params,
			paramsSerializer: {
				encode: encodeURIComponent,
			},
			data: this.payload,
		};
	}
}
