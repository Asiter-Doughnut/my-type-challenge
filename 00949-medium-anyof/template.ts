type AnyOf<T extends readonly any[]> = T[number] extends
  | 0
  | ""
  | false
  | []
  | Record<PropertyKey, never>
  | undefined
  | null
  ? false
  :  true;
