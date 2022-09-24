type Chainable<option = {}> = {
    option<K extends string, V>(key: K, value: V): Chainable<option & { [S in K]: V }>;
    get(): option
}
