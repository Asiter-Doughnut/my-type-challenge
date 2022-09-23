type MyReadonly2<T, K extends keyof T = keyof T> =
    { readonly [P in keyof T as P extends K ? P : never]: T[P] }
    &
    { [U in keyof T as U extends K ? never : U]: T[U] }