/* eslint-disable */
export interface IAnalyticResult {
	__typename: string;
	organic_metrics_time_series: Array<IAnalyticMetric>;
	id: string;
}

export interface IAnalyticMetric {
	metric_value: Array<IAnalyticMetricValue>;
	timestamp: IAnalyticTimeStamp;
}

export interface IAnalyticMetricValue {
	metric_value: number;
	metric_type: string;
}

export interface IAnalyticTimeStamp {
	iso8601_time: string;
}
