/* eslint-disable */

/**
 * Represents the raw data of a single Photo.
 *
 * @public
 */
export interface IPhoto {
    display_url: string
    expanded_url: string
    id_str: string
    indices: number[]
    media_key: string
    media_url_https: string
    type: string
    url: string
    ext_media_availability: IMediaAvailability
}

export interface IMediaAvailability {
    status: string
}
