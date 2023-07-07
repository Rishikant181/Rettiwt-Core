// PACKAGES
import { ValidationError } from 'class-validator';

// ENUMS
import { EErrors } from '../../enums/Errors';

/**
 * Error when any fields of a JSON data fails to validate.
 *
 * @internal
 *
 * @param errorDetails The details of about the specific fields that failed to validate.
 */
export interface IDataValidationError extends Error {
	/** The name of the error. */
	name: string;

	/** The user-friendly error message. */
	message: EErrors;

	/** The error data. */
	data: ValidationError[];
}
