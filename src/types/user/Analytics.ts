/* eslint-disable */

/**
 * The raw data received when fetching the analytic overview of the user.
 *
 * @public
 */
export interface Root {
	data: Data;
}

export interface Data {
	result: Result;
}

export interface Result {
	result: Result2;
	id: string;
}

export interface Result2 {
	__typename: string;
	organic_metrics_time_series: Series[];
	id: string;
}

export interface Series {
	metric_values: MetricValue[];
	timestamp: Timestamp;
}

export interface MetricValue {
	metric_value: number;
	metric_type: string;
}

export interface Timestamp {
	iso8601_time: string;
}
