# ✨ TypeScript Code Formatter

A beginner-friendly, from-scratch code formatter written in TypeScript using the TypeScript Compiler API. This tool parses `.js`, `.ts`, or `.tsx` files and applies simple formatting rules, such as:

- Inserting newlines after semicolons when multiple statements appear on the same line
- Detecting multi-declaration `let`/`const`/`var` blocks
- Parsing JSX in `.tsx` files
- Identifying JSX return expressions where the closing parenthesis is on the same line as the JSX

---

## 🚀 Features

- ✅ Built entirely with the TypeScript Compiler API (no Prettier)
- ✅ Parses and prints AST node metadata for learning/debugging
- ✅ Detects multiple top-level statements on the same line
- ✅ Compatible with JSX and TSX files
- 🛠️ More rules coming soon (e.g., auto line breaks, indentation)

---

## 📦 Installation

```bash
git clone https://github.com/your-username/ts-code-formatter.git
cd ts-code-formatter
npm install
