import { describe, it, mock } from "node:test";
import assert from "node:assert/strict";
import {
  myFirstPromise,
  useMyFirstPromise,
  promiseWithReject,
  asyncAwaitFunction,
  tryCatchFunction,
  allPromises,
} from "../script.js";
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
