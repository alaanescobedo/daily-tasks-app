// Utils to no lost the type of the value
// https://github.com/microsoft/TypeScript/issues/35101#issue-522767105
export const objectValues = <T>(obj: T): T extends ArrayLike<infer U> ? U[] : Array<T[keyof T]> => {
  return Object.values(obj as any) as any
}

export const objectEntries = <T>(obj: T): T extends ArrayLike<infer U> ? Array<[string, U]> : Array<{ [K in keyof T]: [K, T[K]] }[keyof T]> => {
  return Object.entries(obj as any) as any
}

export const objectKeys = <T>(obj: T): (Array<keyof T> & string[]) => {
  return Object.keys(obj as any) as any
}

// Yes I copy paste this :c, I'm trying to understand it
