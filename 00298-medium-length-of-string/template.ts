type LengthOfString<S extends string, Arr extends any[] = []> = S extends `${infer Head}${infer Tail}` ? LengthOfString<Tail, [...Arr, Head]> : Arr['length'];
