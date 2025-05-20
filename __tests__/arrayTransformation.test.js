import { describe, it, mock } from "node:test";
import assert from "node:assert/strict";
import {
  squareNumbersArray,
  evenNumbersArray,
  firstGreaterThan10,
  totalCalculated,
  calculateDoubleGreaterThan10NumbersAddition,
  everyGreaterThan10,
  someGreaterThan10,
} from "../script.js";

describe("Array transformations", () => {
  describe("Nivell 1 - Exercici 1 - squareNumbersArray", () => {
    it("should contain the squares of the numbers", () => {
      assert.deepStrictEqual(squareNumbersArray, [1, 4, 9, 16]);
    });
  });

  describe("Nivell 1 - Exercici 2 - evenNumbersArray", () => {
    it("should contain only even numbers", () => {
      assert.deepStrictEqual(evenNumbersArray, [2, 4]);
    });
  });
  describe("Nivell 1 - Exercici 3 - firstGreaterThan10", () => {
    it("should find the first number greater than 10", () => {
      assert.deepStrictEqual(firstGreaterThan10, 11);
    });
  });
  describe("Nivell 1 - Exercici 4 - totalCalculated", () => {
    it("should be the sum of all numbers", () => {
      assert.strictEqual(totalCalculated, 49);
    });
  });
  describe("Nivell 2 - Exercici 5 - calculateDoubleGreaterThan10NumbersAddition", () => {
    it("should return the correct sum", () => {
      assert.strictEqual(
        calculateDoubleGreaterThan10NumbersAddition([
          1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9,
        ]),
        130
      );
    });
  });

  describe("Nivell 3 - Exercici 6 - everyGreaterThan10 & someGreaterThan10", () => {
    it("should be true for all and some", () => {
      assert.strictEqual(everyGreaterThan10, true);
      assert.strictEqual(someGreaterThan10, true);
    });
  });
});

