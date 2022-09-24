import { Drawable, Selectable } from "./../utils/types";
import { activationFnType } from "../utils/types";
import { UX_NEURON_RADIUS } from "../utils/constants";

abstract class Neuron implements Drawable, Selectable {
  x: number;
  y: number;
  selected: boolean = true;
  abstract value: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  select(): void {
    this.selected != this.selected;
  }

  abstract activate: activationFnType;
  abstract draw(ctx: CanvasRenderingContext2D): void;
}

export class NeuronRelu extends Neuron implements Neuron {
  value: number;
  constructor(x: number, y: number) {
    super(x, y);
    this.value = 0;
  }

  // ReLU : if x<=0 return 0 else return x
  activate: activationFnType = (inputSig: number) => {
    return inputSig <= 0 ? 0 : inputSig;
  };

  draw(ctx: CanvasRenderingContext2D): void {
    if (ctx) {
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = "black";
      ctx.arc(
        this.x - UX_NEURON_RADIUS / 2,
        this.y - UX_NEURON_RADIUS / 2,
        UX_NEURON_RADIUS,
        0,
        2 * Math.PI
      );
      ctx.stroke();
    }
  }
}
