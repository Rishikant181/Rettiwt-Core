/* eslint-disable */

/**
 * The raw data received when fetching the list of scheduled tweets of the user.
 *
 * @public
 */
export interface Root {
	data: Data;
}

export interface Data {
	viewer: Viewer;
}

export interface Viewer {
	scheduled_tweet_list: ScheduledTweetList[];
}

export interface ScheduledTweetList {
	rest_id: string;
	scheduling_info: SchedulingInfo;
	tweet_create_request: TweetCreateRequest;
}

export interface SchedulingInfo {
	execute_at: number;
	state: string;
}

export interface TweetCreateRequest {
	type: string;
	status: string;
	exclude_reply_user_ids: any[];
	media_ids: any[];
	auto_populate_reply_metadata: boolean;
}
