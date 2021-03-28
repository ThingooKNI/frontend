import { Injectable } from '@angular/core';
import { Adapter } from './adapter';
import { MaterialIcon, MaterialIconAdapter } from './material-icon.model';

export class Entity {
  constructor(
    public id: number,
    public key: string,
    public type: string,
    public unitType: string,
    public unitDisplayName: string,
    public displayName?: string,
    public icon?: Nullable<MaterialIcon>
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class EntityAdapter implements Adapter<Entity> {
  constructor(private materialIconAdapter: MaterialIconAdapter) {}

  adapt(item: any): Nullable<Entity> {
    return new Entity(
      item.id,
      item.key,
      item.type,
      item.unitType,
      item.unitDisplayName,
      item.displayName,
      this.materialIconAdapter.adapt(item.icon)
    );
  }
}
