export interface Adapter<T> {
  adapt(item: any): Nullable<T>;
}
