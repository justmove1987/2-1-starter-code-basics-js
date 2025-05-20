import { describe, it, mock } from "node:test";
import assert from "node:assert/strict";
import {
  addTwoNumbers,
  randomNumber,
  Person,
  printNumbers,
  printDelayedMessage,
  } from "../script.js";

describe("Exercici Funcions Fletxa", () => {
  describe("Nivell 1 - Exercici 1 - addTwoNumbers", () => {
    it("should return 3 for 1 + 2", () => {
      assert.strictEqual(addTwoNumbers(1, 2), 3);
    });

    it("should return 4 for -1 + 5", () => {
      assert.strictEqual(addTwoNumbers(-1, 5), 4);
    });

    it("should return 0 for 0 + 0", () => {
      assert.strictEqual(addTwoNumbers(0, 0), 0);
    });
  });

  describe("Nivell 1 - Exercici 2 - randomNumber", () => {
    it("should return a number between 0 and 100", () => {
      const number = randomNumber();
      assert.ok(number >= 0 && number <= 100);
    });

    it("should return an integer", () => {
      const number = randomNumber();
      assert.strictEqual(Number.isInteger(number), true);
    });
  });

  describe("Nivell 1 - Exercici 3 - Person", () => {
    it("should log the correct greeting", (t) => {
      const person = new Person("Dana");
      const spy = mock.method(console, "log", () => {});
      person.greet();
      assert.strictEqual(spy.mock.calls.length, 1);
      assert.deepStrictEqual(spy.mock.calls[0].arguments, ["Hola, Dana"]);

      mock.reset();
    });
  });
  describe("Nivell 2 - Exercici 4 - printNumbers", () => {
    it("should log each number", () => {
      const spy = mock.method(console, "log", () => {});
      printNumbers([1, 2, 3]);
      assert.deepStrictEqual(spy.mock.calls[0].arguments, [1]);
      assert.deepStrictEqual(spy.mock.calls[1].arguments, [2]);
      assert.deepStrictEqual(spy.mock.calls[2].arguments, [3]);
      mock.reset();
    });
  });
  describe("Nivell 3 - Exercici 4 - printDelayedMessage", () => {
    it("should log after 3 seconds", () => {
      const spy = mock.method(console, "log", () => {});
      mock.timers.enable({ apis: ["setTimeout"] });
      printDelayedMessage();
      mock.timers.tick(3000);
      assert.deepStrictEqual(spy.mock.calls[0].arguments, [
        "Missatge després de 3 segons",
      ]);
      mock.timers.reset();
      mock.reset();
    });
  });
});
