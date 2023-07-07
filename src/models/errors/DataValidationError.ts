// PACKAGES
import { ValidationError } from 'class-validator';

// TYPES
import { IDataValidationError } from '../../types/errors/DataValidationError';

// ENUMS
import { EErrors } from '../../enums/Errors';

/**
 * Error when any fields of a JSON data fails to validate.
 *
 * @internal
 *
 * @param errorDetails The details of about the specific fields that failed to validate.
 */
export class DataValidationError implements IDataValidationError {
	/** The name of the error. */
	name: string;

	/** The user-friendly error message. */
	message: EErrors;

	/** The error data. */
	data: ValidationError[];

	/**
	 * @param data The error details.
	 */
	constructor(errorDetails: ValidationError[]) {
		this.name = 'VALIDATION_ERROR';
		this.message = EErrors.VALIDATION_ERROR;
		this.data = errorDetails;
	}
}
