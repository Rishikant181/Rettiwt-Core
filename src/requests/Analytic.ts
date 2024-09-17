import { AxiosRequestConfig } from 'axios';

import { AnalyticOverviewParams } from '../models/params/AnalyticOverviewParams';

/**
 * @param analyticOverviewParams - The parameters to fetch the analytics overview.
 *
 * @public
 */
export function overview(analyticOverviewParams: AnalyticOverviewParams): AxiosRequestConfig {
	return {
		method: 'get',
		url: 'https://x.com/i/api/graphql/NlJ6RM-hgHxt-iu9cPQz7A/overviewDataUserQuery',
		params: {
			/* eslint-disable @typescript-eslint/naming-convention */
			from_time: analyticOverviewParams.fromTime,
			to_time: analyticOverviewParams.toTime,
			granularity: analyticOverviewParams.granularity,
			requested_metrics: analyticOverviewParams.requestedMetrics,
		},
		paramsSerializer: { encode: encodeURIComponent },
	};
}
