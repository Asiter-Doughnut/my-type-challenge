type KebabCase<S> = S extends `${infer Head}${infer Tail}` ?
    Tail extends Uncapitalize<Tail> ? `${Uncapitalize<Head>}${KebabCase<Tail>}` : `${Uncapitalize<Head>}-${KebabCase<Uncapitalize<Tail>>}`
    : S