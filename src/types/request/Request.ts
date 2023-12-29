// ENUMS
import { ERequestType } from '../../enums/Request';
import { EResourceType } from '../../enums/Resources';

// TYPES
import { IBaseQuery } from './params/BaseQuery';

/**
 * The request containing all the required url, params, query, payload, etc for a requested resource on Twitter.
 *
 * @public
 */
export interface IRequest {
	/** The type of 'this' request. */
	type: ERequestType;

	/** The base URL of the request. */
	base: string;

	/** The sub-domain of the request. */
	subdomain: string;

	/** The endpoint to which the request is to be sent. */
	endpoint: EResourceType;

	/** The parameters to be sent in the request. */
	params?: IBaseQuery;

	/** The payload to be sent in the request. */
	payload?: NonNullable<unknown>;
}
