import { Entity, EntityAdapter } from './entity.model';
import { Injectable } from '@angular/core';
import { Adapter } from './adapter';
import { MaterialIcon, MaterialIconAdapter } from './material-icon.model';

export class Device {
  constructor(
    public id: number,
    public key: string,
    public macAddress: string,
    public entities: Entity[],
    public displayName?: string,
    public icon?: Nullable<MaterialIcon>
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class DeviceAdapter implements Adapter<Device> {
  constructor(
    private entityAdapter: EntityAdapter,
    private materialIconAdapter: MaterialIconAdapter
  ) {}

  adapt(item: any): Device {
    return new Device(
      item.id,
      item.key,
      item.macAddress,
      item.entities.map((entity: any) => this.entityAdapter.adapt(entity)),
      item.displayName,
      this.materialIconAdapter.adapt(item.icon)
    );
  }
}
