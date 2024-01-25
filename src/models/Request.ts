// PACKAGES
import { AxiosHeaders, AxiosRequestConfig } from 'axios';
import FormData from 'form-data';
import { createReadStream } from 'fs';

// ENUMS
import { ERequestType, EUploadSteps } from '../enums/Request';
import { ESubdomains, EResourceType } from '../enums/Resources';

// MODELS
import { BaseQuery } from './queries/BaseQuery';
import { DataQuery } from './queries/DataQuery';
import { UploadQuery } from './queries/UploadQuery';
import { FetchArgs } from './args/FetchArgs';
import { PostArgs } from './args/PostArgs';

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

	/** The resource specific headers. */
	public headers: AxiosHeaders;

	/** The query parameters to be sent in the request. */
	public params?: BaseQuery;

	/**
	 * The payload to be sent in the request.
	 *
	 * @remarks This is applicable only for {@link ERequestType.POST} requests.
	 */
	public payload?: NonNullable<unknown>;

	/**
	 * @param resourceType - The type of resource requested.
	 * @param args - Additional URL arguments.
	 */
	public constructor(resourceType: EResourceType, args: FetchArgs & PostArgs) {
		// Converting JSON args to object
		if (
			resourceType == EResourceType.CREATE_RETWEET ||
			resourceType == EResourceType.CREATE_TWEET ||
			resourceType == EResourceType.FAVORITE_TWEET ||
			resourceType == EResourceType.MEDIA_UPLOAD
		) {
			args = new PostArgs(resourceType, args);
		} else {
			args = new FetchArgs(resourceType, args);
		}

		// Setting request type
		if (
			resourceType == EResourceType.CREATE_TWEET ||
			resourceType == EResourceType.CREATE_RETWEET ||
			resourceType == EResourceType.FAVORITE_TWEET ||
			resourceType == EResourceType.MEDIA_UPLOAD
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

		// Setting request headers
		if (resourceType == EResourceType.MEDIA_UPLOAD) {
			this.headers = new AxiosHeaders({ referer: 'https://twitter.com' });
		} else {
			this.headers = new AxiosHeaders();
		}

		// Setting request params and payload
		if (
			resourceType == EResourceType.CREATE_TWEET ||
			resourceType == EResourceType.CREATE_RETWEET ||
			resourceType == EResourceType.FAVORITE_TWEET
		) {
			this.payload = new DataQuery(resourceType, args);
		} else if (resourceType == EResourceType.MEDIA_UPLOAD && args.upload?.step == EUploadSteps.APPEND) {
			// Appending the media to form data
			const data = new FormData();
			data.append('media', createReadStream(args.upload.media as string));

			this.params = new UploadQuery(args.upload);
			this.payload = data;
		} else if (
			resourceType == EResourceType.MEDIA_UPLOAD &&
			(args.upload?.step == EUploadSteps.INITIALIZE || args.upload?.step == EUploadSteps.FINALIZE)
		) {
			this.params = new UploadQuery(args.upload);
		} else if (resourceType == EResourceType.VIDEO_STREAM) {
			this.params = undefined;
		} else {
			this.params = new DataQuery(resourceType, args);
		}
	}

	/**
	 * @returns The AxiosRequestConfig representation of 'this' Request.
	 */
	public toAxiosRequestConfig(): AxiosRequestConfig {
		return {
			url: this.endpoint,
			method: this.type,
			baseURL: `https://${this.subdomain ? this.subdomain + '.' : ''}${this.base}`,
			headers: this.headers,
			params: this.params,
			paramsSerializer: {
				encode: encodeURIComponent,
			},
			data: this.payload,
		};
	}
}
