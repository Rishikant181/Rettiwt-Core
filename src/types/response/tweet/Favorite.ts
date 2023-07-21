/* eslint-disable */

/**
 * The raw data received after favoriting a tweet.
 *
 * @public
 */
export interface Root {
    data: Data
}

export interface Data {
    favorite_tweet: string
}
