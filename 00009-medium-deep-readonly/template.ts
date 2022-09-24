type isObject<T> = T extends object ? T extends Function ? never : T : never;

type DeepReadonly<T> =
    T extends isObject<T> ? { readonly [K in keyof T]: DeepReadonly<T[K]> } : T


type DeepReadonly2<T> = T extends object ? true : false;

type a = DeepReadonly2<() => {}>