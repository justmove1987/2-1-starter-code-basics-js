import { describe, it, mock } from "node:test";
import assert from "node:assert/strict";
import {
  printNamesWithForEach,
  printNamesWithForOf,
  evenNumbers,
  printKeyValuePairs,
  printUntilFive,
  printNamesWithIndex,
} from "../script.js";

describe("Array loops", () => {
  describe("Nivell 1 - Exercici 1 - printNamesWithForEach", () => {
    it("forEach should log each name", () => {
      const spy = mock.method(console, "log", () => {});
      printNamesWithForEach();
      assert.deepStrictEqual(spy.mock.calls[0].arguments, ["Anna"]);
      assert.deepStrictEqual(spy.mock.calls[1].arguments, ["Bernat"]);
      assert.deepStrictEqual(spy.mock.calls[2].arguments, ["Clara"]);
      mock.reset();
    });

    describe("Nivell 1 - Exercici 2 - for-of", () => {
      it("should log each name", () => {
        const spy = mock.method(console, "log", () => {});
        printNamesWithForOf();
        assert.deepStrictEqual(spy.mock.calls[0].arguments, ["Anna"]);
        assert.deepStrictEqual(spy.mock.calls[1].arguments, ["Bernat"]);
        assert.deepStrictEqual(spy.mock.calls[2].arguments, ["Clara"]);
        mock.reset();
      });
    });
    describe("Nivell 1 - Exercici 3 - even numbers", () => {
      it("should contain only even numbers", () => {
        assert.deepStrictEqual(evenNumbers, [2, 4, 6]);
      });
    });
  });

  describe("Nivell 2 - Exercici 4 - for in", () => {
    it("for-in should log each key-value pair", () => {
      const spy = mock.method(console, "log", () => {});
      printKeyValuePairs();
      assert.deepStrictEqual(spy.mock.calls[0].arguments, ["name: Dana"]);
      assert.deepStrictEqual(spy.mock.calls[1].arguments, ["age: 25"]);
      assert.deepStrictEqual(spy.mock.calls[2].arguments, ["city: Barcelona"]);
      mock.reset();
    });
  });
  describe("Nivell 2 - Exercici 5 - for of with break", () => {
    it("for-of should log numbers until 5", () => {
      const spy = mock.method(console, "log", () => {});
      printUntilFive();
      assert.deepStrictEqual(spy.mock.calls[0].arguments, [1]);
      assert.deepStrictEqual(spy.mock.calls[1].arguments, [2]);
      assert.deepStrictEqual(spy.mock.calls[2].arguments, [3]);
      assert.deepStrictEqual(spy.mock.calls[3].arguments, [4]);
      assert.deepStrictEqual(spy.mock.calls[4], undefined);
      mock.reset();
    });
  });
  describe("Nivell 2 - Exercici 5 - for of with index", () => {
    it("for-of with index should log each name with its index", () => {
      const spy = mock.method(console, "log", () => {});
      printNamesWithIndex();
      assert.deepStrictEqual(spy.mock.calls[0].arguments, ["0: Anna"]);
      assert.deepStrictEqual(spy.mock.calls[1].arguments, ["1: Bernat"]);
      assert.deepStrictEqual(spy.mock.calls[2].arguments, ["2: Clara"]);
      mock.reset();
    });
  });
});
