type TrimRight<S extends string> = S extends `${infer T}${"\n" | "\t" | " "}`
  ? TrimRight<T>
  : S;

type Trim<S extends string> = TrimLeft<TrimRight<S>>;
