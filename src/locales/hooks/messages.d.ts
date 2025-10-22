// 🧠 This utility type recursively extracts all possible nested keys from an object type
// and returns them as dot-separated string paths.
//
// Example:
// type Example = { a: { b: { c: string } }, d: string };
// ExtractRecursiveKeys<Example> ➝ "a" | "a.b" | "a.b.c" | "d"
//
// - If the value is a string, it returns just the key.
// - If the value is an object, it recursively appends nested keys with the `Separator` (default: ".").
// - Useful for building type-safe i18n key paths, form field names, or deep object references.

export type ExtractRecursiveKeys<
  KeyPath,
  Separator extends string = "."
> = KeyPath extends object
  ? {
      [Key in keyof KeyPath]: KeyPath[Key] extends string
        ? Key
        : `${Key}${Separator}${ExtractRecursiveKeys<KeyPath[Key], Separator>}`;
    }[keyof KeyPath]
  : KeyPath;
