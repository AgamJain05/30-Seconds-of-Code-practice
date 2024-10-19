//Regex

const regexp = /^abc$/;
console.log(regexp.test('abcd')); // true


// Exact String Match: Matches the exact string using anchors (^, $).
// Match Empty String: Matches an empty string with ^$.
// Match Whitespace Sequences: Uses \s+ to match one or more whitespace characters.
// Match Line Breaks: Matches newlines, carriage returns, or both with \r|\n|\r\n.
// Match Non-Word Characters: Negates word (\w) and whitespace (\s) characters.
// Match Alphanumeric, Dashes, and Hyphens: Matches alphanumeric characters, dashes, and underscores.
// Match Letters and Whitespaces: Matches letters and whitespace characters only.
// Pattern Not Included: Excludes specific patterns using negative lookaheads (?!).
// Text Inside Brackets: Captures text between parentheses, square, or curly brackets.
// Validate GUID/UUID: Validates GUID/UUID format.
// Validate Date Format (DD/MM/YYYY): Matches date format in DD/MM/YYYY.
// Chunk String into N-Size Chunks: Splits a string into chunks of size n.