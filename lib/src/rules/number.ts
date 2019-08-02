import { FieldValidationResult, FieldValidationFunction } from "../entities";

export interface NumberParams {
  decimalPlaces?: number;
}

const DEFAULT_PARAMS: NumberParams = { decimalPlaces: null };

export const number: FieldValidationFunction = (
  value,
  vm,
  customParams: NumberParams = DEFAULT_PARAMS
) => {
  const validationResult = new FieldValidationResult();
  const isValid =
    isNull(value) || isValidField(value, customParams.decimalPlaces);

  validationResult.errorMessage = isValid
    ? ""
    : "The value provided must be a number";

  validationResult.succeeded = isValid;

  validationResult.type = "NUMBER";

  return validationResult;
};

const isValidField = (value, decimalPlaces: number): boolean => {
  const floatValue = parseFloat(value);
  return (
    !isNaN(floatValue) &&
    (!isNull(decimalPlaces) ? isValidDecimal(floatValue, decimalPlaces) : true)
  );
};

const isValidDecimal = (value: number, decimalPlaces: number): boolean => {
  const regExp = new RegExp(
    `^\\s*-?[0-9]\\d*(\\.\\d{1,${decimalPlaces}})?\\s*$`
  );
  return regExp.test(value.toString());
};

const isNull = value => value === null || value === undefined;
