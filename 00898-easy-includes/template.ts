type myEqual<T, U> = (<G>() => G extends T ? 1 : 2) extends (<G>() => G extends U ? 1 : 2) ? true : false;

type Includes<T extends readonly any[], U> = T extends [infer Head, ...infer Tail] ? myEqual<Head, U> extends true ? true : Includes<Tail, U> : false;
