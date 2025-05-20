import { describe, it, mock } from "node:test";
import assert from "node:assert/strict";
import {
  canDrive,
  guessTheBigger,
  guessTypeNumber,
  findTheMaxNumber,
  guessOddOrEvenNumber,
} from "../script.js";


describe("Exercici operador ternario", () => {
  describe("Nivell 1 - Exercici 1 - canDrive", () => {
    it('should return "Pots conduir" for age 18', () => {
      assert.strictEqual(canDrive(18), "Pots conduir");
    });

    it('should return "No pots conduir" for age 17', () => {
      assert.strictEqual(canDrive(17), "No pots conduir");
    });
  });
  describe("Nivell 1 - Exercici 2 - guessTheBigger", () => {
    it('should return "num1 és més gran" for 5 and 3', () => {
      assert.strictEqual(guessTheBigger(5, 3), "num1 és més gran");
    });

    it('should return "num2 és més gran" for 2 and 4', () => {
      assert.strictEqual(guessTheBigger(2, 4), "num2 és més gran");
    });
  });

  describe("Nivell 2 - Exercici 3 - guessTypeNumber", () => {
    it('should return "Positiu" for 5', () => {
      assert.strictEqual(guessTypeNumber(5), "Positiu");
    });

    it('should return "Negatiu" for -3', () => {
      assert.strictEqual(guessTypeNumber(-3), "Negatiu");
    });

    it('should return "Zero" for 0', () => {
      assert.strictEqual(guessTypeNumber(0), "Zero");
    });
  });

  describe("Nivell 2 - Exercici 4 - findTheMaxNumber", () => {
    it("should return 10 for 5, 10, 3", () => {
      assert.strictEqual(findTheMaxNumber(5, 10, 3), 10);
    });

    it("should return 7 for 1, 7, 4", () => {
      assert.strictEqual(findTheMaxNumber(1, 7, 4), 7);
    });
  });

  describe("Nivell 3 - Exercici 5 - guessOddOrEvenNumber", () => {
    it('should log "Parell" for even numbers and "Imparell" for odd numbers', () => {
      const spy = mock.method(console, "log", () => {});
      guessOddOrEvenNumber([1, 2, 3, 4]);
      assert.deepStrictEqual(spy.mock.calls[0].arguments, ["Imparell"]);
      assert.deepStrictEqual(spy.mock.calls[1].arguments, ["Parell"]);
      mock.reset();
    });
  });
});


