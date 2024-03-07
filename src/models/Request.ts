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
	/** The type of requested resource. */
	private resource: EResourceType;

	/** Resource-specific arguments for configuring the request. */
	private args: FetchArgs & PostArgs;

	/** The base URL to which the request is targeted. */
	public base: string = 'twitter.com';

	/** The type of request to be made. */
	public type?: ERequestType;

	/** The subdomain of the URL to which the request is targeted. */
	public subdomain?: ESubdomains;

	/** The endpoint of the URL to which the request is targeted. */
	public endpoint?: string;

	/** The resource specific headers. */
	public headers?: AxiosHeaders;

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
		this.resource = resourceType;
		this.args = this.validateArgs(resourceType, args);

		// Setting request options
		this.setType();
		this.setSubdomain();
		this.setEndpoint();
		this.setHeaders();
		this.setParams();
		this.setPayload();
	}

	/**
	 * Validates the supplied arguments.
	 *
	 * @param resourceType - The type of requested resource.
	 * @param args - Resource-specific arguments for configuring the request.
	 * @returns A validated object containing the args.
	 *
	 * @internal
	 */
	private validateArgs(resourceType: EResourceType, args: FetchArgs & PostArgs): FetchArgs & PostArgs {
		if (
			resourceType == EResourceType.CREATE_RETWEET ||
			resourceType == EResourceType.CREATE_TWEET ||
			resourceType == EResourceType.FAVORITE_TWEET ||
			resourceType == EResourceType.MEDIA_UPLOAD
		) {
			return new PostArgs(resourceType, args);
		} else {
			return new FetchArgs(resourceType, args);
		}
	}

	/**
	 * Sets the type of HTTP request.
	 *
	 * @internal
	 */
	private setType(): void {
		if (
			this.resource == EResourceType.CREATE_TWEET ||
			this.resource == EResourceType.CREATE_RETWEET ||
			this.resource == EResourceType.FAVORITE_TWEET ||
			this.resource == EResourceType.MEDIA_UPLOAD
		) {
			this.type = ERequestType.POST;
		} else {
			this.type = ERequestType.GET;
		}
	}

	/**
	 * Sets the request subdomain
	 *
	 * @internal
	 */
	private setSubdomain(): void {
		if (this.resource == EResourceType.MEDIA_UPLOAD) {
			this.subdomain = ESubdomains.UPLOAD;
		} else {
			this.subdomain = ESubdomains.MAIN;
		}
	}

	/**
	 * Sets the request endpoint.
	 *
	 * @internal
	 */
	private setEndpoint(): void {
		if (this.resource == EResourceType.VIDEO_STREAM) {
			this.endpoint = `${this.resource}/${this.args.id as string}`;
		} else {
			this.endpoint = this.resource;
		}
	}

	/**
	 * Sets the reqeust headers.
	 *
	 * @internal
	 */
	private setHeaders(): void {
		if (this.resource == EResourceType.MEDIA_UPLOAD) {
			this.headers = new AxiosHeaders({ referer: 'https://twitter.com' });
		} else {
			this.headers = new AxiosHeaders();
		}
	}

	/**
	 * Sets the request parameters.
	 *
	 * @internal
	 */
	private setParams(): void {
		if (
			this.resource == EResourceType.CREATE_TWEET ||
			this.resource == EResourceType.CREATE_RETWEET ||
			this.resource == EResourceType.FAVORITE_TWEET
		) {
			this.payload = new DataQuery(this.resource, this.args);
		} else if (this.resource == EResourceType.MEDIA_UPLOAD && this.args.upload?.step == EUploadSteps.APPEND) {
			this.params = new UploadQuery(this.args.upload);
		} else if (
			this.resource == EResourceType.MEDIA_UPLOAD &&
			(this.args.upload?.step == EUploadSteps.INITIALIZE || this.args.upload?.step == EUploadSteps.FINALIZE)
		) {
			this.params = new UploadQuery(this.args.upload);
		} else if (this.resource == EResourceType.VIDEO_STREAM) {
			this.params = undefined;
		} else {
			this.params = new DataQuery(this.resource, this.args);
		}
	}

	/**
	 * Sets the request payload.
	 *
	 * @internal
	 */
	private setPayload(): void {
		if (this.resource == EResourceType.MEDIA_UPLOAD && this.args.upload?.step == EUploadSteps.APPEND) {
			// Appending the media to form data
			const data = new FormData();
			data.append(
				'media',
				typeof this.args.upload.media == 'string'
					? createReadStream(this.args.upload.media)
					: Buffer.from(this.args.upload.media as ArrayBuffer),
			);

			this.payload = data;
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
