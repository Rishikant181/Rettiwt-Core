/* eslint-disable @typescript-eslint/naming-convention */

import { AxiosRequestConfig } from 'axios';

export const requests = {
	USER_DETAILS: (args: { userName: string }): AxiosRequestConfig => ({
		method: 'get',
		url: 'https://twitter.com/i/api/graphql/oUZZZ8Oddwxs8Cd3iW3UEA/UserByScreenName',
		params: {
			variables: { screen_name: args.userName },
			features: {
				hidden_profile_likes_enabled: false,
				responsive_web_graphql_exclude_directive_enabled: true,
				verified_phone_label_enabled: true,
				subscriptions_verification_info_verified_since_enabled: true,
				highlights_tweets_tab_ui_enabled: true,
				creator_subscriptions_tweet_preview_api_enabled: true,
				responsive_web_graphql_skip_user_profile_image_extensions_enabled: false,
				responsive_web_graphql_timeline_navigation_enabled: true,
			},
		},
	}),
};
