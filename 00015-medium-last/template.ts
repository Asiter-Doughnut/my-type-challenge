type Last<T extends any[]> = T extends [...infer _Head, infer Tail] ? Tail : never;