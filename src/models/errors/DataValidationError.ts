// PACKAGES
import { ValidationError } from 'class-validator';

// ENUMS
import { EErrors } from '../../enums/Errors';

/**
 * Error when any fields of a JSON data fails to validate.
 *
 * @internal
 */
export class DataValidationError {
	/** The name of the error. */
	public name: string;

	/** The user-friendly error message. */
	public message: EErrors;

	/** The error data. */
	public data: ValidationError[];

	/**
	 * @param data - The error details, as a list of type {@link ValidationError}
	 */
	public constructor(errorDetails: ValidationError[]) {
		this.name = 'VALIDATION_ERROR';
		this.message = EErrors.VALIDATION_ERROR;
		this.data = errorDetails;
	}
}
