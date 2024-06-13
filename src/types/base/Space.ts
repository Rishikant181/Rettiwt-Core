/* eslint-disable */

import { IDataResult } from '../composite/DataResult';
import { IUser } from './User';
import { ITweet } from './Tweet';

/**
 * Represents the raw data of a single Space.
 *
 * @public
 */
export interface ISpace {
	rest_id: string;
	state: string;
	title: string;
	media_key: string;
	created_at: number;
	started_at: number;
	ended_at: string;
	replay_start_time: number;
	updated_at: number;
	creator_results: IDataResult<IUser>;
	conversation_controls: number;
	disallow_join: boolean;
	is_employee_only: boolean;
	is_locked: boolean;
	is_muted: boolean;
	is_space_available_for_clipping: boolean;
	is_space_available_for_replay: boolean;
	narrow_cast_space_type: number;
	no_incognito: boolean;
	total_replay_watched: number;
	total_live_listeners: number;
	tweet_results: IDataResult<ITweet>;
}
