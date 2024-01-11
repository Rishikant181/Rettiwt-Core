// PACKAGES
import { AxiosRequestConfig } from 'axios';

// ENUMS
import { ERequestType, EUploadSteps } from '../enums/Request';
import { ESubdomains, EResourceType } from '../enums/Resources';

// MODELS
import { BaseQuery } from './queries/BaseQuery';
import { DataQuery } from './queries/DataQuery';
import { UploadQuery } from './queries/UploadQuery';
import { DataArgs } from './args/DataArgs';
import { UploadArgs } from './args/UploadArgs';

/**
 * The request containing all the required url, params, query, payload, etc for a requested resource on Twitter.
 *
 * @public
 */
export class Request {
	/** The type of request to be made. */
	public type: ERequestType;

	/** The subdomain of the URL to which the request is targeted. */
	public subdomain: ESubdomains;

	/** The base URL to which the request is targeted. */
	public base: string = 'twitter.com';

	/** The endpoint of the URL to which the request is targeted. */
	public endpoint: string;

	/** The query parameters to be sent in the request. */
	public params?: BaseQuery;

	/**
	 * The payload to be sent in the request.
	 *
	 * @remarks This is applicable only for {@link ERequestType.POST} requests.
	 */
	public payload?: NonNullable<unknown>;

	/**
	 * Generates an HTTP request configuration for the requested resource on Twitter.
	 *
	 * @param resourceType - The type of resource requested.
	 * @param args - Additional URL arguments.
	 */
	public constructor(resourceType: EResourceType, args: DataArgs | UploadArgs) {
		// Converting JSON args to object
		if (resourceType == EResourceType.MEDIA_UPLOAD) {
			args = new UploadArgs(args as UploadArgs);
		} else {
			args = new DataArgs(resourceType, args as DataArgs);
		}

		// Setting request type
		if (
			resourceType == EResourceType.CREATE_TWEET ||
			resourceType == EResourceType.CREATE_RETWEET ||
			resourceType == EResourceType.FAVORITE_TWEET
		) {
			this.type = ERequestType.POST;
		} else {
			this.type = ERequestType.GET;
		}

		// Setting request subdomain
		if (resourceType == EResourceType.MEDIA_UPLOAD) {
			this.subdomain = ESubdomains.UPLOAD;
		} else {
			this.subdomain = ESubdomains.MAIN;
		}

		// Setting request endpoint
		if (resourceType == EResourceType.VIDEO_STREAM) {
			this.endpoint = `${resourceType}/${args.id as string}`;
		} else {
			this.endpoint = resourceType;
		}

		// Setting request params and payload
		if (
			resourceType == EResourceType.CREATE_TWEET ||
			resourceType == EResourceType.CREATE_RETWEET ||
			resourceType == EResourceType.FAVORITE_TWEET
		) {
			this.payload = new DataQuery(resourceType, args as DataArgs);
		} else if (resourceType == EResourceType.MEDIA_UPLOAD && (args as UploadArgs).step == EUploadSteps.APPEND) {
			this.params = new UploadQuery(args as UploadArgs);
			this.payload = { media: (args as UploadArgs).media };
		} else if (resourceType == EResourceType.MEDIA_UPLOAD) {
			this.params = new UploadQuery(args as UploadArgs);
		} else if (resourceType == EResourceType.VIDEO_STREAM) {
			this.params = undefined;
		} else {
			this.params = new DataQuery(resourceType, args as DataArgs);
		}
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
