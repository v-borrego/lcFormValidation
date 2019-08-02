import { FieldValidationResult } from "../../entities";
import { number, NumberParams } from "../number";

const errorMessage = "The value provided must be a number";
const type = "NUMBER";

describe("[number] validation rule tests =>", () => {
  describe("When validating a non number value", () => {
    it("should return true if value is null", () => {
      // Arrange
      const value = null;
      const vm = undefined;
      const customParams: NumberParams = {
        decimalPlaces: 0
      };

      // Act
      const validationResult = number(
        value,
        vm,
        customParams
      ) as FieldValidationResult;

      // Assert
      expect(validationResult.succeeded).to.be.true;
      expect(validationResult.type).to.be.equals(type);
      expect(validationResult.errorMessage).to.be.equals("");
    });

    it("should return true if value is undefined", () => {
      // Arrange
      const value = undefined;
      const vm = undefined;
      const customParams: NumberParams = {
        decimalPlaces: 0
      };

      // Act
      const validationResult = number(
        value,
        vm,
        customParams
      ) as FieldValidationResult;

      // Assert
      expect(validationResult.succeeded).to.be.true;
      expect(validationResult.type).to.be.equals(type);
      expect(validationResult.errorMessage).to.be.equals("");
    });

    it("should return false if value is false", () => {
      // Arrange
      const value = false;
      const vm = undefined;
      const customParams: NumberParams = {
        decimalPlaces: 0
      };

      // Act
      const validationResult = number(
        value,
        vm,
        customParams
      ) as FieldValidationResult;

      // Assert
      expect(validationResult.succeeded).to.be.false;
      expect(validationResult.type).to.be.equals(type);
      expect(validationResult.errorMessage).to.be.equals(errorMessage);
    });

    it("should return false if value is true", () => {
      // Arrange
      const value = true;
      const vm = undefined;
      const customParams: NumberParams = {
        decimalPlaces: 0
      };

      // Act
      const validationResult = number(
        value,
        vm,
        customParams
      ) as FieldValidationResult;

      // Assert
      expect(validationResult.succeeded).to.be.false;
      expect(validationResult.type).to.be.equals(type);
      expect(validationResult.errorMessage).to.be.equals(errorMessage);
    });

    it("should return false if typeof value is string", () => {
      // Arrange
      const value = "hi test!";
      const vm = undefined;
      const customParams: NumberParams = {
        decimalPlaces: 0
      };

      // Act
      const validationResult = number(
        value,
        vm,
        customParams
      ) as FieldValidationResult;

      // Assert
      expect(validationResult.succeeded).to.be.false;
      expect(validationResult.type).to.be.equals(type);
      expect(validationResult.errorMessage).to.be.equals(errorMessage);
    });

    it("should return false if typeof value is object", () => {
      // Arrange
      const value = {};
      const vm = undefined;
      const customParams: NumberParams = {
        decimalPlaces: 0
      };

      // Act
      const validationResult = number(
        value,
        vm,
        customParams
      ) as FieldValidationResult;

      // Assert
      expect(validationResult.succeeded).to.be.false;
      expect(validationResult.type).to.be.equals(type);
      expect(validationResult.errorMessage).to.be.equals(errorMessage);
    });

    it("should return true if value is a valid decimal string", () => {
      // Arrange
      const value = "01.42";
      const vm = undefined;
      const customParams: NumberParams = {
        decimalPlaces: 2
      };

      // Act
      const validationResult = number(
        value,
        vm,
        customParams
      ) as FieldValidationResult;

      // Assert
      expect(validationResult.succeeded).to.be.true;
      expect(validationResult.type).to.be.equals(type);
      expect(validationResult.errorMessage).to.be.equals("");
    });

    it("should return false if value is not a valid decimal string", () => {
      // Arrange
      const value = "0.423";
      const vm = undefined;
      const customParams: NumberParams = {
        decimalPlaces: 2
      };

      // Act
      const validationResult = number(
        value,
        vm,
        customParams
      ) as FieldValidationResult;

      // Assert
      expect(validationResult.succeeded).to.be.false;
      expect(validationResult.type).to.be.equals(type);
      expect(validationResult.errorMessage).to.be.equals(errorMessage);
    });
  });

  describe("When validating a number value", () => {
    it("should return true if value is integer", () => {
      // Arrange
      const value = 1;
      const vm = undefined;
      const customParams: NumberParams = {
        decimalPlaces: 2
      };

      // Act
      const validationResult = number(
        value,
        vm,
        customParams
      ) as FieldValidationResult;

      // Assert
      expect(validationResult.succeeded).to.be.true;
      expect(validationResult.type).to.be.equals(type);
      expect(validationResult.errorMessage).to.be.equals("");
    });

    it("should return true if value is a valid decimal", () => {
      // Arrange
      const value = 0.42;
      const vm = undefined;
      const customParams: NumberParams = {
        decimalPlaces: 2
      };

      // Act
      const validationResult = number(
        value,
        vm,
        customParams
      ) as FieldValidationResult;

      // Assert
      expect(validationResult.succeeded).to.be.true;
      expect(validationResult.type).to.be.equals(type);
      expect(validationResult.errorMessage).to.be.equals("");
    });

    it("should return false if value is not a valid decimal", () => {
      // Arrange
      const value = 0.423;
      const vm = undefined;
      const customParams: NumberParams = {
        decimalPlaces: 2
      };

      // Act
      const validationResult = number(
        value,
        vm,
        customParams
      ) as FieldValidationResult;

      // Assert
      expect(validationResult.succeeded).to.be.false;
      expect(validationResult.type).to.be.equals(type);
      expect(validationResult.errorMessage).to.be.equals(errorMessage);
    });
  });
});
