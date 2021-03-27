import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class MaterialIcon {
  constructor(
    public name: string,
    public iconKey: string,
    public displayName: string
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class MaterialIconAdapter implements Adapter<MaterialIcon> {
  adapt(item: any): MaterialIcon | null {
    return item
      ? new MaterialIcon(item.name, item.iconKey, item.displayName)
      : null;
  }
}
