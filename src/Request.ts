import * as listRequests from './requests/List';
import * as mediaRequests from './requests/Media';
import * as tweetRequests from './requests/Tweet';
import * as userRequests from './requests/User';

/**
 * The collection containing the different request configurations for different resources on Twitter API.
 *
 * @public
 */
export class Request {
	/** Collection of requests related to lists. */
	public list = listRequests;

	/** Collection of requests related to media. */
	public media = mediaRequests;

	/** Collection of requests related to tweets. */
	public tweet = tweetRequests;

	/** Collection of requests related to users. */
	public user = userRequests;
}
