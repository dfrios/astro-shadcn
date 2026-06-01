/** @type {import("prettier").Config} */
export default {
	printWidth: 100,
	useTabs: false,
	singleQuote: true,
	tabWidth: 2,
	bracketSpacing: true,
	htmlWhitespaceSensitivity: "ignore",
	semi: true,
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

