// ENUMS
import { ERequestType } from "../enums/RequestType";

// TYPES
import { IQuery } from "./request/params/Query";

export interface IRequest {
    /** The full url of the request. */
    url: string;

    /** The type of 'this' request. */
    type: ERequestType;

    /** The payload to be sent in the request. */
    payload: IQuery;
}