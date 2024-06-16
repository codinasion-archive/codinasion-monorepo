# `@codinasion/eslint-config`

ESLint configurations for Codinasion projects.

![NPM Version](https://img.shields.io/npm/v/%40codinasion%2Feslint-config?color=33cd56&logo=npm) ![Downloads](https://img.shields.io/npm/dm/%40codinasion%2Feslint-config?logo=docusign&label=Downloads&logoColor=white) ![LICENSE](https://img.shields.io/npm/l/%40codinasion%2Feslint-config?logo=googledocs&logoColor=white&label=LICENSE)

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/codinasion/master/assets/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>

## Installation

```bash
# if you're using pnpm
pnpm add @codinasion/eslint-config

# or, if you're using npm
npm install @codinasion/eslint-config

# or, if you're using yarn
yarn add @codinasion/eslint-config
```

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/codinasion/master/assets/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>

## Usage

Add the following to your `.eslintrc.js` file:

```typescript
/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@codinasion/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
```

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/codinasion/master/assets/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>

## Sponsors & Backers

![Sponsors](https://raw.githubusercontent.com/codinasion/sponsors/sponsors/sponsors.svg)

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/codinasion/master/assets/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>

<br/>

<p align="center">
Made with 💖 by <a href="https://github.com/codinasion"><b>Codinasion</b></a>
</p>

<div align="center">
  <img src="https://raw.githubusercontent.com/codinasion/codinasion/master/assets/rainbow-hr.png" alt="rainbow hr" width="100%" height="70%">
</div>
