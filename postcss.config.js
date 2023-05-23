import presetEnv from "postcss-preset-env";
import fluid from "postcss-fluid";

export default {
  plugins: [presetEnv({}), fluid({ min: "340px", max: "1920px" })],
};
