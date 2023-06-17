export interface IUser {
    __typename: string
    id: string
    rest_id: string
    affiliates_highlighted_label: IAffiliatesHighlightedLabel
    has_graduated_access: boolean
    is_blue_verified: boolean
    profile_image_shape: string
    legacy: ILegacy
    super_follow_eligible: boolean
}

export interface IAffiliatesHighlightedLabel {
    label: ILabel
}

export interface ILabel {
    url: IUrl
    badge: IBadge
    description: string
    userLabelType: string
    userLabelDisplayType: string
}

export interface IUrl {
    url: string
    urlType: string
}

export interface IBadge {
    url: string
}

export interface ILegacy {
    following: boolean
    can_dm: boolean
    can_media_tag: boolean
    created_at: string
    default_profile: boolean
    default_profile_image: boolean
    description: string
    entities: IEntities
    fast_followers_count: number
    favourites_count: number
    followers_count: number
    friends_count: number
    has_custom_timelines: boolean
    is_translator: boolean
    listed_count: number
    location: string
    media_count: number
    name: string
    normal_followers_count: number
    pinned_tweet_ids_str: string[]
    possibly_sensitive: boolean
    profile_banner_url: string
    profile_image_url_https: string
    profile_interstitial_type: string
    screen_name: string
    statuses_count: number
    translator_type: string
    verified: boolean
    want_retweets: boolean
    withheld_in_countries: string[]
}

export interface IEntities {
    description: IDescription
}

export interface IDescription {
    urls: string[]
}
