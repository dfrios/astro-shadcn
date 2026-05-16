/** @type {import("prettier").Config} */
export default {
	trailingComma: "es5",
	tabWidth: 2,
	semi: false,
	singleQuote: true,
	printWidth: 100,
	useTabs: true,
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
