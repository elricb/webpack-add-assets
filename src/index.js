import fs from "fs";
import { RawSource } from "webpack-sources";

const NAME = "WebpackAddAssets";

class WebpackAddAssets {
  constructor(assets = {}) {
    this.options = { assets };
  }
  apply(compiler) {
    const { assets } = this.options;

    compiler.hooks.emit.tapAsync(NAME, (compilation, callback) => {
      Object.keys(assets).forEach(
        base =>
          (compilation.assets[base] = fs.existsSync(assets[base])
            ? new RawSource(fs.readFileSync(assets[base]))
            : new RawSource(Buffer.from("")))
      );
      callback();
    });
  }
}

export default WebpackAddAssets;
