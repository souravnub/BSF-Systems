const tailwindConfig = require("../../tailwind.config");
const resolveConfig = require("tailwindcss/resolveConfig");

const { theme } = resolveConfig(tailwindConfig);
export default theme;
