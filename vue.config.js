module.exports = {
  pages: {
    // this will export `/dist/browser-action-popup.html`
    // it needs to be referenced in `manifest.json` under key `"browser_action": { "default_popup": "browser-action-popup.html" }`
    'browser-action-popup': {
      template: 'public/browser-extension.html',
      entry: './src/browser-action-popup/main.js',
      title: 'Browser Action Popup'
    },
    // this will export a page `/dist/page-action-popup.html`
    // it needs to be referenced in `manifest.json` under key `"page_action": { "default_popup": "page-action-popup.html", ... }`
    // note also you need to add in `manifest.json` the key `"page_action": { ..., "show_matches": ["*://*/*"], ... }` or else call `pageAction.show()` in background.js
    'page-action-popup': {
      // this is the path to the HTML template
      template: 'public/browser-extension.html',
      // this is the path to the JS entry point
      entry: './src/page-action-popup/main.js',
      // this will get inserted into the html file
      title: 'Page Action Popup'
    },
    // this will export `/dist/options.html`
    // it needs to be referenced in `manifest.json` under key `"options_ui": { "page": "options.html", ... }`
    // note also that using key `"options_ui": { ..., "browser_style": true }` will inject default browser styles
    'options': {
      template: 'public/browser-extension.html',
      entry: './src/options/main.js',
      title: 'Options'
    }
  },
  pluginOptions: {
    browserExtension: {
      componentOptions: {
        background: {
          entry: 'src/background.js'
        }
      }
    }
  }
}
