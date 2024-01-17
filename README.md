# Rettiwt-Core

A library for generating request configurations to various Twitter API resources.

## Prerequisites

-   NodeJS 20.x

## Installation

1.  Initialize a new npm project using the command **npm init**
2.  Install the package either via npm or yarn
    -   For **npm**, use the command **npm install --save rettiwt-core**
    -   For **yarn**, use the command **yarn add rettiwt-core**

## Getting started

The following examples will help you to get started with using the library:

### 1. Getting the request to fetch the details of a Twitter user

```
import { Request, EResourceType } from 'rettiwt-core';

const request = new Request(EResourceType.USER_DETAILS, {
    id: 'user_name'
}).toAxiosRequestConfig();
```

Where,

-   user_name is the user name of the Twitter user whose details are to be fetched.

### 2. Getting the request to fetch the list of users who liked a given tweet

```
import { Request, EResourceType } from 'rettiwt-core';

const request = new Request(EResourceType.TWEET_FAVORITERS, {
    id: 'tweet_id',
    count: count,
    cursor: 'cursor'
}).toAxiosRequestConfig();
```

Where,

-   tweet_id is the 'rest_id' of the Tweet whose likes are to be fetched.
-   count is the number of data items to fetch.
-   cursor is the cursor to the batch of data items to fetch.

### 3. Getting the request to fetch tweets using a filter to get tweets from specific users and containing specific words

```
import { Request, EResourceType } from 'rettiwt-core';

const request = new Request(EResourceType.TWEET_SEARCH, {
    count: <count>,
    cursor: 'cursor',
    filter: {
        fromUsers: ['user_name_1', 'user_name_2'],
        includeWords: ['word_1', 'word_2'],
    }
}).toAxiosRequestConfig();
```

Where,

-   user_name_1, user_name_2, .......... are the different usernames whose tweets are requried.
-   word_1, word_2, ........... are the different words that must be in the tweets.

Apart from this, other filters are also available.

### 4. Getting the request to create a simple text Tweet

```
import { Request, EResourceType } from 'rettiwt-core;

const request = new Request(EResourceType.CREATE_TWEET, {
    tweet: {
        text: 'text_to_tweet'
    }
}).toAxiosRequestConfig();
```

Where,

-   'text_to_tweet' is the text which you want to tweet.

### 5. Getting a request to upload a media for a Tweet

Uploading a media is a three step process. These three steps are:

1. Initialization
2. Upload
3. Finalization

#### 1. Initialization

```
import { Request, EResourceType, EUploadSteps } from 'rettiwt-core';

const request = new Request(EResourceType.MEDIA_UPLOAD, {
    upload: {
        step: EUploadSteps.INIT,
        size: <size>
    }
}).toAxiosRequestConfig();
```

Where,

-   'size' is the size (in bytes) of the media to be uploaded.

Sending this request allocates a 'media_id' to the media to be uploaded, which will be used for successive steps.

#### 2. Upload

```
import { Request, EResourceType, EUploadSteps } from 'rettiwt-core';

const request = new Request(EResourceType.MEDIA_UPLOAD, {
    upload: {
        step: EUploadSteps.APPEND,
        id: 'media_id',
        media: 'media_path'
    }
}).toAxiosRequestConfig();
```

Where,

-   'media_id' is the ID allocated to the media by sending the previous request.
-   'media_path' is the path to the media to be uploaded.

Sending this request uploads the media file to Twitter.

#### 3. Finalization

```
import { Request, EResourceType, EUploadSteps } from 'rettiwt-core';

const request = new Request(EResourceType.MEDIA_UPLOAD, {
    upload: {
        step: EUploadSteps.FINALIZE,
        id: 'media_id'
    }
}).toAxiosRequestConfig();
```

Where,

-   'media_id' is the ID allocated to the media uploaded using the previous reqeust.

Sending this request finalizes the upload process of the media and makes the media ready to be included in Tweets, via the media's allocated ID.

### 6. Getting the request to create a Tweet having media content

```
import { Request, EResourceType } from 'rettiwt-core;

const request = new Request(EResourceType.CREATE_TWEET, {
    tweet: {
        text: 'text_to_tweet',
        media: [
            {
                id: 'id_1',
                tags: ['user_id_1', 'user_id_2', 'user_id_3']
            },
            {
                id: 'id_2',
                tags: ['user_id_4', 'user_id_5', 'user_id_6']
            }
        ]
    }
}).toAxiosRequestConfig();
```

Where,

-   'text_to_tweet' is the text which you want to tweet.
-   'id_1', 'id_2', ... are the allocated 'media_id' of the uploaded media.
-   'user_id_1', 'user_id_2', ... are the 'rest_id' of the users to be tagged in the media.

## Next steps

After generating the respective [Request](https://rishikant181.github.io/Rettiwt-Core/classes/Request.html) and successive conversion of the request into an AxiosRequestConfig object, the request configuration can be used to make HTTP requests in order to fetch that specific resource.

## API Reference

For the complete API reference, go through the full [documentation](https://rishikant181.github.io/Rettiwt-Core/).
