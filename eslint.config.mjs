import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import prettier from "eslint-plugin-prettier";
import jsxA11y from "eslint-plugin-jsx-a11y";
import tsParser from "@typescript-eslint/parser";

// parsers
// const tsParser = tseslint.parser;
const astroParser = astro.parser;

export default defineConfig([
  // Global configuration
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // Base configs
  js.configs.recommended,
  tseslint.configs.recommended,

  // Prettier config
  {
    plugins: {
      prettier: prettier,
    },
    rules: {
      // disable warnings, since prettier should format on save
      "prettier/prettier": "off",
    },
  },

  // jsx-a11y for non-Astro files only (crashes on Astro parser output)
  {
    files: ["**/*.{tsx,ts,jsx,js}"],
    plugins: {
      "jsx-a11y": jsxA11y,
    },
    rules: {
      ...jsxA11y.configs.recommended.rules,
    },
  },

  // astro setup
  astro.configs.recommended,
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: [".astro"],
        sourceType: "module",
        ecmaVersion: "latest",
      },
    },
    rules: {
      "no-undef": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  },

  // Ignore patterns
  {
    ignores: [
      "dist/**",
      "**/*.d.ts",
      ".github/",
      ".agents/",
      ".qwen/"
    ],
  },
]);