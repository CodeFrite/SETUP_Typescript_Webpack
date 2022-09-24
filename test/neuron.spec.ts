import assert from "assert";

let Neuron = require("../src/models/neuron");

describe("> NeuronRelu @neuron.ts ", function () {
  describe("+ Drawable ...", function () {
    let n = new Neuron.NeuronRelu(10, 10);

    it("... should have a property 'x'", function () {
      assert(n.x !== undefined, "--- should have a property 'x' ---");
    });

    it("... should have a property 'y'", function () {
      assert(n.y !== undefined, "--- should have a property 'y' ---");
    });

    it("... should have a function 'activate'", function () {
      assert(
        typeof n.activate === "function",
        "--- should have a function 'activate' ---"
      );
    });
  });

  describe("+ Selectable ...", function () {
    let n = new Neuron.NeuronRelu(10, 10);
    console.log(n.select());

    it("... should have a property 'selected'", function () {
      assert(
        n.selected !== undefined,
        "--- should have a property 'selected' ---"
      );
    });

    it("... should have a function 'select'", function () {
      assert(
        n.select === "function",
        "--- should have a function 'selected' ---"
      );
    });
  });
});
