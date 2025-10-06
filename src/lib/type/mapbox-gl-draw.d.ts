declare module "@mapbox/mapbox-gl-draw" {
  import type { IControl, Map } from "mapbox-gl";

  export default class MapboxDraw implements IControl {
    constructor(options?: any);
    getAll(): any;
    getSelected(): any;
    deleteAll(): void;
    changeMode(mode: string): void;
    addControl(map: Map): void;
    onAdd(map: Map): HTMLElement;
    onRemove(map: Map): void;
  }
}
