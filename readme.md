# webpack-add-assets

> Plugin for [webpack](https://github.com/webpack/webpack).

Add additional assets to webpack build directory.

## Requirements

* [webpack](https://nodejs.org/en/download/) - version >= 4

## Install

```
$ npm install --save-dev @elricb/webpack-add-assets
```

## Example

```javascript
const WebpackAddAssets = require("@elricb/webpack-add-assets");

const webpackConfig = {
  // Config items
  plugins: [
    new WebpackAddAssets({
      "local/path/file.txt": "remote/path/file.txt"
    })
  ],
  // Config items
};
```

## class WebpackAddAssets

```javascript
const webpackAddAssets = new WebpackAddAssets(assets);
```

### assets

Type: `object`

A key/value list of source files to destination files.

```javascript
{
  "relative/local/path/to/asset/favicon.gif": "relative/destination/path/to/asset/favicon.gif",
  "another/local/asset/favicon.ico": "another/destination/asset/favicon.gif"
}
```


