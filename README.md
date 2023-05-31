# Rettiwt-Core

**A library for generating URLs to various Twitter API resources**

Rettiwt-Core is a library that can be used to to get the valid URLs which can be used to fetch various resource from the Twitter API.

---

## Prerequisites

-   NodeJS 18.14.2

---

## Installation

1.  Initialize a new npm project using the command **npm init**
2.  Install the package either via npm or yarn
    -   For **npm**, use the command **npm install --save rettiwt-core**
    -   For **yarn**, use the command **yarn add rettiwt-core**

---

## Getting started

The following examples will help you to get started with using the library:

### 1. Getting the URL to fetch the details of a Twitter user

```
import { Url } from './src/index';
import { EResourceType } from './src/index';

const url = new Url(EResourceType.USER_DETAILS, {
    id: '<user_name>'
}).toString();
```

Where, <user_name> is the user name of the Twitter user whose details are to be fetched.

### 2. Getting the URL to fetch the list of likes of a given tweet

```
import { Url } from './src/index';
import { EResourceType } from './src/index';

const url = new Url(EResourceType.TWEET_LIKES, {
    id: '<tweet_id>',
    count: <count>,
    cursor: '<cursor>'
}).toString();
```

Where,

-   <tweet_id> is the 'rest_id' of the Tweet whose likes are to be fetched.
-   <count> is the number of data items to fetch.
-   <cursor> is the cursor to the batch of data items to fetch.
