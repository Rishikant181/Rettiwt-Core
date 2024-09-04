# Rettiwt-Core

A library for generating requests for Twitter API

## Prerequisites

-   NodeJS 20.x

## Installation

1.  Initialize a new npm project using the command **npm init**
2.  Install the package either via npm or yarn
    -   For **npm**, use the command **npm install --save rettiwt-core**
    -   For **yarn**, use the command **yarn add rettiwt-core**

## Available Resources

Currently, generation of request configuration for the following resources/actions is supported:

-   ### Lists:

    -   Details
    -   Tweets

-   ### Media:

    -   Upload
    -   Video Stream

-   ### Spaces:

    -   Details (by id)

-   ### Tweets:

    -   Details
    -   Like
    -   Likers
    -   Post
    -   Replies
    -   Retweet
    -   Retweeters
    -   Schedule
    -   Search
    -   Unlike
    -   Unpost
    -   Unretweet
    -   Unschedule

-   ### Users:
    -   Details (by id)
    -   Details (by username)
    -   Follow
    -   Followed Feed
    -   Followers
    -   Following
    -   Highlights
    -   Likes
    -   Media
    -   Notifications
    -   Recommended Feed
    -   Scheduled Tweets
    -   Subscriptions
    -   Tweets
    -   Tweets and Replies
    -   Unfollow

## Getting started

The following examples will help you to get started with using the library:

### 1. Getting the request to fetch the details of a Twitter user

```js
import { Request } from 'rettiwt-core';

const request = new Request().user.detailsByUsername(user_name);
```

Where,

-   `user_name` is the user name of the Twitter user whose details are to be fetched.

### 2. Getting the request to fetch the list of users who liked a given tweet

```js
import { Request } from 'rettiwt-core';

const request = new Request().tweet.likers(tweet_id, count, cursor);
```

Where,

-   `tweet_id` is the 'rest_id' of the Tweet whose likes are to be fetched.
-   `count` is the number of likers to fetch.
-   `cursor` is the cursor to the batch of likers to fetch.

### 3. Getting the request to fetch tweets using a filter to get tweets from specific users and containing specific words

```js
import { Request } from 'rettiwt-core';

const request = new Request().tweet.search(
	{
		fromUsers: ['user_name_1', 'user_name_2'],
		includeWords: ['word_1', 'word_2'],
	},
	count,
	cursor,
);
```

Where,

-   `user_name_1`, `user_name_2`, .......... are the different usernames whose tweets are requried.
-   `word_1`, `word_2`, ........... are the different words that must be in the tweets.
-   `count` is the number of tweets to fetch.
-   `cursor` is the cursor to the batch of tweets to fetch.

Apart from this, other filters are also available (see [here](https://rishikant181.github.io/Rettiwt-Core/classes/TweetFilter.html)).

### 4. Getting the request to create a simple text Tweet

```js
import { Request } from 'rettiwt-core';

const request = new Request().tweet.post({ text: 'text_to_tweet' });
```

Where,

-   `text_to_tweet` is the text which you want to tweet.

### 5. Getting a request to upload a media for a Tweet

Uploading a media is a three step process. These three steps are:

1. Initialization
2. Upload
3. Finalization

#### 1. Initialization

```js
import { Request } from 'rettiwt-core';

const request = new Request().media.initializeUpload(size);
```

Where,

-   `size` is the size (in bytes) of the media to be uploaded.

Sending this request allocates a `media_id` to the media to be uploaded, which will be used for successive steps.

#### 2. Upload

```js
import { Request } from 'rettiwt-core';

const request = new Request().media.appendUpload(media_id, media_path);
```

Where,

-   `media_id` is the ID allocated to the media by sending the previous request.
-   `media_path` is the path to the media to be uploaded.

Sending this request uploads the media file to Twitter.

Notes:

-   Instead of a path to a locally stored file, an `ArrayBuffer` containing the media can also be uploaded

#### 3. Finalization

```js
import { Request } from 'rettiwt-core';

const request = new Request().media.finalizeUpload(media_id);
```

Where,

-   `media_id` is the ID allocated to the media uploaded using the previous reqeust.

Sending this request finalizes the upload process of the media and makes the media ready to be included in Tweets, via the media's allocated ID.

### 6. Getting the request to create a Tweet having media content

```js
import { Request } from 'rettiwt-core';

const request = new Request().tweet.post({
	text: 'text_to_tweet',
	media: [
		{
			id: 'id_1',
			tags: ['user_id_1', 'user_id_2', 'user_id_3'],
		},
		{
			id: 'id_2',
			tags: ['user_id_4', 'user_id_5', 'user_id_6'],
		},
	],
});
```

Where,

-   'text_to_tweet' is the text which you want to tweet.
-   'id_1', 'id_2', ... are the allocated 'media_id' of the uploaded media.
-   'user_id_1', 'user_id_2', ... are the 'rest_id' of the users to be tagged in the media.

## Authenticating Requests

In order to actually be able to send the generated requests, you need to authenticate them, by following the steps described [here](https://github.com/Rishikant181/Rettiwt-Auth/tree/release?tab=readme-ov-file#2-generating-credentials-as-http-headers-for-use-with-third-party-scripts).

## Next steps

After generating the respective request configuration, the same can be used to make HTTP requests in order to access that specific resource.

## API Reference

For the complete API reference, go through the full [documentation](https://rishikant181.github.io/Rettiwt-Core/).
