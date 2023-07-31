# Rettiwt-Core

**A library for generating request configurations to various Twitter API resources**

Rettiwt-Core is a library that can be used to generate requests which can be used to fetch various resource from the Twitter API.

## Prerequisites

-   NodeJS 18.14.2

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

const { type, url } = new Request(EResourceType.USER_DETAILS, {
    id: 'user_name'
});
```

Where,

-   user_name is the user name of the Twitter user whose details are to be fetched.

### 2. Getting the request to fetch the list of users who liked a given tweet

```
import { Request, EResourceType } from 'rettiwt-core';

const { type, url } = new Request(EResourceType.TWEET_FAVORITERS, {
    id: 'tweet_id',
    count: count,
    cursor: 'cursor'
});
```

Where,

-   tweet_id is the 'rest_id' of the Tweet whose likes are to be fetched.
-   count is the number of data items to fetch.
-   cursor is the cursor to the batch of data items to fetch.

### 3. Getting the request to fetch tweets using a filter to get tweets from specific users and containing specific words

```
import { Request, EResourceType } from 'rettiwt-core';

const { type, url } = new Request(EResourceType.TWEET_SEARCH, {
    count: <count>,
    cursor: 'cursor',
    filter: {
        fromUsers: ['user_name_1', 'user_name_2'],
        words: ['word_1', 'word_2'],
    }
});
```

Where,

-   user_name_1, user_name_2, .......... are the different usernames whose tweets are requried.
-   word_1, word_2, ........... are the different words that must be in the tweets.

Apart from this, other filters are also available.

### 4. Getting the request to create a Tweet

```
import { Request, EResourceType } from 'rettiwt-core;

const { type, url, payload } = new Request(EResourceType.CREATE_TWEET, {
    tweetText: 'text_to_tweet'
});
```

Where,

-   'text_to_tweet' is the text which you want to tweet.

As of now, only simple text tweets are possible.

## Next steps

After generating the respective [Request](https://rishikant181.github.io/Rettiwt-Core/classes/Request.html), the type, url and payload, which contain the type of request ('GET', 'POST', etc), the url to which the request is targeted at and the payload to be sent (incase of 'POST' request), can be used to make HTTP requests in order to fetch that specific resource.

## API Reference

For the complete API reference, go through the full [documentation](https://rishikant181.github.io/Rettiwt-Core/).
