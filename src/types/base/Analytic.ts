/* eslint-disable */

/**
 * Represents the raw data of the analytic result of the User.
 *
 * @public
 */
export interface IAnalytic {
	__typename: string;
	organic_metrics_time_series: IAnalyticMetric[];
	id: string;
}

export interface IAnalyticMetric {
	metric_value: IAnalyticMetricValue[];
	timestamp: IAnalyticTimeStamp;
}

export interface IAnalyticMetricValue {
	metric_value: number;
	metric_type: string;
}

export interface IAnalyticTimeStamp {
	iso8601_time: string;
}
