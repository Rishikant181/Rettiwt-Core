// ENUMS
import { ERequestType } from "../enums/RequestType";
import { EResourceType } from "../enums/Resources";

// MODELS
import { Url } from "./Url";
import { Query } from "./params/Query";
import { Args } from "./payloads/Args";

export class Request {
    /** The full url of the request. */
    url: string;

    /** The type of 'this' request. */
    type: ERequestType;

    /** The payload to be sent in the request. */
    payload?: Query;

    /**
     * Generates an HTTP request configuration for the requested resource on Twitter.
     * 
     * @param resourceType - The type of resource requested.
     * @param args - Additional URL arguments.
     */
    constructor(resourceType: EResourceType, args: Args) {
        this.payload = new Query(resourceType, args);
        this.type = ERequestType.GET;
        this.url = `${new Url(resourceType).toString()}?${this.payload.toString()}`;
    }
}