# Brunch sketelon for Elixir-based traditional web apps

Bootstrap a new frontend for elixir apps in minutes.

It's strictly for traditional backend-frontend websites, 
without heavy javascript functionality.

Specifially, it's a starting point to create new template for elixir app.

### Features

- Brunch for fast development
- PostCSS with couple of plugins
- Babel for es6/es7 support
- Live reload
- ESLint and StyleLint for consistency

### How to start

1. Install brunch if you don't have it:
```
npm install -g brunch
```

2. Create new brunch project based on this skeleton:
```
brunch new --skeleton https://github.com/scarfacedeb/brunch-elixir-web
```

3. Install dependencies:
```
yarn install  # or npm install
```

4. Run brunch watcher:
```
npm run watch
```

5. Open index.html:
```
open ./public/index.html
```

### Directory organization

`css/js/html` contain css/js/html assets respectively.  
To add new html page, create new file in `html/`.

`static/` contains images, fonts, and other static assets.

`public/` contains compiled assets that shouldn't be edited by hand.

`css` files are concatenated automatically by brunch. No need to `@import` them manually.

`js` files have to be imported using ES6 `import`.

### Included PostCSS plugins

1. [postcss-nested](https://github.com/postcss/postcss-nested) to enable nested rules.
2. [postcss-selector-matches](https://github.com/postcss/postcss-selector-matches) to add support of `p:matches(:first-child, .special) {`
3. [postcss-selector-not](https://github.com/postcss/postcss-selector-not) to add support of `p:not(:first-child, .special) {`
4. [postcss-discard-empty](https://github.com/ben-eb/postcss-discard-empty) to remove empty rules.
5. [css-mqpacker](https://github.com/hail2u/node-css-mqpacker) to pack same CSS media query rules into one.