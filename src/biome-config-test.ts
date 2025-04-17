export const biomeConfigTest = {
	name: "biome-config-test",
	version: "0.0.1",
	description: "Biome config test",
	biome: "test",
	config: {
		test: {
			type: "string",
			default: "test",
		},
	},
	rules: [
		{
			name: "test-rule",
			description: "Test rule",
			type: "string",
			default: "test",
		},
	],
};
