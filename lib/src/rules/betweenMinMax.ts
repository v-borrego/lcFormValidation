import { FieldValidationResult, FieldValidationFunction } from "../entities";

export interface BetweenMinMaxParams {
  minValue: number;
  maxValue: number;
}

export const betweenMinMax: FieldValidationFunction = (
  value: any,
  vm: any,
  customParams: BetweenMinMaxParams
): FieldValidationResult => {
  const validationResult = new FieldValidationResult();

  validationResult.succeeded = validateValue(
    value,
    customParams.minValue,
    customParams.maxValue
  );

  validationResult.errorMessage = validationResult.succeeded
    ? ""
    : `The value must be between ${customParams.minValue} and ${
        customParams.maxValue
      }`;

  validationResult.type = "BETWEEN_MIN_MAX";

  return validationResult;
};

const validateValue = (value: any, minValue: number, maxValue: number) =>
  value === null ||
  value === undefined ||
  (typeof value === "number" && value >= minValue && value <= maxValue);
