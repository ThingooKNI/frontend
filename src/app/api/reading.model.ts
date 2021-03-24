import { Injectable } from "@angular/core";
import { Adapter } from "./adapter";

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
  adapt(item: any): Reading {
    return new Reading(item.id, item.value, new Date(item.timestamp));
  }
}
