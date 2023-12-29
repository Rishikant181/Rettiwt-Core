// PACKAGES
import { ValidationError } from 'class-validator';

// TYPES
import { IDataValidationError } from '../../types/request/errors/DataValidationError';

// ENUMS
import { EErrors } from '../../enums/Errors';

/**
 * Error when any fields of a JSON data fails to validate.
 *
 * @internal
 */
export class DataValidationError implements IDataValidationError {
	public name: string;
	public message: EErrors;
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
