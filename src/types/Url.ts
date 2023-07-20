// ENUMS
import { EResourceType } from "../enums/Resources";

/**
 * Represents a URL to a single resource on Twitter.
 *
 * @public
 */
export interface IUrl {
    /** The base Twitter API url. */
    baseUrl: string;

    /** The URL endpoint. */
    endpoint: EResourceType;

    /**
     * @returns The string representation of this Url.
     */
    toString(): string;
}