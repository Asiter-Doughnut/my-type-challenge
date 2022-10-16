type Permutation<T, U = T> = [T] extends [never]
  ? []
  : T extends never
  ? [ ]
  : [T,    ...Permutation<Exclude<U, T>>];
