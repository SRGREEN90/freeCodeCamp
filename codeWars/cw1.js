var a = "code";
var b = "wa.rs";
var name = a + b;

const { assert } = require("chai")

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(name, "codewa.rs");
    })
  })