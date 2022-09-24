// Global types
export type activationFnType = (inputSig: number) => number;

// Behaviors

// Allows an element to be selected
export interface Selectable {
  selected: boolean;
  select(): void;
}

// Allows an element to draw itself to a canvas rendering context 2d
export interface Drawable {
  x: number;
  y: number;
  draw(ctx: CanvasRenderingContext2D): void;
}

// Allows an element to be dragged with the mouse
export interface Dragable {
  isDragged: boolean;
  beginDrag(mouseX: number, mouseY: number): void;
  drag(mouseX: number, mouseY: number): void;
  endDrag(mouseX: number, mouseY: number): void;
  updatePosition(mouseX: number, mouseY: number): void;
}

// Animate the element accros a certain number of frames (like a dashed neuron connection that slides)
export interface Animate {
  currentFrame: number;
  maxFrame: number;
  animate(frame: number): void;
}
