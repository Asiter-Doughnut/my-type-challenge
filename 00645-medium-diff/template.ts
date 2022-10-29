type Diff<O, O1> = {
  [T in keyof (O & O1) as T extends keyof (O | O1) ? never : T]: (O & O1)[T];
};
