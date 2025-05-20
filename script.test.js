import { describe, it, mock } from "node:test";
import assert from "node:assert/strict";
import {
  addTwoNumbers,
  randomNumber,
  Person,
  printNumbers,
  printDelayedMessage,
  canDrive,
  guessTheBigger,
  guessTypeNumber,
  findTheMaxNumber,
  guessOddOrEvenNumber,
  processNumber,
  calculator,
  waitAndGreet,
  processElements,
  processString,
  arrayNumbers3,
  addRestParameters,
  citizenPlusCity,
  rest,
  resultSpreadArgumentsToFunction,
  mergeObject,
  squareNumbersArray,
  evenNumbersArray,
  firstGreaterThan10,
  totalCalculated,
  calculateDoubleGreaterThan10NumbersAddition,
  everyGreaterThan10,
  someGreaterThan10,
  printNamesWithForEach,
  printNamesWithForOf,
  evenNumbers,
  printKeyValuePairs,
  printUntilFive,
  printNamesWithIndex,
  myFirstPromise,
  useMyFirstPromise,
  promiseWithReject,
  asyncAwaitFunction,
  tryCatchFunction,
  promise1,
  promise2,
  allPromises,
} from "./script.js";
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

describe("Exercici operador ternario", () => {
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

describe("Array transformations", () => {
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

describe("Promises & Async/Await", () => {
  describe("Nivell 1 - Exercise 1 - My First Promise", () => {
    it('promesa should resolve with "Hola, món"', async () => {
      const result = await myFirstPromise;
      assert.strictEqual(result, "Hola, món");
    });
  });
  describe("Nivell 1 - Exercise 2 - Then Method", () => {
    it('promesa should resolve with "Hola, món"', async () => {
      const spy = mock.method(console, "log", () => {});
      await useMyFirstPromise();
      assert.deepStrictEqual(spy.mock.calls[0].arguments, ["Hola, món"]);
    });
  });
  describe("Nivell 1 - Exercise 3 - Promise With Reject", () => {
    it('promiseWithReject should resolve for "Hola"', async () => {
      const result = await promiseWithReject("Hola");
      assert.strictEqual(result, "Correcte");
    });
    it("promiseWithReject should reject for other inputs", async () => {
      const error = new Error({ message: "Erroni" });
      await assert.rejects(promiseWithReject("Altres"), error.message);
    });
  });
  describe("Nivell 1 - Exercise 4 - asyncAwaitFunction", () => {
    it('asyncAwaitFunction should log "Hola, món"', async () => {
      const spy = mock.method(console, "log", () => {});
      await asyncAwaitFunction();
      assert.deepStrictEqual(spy.mock.calls[0].arguments, ["Hola, món"]);
      mock.reset();
    });
  });
  describe("Nivell 2 - Exercise 5 - try/catch", () => {
    it('tryCatch should log "Correcte"', async () => {
      const spy = mock.method(console, "log", () => {});
      await tryCatchFunction("Hola");
      assert.deepStrictEqual(spy.mock.calls[0].arguments, ["Correcte"]);
      mock.reset();
    });
    it("tryCatch should reject for other inputs", async () => {
      const error = new Error({ message: "Erroni" });

      await assert.rejects(tryCatchFunction("Altres"), error.message);
      mock.reset();
    });
  });

  describe("Nivell 3 - Exercise 6 - Promise.all", () => {
    it("all promises should resolve with both results", async () => {
      const result = await allPromises;
      assert.deepStrictEqual(result, ['Primera','Segona']);
    });
  });
});
