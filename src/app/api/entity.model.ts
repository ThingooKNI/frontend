import { Injectable } from '@angular/core';
import { Adapter } from './adapter';
import { MaterialIcon, MaterialIconAdapter } from './material-icon.model';

export enum EntityType {
  SENSOR = 'SENSOR',
  ACTUATOR = 'ACTUATOR',
}

export enum UnitType {
  INTEGER = 'INTEGER',
  DECIMAL = 'DECIMAL',
  STRING = 'STRING',
  BOOLEAN = 'BOOLEAN',
}

export class Entity {
  constructor(
    public id: number,
    public key: string,
    public type: EntityType,
    public unitType: UnitType,
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
    return item
      ? new Entity(
          item.id,
          item.key,
          EntityType[item.type as keyof typeof EntityType],
          UnitType[item.unitType as keyof typeof UnitType],
          item.unitDisplayName,
          item.displayName,
          this.materialIconAdapter.adapt(item.icon)
        )
      : null;
  }
}
