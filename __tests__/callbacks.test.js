import { describe, it, mock } from "node:test";
import assert from "node:assert/strict";
import {
  processNumber,
  calculator,
  waitAndGreet,
  processElements,
  processString,
} from "../script.js";

describe("Exercici callbacks", () => {
  describe("Nivell 1 - Exercici 1 - processNumber", () => {
    it("should call the callback with the number", () => {
      const mockCallback = mock.fn();
      processNumber(5, mockCallback);
      assert.deepStrictEqual(mockCallback.mock.calls[0].arguments, [5]);
    });
  });

  describe("Nivell 1 - Exercici 2 - calculator", () => {
    it("should call the callback with the sum of two numbers", () => {
      const addCallback = (a, b) => a + b;
      assert.strictEqual(calculator(2, 3, addCallback), 5);
    });
  });

  describe("Nivell 2 - Exercici 3 - waitAndGreet", () => {
    it("should call the callback after 2 seconds", () => {
      const mockCallback = mock.fn();
      mock.timers.enable({ apis: ["setTimeout"] });
      waitAndGreet("Dana", mockCallback);
      mock.timers.tick(2000);
      assert.deepStrictEqual(mockCallback.mock.calls[0].arguments, ["Dana"]);
      mock.timers.reset();
      mock.reset();
    });
  });

  describe("Nivell 2 - Exercici 4 - processElements", () => {
    it("should call the callback for each element", () => {
      const mockCallback = mock.fn();
      processElements([1, 2, 3], mockCallback);
      assert.strictEqual(mockCallback.mock.calls.length, 3);
    });
  });
  describe("Nivell 3 - Exercici 5 - processString", () => {
    it("should call the callback with the uppercase string", () => {
      const mockCallback = mock.fn();
      processString("hola", mockCallback);
      assert.deepStrictEqual(mockCallback.mock.calls[0].arguments, ["HOLA"]);
    });
  });
});

