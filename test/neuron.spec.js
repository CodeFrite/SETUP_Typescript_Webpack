"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
let Neuron = require("../src/models/neuron");
describe("> NeuronRelu @neuron.ts ", function () {
    describe("+ Drawable ...", function () {
        let n = new Neuron.NeuronRelu(10, 10);
        console.log(n);
        it("... should have a property 'x'", function () {
            assert_1.default(n.x !== null, "--- NeuronRelu should have a 'x' property ---");
        });
        it("... should have a property 'y'", function () {
            assert_1.default(n.y !== null, "--- NeuronRelu should have a 'y' property ---");
        });
        it("... shouldn't have a property 'z'", function () {
            assert_1.default(n.z === null, "--- NeuronRelu shouldn't have a 'z' property ---");
        });
    });
});
//# sourceMappingURL=neuron.spec.js.map