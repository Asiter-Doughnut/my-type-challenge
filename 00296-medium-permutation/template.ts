type Permutation<T, K = T> = K[] extends never[]
  ? []
  : K extends K
  ? [K, ...Permutation<Exclude<T, K>>]
  : never;
