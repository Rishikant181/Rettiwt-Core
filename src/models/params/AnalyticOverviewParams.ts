/* eslint-disable @typescript-eslint/naming-convention */

import { EGranularity } from '../../enums/Granularity';
import { EMetric } from '../../enums/Metric';

export class AnalyticOverviewParams {
	public fromTime: Date;
	public granularity: EGranularity;
	public requestedMetrics: Array<EMetric>;
	public toTime: Date;

	public constructor(params: AnalyticOverviewParams) {
		this.requestedMetrics = params.requestedMetrics;
		this.fromTime = params.fromTime;
		this.toTime = params.toTime;
		this.granularity = params.granularity;
	}
}
