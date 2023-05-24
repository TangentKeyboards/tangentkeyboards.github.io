import presetEnv from "postcss-preset-env";
import fluid from "@lehoczky/postcss-fluid";

export default {
  plugins: [presetEnv({}), fluid({ min: 340, max: 1280 })],
};
