type ReplaceKeys<U, T, Y> = U extends infer R ? {
    [K in keyof R]: K extends T ? K extends keyof Y ? Y[K] : never : R[K]
} : U
