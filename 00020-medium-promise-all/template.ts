// [1, 2, number]
type PromiseAwait<T extends any[]> = T extends [infer Head, ...infer Tail] ? [Head extends Promise<infer P> ? P : Head, ...PromiseAwait<Tail>] : T extends Promise<infer V> ? V : T;

declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<PromiseAwait<T>>