// TYPES
import { IDataResult } from './DataResult';
import { IUser } from './User';

export interface ITweet {
    __typename: string
    rest_id: string
    core: ICoreData
    edit_control: IEditControl
    edit_perspective: IEditPerspective
    is_translatable: boolean
    views: IViews
    source: string
    legacy: ITweetLegacy
    quick_promote_eligibility: IQuickPromoteEligibilityInfo
}

export interface ICoreData {
    user_results: IDataResult<IUser>
}

export interface IEditControl {
    edit_tweet_ids: string[]
    editable_until_msecs: string
    is_edit_eligible: boolean
    edits_remaining: string
}

export interface IEditPerspective {
    favorited: boolean
    retweeted: boolean
}

export interface IViews {
    state: string
}

export interface ITweetLegacy {
    bookmark_count: number
    bookmarked: boolean
    created_at: string
    conversation_id_str: string
    display_text_range: number[]
    entities: ITweetEntities
    extended_entities: ITweetExtendedEntities
    favorite_count: number
    favorited: boolean
    full_text: string
    is_quote_status: boolean
    lang: string
    possibly_sensitive: boolean
    possibly_sensitive_editable: boolean
    quote_count: number
    reply_count: number
    retweet_count: number
    retweeted: boolean
    user_id_str: string
    id_str: string
    retweeted_status_result: IRetweetedStatusResult
}

export interface ITweetEntities {
    media: IMedia[]
    user_mentions: IUserMention[]
    urls: any[]
    hashtags: IHashtag[]
    symbols: any[]
}

export interface IMedia {
    display_url: string
    expanded_url: string
    id_str: string
    indices: number[]
    media_url_https: string
    source_status_id_str: string
    source_user_id_str: string
    type: string
    url: string
}

export interface IUserMention {
    id_str: string
    name: string
    screen_name: string
    indices: number[]
}

export interface IHashtag {
    indices: number[]
    text: string
}

export interface ITweetExtendedEntities {
    media: IExtendedMedia[]
}

export interface IExtendedMedia extends IMedia {
    media_key: string
    ext_media_availability: IExtMediaAvailability
}

export interface IExtMediaAvailability {
    status: string
}

export interface IRetweetedStatusResult {
    result: ITweet
}

export interface IQuickPromoteEligibilityInfo {
    eligibility: string
}
