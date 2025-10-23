import { config } from "@repo/eslint-config/react-internal";

/** @type {import("eslint").Linter.Config} */
export default [
  ...config,
  {
    rules: {
      // Disable prop-types for TypeScript components
      "react/prop-types": "off",
    },
  },
];
