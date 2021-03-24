import { Entity } from "./entity.model";
import { Injectable } from "@angular/core";
import { Adapter } from "./adapter";
import { MaterialIcon } from "./material-icon.model";

export class Device {
  constructor(
    public id: number,
    public key: string,
    public macAddress: string,
    public entities: Entity[],
    public displayName?: string,
    public icon?: MaterialIcon
  ) {
  }
}

@Injectable()
export class DeviceAdapter implements Adapter<Device> {
  adapt(item: any): Device {
    return new Device(item.id, item.key, item.macAddress, item.entities, item.displayName, item.icon);
  }
}
