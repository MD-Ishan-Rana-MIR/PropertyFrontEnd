declare module "@mapbox/mapbox-gl-draw" {
  import type { IControl, Map } from "mapbox-gl";

  export default class MapboxDraw implements IControl {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(options?: any);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getAll(): any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getSelected(): any;
    deleteAll(): void;
    changeMode(mode: string): void;
    addControl(map: Map): void;
    onAdd(map: Map): HTMLElement;
    onRemove(map: Map): void;
  }
}
