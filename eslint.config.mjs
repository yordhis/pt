import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default tseslint.config(
  {
    files: ["**/*.ts", "*.test.js","*.spec.js"],
    extends: [eslint.configs.recommended, ...tseslint.configs.recommended],
    rules: {
      "semi": ["error", "never"],
      "quotes": ["error", "single"],
      "@typescript-eslint/no-explicit-any": ["warn"]
    },
  }
);
