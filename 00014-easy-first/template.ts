type First<T extends any[]> = T extends [infer head, ...infer _tail]
  ? head
  : never;
