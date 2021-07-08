import { addDecorator } from "@storybook/react";
import GlobalStyle from "../src/components/00_tokens/global-style";

addDecorator((story) => (
	<>
		<GlobalStyle />
		{story()}
	</>
));

export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	options: {
		storySort: {
			order: [
				"Introduction",
				"Components",
				[
					"About components",
					"Tokens",
					"Arrangements",
					[
						"Layout",
						"Page Section",
						"Heading",
						"Paragraph",
						"Form",
						"Button Group",
					],
					"Patterns",
					[
						"Icon",
						"Link",
						"Button",
						"Text Input",
						"Textarea Input",
						"Select Input",
						"Checkbox Input",
						"Radiobutton Input",
					],
					"Modules",
					"Pages",
				],
			],
		},
	},
};
