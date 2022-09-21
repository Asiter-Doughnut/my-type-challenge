type Length<T extends { readonly [x: number]: any; readonly length: number }> =
  T["length"];
