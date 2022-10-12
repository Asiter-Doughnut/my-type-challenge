type Flatten<T extends any[], Arr extends any[] = []> = T extends [
    infer F,
    ...infer P
]
    ? F extends any[]
    ? Flatten<[...F, ...P], Arr>
    : Flatten<[...P], [...Arr, F]>
    : Arr;
