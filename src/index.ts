export type TypedMap<T> = {
  get: <K extends keyof T, L extends T>(k:K) => T[K];
  set: <K extends keyof T, L extends T>(k:K, v:T[K]) => TypedMap<T>;
}
