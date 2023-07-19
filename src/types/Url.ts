/**
 * Represents a URL to a single resource on Twitter.
 *
 * @public
 */
export interface IUrl {
    /** The base Twitter API url. */
    baseUrl: string;

    /** The fully initialized target resource URL. */
    fullUrl: string;

    /**
     * @returns The string representation of this Url.
     */
    toString(): string;
}