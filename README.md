# nav-by-tag

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

(On Firefox) go to `about:debugging#/runtime/this-firefox` and `Load Temporary Add-on...`, pointing to `dist/manifest.json`.

(On Firefox) for development purposes, go to `about:config` and enable `extensions.webextensions.keepStorageOnUninstall` and `extensions.webextensions.keepUuidOnUninstall`.

NOTE: Changes to `manifest.json` are watched, but the extension needs to be reloaded. Changes to `vue.config.js` aren't watched, so you'll need to restart the development server, but do with .

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
