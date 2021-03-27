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
    public icon?: MaterialIcon | null
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
      item.entities.map(this.entityAdapter.adapt),
      item.displayName,
      this.materialIconAdapter.adapt(item.icon)
    );
  }
}
