import run from "@matthew/esbuild-config";
import { createRequire } from "module";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";

// CommonJS 방식으로 package.json을 불러오기 위해 createRequire 사용
const require = createRequire(import.meta.url);
const pkg = require("./package.json");

const config = {
  plugins: [vanillaExtractPlugin()],
};

run({ pkg, config });
