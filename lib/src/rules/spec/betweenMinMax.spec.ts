import { FieldValidationResult } from "../../entities";
import { BetweenMinMaxParams, betweenMinMax } from "../betweenMinMax";

const customParams: BetweenMinMaxParams = {
  minValue: -100,
  maxValue: 100
};

const errorMessage = `The value must be between ${customParams.minValue} and ${
  customParams.maxValue
}`;

describe("[betweenMinMax] validation rule tests =>", () => {
  describe("When validating a non number value", () => {
    it("should return true if value is null", () => {
      // Arrange
      const value = null;
      const vm = undefined;

      // Act
      const validationResult = betweenMinMax(
        value,
        vm,
        customParams
      ) as FieldValidationResult;

      // Assert
      expect(validationResult.succeeded).to.be.true;
      expect(validationResult.type).to.be.equals("BETWEEN_MIN_MAX");
      expect(validationResult.errorMessage).to.be.equals("");
    });

    it("should return true if value is undefined", () => {
      // Arrange
      const value = undefined;
      const vm = undefined;

      // Act
      const validationResult = betweenMinMax(
        value,
        vm,
        customParams
      ) as FieldValidationResult;

      // Assert
      expect(validationResult.succeeded).to.be.true;
      expect(validationResult.type).to.be.equals("BETWEEN_MIN_MAX");
      expect(validationResult.errorMessage).to.be.equals("");
    });

    it("should return false if value is false", () => {
      // Arrange
      const value = false;
      const vm = undefined;

      // Act
      const validationResult = betweenMinMax(
        value,
        vm,
        customParams
      ) as FieldValidationResult;

      // Assert
      expect(validationResult.succeeded).to.be.false;
      expect(validationResult.type).to.be.equals("BETWEEN_MIN_MAX");
      expect(validationResult.errorMessage).to.be.equals(errorMessage);
    });

    it("should return false if value is true", () => {
      // Arrange
      const value = true;
      const vm = undefined;

      // Act
      const validationResult = betweenMinMax(
        value,
        vm,
        customParams
      ) as FieldValidationResult;

      // Assert
      expect(validationResult.succeeded).to.be.false;
      expect(validationResult.type).to.be.equals("BETWEEN_MIN_MAX");
      expect(validationResult.errorMessage).to.be.equals(errorMessage);
    });

    it("should return false if typeof value is string", () => {
      // Arrange
      const value = "hi test!";
      const vm = undefined;

      // Act
      const validationResult = betweenMinMax(
        value,
        vm,
        customParams
      ) as FieldValidationResult;

      // Assert
      expect(validationResult.succeeded).to.be.false;
      expect(validationResult.type).to.be.equals("BETWEEN_MIN_MAX");
      expect(validationResult.errorMessage).to.be.equals(errorMessage);
    });

    it("should return false if typeof value is object", () => {
      // Arrange
      const value = {};
      const vm = undefined;

      // Act
      const validationResult = betweenMinMax(
        value,
        vm,
        customParams
      ) as FieldValidationResult;

      // Assert
      expect(validationResult.succeeded).to.be.false;
      expect(validationResult.type).to.be.equals("BETWEEN_MIN_MAX");
      expect(validationResult.errorMessage).to.be.equals(errorMessage);
    });
  });

  describe("When validating a number value", () => {
    it("should return false if number is less than minimum value", () => {
      // Arrange
      const value = -101;
      const vm = undefined;

      // Act
      const validationResult = betweenMinMax(
        value,
        vm,
        customParams
      ) as FieldValidationResult;

      // Assert
      expect(validationResult.succeeded).to.be.false;
      expect(validationResult.type).to.be.equals("BETWEEN_MIN_MAX");
      expect(validationResult.errorMessage).to.be.equals(errorMessage);
    });

    it("should return false if number is greater than maximum value", () => {
      // Arrange
      const value = 101;
      const vm = undefined;

      // Act
      const validationResult = betweenMinMax(
        value,
        vm,
        customParams
      ) as FieldValidationResult;

      // Assert
      expect(validationResult.succeeded).to.be.false;
      expect(validationResult.type).to.be.equals("BETWEEN_MIN_MAX");
      expect(validationResult.errorMessage).to.be.equals(errorMessage);
    });

    it("should return true if number is within the range", () => {
      // Arrange
      const value = 0;
      const vm = undefined;

      // Act
      const validationResult = betweenMinMax(
        value,
        vm,
        customParams
      ) as FieldValidationResult;

      // Assert
      expect(validationResult.succeeded).to.be.true;
      expect(validationResult.type).to.be.equals("BETWEEN_MIN_MAX");
      expect(validationResult.errorMessage).to.be.equals("");
    });
  });
});
