
type Pop<T extends any[]> = T extends [...infer Head, infer _Tail] ? Head : []