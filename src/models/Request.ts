// ENUMS
import { ERequestType } from "../enums/RequestType";
import { EResourceType } from "../enums/Resources";

// MODELS
import { Url } from "./Url";
import { Args } from "./payloads/Args";

export class Request<PayloadType> {
    /** The full url of the request. */
    url: string;

    /** The type of 'this' request. */
    type: ERequestType;

    /** The payload to be sent in the request. */
    payload?: PayloadType;

    /**
     * Generates an HTTP request configuration for the requested resource on Twitter.
     * 
     * @param resourceType - The type of resource requested.
     * @param args - Additional URL arguments.
     */
    constructor(resourceType: EResourceType, args: Args) {
        this.url = new Url(resourceType, args ?? {}).toString();
        this.type = ERequestType.GET;
    }
}