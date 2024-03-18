// PACKAGES
import { ValidationError } from 'class-validator';

// ENUMS
import { EErrors } from '../../enums/Errors';

/**
 * Error when any fields of a JSON data fails to validate.
 *
 * @public
 */
export class DataValidationError {
	/** The error data. */
	public data: ValidationError[];

	/** The user-friendly error message. */
	public message: EErrors;

	/** The name of the error. */
	public name: string;

	/**
	 * @param data - The error details, as a list of type {@link ValidationError}
	 */
	public constructor(errorDetails: ValidationError[]) {
		this.data = errorDetails;
		this.message = EErrors.VALIDATION_ERROR;
		this.name = 'VALIDATION_ERROR';
	}
}
