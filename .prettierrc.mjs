/** @type {import("prettier").Config} */
export default {
	printWidth: 100,
  tabWidth: 2,
	useTabs: false,
	singleQuote: true,
	trailingComma: "es5",
	bracketSpacing: true,
	arrowParens: "always",
	htmlWhitespaceSensitivity: "ignore",
	plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
	overrides: [
		{
			files: ["**/*.astro"],
			options: {
				parser: "astro",
			},
		},
	],
};
