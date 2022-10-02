type TrimLeft<S extends string> = S extends ` ${infer T}`
  ? TrimLeft<T>
  : S extends `\n\t${infer T}`
  ? TrimLeft<T>
  : S;
