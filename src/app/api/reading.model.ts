import { Injectable } from "@angular/core";
import { Adapter } from "./adapter";
import { MaterialIcon } from "./material-icon.model";

export class Reading {
  constructor(
    public id: number,
    public value: string,
    public timestamp: Date
  ) {
  }
}

@Injectable()
export class ReadingAdapter implements Adapter<Reading> {
  adapt(item: any): MaterialIcon | null {
    return new Reading(item.id, item.value, new Date(item.timestamp));
  }
}
