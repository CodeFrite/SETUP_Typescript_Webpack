import { NeuronRelu } from "./models/neuron";

// Get canvas rendering context
var canvasElem = document.getElementById("canvasElem") as HTMLCanvasElement;
var ctx = canvasElem.getContext("2d");

if (!ctx) {
  Error("Couldn't get Canvas Rendering Context");
}

// Attach mouse click event listener to canvas
canvasElem.addEventListener("mousedown", (e) => addNeuron(e));

// Add a neuron to the neural network
var network: NeuronRelu[] = [];
function addNeuron(e: MouseEvent) {
  let n = new NeuronRelu(e.clientX, e.clientY);
  network.push(n);
  n.draw(ctx!);
}
