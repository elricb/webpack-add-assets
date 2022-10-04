//
// https://webpack.js.org/api/compilation-hooks/#additionalassets
//
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

// New method to try
// compilation.hooks.additionalAssets.tapAsync('MyPlugin', (callback) => {
//   download('https://img.shields.io/npm/v/webpack.svg', function (resp) {
//     if (resp.status === 200) {
//       compilation.assets['webpack-version.svg'] = toAsset(resp);
//       callback();
//     } else {
//       callback(
//         new Error('[webpack-example-plugin] Unable to download the image')
//       );
//     }
//   });
// });


export default WebpackAddAssets;
