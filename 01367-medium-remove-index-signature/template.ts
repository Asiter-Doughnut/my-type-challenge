type RemoveIndexSignature<T, K extends keyof T = keyof T> = {
    [K extends ?never: K]: T[K]
}
