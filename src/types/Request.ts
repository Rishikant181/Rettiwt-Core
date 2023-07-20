// ENUMS
import { ERequestType } from "../enums/RequestType";
import { EResourceType } from "../enums/Resources";

export interface IRequest<PayloadType> {
    /** The full url of the request. */
    url: string;

    /** The resource targeted by the request. */
    resource: EResourceType;

    /** The type of 'this' request. */
    type: ERequestType;

    /** The payload to be sent in the request. */
    payload?: PayloadType;
}