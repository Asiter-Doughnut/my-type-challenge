type AppendArgument<Fn extends (...arg: any) => any, A> = Fn extends (
  ...arg: infer P
) => infer T
  ? (...arg: [...P, A]) => T
  : never;
