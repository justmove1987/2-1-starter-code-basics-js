import { describe, it, mock } from "node:test";
import assert from "node:assert/strict";
import {
  arrayNumbers3,
  addRestParameters,
  citizenPlusCity,
  rest,
  resultSpreadArgumentsToFunction,
  mergeObject,
} from "../script.js";

describe("Rest & Spread operators", () => {
  describe("Nivell 1 - Exercici 1 - arrayNumbers3", () => {
    it("should contain all elements from arrayNumbers1 and arrayNumbers2", () => {
      assert.deepStrictEqual(arrayNumbers3, [1, 2, 3, 4, 5, 6]);
    });
  });
    describe("Nivell 1 - Exercici 1 - addRestParameters", () => {
      it("should return the sum of all arguments", () => {
        assert.strictEqual(addRestParameters(1, 2, 3), 6);
      });
    });
  });

  describe("Nivell 2 - Exercici 3 - citizenPlusCity", () => {
    it("should be a copy of citizen with an additional property", () => {
      assert.deepStrictEqual(citizenPlusCity, {
        name: "Dana",
        age: 25,
        city: "Barcelona",
      });
    });
  });

  describe("Nivell 2 - Exercici 4 -rest", () => {
    it("rest should contain the remaining elements", () => {
      assert.deepStrictEqual(rest, [3, 4, 5]);
    });
  });

  describe("Nivell 3 - Exercici 5 - resultSpreadArgumentsToFunction", () => {
    it("should be the sum of the arrayNumbers elements", () => {
      assert.strictEqual(resultSpreadArgumentsToFunction, 6);
    });
  });

  describe("Nivell 3 - Exercici 6 - objecteFusionat", () => {
    it("should contain properties from both objects", () => {
      assert.deepStrictEqual(mergeObject, { name: "Dana", age: 25 });
    });
  });

