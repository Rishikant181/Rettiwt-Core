// ENUMS
import { EResourceType } from "../enums/Resources";

// TYPES
import { IQuery } from "./request/params/Query";

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

    /** The URL query parameters. */
    query?: IQuery;

    /**
     * @returns The string representation of this Url.
     */
    toString(): string;
}