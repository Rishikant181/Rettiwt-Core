// ENUMS
import { ERequestType } from "../enums/RequestType";

export interface IRequest<PayloadType> {
    /** The full url of the request. */
    url: string;

    /** The type of 'this' request. */
    type: ERequestType;

    /** The payload to be sent in the request. */
    payload?: PayloadType;
}