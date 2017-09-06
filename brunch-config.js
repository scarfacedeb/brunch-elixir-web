exports.config = {
  // See http://brunch.io/#documentation for docs.
  files: {
    javascripts: {
      joinTo: 'js/app.js',
    },
    stylesheets: {
      joinTo: 'css/app.css',
    },
    templates: {
      joinTo: 'js/app.js',
    },
  },

  conventions: {
    // This option sets where we should place non-css and non-js assets in.
    assets: /^(static|html)/,
  },

  paths: {
    watched: ['static', 'css', 'js', 'vendor', 'html'],
  },

  plugins: {
    autoReload: {
      enabled: {
        css: true,
        js: true,
        assets: true,
      },
    },
    babel: {
      ignore: [/vendor/],
    },
    postcss: {
      processors: [
        require('postcss-import')(),
        require('postcss-nested')(),
        require('postcss-selector-matches')(),
        require('postcss-selector-not')(),
        require('autoprefixer')(),
        require('postcss-discard-empty')(),
        require('css-mqpacker')(),
      ]
    },
  },

  modules: {
    autoRequire: {
      'js/app.js': ['js/app'],
    },
  },

  npm: {
    enabled: true,
    styles: {
      'normalize.css': ['normalize.css'],
    },
    globals: {
      jQuery: 'jquery',
      $: 'jquery',
    },
  },
};
