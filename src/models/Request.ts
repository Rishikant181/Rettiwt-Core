// ENUMS
import { ERequestType } from "../enums/RequestType";
import { EResourceType } from "../enums/Resources";
import { Url } from "./Url";
import { Args } from "./payloads/Args";

export class Request<PayloadType> {
    /** The full url of the request. */
    url: string;

    /** The resource targeted by the request. */
    resource: EResourceType;

    /** The type of 'this' request. */
    type: ERequestType;

    /** The payload to be sent in the request. */
    payload?: PayloadType;

    constructor(resourceType: EResourceType, args?: Args, payload?: PayloadType) {
        this.resource = resourceType;
        this.url = new Url(resourceType, args);
        this.payload = payload;
    }
}