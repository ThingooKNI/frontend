import { Injectable } from "@angular/core";
import { Adapter } from "./adapter";

export class MaterialIcon {
  constructor(
    public name: string,
    public iconKey: string,
    public displayName: string
  ) {
  }
}

@Injectable()
export class MaterialIconAdapter implements Adapter<MaterialIcon> {
  adapt(item: any): MaterialIcon {
    return new MaterialIcon(item.name, item.iconKey, item.displayName);
  }
}
