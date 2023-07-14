// PACKAGES
import { ValidationError } from 'class-validator';

// ENUMS
import { EErrors } from '../../enums/Errors';

/**
 * Error when any fields of a JSON data fails to validate.
 *
 * @internal
 */
export interface IDataValidationError extends Error {
	/** The name of the error. */
	name: string;

	/** The user-friendly error message. */
	message: EErrors;

	/** The error data. */
	data: ValidationError[];
}
